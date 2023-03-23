import React, { useState, useEffect, useCallback } from "react";
import ver1 from "../Dashboard-Image/ver1.png";
import ver2 from "../Dashboard-Image/ver2.png";
import ver3 from "../Dashboard-Image/ver3.png";
import ver4 from "../Dashboard-Image/ver4.png";
import axios from "axios";
import globalApi from "../../../api";
import { setLoading } from "../../../application/store/actions/ui";

const Advanced_Verf_3 = (props) => {
  let {
    userInfo,
    setUserInfo,
    stage,
    setStage,
    scrollToRef,
    photo,
    backImage,
    frontImage,
    idType,
    country,
    position,
    setLoading,
    isos,
    setIsos,
  } = props;
  const verificationData = {
    verificationId: {
      front: frontImage.base64,
      back: backImage.base64,
    },
    nationality: country,
    verifiedProfilePicture: photo.base64,
    verificationType: idType.digit,
  };
  const [success, setSuccess] = useState(false);
  const [verified, setVerified] = useState(false);

  const checkSuccess = useCallback(() => {
    if (success) {
      setStage(stage + 1);
      scrollToRef(position);
    }
  }, [success, stage, position, scrollToRef, setStage]);

  useEffect(() => {
    checkSuccess();
  }, [checkSuccess]);

  useEffect(() => {
    if (verified) {
      console.log("yes")
      updateUserDetails(userInfo);
      setVerified(false);
    }
  }, [verified]);

  const setConfig = () => {
    const authToken = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
        ContentType: "application/json",
      },
    };

    return config;
  };

  const postVerificationDetails = async (verificationData) => {
    console.log("verification started ...");
    await axios
      .patch(`${globalApi}/users/verify`, verificationData, setConfig())
      .then((resp) => {
        console.log(resp.data);      
        setVerified(true);  
      })
      .catch((err) => {
        console.log(err);
        postVerificationDetails(verificationData)
      });
  };

  const updateUserDetails = async (userInfo) => {
    console.log("updating user details ...");
    await axios
      .patch(`${globalApi}/users/update`, userInfo, setConfig())
      .then((resp) => {
        console.log(resp.data);
        setLoading(false);
        setSuccess(true);        
      })
      .catch((err) => {
        console.log(err);
        updateUserDetails(userInfo)
      });
  };

  const handleSubmit = () => {
    postVerificationDetails(verificationData)    
    setLoading(true);
  };

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
        <div className="preF">
          <div className="preCautions">
            <div className="cautCont">
              <div className="cautImg">
                <img src={ver1} alt="hats" />
              </div>
              <p>Avoid wearing hats</p>
            </div>
            <div className="cautCont">
              <div className="cautImg">
                <img src={ver2} alt="glasses" />
              </div>
              <p>Avoid wearing glasses</p>
            </div>
          </div>
          <div className="preCautions">
            <div className="cautCont">
              <div className="cautImg">
                <img src={ver3} alt="filters" />
              </div>
              <p>Avoid using filters</p>
            </div>
            <div className="cautCont">
              <div className="cautImg">
                <img src={ver4} alt="lighting" />
              </div>
              <p>Use enough lighting</p>
            </div>
          </div>
        </div>
      </div>
      <div className={"enable"} id="button" onClick={handleSubmit}>
        Begin Verification
      </div>
    </>
  );
};

export default Advanced_Verf_3;
