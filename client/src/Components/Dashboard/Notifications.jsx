import React from 'react'
import { FaInbox } from 'react-icons/fa'
import Dashboard from './Dashboard'
import { MobileDashboardContainer, NotificationContainer } from './Dashboard.Styles'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { FaSearch, FaCheckCircle } from "react-icons/fa"
import { useState } from 'react'
import ReadMoreReadLess from './ReadMoreReadLess'
import theme from '../../application/utils/Theme'
import { useGetUserDetails } from '../../application/hooks/queryhooks'
import axios from 'axios'
import globalApi from '../../api'
import { setConfig } from '../../infrastructure/api/user/userRequest'
import { useEffect } from 'react'

const NotificationAsElement = () => {
    const data = useGetUserDetails;
    const [notifications, setNotifications] = useState([])

    const getNotifications = ()=>{
        axios.get(`${globalApi}/notifications/all`, setConfig())
        .then(resp => setNotifications(resp.data))
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        getNotifications()
    }, [globalApi])
    return (
        <NotificationContainer>
            {
                notifications.map((notification, i)=>{
                    return(
                        <ReadMoreReadLess key={i} 
                            message = {notification.message}
                            title = {notification.title}
                            time = {notification.createdAt}
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

    const getNotifications = ()=>{
        axios.get(`${globalApi}/notifications/all`, setConfig())
        .then(resp => setNotifications(resp.data))
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        getNotifications()
    }, [globalApi])
    
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

            <div className='border-line'>

            </div>

            {
                notifications.map((notification, i)=>{
                    return(
                        <ReadMoreReadLess key={i} 
                            message = {notification.message}
                            title = {notification.title}
                            time = {notification.createdAt}
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