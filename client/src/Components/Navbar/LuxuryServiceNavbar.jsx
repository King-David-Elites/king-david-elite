import React from 'react'
import { Header, UL, LI, LogoText, Brand, Login } from './Navbar.Style'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { FaUserCircle, FaUser } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { MdRealEstateAgent, MdMessage, MdMenu, MdAccountBalanceWallet } from 'react-icons/md';
import { IoMdCar } from 'react-icons/io';
import { BsFillBellFill, BsFillHeartFill } from 'react-icons/bs';
import './Navbar.css'

const LuxuryServiceNavbar = ({ bg, sticky, active }) => {

    const [activeNav, setActiveNav] = useState(false);

    const showMenu = () => {
        setActiveNav(!activeNav);
    }

    const navigate = useNavigate()

    const navOptions = [
        {
            title: "All",
            // link: "/"
        },
        {
            title: "Concierge Weekends",
            // link: "/"
        },
        {
            title: "Chauffeur Services",
            // link: "/real-estate"
        },
        {
            title: "Boat Cruises",
            // link: "/cars"
        },
        {
            title: "Concierge Vacations",
            // link: "/about",
        },
        {
            title: "Helicopter Rides",
            // link: "/about",
        },
        {
            title: "Pricing",
            // link: "/about",
        },
    ]

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
        <>
            <Header justifyContent="space-around" z="0" paddingTop='1.5em' className='bg-cover' alignItems='flex-start' height="13em" bg={bg} sticky="static">

                <Brand>
                    <LogoText fontSize="1.5rem" onClick={() => navigate("/luxury-service")}>Luxury Services</LogoText>

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
            </Header>
        </>
    )
}

export default LuxuryServiceNavbar