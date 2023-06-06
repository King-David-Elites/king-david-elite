import React from 'react'
import './Transfer.css'
import { BiArrowBack } from 'react-icons/bi'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import MainButton from '../buttons/MainButton'
import theme from '../../application/utils/Theme'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ImCross } from 'react-icons/im';
import { FaUserCircle, FaUser, FaCopy } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { MdRealEstateAgent, MdMessage, MdAccountBalanceWallet } from 'react-icons/md';
import { IoMdCar } from 'react-icons/io';
import { BsFillBellFill, BsFillHeartFill } from 'react-icons/bs';
import '../Navbar/Navbar.css'
import { Fragment } from 'react'
import styled from 'styled-components'
import Loader from '../Loader/Loader'

const Deposit = () => {
  const [activeNav, setActiveNav] = useState(false);

  const showMenu = () => {
    setActiveNav(!activeNav);
  }

  const [load, setLoading] = useState(false);

  const navigate = useNavigate()

  const mobileNavOptions = [

    {
        no: 2,
        icon: <FaUserCircle size={20} />,
        title: "List with us",
        link: "/signup",
    },
    {
        no: 3,
        icon: <AiFillHome size={20} />,
        title: "Home",
        link: "/",
    },
    {
        no: 4,
        icon: <MdRealEstateAgent size={20} />,
        title: "Real Estate",
        link: "/real-estate"
    },
    {
        no: 5,
        icon: <IoMdCar size={20} />,
        title: "Cars",
        link: "/cars"
    },
    {
        no: 6,
        icon: <FaUser size={20} />,
        title: "Profile",
        link: "/profile",
    },
    {
        no: 7,
        icon: <MdMessage size={20} />,
        title: "Messages",
        link: "/dashboard/messages",
    },
    {
        no: 8,
        icon: <BsFillBellFill size={20} />,
        title: "Notifications",
        link: "/dashboard/notifications",
    },
    {
        no: 9,
        icon: <BsFillHeartFill size={20} />,
        title: "Saved Listing",
        link: "/",
    },
    {
        no: 10,
        icon: <MdAccountBalanceWallet size={20} />,
        title: "My Account",
        link: "/dashboard/wallet",
    },

]

const otherNav = [
    {
        no: 11,
        title: "Help & FAQs",
    },
    {
        no: 12,
        title: "About",
        link: "/about",
    },
    {
        no: 13,
        title: "Contact Us",
        link: "",
    },
    {
        no: 14,
        icon: <FaUserCircle size={20} />,
        title: "Log In",
        link: "/login",
    },
]


  return (
    <Fragment>
      {
        load && <Loader />
      }
      <div className="top-navigation">
        <div className='flex-nav'>
          <BiArrowBack size={25} onClick={() => navigate("/dashboard/wallet")} />
          <p>Back</p>
        </div>

        <BiDotsVerticalRounded size={25} onClick={showMenu} className='cursor-pointer' />
      </div>

      <nav className={activeNav ? 'navigation active' : 'navigation'}>
        <ul>
          <div className='closed'>
            <p>Welcome!</p>
            <ImCross className='close' color='#000' onClick={showMenu} />
          </div>
          <div className='line'></div>
          {
            mobileNavOptions.map((nav, i) => {
              return (
                <>
                  <li
                    key={i}
                    onClick={() => navigate(nav?.link)}

                  >
                    <div className="list-items">
                      {nav?.icon}
                      {nav.title}
                    </div>

                  </li>
                  {
                    nav.no == 2 && <div className='line'></div>
                  }
                  {
                    nav.no == 5 && <div className='line'></div>
                  }
                </>


              )
            })
          }

          <div className='list-item2'>
            {
              otherNav.map((navigation, i) => {
                return (
                  <>
                    <li
                      key={i}
                      onClick={() => navigate(navigation?.link)}

                    >
                      <div className="list-items">
                        {navigation?.icon}
                        {navigation.title}
                      </div>

                    </li>
                  </>
                )
              })
            }
          </div>

        </ul>
      </nav>
      
      <DepositPage>
        <h2>How To Make A Deposit?</h2>
        <p>1. Copy your KDE virtual account Number</p>
        <p>2. Confirm the account name and ensure it tally with yours.</p>
        <p>3. Transfer the amount you want into the account.</p>
        <p>4. Click on the <b>"I Have Made The Payment"</b> button below</p>

        <div className="account_details">
          <p>Account Name: Olamide Williams</p>
          <p>Bank Name: Fidelity Bank</p>
          <p>Account Number: 73892382328 <FaCopy /></p>
        </div>

        <button className="btn" onClick={()=> setLoading(true)}>
          I Have Made The Payment
        </button>  
      </DepositPage>
    </Fragment>
  );
}

const DepositPage = styled.div`
  padding: 20px;
  h2{
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 600;
    text-align: center;
  }

  .account_details{
    background-color: rgb(230,230,230);
    padding: 10px;
    margin: 10px 0;

    p{
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 5px 0;
    }
  }

  button{
    background-color: ${theme.color};
    padding: 15px;
    text-align: center;
    border-radius: 10px;
    width: 100%;
    margin-top: 30px;
    font-weight:600 ;
  }
`

export default Deposit;