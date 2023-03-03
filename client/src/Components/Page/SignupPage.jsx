import React from "react";
import axios from "axios"; import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
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

    if (checks.pwdLengthCheck == false) {
      services.toast.error("Password must contain up to 6 characters");
      setLoader(false);
    }

    else {
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
          services.toast.error(err.response.data.message);
        })
    }
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
          <div className="relative flex items-center mt-[-2em] md:mt-[0em]">
            <input type={state ? "text" : "password"} value={password} onChange={handleOnChange} onFocus={handleOnFocus} onBlur={handleOnBlur} onKeyUp={handleOnKeyUp} ref={passwordRef} placeholder="Password" />
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

        <div className="cont">
          <input type="checkbox" className="check"/>
          <p className="term">I have read and agreed to the <Link to="/terms"><span>Terms and Condition</span></Link></p>

        </div>

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
