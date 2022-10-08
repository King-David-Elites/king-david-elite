import React from 'react'
import { useState } from 'react'
import Dashboard from '../Dashboard'
import { GenericContainer, ProfileContainer } from '../Dashboard.Styles'
import {X} from "heroicons-react"
import profileImg from "../Dashboard-Image/profileImg.png"

const ProfileAsElement = ()=>{
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const [step5, setStep5] = useState(false);
  const [step6, setStep6] = useState(false);
  const [step7, setStep7] = useState(false);
    return(
        <GenericContainer>
          <ProfileContainer>
            <div className="leftSection">
              <div className="domiProfile">
                <img src={profileImg} alt="profileImg"/>
              </div>
            </div>

            <div className="rightSection">

              <div className="closeField">
                <div className="closeBtn">
                  <X size="20px" color="black"/>
                </div>                
              </div>

              {

              }

            </div>
          </ProfileContainer>
        </GenericContainer>
    )
}

const Profile = () => {
  return (
    <Dashboard index="4" element={<ProfileAsElement />}/>
  )
}

export default Profile