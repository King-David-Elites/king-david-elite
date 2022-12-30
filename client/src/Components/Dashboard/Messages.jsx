import React from 'react'
import Dashboard from './Dashboard'
import { MessagesContainer, MobileDashboardContainer } from './Dashboard.Styles'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { FaSearch } from "react-icons/fa"
import slackImg from '../../layout/Image/slack.png'
import { BiCheck } from 'react-icons/bi'
import { BsImageFill } from 'react-icons/bs'
import img1 from './Dashboard-Image/profileImg.png'
import img2 from './Dashboard-Image/Img2.png'
import img3 from './Dashboard-Image/Untitled2.png'
import { ImCross } from 'react-icons/im';
import { useState } from 'react';
import { FaUserCircle, FaUser } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { MdRealEstateAgent, MdMessage, MdAccountBalanceWallet } from 'react-icons/md';
import { IoMdCar } from 'react-icons/io';
import { BsFillBellFill, BsFillHeartFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'
import '../Navbar/Navbar.css'
import ChatBox from './ChatBox'

const MessagesAsElement = () => {
    return (
        <MessagesContainer>
            <div className="listOfMessages">
                <h3 className='title'>Messages</h3>

                <div className="messages">
                    <div className="message">
                        <img src="https://th.bing.com/th/id/R.b304c7b0e1751794c05ca44d94cea47a?rik=s5ONNlybUyekZg&pid=ImgRaw&r=0" alt="" />

                        <div className="textContent">
                            <h5>
                                Lambo Dealer
                            </h5>
                            <p>
                                How are you doing man?
                            </p>
                        </div>
                    </div>

                    <div className="message">
                        <img src="https://th.bing.com/th/id/R.b304c7b0e1751794c05ca44d94cea47a?rik=s5ONNlybUyekZg&pid=ImgRaw&r=0" alt="" />

                        <div className="textContent">
                            <h5>
                                Lambo Dealer
                            </h5>
                            <p>
                                How are you doing man?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="eachChat">

            </div>
        </MessagesContainer>
    )
}


const MobileMessage = () => {

    const [activeNav, setActiveNav] = useState(false);
    const [stage, setStage] = useState(0);

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
        <MobileDashboardContainer>
            {
                stage !== 0 && <ChatBox stage={stage} setStage={setStage}/>
            }
            {
                stage === 0 && <>
                    <div className='upper-sect'>
                        <div className='top-items'>
                            <p>Message</p>
                            <BiDotsVerticalRounded size={25} onClick={showMenu} className='cursor-pointer' />
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

                    <div className='lower-sect'>
                        <div className='message-wrap' onClick={() => setStage(stage + 1)}>
                            <img src={img3} alt="userImg" />
                            <div className='box-content'>
                                <h4>KingDavid Team</h4>
                                <div className='markIconDiv'>
                                    <BiCheck />
                                    <BsImageFill />
                                    <p>How are you doing man?</p>
                                </div>
                            </div>
                        </div>

                        <div className='message-wrap' onClick={() => setStage(stage + 1)}>
                            <img src={img3} alt="userImg" />
                            <div className='box-content'>
                                <h4>KingDavid Team</h4>
                                <div className='markIconDiv'>
                                    <BiCheck />
                                    <BsImageFill />
                                    <p>How are you doing man?</p>
                                </div>
                            </div>
                        </div>

                        <div className='message-wrap' onClick={() => setStage(stage + 1)}>
                            <img src={img3} alt="userImg" />
                            <div className='box-content'>
                                <h4>KingDavid Team</h4>
                                <div className='markIconDiv'>
                                    <BiCheck />
                                    <BsImageFill />
                                    <p>How are you doing man?</p>
                                </div>
                            </div>
                        </div>

                        <div className='message-wrap' onClick={() => setStage(stage + 1)}>
                            <img src={img3} alt="userImg" />
                            <div className='box-content'>
                                <h4>KingDavid Team</h4>
                                <div className='markIconDiv'>
                                    <BiCheck />
                                    <BsImageFill />
                                    <p>How are you doing man?</p>
                                </div>
                            </div>
                        </div>

                        <div className='message-wrap' onClick={() => setStage(stage + 1)}>
                            <img src={img3} alt="userImg" />
                            <div className='box-content'>
                                <h4>KingDavid Team</h4>
                                <div className='markIconDiv'>
                                    <BiCheck />
                                    <BsImageFill />
                                    <p>How are you doing man?</p>
                                </div>
                            </div>
                        </div>

                        <div className='message-wrap' onClick={() => setStage(stage + 1)}>
                            <img src={img3} alt="userImg" />
                            <div className='box-content'>
                                <h4>KingDavid Team</h4>
                                <div className='markIconDiv'>
                                    <BiCheck />
                                    <BsImageFill />
                                    <p>How are you doing man?</p>
                                </div>
                            </div>
                        </div>

                        <div className='message-wrap' onClick={() => setStage(stage + 1)}>
                            <img src={img3} alt="userImg" />
                            <div className='box-content'>
                                <h4>KingDavid Team</h4>
                                <div className='markIconDiv'>
                                    <BiCheck />
                                    <BsImageFill />
                                    <p>How are you doing man?</p>
                                </div>
                            </div>
                        </div>

                        <div className='message-wrap cursor-pointer' onClick={() => setStage(stage + 1)}>
                            <img src={img3} alt="userImg" />
                            <div className='box-content'>
                                <h4>KingDavid Team</h4>
                                <div className='markIconDiv'>
                                    <BiCheck />
                                    <BsImageFill />
                                    <p>How are you doing man?</p>
                                </div>
                            </div>
                        </div>

                        <div className='message-wrap cursor-pointer' onClick={() => setStage(stage + 1)}>
                            <img src={img3} alt="userImg" />
                            <div className='box-content'>
                                <h4>KingDavid Team</h4>
                                <div className='markIconDiv'>
                                    <BiCheck />
                                    <BsImageFill />
                                    <p>How are you doing man?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </MobileDashboardContainer>
    )
}

const Messages = () => {
    return (
        <Dashboard element={<MessagesAsElement />} index="1" mobileElement={<MobileMessage />} />
    )
}

export default Messages