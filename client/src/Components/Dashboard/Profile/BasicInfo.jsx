import React from 'react'
import { useState } from 'react'

const BasicInfo = (props) =>{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [dob, setDOB] = useState()
    const [resAddress, setResAddress] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")

    let {
      setRegistering,
      country,
      stage,
      setStage
    } = props
  
    return(
      <>
          <h4>Identity Verification</h4>
  
          <div className="formField">
            <h4>Basic Information</h4>

            <div className="section">
                <div className="input">
                    <label htmlFor="lastName">
                        Last Name
                    </label>
                    <input 
                        type="text" 
                        value={lastName}
                        onChange={(e)=>{
                            setLastName(e.target.value)
                        }} 
                        name="lastName"
                        required
                    />
                </div>
                <div className="input">
                    <label htmlFor="firstName">
                        First Name
                    </label>
                    <input 
                        type="text" 
                        value={firstName} 
                        onChange={(e)=>{
                            setFirstName(e.target.value)
                        }}
                        name="firstName"
                        required
                    />
                </div>                
            </div>

            <div className="section">
                <div className="input">
                    <label htmlFor="dob">
                        Date of Birth
                    </label>
                    <input 
                        type="date" 
                        value={dob} 
                        onChange={(e)=>{
                            setDOB(e.target.value)
                        }}
                        name="dob"
                        required
                    />
                </div>
            </div>            
          </div>
            <div className="formField">
                <h4>Residential Address</h4>
                <div className="section">
                    <div className="input" id="resident">
                        <label htmlFor="resAddress">
                            Residential Address
                        </label>
                        <input                         
                            type="text" 
                            value={resAddress} 
                            onChange={(e)=>{
                                setResAddress(e.target.value)
                            }}
                            name="resAddress"
                            required
                        />
                    </div>
                </div>
                <div className="section">
                    <div className="input">
                        <label htmlFor="city">
                            City
                        </label>
                        <input                         
                            type="text" 
                            value={city} 
                            onChange={(e)=>{
                                setCity(e.target.value)
                            }}
                            name="city"
                            required
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="postalCode">
                            Postal Code
                        </label>
                        <input                         
                            type="text" 
                            value={postalCode} 
                            onChange={(e)=>{
                                setPostalCode(e.target.value)
                            }}
                            name="postalCode"
                            required
                        />
                    </div>
                </div>
                <div className="section">
                    <div className="input" id="resident">
                        <label htmlFor="country">
                            Country/Region
                        </label>
                        <input                      
                            type="text" 
                            value={country} 
                            name="country"
                            readOnly
                        />
                    </div>
                </div>
            </div>
            <div className="formField">
                <div className="section" id="section">
                    <div          
                        className="button"
                        id="back"
                        onClick={()=>{
                            setStage(0)
                            setRegistering(false)
                        }}
                    >
                        Back
                    </div>
                    <div          
                        className="button"
                        id="continue"
                        onClick={()=>{
                            setStage(stage+1)
                        }}
                    >
                        Submit & Continue
                    </div>
                </div>
            </div>
  
      </>
    )
  }

  export default BasicInfo