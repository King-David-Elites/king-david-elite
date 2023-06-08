import React, { useCallback, useEffect } from 'react'
import Dashboard from './Dashboard'
import './Dashboard.Styles'
import { GenericContainer, MobileDashboardContainer, MobileGenericContainer } from './Dashboard.Styles'
import { Leftwallet } from './Dashboard.Styles'
import { Rightwallet } from './Dashboard.Styles'
import { Bottom } from './Dashboard.Styles'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import walletImage from "../Dashboard/wallet-image/blackBg.jpeg"
import { BsFillFileArrowUpFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { ImCross } from 'react-icons/im';
import { useState } from 'react';
import { FaUserCircle, FaUser, FaCopy } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { MdRealEstateAgent, MdMessage, MdAccountBalanceWallet } from 'react-icons/md';
import { IoMdCar } from 'react-icons/io';
import { BsFillBellFill, BsFillHeartFill } from 'react-icons/bs';
import '../Navbar/Navbar.css'
import globalApi from '../../api'
import { setConfig } from '../../infrastructure/api/user/userRequest'
import axios from 'axios'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { toast } from 'react-toastify'
import TimeAgo from 'timeago-react';


const WalletAsElement = () => {
  const [details, setDetails] = useState({})
  const [transactions, setTransactions] = useState([])

  const getAccount = useCallback(async ()=>{
    await axios.get(`${globalApi}/accounts/get-account`, setConfig())
    .then(resp => {
      setDetails(resp.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const getAllTransactions = useCallback(async ()=>{
    await axios.get(`${globalApi}/transactions/all-transactions`, setConfig())
    .then(resp => {
      setTransactions(resp.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(()=> {
    getAccount()
    getAllTransactions()
  }, [getAccount, getAllTransactions])

  return (
    <GenericContainer>
      <div className='flex gap-8'>
        <Leftwallet>
          <h4>Account Balance: </h4>
          <h2>{details.account_balance || "00.00"}</h2>
          <div>
            <button className='transfer'>Transfer</button>
            <button>Withdraw</button>
            <button>Deposit</button>
          </div>
          <p> Account ID:{details.account_number}</p>
        </Leftwallet>

        <Rightwallet>

        </Rightwallet>
      </div>

      <Bottom>
        <table>
          <tr>
            <th>Transactions</th>
          </tr>
          {
            transactions.map((t, i)=>{
              const {amount, createdAt, transaction_ref, credit, status, message} = t
              return(
                <>
                  <tr key={i}>
                    <td><span className={credit ? "green" : "red"}>${amount}</span></td>
                    <td>{transaction_ref}</td>
                    <td>{"Daniels Whales"}</td>
                    <td>{createdAt}</td>
                    <td>2:50pm</td>
                 </tr>
                </>
              )
            })
          }
        </table>

      </Bottom>
    </GenericContainer>
  )
}

const MobileWallet = () => {
  const [activeNav, setActiveNav] = useState(false);

  const [details, setDetails] = useState({})
  const [transactions, setTransactions] = useState([])

  const getAccount = useCallback(async ()=>{
    await axios.get(`${globalApi}/accounts/get-account`, setConfig())
    .then(resp => {
      setDetails(resp.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const getAllTransactions = useCallback(async ()=>{
    await axios.get(`${globalApi}/transactions/all-transactions`, setConfig())
    .then(resp => {
      setTransactions(resp.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(()=> {
    getAccount()
    getAllTransactions()
  }, [getAccount, getAllTransactions])

  const showMenu = () => {
    setActiveNav(!activeNav);
  }

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
    <MobileGenericContainer>
      <MobileDashboardContainer>
        <div className='upper-sect'>
          <div className='top-items'>
            <p>Account</p>
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

          <div className='walletImage-div' bg={walletImage}>
            {/* <img src={walletImage} alt="walletImage" /> */}

              <p className='gold-text'>Balance:</p>
              <h4 className='white-text'>₦{details?.account_balance || "00.00"}</h4>
              <div className='align-bottom'>
                <p>Account ID: {details?.account_number}</p> 
                <CopyToClipboard text={details?.account_number} onCopy={()=> toast("Copied!")}>
                  <div className='copy-icon'>
                  <FaCopy/>
                </div>
                </CopyToClipboard>
                
              </div>
              
            
          </div>

          <div className='menu-list'>
            <div className='grey-bar'>
              <BsFillFileArrowUpFill size={30} color="#F2BE5C" onClick={() => navigate("/dashboard/wallet/transfer")} />
              <p onClick={() => navigate("/dashboard/wallet/transfer")} >Transfer</p>
            </div>

            <div className='grey-bar'>
              <BsFillFileArrowUpFill size={30} color="#F2BE5C" onClick={() => navigate("/dashboard/wallet/withdraw")} />
              <p onClick={() => navigate("/dashboard/wallet/withdraw")}>Withdrawal</p>
            </div>

            <div className='grey-bar'>
              <BsFillFileArrowUpFill size={30} color="#F2BE5C" onClick={() => navigate("/dashboard/wallet/deposit")} />
              <p>Deposit</p>
            </div>
          </div>

          <div className='transaction'>
            <h3>Transactions</h3>

            {
              transactions.map((t, i)=>{
                const {amount, createdAt, transaction_ref, credit, status, message} = t
                return(
                    <>
                      <div className='transaction-content-wrapper'>
                        <div className='content1'>
                          <h5>{credit ? "In Flow" : "Out Flow"}</h5>
                          <p className='neutral-text'>{status}</p>
                        </div>
                        <div className='content1'>
                          <p className={credit ? "green-text" : "orange-text"}>₦{amount}</p>
                          <p className='neutral-text'><TimeAgo
  datetime={createdAt}
  locale='zh_CN'
/></p>
                        </div>
                      </div>

                      <div className='border-line'></div>
                    </>
                )
              })
            }
          
          </div>
        </div>
      </MobileDashboardContainer>
    </MobileGenericContainer>
  )
}


const Wallet = () => {
  return (
    <Dashboard element={<WalletAsElement />} index={2} mobileElement={<MobileWallet />} />
  )
}

export default Wallet