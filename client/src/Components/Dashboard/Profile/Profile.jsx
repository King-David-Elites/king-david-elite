import React from 'react'
import { useState } from 'react'
import Dashboard from '../Dashboard'
import { GenericContainer, ProfileContainer, Form} from '../Dashboard.Styles'
import {Selector, X} from "heroicons-react"
import profileImg from "../Dashboard-Image/profileImg.png"
import GetStarted from "./GetStarted"
import BasicInfo from "./BasicInfo"
import Advanced_Verf from './Advanced_Verf'
import Advanced_Verf_1 from './Advanced_Verf_1'
import Advanced_Verf_2 from './Advanced_verf_2'

const ProfileAsElement = ()=>{
  const [stage, setStage] = useState(0);
  const [registering, setRegistering] = useState(false);
  const [country, setCountry] = useState("None");

    return(
        <GenericContainer>
          <ProfileContainer>
            <div className="leftSection">
              <div className="domiProfile">
                <img src={profileImg} alt="profileImg"/>
              </div>
            </div>

            <div className="rightSection">
                          
              <Form>
                {
                  registering ? 
                  <div></div>
                  :
                  <GetStarted 
                    country={country}
                    setCountry={setCountry} 
                    stage={stage} 
                    setStage={setStage} 
                    setRegistering={setRegistering} 
                  />
                }

                {
                  stage === 1 && 
                  <BasicInfo 
                    country={country} 
                    stage={stage} 
                    setStage={setStage}
                    setRegistering={setRegistering}
                  />
                }

                { 
                  stage === 2 && 
                  <Advanced_Verf 
                    stage={stage} 
                    setStage={setStage} 
                  />
                }

                {
                  stage === 3 && 
                  <Advanced_Verf_1 
                    stage={stage} 
                    setStage={setStage}
                  />
                }

                {
                  stage === 4 && 
                  <Advanced_Verf_2 
                    stage={stage} 
                    setStage={setStage} 
                  />
                }

                {
                  stage === 5 && 
                  <Advanced_Verf_3 
                    stage={stage} 
                    setStage={setStage} 
                  />
                }

                {
                  stage === 6 && 
                  <Verified 
                    stage={stage} 
                    setStage={setStage} 
                  />
                }

              </Form>

            </div>
          </ProfileContainer>
        </GenericContainer>
    )
}

const Advanced_Verf_3 = (props) =>{
  let {
    stage,
    setStage
  } = props

  return(
    <>
      <h1>Stage 5</h1>
    </>
  )
}

const Verified = (props) =>{
  let {
    stage,
    setStage
  } = props

  return(
    <>
      <h1>Stage 6</h1>
    </>
  )
}

const Profile = () => {
  return (
    <Dashboard index="4" element={<ProfileAsElement />}/>
  )
}

export default Profile