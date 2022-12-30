import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const BasicInfo = (props) => {
  let {
    setRegistering,
    country,
    stage,
    setStage,
    scrollToRef,
    position,
    mainData,
  } = props;
  const [valid, setValid] = useState(false);
  const [changing, setChanging] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: mainData.userData.firstName,
    lastName: mainData.userData.lastName,
    dob: "",
    resAddress: "",
    city: "",
    postalCode: "",
    country: country,
  });

  useEffect(() => {
    setUserInfo(userInfo);
    if (
      userInfo["firstName"] &&
      userInfo["lastName"] &&
      userInfo["dob"] &&
      userInfo["resAddress"] &&
      userInfo["city"] &&
      userInfo["postalCode"]
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [changing]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
    setChanging(!changing);
  };

  return (
    <>
      <h4>Identity Verification</h4>

      <div className="formField">
        <h4>Basic Information</h4>

        <div className="section">
          <div className="input">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={
                mainData.userData
                  ? mainData.userData.lastName.toUpperCase()
                  : ""
              }
              onChange={handleChange}
              readOnly
              required
            />
          </div>
          <div className="input">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={
                mainData.userData
                  ? mainData.userData.firstName.toUpperCase()
                  : ""
              }
              onChange={handleChange}
              readOnly
              required
            />
          </div>
        </div>

        <div className="section">
          <div className="input">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" name="dob" onChange={handleChange} required />
          </div>
        </div>
      </div>
      <div className="formField">
        <h4>Residential Address</h4>
        <div className="section">
          <div className="input" id="resident">
            <label htmlFor="resAddress">Residential Address</label>
            <input
              type="text"
              name="resAddress"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="section">
          <div className="input">
            <label htmlFor="city">City</label>
            <input type="text" name="city" onChange={handleChange} required />
          </div>
          <div className="input">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="section">
          <div className="input" id="resident">
            <label htmlFor="country">Country/Region</label>
            <input type="text" value={country} name="country" readOnly />
          </div>
        </div>
        {!valid && <p className="note">* All fields are required</p>}
      </div>

      <div className="formField">
        <div className="section" id="section">
          <div
            className="enable"
            id="back"
            onClick={() => {
              setStage(0);
              setRegistering(false);
              scrollToRef(position);
            }}
          >
            Back
          </div>
          <div
            className={valid ? "enable" : "disable"}
            id={valid ? "continue_enable" : "continue_disable"}
            onClick={() => {
              if (valid) {
                setStage(stage + 1);
                scrollToRef(position);
              }
            }}
          >
            Submit & Continue
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
