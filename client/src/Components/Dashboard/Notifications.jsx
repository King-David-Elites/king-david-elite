import React from 'react'
import Dashboard from './Dashboard'
import { NotificationContainer } from './Dashboard.Styles'


const NotificationAsElement = ()=>{
    return(
        <NotificationContainer>
            
        </NotificationContainer>
    )
}

const Notifications = () => {
  return (
    <Dashboard element={<NotificationAsElement />} index="3" />
    
  )
}

export default Notifications