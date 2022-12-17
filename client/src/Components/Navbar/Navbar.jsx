import React from 'react'
import { Header, UL, LI, LogoText, Brand, Login } from './Navbar.Style'
import kde_whiteBg from './Image/kde_whiteBg.png'
import { useNavigate } from 'react-router-dom'
import { ImCross } from 'react-icons/im';
import { useState } from 'react';
import { FaUserCircle, FaUser } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { MdRealEstateAgent, MdMessage, MdMenu, MdAccountBalanceWallet } from 'react-icons/md';
import { IoMdCar } from 'react-icons/io';
import { BsFillBellFill, BsFillHeartFill } from 'react-icons/bs';

const Navbar = ({ bg, sticky, active }) => {

    const [activeNav, setActiveNav] = useState(false);

    const showMenu = () => {
        setActiveNav(!activeNav);
    }

    const navigate = useNavigate()

    const navOptions = [
        {
            title: "REAL ESTATE",
            link: "/real-estate"
        },
        {
            title: "CARS",
            link: "/cars"
        },
        {
            title: "ABOUT",
            link: "/about",
        },
        {
            title: "AFFILIATE",
            link: "/affiliate"
        }
    ]

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
            link: "/dashboard/notification",
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


    const token = localStorage.getItem("token")

    return (
        <>

            <Header className='bg-cover' bg={bg} position={sticky}>

                <nav className={activeNav ? 'navigation active' : 'navigation'}>
                    <ul>
                        <div className='closed'>
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
                <Brand onClick={() => navigate("/")}>
                    <div style={{ width: "4em", height: "auto" }}>
                        <img src={kde_whiteBg}
                            className='w-[100%] h-[100%]'
                            alt="brandlogo" />
                    </div>
                    <LogoText>KING DAVID ELITES</LogoText>

                    <div className='menu-icon'>
                        <MdMenu size={30} className='menu' onClick={showMenu} />
                    </div>
                </Brand>

                <div>
                    <UL>
                        {
                            navOptions.map((nav, i) => {
                                return (
                                    <LI
                                        key={i}
                                        onClick={() => navigate(nav.link)}

                                    >
                                        <div className={active === i && "item-active"}>
                                            {nav.title}
                                        </div>

                                    </LI>
                                )
                            })
                        }
                    </UL>
                </div>

                <Login>
                    {
                        token ?
                            <div onClick={() => navigate("/dashboard")} className='dashboard'>DASHBOARD</div>
                            :
                            <div className="login" onClick={() => navigate("/signup")}>Login/Sign Up</div>
                    }

                </Login>
            </Header>
        </>
    )
}

export default Navbar