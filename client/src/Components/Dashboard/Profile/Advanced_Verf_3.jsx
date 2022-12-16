import React, { useState, useEffect } from "react";
import { CameraOutline, UploadOutline } from "heroicons-react";
// import Verify from "../Dashboard-Image/verify.png";
import FileBase64 from "react-file-base64";

const Advanced_Verf_2 = (props) => {
  let { stage, setStage, scrollToRef, photo, backImage, frontImage, position } = props;

  return (
    <>
      <h4>Advanced Verification</h4>
      <div className="id_info" id="verify">
        <p>Facial Verification</p>
      </div>

      <div className="formField">
        <div className="section" id="id_section_veri">
          <div className="details" id="veri_details">
            <div className="title">
              <div className="tag">1</div>
            </div>
          </div>
          <hr />
          <div className="details" id="veri_details">
            <div className="title">
              <div className="tag">2</div>
            </div>
          </div>
          <hr />
          <div className="details" id="veri_details">
            <div className="title">
              <div className="tag">3</div>
            </div>
          </div>
        </div>
      </div>

      <div className="formField">        
        <div className="upload">
          <div className="uploading">
            <div className="pages">
              <img src="" alt="frontpage" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={"enable"}
        id="button"
        onClick={() => {
          setStage(stage + 1);
          scrollToRef(position);
        }}
      >
        Begin Verification
      </div>
    </>
  );
};

export default Advanced_Verf_2;
