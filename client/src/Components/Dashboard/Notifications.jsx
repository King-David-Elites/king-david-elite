import React from 'react'
import { FaInbox } from 'react-icons/fa'
import Dashboard from './Dashboard'
import { MobileDashboardContainer, NotificationContainer } from './Dashboard.Styles'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { FaSearch, FaCheckCircle } from "react-icons/fa"
import { useState } from 'react'
import ReadMoreReadLess from './ReadMoreReadLess'
import theme from '../../application/utils/Theme'

const NotificationAsElement = () => {
    return (
        <NotificationContainer>
            <div className="notification">
                {/* <div className="icon">
                    <FaInbox size={30} />
                </div> */}

                <div className="content">
                    <ReadMoreReadLess className="sub">
                        The system has detected that your account is logged in from an unused IP address.
                    </ReadMoreReadLess>
                </div>
                {/* 
                <div className="time">
                    4:43pm
                </div> */}
            </div>

            <div className="notification">
                {/* <div className="icon">
                    <FaInbox size={30} />
                </div> */}

                <div className="content">
                    <ReadMoreReadLess className="sub">
                        The system has detected that your account is logged in from an unused IP address.
                    </ReadMoreReadLess>
                </div>
                {/* 
                <div className="time">
                    4:43pm
                </div> */}
            </div>

            <div className="notification">
                {/* <div className="icon">
                    <FaInbox size={30} />
                </div> */}

                <div className="content">
                    <ReadMoreReadLess className="sub">
                        The system has detected that your account is logged in from an unused IP address.
                    </ReadMoreReadLess>
                </div>
                {/* 
                <div className="time">
                    4:43pm
                </div> */}
            </div>
        </NotificationContainer>
    )
}

const MobileNotification = () => {
    return (
        <MobileDashboardContainer>
            <div className='upper-sect'>
                <div className='top-items'>
                    <p>Notification</p>
                    <BiDotsVerticalRounded size={25} />
                </div>

                <div className="search-mobile">
                    <FaSearch color='#737373' />
                    <input type="text" placeholder='Search ' />
                </div>
            </div>

            <ReadMoreReadLess>
                You have successfully made a deposit of $4,000 to your account at 10 - 06 - 2022. If you don’t recogn...
            </ReadMoreReadLess>

            <ReadMoreReadLess>
                You have successfully made a deposit of $4,000 to your account at 10 - 06 - 2022. If you don’t recogn...
            </ReadMoreReadLess>

            <ReadMoreReadLess>
                You have successfully made a deposit of $4,000 to your account at 10 - 06 - 2022. If you don’t recogn...
            </ReadMoreReadLess>
        </MobileDashboardContainer>
    );
}


const Notifications = () => {
    return (
        <Dashboard element={<NotificationAsElement />} index="3" mobileElement={<MobileNotification />} />
    )
}

export default Notifications