import React from "react";
import axios from "axios";
// import S from './images/.jpg'
import { Container, Page } from "./SignupPage.style";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import services from "../../ioc/services";
import globalApi from "../../api";
import Loader from '../Loader/Loader';

const SignUpPage = () => {
  const emailRef = useRef();
  const fnameRef = useRef();
  const lnameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false)

  const signUp = async (e) => {
    e.preventDefault();
    setLoader(true);

    const userDetails = {
      email: emailRef.current.value,
      firstName: fnameRef.current.value,
      lastName: lnameRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(globalApi);
    await axios
      .post(`${globalApi}/users/sign-up`, userDetails)
      .then((resp) => {
        let res = resp.data;
        let token = res.token;
        let user = res.user;
        setLoader(true);
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
        services.toast.error(err);
      })
  };

  return (
    <Container>
      {
        loader && <Loader />
      }
      <Page>
        <h1>King David Elite</h1>
        <p className="back">welcome</p>
        <form onSubmit={(e) => signUp(e)}>
          <input
            type="email"
            ref={emailRef}
            placeholder="Enter your email here"
          />
          <input type="text" ref={fnameRef} placeholder="First name" />
          <input type="text" ref={lnameRef} placeholder="Last name" />
          <input type="password" ref={passwordRef} placeholder="Password" />
        </form>
        <p className="forgot">
          Forgot password? <span className="red">Click here</span>
        </p>
        <p className="account">
          Already have an account?{" "}
          <Link to="/login">
            <span>Login</span>
          </Link>{" "}
        </p>

        <button className="login" onClick={signUp}>
          SignUp
        </button>
        {/* <p className='or'>- OR -</p> */}
        {/* <button className='google'>log in with Google</button> */}
      </Page>
    </Container>
  );
};

export default SignUpPage;
