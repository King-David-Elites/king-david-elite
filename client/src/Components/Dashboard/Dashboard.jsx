import React, { useState, useEffect } from 'react'
import { navigators } from './contents'
import { DashboardContainer, LeftContainer, RightContainer, MobileDashboardContainer } from './Dashboard.Styles'
import { FaSearch } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import kde_whiteBg from '../Navbar/Image/kde_whiteBg.png'
import { LogoText } from '../Navbar/Navbar.Style'
import useAuthentication from '../../application/hooks/useAuthentication'
import { useGetUserDetails } from '../../application/hooks/queryhooks'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import slackImg from '../../layout/Image/slack.png'
import { BiCheck } from 'react-icons/bi'
import { BsImageFill } from 'react-icons/bs'

const Dashboard = ({ element, index }) => {
    useAuthentication();
    const navigate = useNavigate();
    const { data } = useGetUserDetails();
    const [loggedInUser, setLoggedInUser] = useState([]);

    useEffect(() => {
        setLoggedInUser(data)
    }, [data])

    return (
        <div>
            <DashboardContainer>
                <LeftContainer>
                    <div
                        className="top_logo"
                        onClick={() => navigate("/")}
                    >
                        <img src={kde_whiteBg} alt="" />
                        <LogoText>
                            KING DAVID ELITE
                        </LogoText>

                    </div>

                    <div className="nav_items">
                        {
                            navigators.map((nav, i) => {
                                return (
                                    <div key={i} className={index === i + 1 ? "item active" : "item"} onClick={() => navigate(`/dashboard/${nav.link}`)}>
                                        <p>{nav.icon}</p>
                                        <p>{nav.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                </LeftContainer>

                <RightContainer>
                    <div className="top">
                        <div className="search">
                            <FaSearch color='#737373' />
                            <input type="text" placeholder='search ' />
                        </div>

                        <div className="profile" onClick={() => navigate("/profile")}>
                            <img src="https://th.bing.com/th/id/R.b304c7b0e1751794c05ca44d94cea47a?rik=s5ONNlybUyekZg&pid=ImgRaw&r=0" alt="" />

                            <div className="textContent">
                                <h6>{data?.firstName?.toUpperCase()} {data?.lastName?.toUpperCase()}</h6>
                                <p>{data?.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mainContent">
                        {element}
                    </div>

                </RightContainer>
            </DashboardContainer>

            <MobileDashboardContainer>
                <div className='upper-sect'>
                    <div className='top-items'>
                        <p>Message</p>
                        <BiDotsVerticalRounded size={25} />
                    </div>

                    <div className="search-mobile">
                        <FaSearch color='#737373' />
                        <input type="text" placeholder='Search ' />
                    </div>
                </div>

                {/* <div className='line'></div> */}

                <div className='lower-sect'>
                    <div className='message-wrap'>
                        <img src={slackImg} alt="userImg" />
                        <div className='box-content'>
                            <h4>KingDavid Team</h4>
                            <div className='markIconDiv'>
                                <BiCheck />
                                <BsImageFill />
                                <p>How are you doing man?</p>
                            </div>
                        </div>
                    </div>

                    <div className='message-wrap'>
                        <img src={slackImg} alt="userImg" />
                        <div className='box-content'>
                            <h4>KingDavid Team</h4>
                            <div className='markIconDiv'>
                                <BiCheck />
                                <BsImageFill />
                                <p>How are you doing man?</p>
                            </div>
                        </div>
                    </div>

                    <div className='message-wrap'>
                        <img src={slackImg} alt="userImg" />
                        <div className='box-content'>
                            <h4>KingDavid Team</h4>
                            <div className='markIconDiv'>
                                <BiCheck />
                                <BsImageFill />
                                <p>How are you doing man?</p>
                            </div>
                        </div>
                    </div>

                    <div className='message-wrap'>
                        <img src={slackImg} alt="userImg" />
                        <div className='box-content'>
                            <h4>KingDavid Team</h4>
                            <div className='markIconDiv'>
                                <BiCheck />
                                <BsImageFill />
                                <p>How are you doing man?</p>
                            </div>
                        </div>
                    </div>

                    <div className='message-wrap'>
                        <img src={slackImg} alt="userImg" />
                        <div className='box-content'>
                            <h4>KingDavid Team</h4>
                            <div className='markIconDiv'>
                                <BiCheck />
                                <BsImageFill />
                                <p>How are you doing man?</p>
                            </div>
                        </div>
                    </div>

                    <div className='message-wrap'>
                        <img src={slackImg} alt="userImg" />
                        <div className='box-content'>
                            <h4>KingDavid Team</h4>
                            <div className='markIconDiv'>
                                <BiCheck />
                                <BsImageFill />
                                <p>How are you doing man?</p>
                            </div>
                        </div>
                    </div>

                    <div className='message-wrap'>
                        <img src={slackImg} alt="userImg" />
                        <div className='box-content'>
                            <h4>KingDavid Team</h4>
                            <div className='markIconDiv'>
                                <BiCheck />
                                <BsImageFill />
                                <p>How are you doing man?</p>
                            </div>
                        </div>
                    </div>

                    <div className='message-wrap'>
                        <img src={slackImg} alt="userImg" />
                        <div className='box-content'>
                            <h4>KingDavid Team</h4>
                            <div className='markIconDiv'>
                                <BiCheck />
                                <BsImageFill />
                                <p>How are you doing man?</p>
                            </div>
                        </div>
                    </div>

                    <div className='message-wrap'>
                        <img src={slackImg} alt="userImg" />
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

            </MobileDashboardContainer>
        </div>

    )
}

export default Dashboard