import React from "react";
import { Container, Page } from "./SignupPage.style";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import Loader from "../Loader/Loader";
import ResetPage from "./ResetPage";
import globalApi from "../../api";
import { setConfig } from "../../infrastructure/api/user/userRequest";
import axios from "axios";

const ForgottenPasswordPage = () => {
    const [loader, setLoader] = useState(false);
    const [state, setState] = useState(0);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const forgotPassword = async (e) => {
        setLoader(true);
        e.preventDefault();
        const userDetails = {
            email: email,
        };

    }

    const token = localStorage.getItem("token")

    const ResetPassword = () => {
        let userEmail = {
            email: email,
        };
        axios.post(`${globalApi}/users/forgotten-password`, JSON.stringify(userEmail), setConfig())
            .then(resp => {
                console.log("resp", resp);
            })
            .catch(err => console.log(err))
        // navigate(`/reset/${token}`)
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
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your registered email "
                            />
                        </form>

                        <button className="login" onClick={() => ResetPassword()}>
                            Continue
                        </button>
                    </Page>

                </Container>
            }
        </>
    );
};

export default ForgottenPasswordPage;
