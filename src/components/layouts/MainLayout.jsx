import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function MainLayout(props) {
  const navigate = useNavigate()
  const [user, setUser] = useState();

  const fetchUser = async () => {
    const backendApiUrl = "https://instagram-backend-y55a.onrender.com";
    let token = localStorage.getItem("Auth");
    await axios
      .get(`${backendApiUrl}/profile`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setUser(res.data.User);
      })
      .catch((err) => console.log("Error", err));
  };

  useEffect(() => {
    fetchUser();
  }, []);



  const logoutUser=()=>{
     localStorage.clear()
     navigate('/login')
  }




  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Instagram
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              {!user ? <>
                <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/signup"} className="nav-link">
                  SignUp
                </Link>
              </li>
              </>
              :
              <>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user && user.fullName}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item fs-bold" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={logoutUser}>
                      Log Out
                    </a>
                  </li>
                </ul>
              </li>
              </>}
              
              
            </ul>
          </div>
        </div>
      </nav>
      {props.children}
    </>
  );
}

export default MainLayout;
