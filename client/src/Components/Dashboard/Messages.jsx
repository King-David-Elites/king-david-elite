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
    return (
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
                    <img src={img1} alt="userImg" />
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
                    <img src={img2} alt="userImg" />
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
                    <img src={img1} alt="userImg" />
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
                    <img src={img2} alt="userImg" />
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

        </MobileDashboardContainer>
    )
}

const Messages = () => {
    return (
        <Dashboard element={<MessagesAsElement />} index="1" mobileElement={<MobileMessage />} />
    )
}

export default Messages