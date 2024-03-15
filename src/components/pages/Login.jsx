import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import isLogedIn  from "../../utils/isLogedIn";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation()

  const loginUser =async (data) => {
    console.log(data)
    const backendApiUrl = "https://instagram-backend-y55a.onrender.com"
    await axios.post(`${backendApiUrl}/auth/login`, data)
    .then((res) => {
      console.log("response", res)
      console.log("response", res.data.token)

      localStorage.setItem("Auth", res.data.token)
      toast.success("User Logged in!")
      navigate('/')
    })
    .catch((err) => {
      console.log("error", err);
       toast.error(err.response.data.message)
    })
  };


  useEffect(()=>{
    const token = localStorage.getItem("Auth")
    if(token && token !== ""){
      navigate('/')
    }
  })


  return (
    <>
       <MainLayout>
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md-4 border p-3">
              <h1 className="text-center">Login</h1>
              <form className="mt-5" onSubmit={handleSubmit(loginUser)}>
                
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <div id="emailHelp" className="form-text text-danger">
                      We'll never share your email with anyone else.
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    {...register("password", {
                      required: "password is required",
                    })}
                  />
                  {errors.password && <span className="text-danger">{errors.password.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Login;
