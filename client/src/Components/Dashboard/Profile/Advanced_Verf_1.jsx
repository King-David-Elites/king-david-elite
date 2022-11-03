import React from 'react'
import { useState } from 'react'
import {Identification, GlobeAlt,} from "heroicons-react"
import liscence from "../Dashboard-Image/liscence.png"
import frontpage from "../Dashboard-Image/frontpage.png";
import backpage from "../Dashboard-Image/backpage.png";

const Advanced_Verf_1 = (props) =>{
    let {
      stage,
      setStage
    } = props
  
    return(
      <>
        <h4>Advanced Verification</h4>
        <div className="id_info" id="verify">
            <p>Use a valid government-issued photo ID.</p>
        </div>
        

        <div className="formField">
            <div className="section" id="id_section_veri">
                <div className="details" id="veri_details">
                    <div className="title">
                        <div className="tag">1</div>
                    </div>
                </div>
                <hr/>
                <div className="details" id="veri_details">
                    <div className="title">
                        <div className="tag" id="tag">2</div>
                    </div>
                </div>
                <hr/>
                <div className="details" id="veri_details">
                    <div className="title">
                        <div className="tag" id="tag">3</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="formField">
            <h5>Upload Identification card</h5>
            <div className="upload">
                <div className="uploading">
                    <div className="pages">
                        <img src={frontpage} alt="frontpage" />
                    </div>
                    <div className="uploadType">
                        <h5>Upload front page</h5>
                        <div className="load">

                        </div>
                        <div className="load">

                        </div>
                    </div> 
                </div>           
                <hr style={{color:"gray",width:"100%"}}/>         
                <div className="uploading">
                    <div className="pages">
                        <img src={backpage} alt="backpage" />
                    </div>
                    <div className="uploadType">
                        <h5>Upload back page</h5>
                        <div className="load">

                        </div>
                        <div className="load">

                        </div>
                    </div>
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

  export default Advanced_Verf_1