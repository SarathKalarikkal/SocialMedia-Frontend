import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import axios from 'axios';

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const registerUser = (data) => {
    console.log(data)
    const backendApiUrl = "https://instagram-backend-y55a.onrender.com"
  axios.post(`${backendApiUrl}/auth/register`, data)
  .then((res) => {
    console.log("response", res)
    toast.success("User Registered!")
    navigate('/login')
  })
  .catch((err) => console.log("error", err));
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
          <div className="row justify-content-center mt-4">
            <div className="col-md-4 border p-3">
              <h1 className="text-center">SignUp</h1>
              <form className="mt-1" onSubmit={handleSubmit(registerUser)}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    {...register("fullName", { required: true })}
                  />
                  {errors.fullName?.type === "required" && (
                    <p className="text-danger" role="alert">Full name is required</p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    {...register("userName", { required: true })}
                  />
                  {errors.userName?.type === "required" && (
                    <p className="text-danger" role="alert">User name is required</p>
                  )}
                </div>
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

export default SignUp;
