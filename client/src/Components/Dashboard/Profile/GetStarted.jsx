import React from "react";
import { useState } from "react";
import { Country } from "./Profile_Mockdata";

const GetStarted = (props) => {  
  const [valid, setValid] = useState();
  let {
    setRegistering,
    country,
    setCountry,
    stage,
    setStage,
    scrollToRef,
    position,
  } = props;

  return (
    <>
      <h4>Identity Verification</h4>

      <div className="id_info">
        <p>
          An Identity Verification is required to keep KDE safe and secure for
          our Users.
        </p>
        <p>
          It is a quick and simple process that also lets us better understand
          your needs to serve you better.
        </p>
      </div>

      <div className="region">
        <p>Select your country/region</p>

        <select
          name="Country"
          onChange={(e) => {
            setCountry(e.target.value);
            setValid(true)
          }}
        >
          <option value="Country">{country}</option>
          {Country.map((list, i) => {
            return (
              <>
                <option key={i} value={list.country}>
                  {list.country}
                </option>
              </>
            );
          })}
        </select>
      </div>

      <div className="details">
        <div className="title">
          <div className="tag">1</div>
          <h4> Basic Information </h4>
        </div>
        <ul>
          <li> First and Last Name </li>
          <li> Date of Birth </li>
          <li> Residential Address </li>
        </ul>
      </div>

      <div className="details">
        <div className="title">
          <div className="tag">2</div>
          <h4> Identity Verification and Facial Verification </h4>
        </div>
        <ul>
          <li> Upload a photo of your ID </li>
          <li> Take a picture of yourself to verify your identity </li>
        </ul>
      </div>

      <div
        className={valid ? "enable" : "disable"}
        onClick={() => {
          if (valid) {
            setRegistering(true);
            setStage(stage + 1);
            scrollToRef(position);
          }
        }}
      >
        Start
      </div>
    </>
  );
};

export default GetStarted;
