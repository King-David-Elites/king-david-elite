import React from 'react'
import Dashboard from './Dashboard'
import { MessagesContainer, MobileDashboardContainer } from './Dashboard.Styles'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { FaSearch } from "react-icons/fa"

const MessagesAsElement = () => {
    return (
        <div>
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

                </div>

            </MobileDashboardContainer>
        </div>

    )
}

const Messages = () => {
    return (
        <Dashboard element={<MessagesAsElement />} index="1" />
    )
}

export default Messages