import './Verification.css'
import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa'

const Verification = () => {

    return (
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
    );
}

export default Verification;