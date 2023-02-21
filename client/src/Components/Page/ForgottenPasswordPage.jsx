import React from "react";
import { Container, Page } from "./SignupPage.style";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import Loader from "../Loader/Loader";
import OTPPage from "./OTPPage";

const ForgottenPasswordPage = () => {
    const emailRef = useRef();
    const [loader, setLoader] = useState(false);
    const [state, setState] = useState(0);

    const forgotPassword = async (e) => {
        setLoader(true);
        e.preventDefault();
        const userDetails = {
            email: emailRef.current.value,
        };

    }

    return (
        <>
            {
                state == 0 && <Container>
                    {loader && <Loader />}
                    <Page>
                        <h1>King David Elite</h1>
                        <p className="back">Forgotten Password?</p>
                        <form className="mt-6 md:mt-10" onSubmit={(e) => forgotPassword(e)}>
                            <input
                                type="email"
                                ref={emailRef}
                                placeholder="Enter your registered email "
                            />
                        </form>

                        <button className="login" onClick={() => setState(1)}>
                            Continue with Email
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
            }
            {
                state !== 0 && <OTPPage />
            }
        </>
    );
};

export default ForgottenPasswordPage;
