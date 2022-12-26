import React from 'react'
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
import { FaUserCircle, FaUser } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { MdRealEstateAgent, MdMessage, MdAccountBalanceWallet } from 'react-icons/md';
import { IoMdCar } from 'react-icons/io';
import { BsFillBellFill, BsFillHeartFill } from 'react-icons/bs';
import '../Navbar/Navbar.css'


const WalletAsElement = () => {

  return (
    <GenericContainer>
      <Leftwallet>
        <h4>Account Balance</h4>
        <h2>$32,720.69</h2>
        <div>
          <button className='transfer'>Transfer</button>
          <button>Withdraw</button>
          <button>Deposit</button>
        </div>
        <p> Account ID:123345AD</p>
      </Leftwallet>

      <Rightwallet>

      </Rightwallet>

      <Bottom>
        <table>
          <tr>
            <th>Transaction</th>
          </tr>
          <tr>
            <td><span className='green'>$1,200.00</span></td>
            <td>112233HR</td>
            <td>Daniels Whales</td>
            <td>16 July,2022</td>
            <td>2:50pm</td>
          </tr>
          <tr>
            <td><span className='red'>$21,710.00</span></td>
            <td>5413691359</td>
            <td>Lambo Dealer</td>
            <td>02 July,2022</td>
            <td>5:00am</td>
          </tr>
          <tr>
            <td><span className='green'>$7,200.00</span></td>
            <td>223833AS</td>
            <td>Leonardo Caprisonne</td>
            <td>24 March,2022</td>
            <td>2:51am</td>
          </tr>
          <tr>
            <td><span className='green'>$1,200.00</span></td>
            <td>112233HR</td>
            <td>Daniel Whales</td>
            <td>16 July,2022</td>
            <td>7:09pm</td>
          </tr>
          <tr>
            <td><span className='red'>$9,450.00</span></td>
            <td>112233FT</td>
            <td>Daniel Whales</td>
            <td>19 July,2022</td>
            <td>2:50am</td>
          </tr>
        </table>

      </Bottom>
    </GenericContainer>
  )
}

const MobileWallet = () => {
  const [activeNav, setActiveNav] = useState(false);

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

          <div className='walletImage-div'>
            <img src={walletImage} alt="walletImage" />
            <div>
              <p className='gold-text'>Balance:</p>
              <h4 className='white-text'>$32,720.69</h4>
              <p className='align-bottom'>Account ID: 123345AD</p>
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
            <div className='transaction-content-wrapper'>
              <div className='content1'>
                <h5>Daniel Whales</h5>
                <p className='neutral-text'>112233AB</p>
              </div>
              <div className='content1'>
                <p className='green-text'>$1,200.00</p>
                <p className='neutral-text'>16 July  2:50pm</p>
              </div>
            </div>
            <div className='border-line'></div>

            <div className='transaction-content-wrapper'>
              <div className='content1'>
                <h5>Daniel Whales</h5>
                <p className='neutral-text'>112233AB</p>
              </div>
              <div className='content1'>
                <p>$1,200.00</p>
                <p className='neutral-text'>16 July  2:50pm</p>
              </div>
            </div>
            <div className='border-line'></div>

            <div className='transaction-content-wrapper'>
              <div className='content1'>
                <h5>Daniel Whales</h5>
                <p className='neutral-text'>112233AB</p>
              </div>
              <div className='content1'>
                <p>$1,200.00</p>
                <p className='neutral-text'>16 July  2:50pm</p>
              </div>
            </div>
            <div className='border-line'></div>

            <div className='transaction-content-wrapper'>
              <div className='content1'>
                <h5>Daniel Whales</h5>
                <p className='neutral-text'>112233AB</p>
              </div>
              <div className='content1'>
                <p className='orange-text'>$1,200.00</p>
                <p className='neutral-text'>16 July  2:50pm</p>
              </div>
            </div>
            <div className='border-line'></div>

            <div className='transaction-content-wrapper'>
              <div className='content1'>
                <h5>Daniel Whales</h5>
                <p className='neutral-text'>112233AB</p>
              </div>
              <div className='content1'>
                <p className='green-text'>$1,200.00</p>
                <p className='neutral-text'>16 July  2:50pm</p>
              </div>
            </div>
            <div className='border-line'></div>
          </div>
        </div>
      </MobileDashboardContainer>
    </MobileGenericContainer>
  )
}


const Wallet = () => {
  return (
    <Dashboard element={<WalletAsElement />} index="2" mobileElement={<MobileWallet />} />
  )
}

export default Wallet