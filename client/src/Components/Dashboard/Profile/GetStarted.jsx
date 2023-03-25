import React from "react";
import { useState } from "react";

const GetStarted = (props) => {
  const [valid, setValid] = useState();

  let {
    userInfo,
    setUserInfo,
    setRegistering,
    setCountry,
    stage,
    setStage,
    scrollToRef,
    position,
    mainData,
    isos,
    setIsos,
  } = props;

  const getCountryIso = (name) => {
    var countryObject = mainData.countryData.find(
      (country) => country.name === name
    );
    setIsos({ ...isos, countryIso: countryObject["iso2"] });
  };  

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
            setUserInfo({ ...userInfo, country: e.target.value });
            getCountryIso(e.target.value);
            setValid(true);
          }}
        >
          <option value="Country">None</option>
          {mainData.countryData.map((country) => {
            return (
              <>
                <option key={country.id} value={country.name}>
                  {country.name}
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
