import React from "react";
import { Container, Page } from "./SignupPage.style";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import globalApi from "../../api";
import axios from "axios";
import { useState } from "react";
import Loader from "../Loader/Loader";
import { FaGoogle } from "react-icons/fa";
import services from "../../ioc/services"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const LoginPage = ({ stage, setStage }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [state, setState] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordRequisite, setPasswordRequisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });

  const toggleBtn = () => {
    setState(prevState => !prevState);
  }

  const handleOnChange = (e) => {
    setPassword(e.target.value)
  }

  const handleOnFocus = () => {
    setPasswordRequisite(true);
  }

  const handleOnBlur = () => {
    setPasswordRequisite(false);
  }

  const handleOnKeyUp = (e) => {
    const { value } = e.target;
    const pwdLengthCheck = value.length >= 6;
    setChecks({
      pwdLengthCheck,
    });
  }

  const login = async (e) => {
    setLoader(true);
    e.preventDefault();
    const userDetails = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (checks.pwdLengthCheck == false) {
      services.toast.error("Password must contain up to 6 characters");
      setLoader(false);
    }
    else {
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
            services.toast.success(res.message);

            setTimeout(() => {
              setLoader(false);
              navigate("/");
            }, 2000);
          } else {
            services.toast.error(res.message)
            setLoader(false);
          }
        })
        .catch((err) => {
          console.log(err)
          setLoader(false)
          services.toast.error(err.message)
        });
    };
  }

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
            className='focus:outline-theme-color'
          />
          <div className="relative flex items-center mt-[-2em] md:mt-[0em]">
            <input type={state ? "text" : "password"} value={password} onChange={handleOnChange} onFocus={handleOnFocus} onBlur={handleOnBlur} className='focus:outline-theme-color' onKeyUp={handleOnKeyUp} ref={passwordRef} placeholder="Password" />
            <span onClick={toggleBtn} className="border-none absolute right-7 md:right-14 mr-3 cursor-pointer outline-none  bg-transparent">
              {
                state ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />
              }
            </span>
          </div>
          {
            passwordRequisite ? <p className={checks.pwdLengthCheck == false ? "text-[red] opacity-50 mt-[-20px] md:mt-2 ml-4 md:ml-16 text-xs md:text-sm font-medium" : "text-[green] opacity-50 mt-[-20px] md:mt-2 ml-4 md:ml-16 text-xs md:text-sm font-medium"}
            >Password be up to 6 characters</p> : null
          }
        </form>
        <p className="forgot" >
          Forgot password?
          <Link to="/forgot-password">
            <span className="red ml-2">Click here</span>
          </Link>
        </p>
        <button className="login" onClick={login}>
          login
        </button>
        <p className="or">- OR -</p>
        <div>
          <button className="google">log in with Google</button>
        </div>

        <p className="account">
          Don't have an account?{" "}
          <Link to="/signup">
            <span className="text-blue-600">Sign up</span>
          </Link>
        </p>
      </Page>
    </Container >
  );
};

export default LoginPage;
