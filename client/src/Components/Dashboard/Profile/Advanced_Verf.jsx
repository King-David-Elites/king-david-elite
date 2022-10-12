import React from 'react'
import { useState } from 'react'
import {Identification, GlobeAlt,} from "heroicons-react"
import liscence from "../Dashboard-Image/liscence.png"

const Advanced_Verf = (props) =>{
    let {
      stage,
      setStage
    } = props
  
    return(
      <>
        <h3>Select ID type</h3>
        <div className="id_info" id="verify">
            <p>Use a valid government-issued photo ID.</p>
        </div>
        

        <div className="formField">
            <div className="section" id="id_section">
                <div className="id_type">
                    <div>
                        <GlobeAlt size="30px"/>
                    </div>                    
                    <h4>Passport</h4>
                </div>
                <div className="id_type">
                    <div className="lsc">
                        <img src={liscence} alt="liscence"/>
                    </div>                    
                    <h4>Driver's liscence</h4>
                </div>
                <div className="id_type">
                    <div>
                        <Identification size="30px"/>
                    </div>                    
                    <h4>Identity card</h4>
                </div>
            </div>
        </div>

        <div          
            className="button"
            onClick={()=>{
              setStage(stage+1)
            }}
          >
            Continue
        </div>
  
  
      </>
    )
  }

  export default Advanced_Verf