import React from 'react'
import Dashboard from './Dashboard'
import { MobileDashboardContainer, NotificationContainer } from './Dashboard.Styles'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { FaSearch } from "react-icons/fa"
import { useState } from 'react'
import ReadMoreReadLess from './ReadMoreReadLess'
import { useGetUserDetails } from '../../application/hooks/queryhooks'
import axios from 'axios'
import globalApi from '../../api'
import { setConfig } from '../../infrastructure/api/user/userRequest'
import { useEffect } from 'react'
import { ImCross } from 'react-icons/im';
import { FaUserCircle, FaUser } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { MdRealEstateAgent, MdMessage, MdAccountBalanceWallet } from 'react-icons/md';
import { IoMdCar } from 'react-icons/io';
import { BsFillBellFill, BsFillHeartFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'
import '../Navbar/Navbar.css'

const NotificationAsElement = () => {
    const data = useGetUserDetails;
    const [notifications, setNotifications] = useState([])

    const getNotifications = () => {
        axios.get(`${globalApi}/notifications/all`, setConfig())
            .then(resp => setNotifications(resp.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getNotifications()
    }, [globalApi])
    return (
        <NotificationContainer>
            {
                notifications.map((notification, i) => {
                    return (
                        <ReadMoreReadLess key={i}
                            message={notification.message}
                            title={notification.title}
                            time={notification.createdAt}
                        />

                    )
                })
            }
            <ReadMoreReadLess
                title="Deposit Successful"
                message=" The system has detected that your account is logged in from an unused IP address."
                time="4:30pm"
            />

            {/* 
            <ReadMoreReadLess>
                The system has detected that your account is logged in from an unused IP address.
            </ReadMoreReadLess>
            <ReadMoreReadLess>
                The system has detected that your account is logged in from an unused IP address.
            </ReadMoreReadLess> */}
        </NotificationContainer>
    )
}

const MobileNotification = () => {
    const [notifications, setNotifications] = useState([])

    const getNotifications = () => {
        axios.get(`${globalApi}/notifications/all`, setConfig())
            .then(resp => setNotifications(resp.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getNotifications()
    }, [globalApi])

    const [activeNav, setActiveNav] = useState(false);

    const showMenu = () => {
        setActiveNav(!activeNav);
    }

    const navigate = useNavigate()

    const mobileNavOptions = [
        {
            no: 1,
            icon: <FaUserCircle size={20} />,
            title: "Log In",
            link: "/login",
        },
        {
            no: 2,
            icon: <FaUserCircle size={20} />,
            title: "List with us",
            link: "/",
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
            icon: <MdMessage size={20} />,
            title: "Messages",
            link: "/dashboard/messages",
        },
        {
            no: 7,
            icon: <BsFillBellFill size={20} />,
            title: "Notifications",
            link: "/dashboard/notifications",
        },
        {
            no: 8,
            icon: <BsFillHeartFill size={20} />,
            title: "Saved Listing",
            link: "/",
        },
        {
            no: 9,
            icon: <MdAccountBalanceWallet size={20} />,
            title: "My Account",
            link: "/dashboard/wallet",
        },
        {
            no: 10,
            icon: <FaUser size={20} />,
            title: "Profile",
            link: "/profile",
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
    ]

    return (
        <MobileDashboardContainer>
            <div className='upper-sect'>
                <div className='top-items'>
                    <p>Notification</p>
                    <BiDotsVerticalRounded size={25} onClick={showMenu} />
                </div>

                <div className="search-mobile">
                    <FaSearch color='#737373' />
                    <input type="text" placeholder='Search ' />
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
            </div>

            <div className='border-line'>

            </div>

            {
                notifications.map((notification, i) => {
                    return (
                        <ReadMoreReadLess key={i}
                            message={notification.message}
                            title={notification.title}
                            time={notification.createdAt}
                        />

                    )
                })
            }
            <ReadMoreReadLess
                title="Deposit Successful"
                message=" The system has detected that your account is logged in from an unused IP address."
                time="4:30pm"
            />


        </MobileDashboardContainer>
    );
}


const Notifications = () => {
    return (
        <Dashboard element={<NotificationAsElement />} index="3" mobileElement={<MobileNotification />} />
    )
}

export default Notifications