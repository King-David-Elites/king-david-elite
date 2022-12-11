import React from 'react'
import { useState } from 'react'

const BasicInfo = (props) =>{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [dob, setDOB] = useState()
    const [resAddress, setResAddress] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [enable, setEnable] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    
    let {
      setRegistering,
      country,
      stage,
      setStage,
      scrollToRef,
      position
    } = props

    userInfo = {
        firstName:"",
        lastName:"",
        dob:"",
        resAddress:"",
        city:"",
        postalCode:"",
        country: country
    }

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUserInfo({...userInfo, [name]:value })
    }
  
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
                        name="lastName"                        
                        onChange={(e)=>{
                            handleChange()                            
                        }}                         
                        required
                    />
                </div>
                <div className="input">
                    <label htmlFor="firstName">
                        First Name
                    </label>
                    <input 
                        type="text"                          
                        name="firstName"
                        onChange={(e)=>{
                            handleChange()
                        }}                        
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
                        name="dob"
                        onChange={(e)=>{
                            handleChange()
                        }}                        
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
                            name="resAddress"
                            onChange={(e)=>{
                                handleChange()
                            }}                            
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
                            name="city"
                            onChange={(e)=>{
                                handleChange()
                            }}                            
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
                            name="postalCode"
                            onChange={(e)=>{
                                handleChange()
                            }}                
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
                            scrollToRef(position)
                        }}
                    >
                        Back
                    </div>
                    <div          
                        className="button"
                        id={enable ? "continue_enable" : "continue_disable"}
                        onClick={()=>{
                            setStage(stage+1)
                            scrollToRef(position)
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