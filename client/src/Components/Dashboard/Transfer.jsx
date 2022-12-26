import './Transfer.css'
import { BiArrowBack } from 'react-icons/bi'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import MainButton from '../buttons/MainButton'
import theme from '../../application/utils/Theme'
import { ImCross } from 'react-icons/im';
import { FaUserCircle, FaUser } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { MdRealEstateAgent, MdMessage, MdAccountBalanceWallet } from 'react-icons/md';
import { IoMdCar } from 'react-icons/io';
import { BsFillBellFill, BsFillHeartFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'
import '../Navbar/Navbar.css'
import { useState } from 'react'


const Transfer = () => {
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
        <div className="transfer-wrapper">
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

            <form className="transfer-body">
                <div>
                    <p>How much would you like to send?</p>
                    <input type="text" placeholder='0.00' />
                </div>

                <div>
                    <p>Enter Account ID</p>
                    <input type="text" placeholder='000  000  XY' />
                </div>

                <MainButton width="100%" marginTop="20px" padding="1.5em" color={theme.footerColor} onClick={() => navigate("/dashboard/wallet/transfer/confirm")}>Continue</MainButton>
            </form>
        </div>
    );
}

export default Transfer;