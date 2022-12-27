import './Transfer.css'
import { BiDotsVerticalRounded, BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import MainButton from '../buttons/MainButton'
import theme from '../../application/utils/Theme'
import { useState } from 'react'
import { ImCross } from 'react-icons/im';
import { FaUserCircle, FaUser } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { MdRealEstateAgent, MdMessage, MdAccountBalanceWallet } from 'react-icons/md';
import { IoMdCar } from 'react-icons/io';
import { BsFillBellFill, BsFillHeartFill } from 'react-icons/bs';
import '../Navbar/Navbar.css'

const Transfer2 = () => {
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
        <div className="transfer-wrapper">
            <div className="top-navigation">
                <div className='flex-nav'>
                    <BiArrowBack size={25} onClick={() => navigate("/dashboard/wallet/transfer")} />
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

            <div className='transfer-body'>
                <h4>Confirm Transfer</h4>
                <p className='center-text'>We have sent an OTP to your email and mobile number inorder to validate transfer</p>

                <form>
                    <div>
                        <p>Enter OTP</p>
                        <input type="text" placeholder='000  00' />
                    </div>

                    <MainButton width="100%" marginTop="20px" padding="1.5em" color={theme.footerColor} onClick={() => navigate("/success")}>Confirm</MainButton>
                </form>

            </div>
        </div>
    );
}

export default Transfer2;