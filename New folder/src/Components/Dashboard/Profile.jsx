import React from 'react'
import Dashboard from './Dashboard'
import { GenericContainer } from './Dashboard.Styles'

const ProfileAsElement = ()=>{
    return(
        <GenericContainer>

        </GenericContainer>
    )
}

const Profile = () => {
  return (
    <Dashboard index="4" element={<ProfileAsElement />}/>
  )
}

export default Profile