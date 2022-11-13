import React from 'react'
import { CameraOutline, UploadOutline} from 'heroicons-react'
import frontpage from "../Dashboard-Image/frontpage.png";

const Advanced_Verf_2 = (props) =>{
    let {
      stage,
      setStage
    } = props
  
    return(
      <>
        <h4>Advanced Verification</h4>
        <div className="id_info" id="verify">
            <p>Portrait photo submission</p>
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
                        <div className="tag">2</div>
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
            <h5>Upload portrait photo Example...</h5>
            <div className="upload">
                <div className="uploading">
                    <div className="pages">
                        <img src={frontpage} alt="frontpage" />
                    </div>
                    <div className="uploadType">
                        <div className="load">
                            <CameraOutline/>                            
                            <h5>Take a photo</h5>
                        </div>
                        <div className="load">
                            <UploadOutline/>
                            <h5>Upload as image</h5>
                        </div>
                    </div> 
                </div>                               
            </div>            
        </div>
        <div          
            className="button"
            id="button"
            onClick={()=>{
              setStage(stage+1)
            }}
          >
            Continue
        </div> 
      </>
    )
  }

  export default Advanced_Verf_2