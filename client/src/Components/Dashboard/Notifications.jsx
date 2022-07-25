import React from 'react'
import { FaInbox } from 'react-icons/fa'
import Dashboard from './Dashboard'
import { NotificationContainer } from './Dashboard.Styles'


const NotificationAsElement = ()=>{
    return(
        <NotificationContainer>
            <div className="notification">
                <div className="icon">
                    <FaInbox size={30}/>
                </div>

                <div className="content">
                    <p className="title">
                    Login  attempted from a new IP
                    </p>
                    <p className="sub">
                    The system has detected that your account is logged in from an unused IP address.
                    </p>
                </div>

                <div className="time">
                    4:43pm
                </div>
            </div>

            <div className="notification">
                <div className="icon">
                    <FaInbox size={30}/>
                </div>

                <div className="content">
                    <p className="title">
                    Login  attempted from a new IP
                    </p>
                    <p className="sub">
                    The system has detected that your account is logged in from an unused IP address.
                    </p>
                </div>

                <div className="time">
                    4:43pm
                </div>
            </div>

            <div className="notification">
                <div className="icon">
                    <FaInbox size={30}/>
                </div>

                <div className="content">
                    <p className="title">
                    Login  attempted from a new IP
                    </p>
                    <p className="sub">
                    The system has detected that your account is logged in from an unused IP address.
                    </p>
                </div>

                <div className="time">
                    4:43pm
                </div>
            </div>
        </NotificationContainer>
    )
}

const Notifications = () => {
  return (
    <Dashboard element={<NotificationAsElement />} index="3" />

  )
}

export default Notifications