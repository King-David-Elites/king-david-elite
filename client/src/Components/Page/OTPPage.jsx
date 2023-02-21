import { useRef } from "react";
import { useState } from "react";
import { Container, Page } from "./SignupPage.style";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

const OTPPage = () => {
    const [password, setPassword] = useState("");
    const passwordRef = useRef();
    const [passwordRequisite, setPasswordRequisite] = useState(false);
    const [checks, setChecks] = useState({
        capsLetterCheck: false,
        numberCheck: false,
        pwdLengthCheck: false,
        specialCharCheck: false,
    });
    const [stage, setStage] = useState(0);
    const [state, setState] = useState(false);
    const navigate = useNavigate();

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

    const setNextPage = (data) => {
        if (data == 6) {
            setStage(1);
        }
    }
    return (
        <>
            {
                stage == 0 && <div className='transfer-body bg-white'>
                    <h4>Confirm Email</h4>
                    <p className='center-text'>We have sent an OTP to your email in order to validate account</p>

                    <form>
                        <div>
                            <p>Enter Verification code</p>
                            <input type="text" placeholder='000  00' onChange={(e) => setNextPage(e.target.value.length)} />
                        </div>
                    </form>

                </div>
            }

            {
                stage !== 0 && <Container>
                    <Page>
                        <h1 className="md:mb-9 mb-7">King David Elite</h1>
                        {/* <label className="back">Create New Password</label> */}
                        <div className="relative flex items-center mt-[-2em] md:mt-[0em]">
                            <input type={state ? "text" : "password"} value={password} onChange={handleOnChange} onFocus={handleOnFocus} onBlur={handleOnBlur} onKeyUp={handleOnKeyUp} ref={passwordRef} placeholder="Create New Password" />
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

                        <div className="relative flex items-center mt-[-2em] md:mt-[0em]">
                            <input type={state ? "text" : "password"} value={password} onChange={handleOnChange} onFocus={handleOnFocus} onBlur={handleOnBlur} onKeyUp={handleOnKeyUp} ref={passwordRef} placeholder="Confirm New Password" />
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

                        <button className="login" onClick={() => navigate('/login')}>
                            Submit
                        </button>

                    </Page>
                </Container>
            }
        </>

    );
}

export default OTPPage;