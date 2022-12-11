import React from 'react'
import './Transfer.css'
import { BiArrowBack } from 'react-icons/bi'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import MainButton from '../buttons/MainButton'
import theme from '../../application/utils/Theme'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Deposit = () => {
  const navigate = useNavigate();

  return (
    <div className="transfer-wrapper">
      <div className="top-navigation">
        <div className='flex-nav'>
          <BiArrowBack size={25} onClick={() => navigate("/dashboard/wallet")} />
          <p>Back</p>
        </div>

        <BiDotsVerticalRounded size={25} />
      </div>

      <form className="transfer-body">
        <div className='payment-type'>
          <button>PayStack</button>
          <button>FlutterWave</button>
        </div>

        <div>
          <p>Deposit Amount ($)</p>
          <input type="text" />
        </div>

        <MainButton width="100%" marginTop="20px" padding="1.5em" color={theme.footerColor} onClick={() => navigate("/success")}>Continue</MainButton>

      </form>
    </div>
  );
}

export default Deposit;