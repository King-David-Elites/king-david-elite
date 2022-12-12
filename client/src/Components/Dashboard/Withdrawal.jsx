import React from 'react'
import './Transfer.css'
import { BiArrowBack } from 'react-icons/bi'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import MainButton from '../buttons/MainButton'
import theme from '../../application/utils/Theme'
import { useNavigate } from 'react-router-dom'
import DisableButton from '../buttons/DisabledButton'
import { useState } from 'react'

const Withdrawal = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

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
        <div>
          <p>How much would you like to withdraw?</p>
          <input type="text" placeholder='0.00' />
        </div>

        <div>
          <p>Account Details</p>
          <input type="text" placeholder='1234567890 | KINGDAVID TEAM' />
          <input type="radio" onClick={() => setIsChecked(true)} className='check-box' />
        </div>

        {
          !isChecked && <DisableButton width="100%" marginTop="20px" padding="1.5em" color={theme.footerColor}>Continue</DisableButton>
        }
        {
          isChecked && <MainButton width="100%" marginTop="20px" padding="1.5em" color={theme.footerColor} onClick={() => navigate("/dashboard/wallet/transfer/confirm")}>Continue</MainButton>
        }
      </form>
    </div>
  )
}

export default Withdrawal