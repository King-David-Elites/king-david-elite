import './Verification.Style.jsx'
import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa'
import profileImg from '../Dashboard/Dashboard-Image/profileImg.png'
import { DesktopContainer, VerificationContainer } from './Verification.Style.jsx';

const Verification = () => {

    return (
        <VerificationContainer>
            <div className="container">
                <div className="verification-wrapper">
                    <h3>Identity Verification</h3>
                    <div className='line'></div>

                    <div className='personal-details'>
                        <FaRegUserCircle size={20} />
                        <h3>Personal Details</h3>
                    </div>

                    <div className='verification'>
                        <p>Why Verify your Identity</p>
                        <ul>
                            <li>To Validate transactions</li>
                            <li>To keep KDE safe for Users</li>
                        </ul>
                    </div>

                    <button>Verify</button>
                </div>
            </div>
            <DesktopContainer>
                <div className='leftSect'>
                    <img src={profileImg} alt="profileImg" />
                </div>

                <div className='rightSect'>
                    <div className='verification-text'>
                        <h3>Identity Verification</h3>
                        <div className='line'></div>
                    </div>

                    <div className='personal-details'>
                        <FaRegUserCircle size={20} />
                        <h3>Personal Details</h3>
                    </div>

                    <div className='verification'>
                        <p>Why Verify your Identity</p>
                        <div className='list-item'>
                            <ul>
                                <li>To Validate transactions</li>
                                <li>To keep KDE safe for Users</li>
                            </ul>
                            <button>Verify</button>
                        </div>

                    </div>
                </div>
            </DesktopContainer>

        </VerificationContainer>
    );
}

export default Verification;

