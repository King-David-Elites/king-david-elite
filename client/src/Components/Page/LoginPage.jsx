import React from "react";
import { Container, Page } from "./SignupPage.style";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import services from "../../ioc/services";
import globalApi from "../../api";
import axios from "axios";
import { useState } from "react";
import Loader from "../Loader/Loader";
import Swal from "sweetalert2";

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const login = async (e) => {
    setLoader(true);
    e.preventDefault();
    const userDetails = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    await axios
      .post(`${globalApi}/users/sign-in`, userDetails)
      .then((resp) => {
        let res = resp.data;
        let token = res.token;
        let user = res.user;
        console.log(res.message);

        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));

          Swal.fire({
            title: "Login Successfyl!",
            text: res.message,
            icon: "success",
            timer: 2000,
            timerProgressBar: true,
            
          });

          setTimeout(() => {
            setLoader(false);
            navigate("/");
          }, 2000);
        } else {
          Swal.fire({
            title: "Login Failure!",
            text: res.message,
            icon: "error",
            confirmButtonText: "Try Again",
          });
          setLoader(false);
        }
      })
      .catch((err) => {
        console.log(err)
        setLoader(false)
        Swal.fire({
          title: "Login Failure!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Try Again",
        })
      });
  };

  return (
    <Container>
      {loader && <Loader />}

      <Page>
        <h1>King David Elite</h1>
        <p className="back">welcome back</p>
        <form onSubmit={(e) => login(e)}>
          <input
            type="email"
            ref={emailRef}
            placeholder="Enter your email here"
          />
          <input type="password" ref={passwordRef} placeholder="Password" />
        </form>
        <p className="forgot">
          Forgot password? <span className="red">Click here</span>
        </p>

        <button className="login" onClick={login}>
          login
        </button>
        <p className="or">- OR -</p>
        <button className="google">log in with Google</button>
        <p className="account">
          Don't have an account?{" "}
          <Link to="/signup">
            <span>Sign up</span>
          </Link>
        </p>
      </Page>
    </Container>
  );
};

export default LoginPage;
