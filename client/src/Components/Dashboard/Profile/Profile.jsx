import React from "react";
import { useState } from "react";
import { useRef } from "react";
import Dashboard from "../Dashboard";
import {
  GenericContainer,
  ProfileContainer,
  Form,
  MobileGenericContainer,
} from "../Dashboard.Styles";
import profileImg from "../Dashboard-Image/profileImg.png";
import GetStarted from "./GetStarted";
import BasicInfo from "./BasicInfo";
import Advanced_Verf from "./Advanced_Verf";
import Advanced_Verf_1 from "./Advanced_Verf_1";
import Advanced_Verf_2 from "./Advanced_verf_2";
import Advanced_Verf_3 from "./Advanced_Verf_3";
import Verified from "./Verified";
import Loader from "../../Loader/Loader";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const ProfileAsElement = ({ mainData }) => {
  const [stage, setStage] = useState(0);
  const [registering, setRegistering] = useState(false);
  const [country, setCountry] = useState("None");
  const [idType, setIdType] = useState({digit:0, text:""});
  const [frontImage, setFrontImage] = useState([]);
  const [backImage, setBackImage] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false);

  const position = useRef(null);

  return (
    <GenericContainer>
      {loading && <Loader />}
      <ProfileContainer>
        <div className="leftSection">
          <div className="domiProfile">
            <img src={profileImg} alt="profileImg" />
          </div>
        </div>

        <div className="rightSection">
          <Form ref={position}>
            {registering ? (
              <div></div>
            ) : (
              <GetStarted
                country={country}
                setCountry={setCountry}
                stage={stage}
                setStage={setStage}
                setRegistering={setRegistering}
                scrollToRef={scrollToRef}
                position={position}
                mainData={mainData}
              />
            )}

            {stage === 1 && (
              <BasicInfo
                country={country}
                stage={stage}
                setStage={setStage}
                setRegistering={setRegistering}
                scrollToRef={scrollToRef}
                position={position}
                mainData={mainData}
              />
            )}

            {stage === 2 && (
              <Advanced_Verf
                stage={stage}
                setStage={setStage}
                scrollToRef={scrollToRef}
                idType={idType}
                setIdType={setIdType}
                position={position}
              />
            )}

            {stage === 3 && (
              <Advanced_Verf_1
                stage={stage}
                setStage={setStage}
                scrollToRef={scrollToRef}
                idType={idType}
                frontImage={frontImage}
                setFrontImage={setFrontImage}
                backImage={backImage}
                setBackImage={setBackImage}
                position={position}
              />
            )}

            {stage === 4 && (
              <Advanced_Verf_2
                stage={stage}
                setStage={setStage}
                scrollToRef={scrollToRef}
                photo={photo}
                setPhoto={setPhoto}
                position={position}
              />
            )}

            {stage === 5 && (
              <Advanced_Verf_3
                stage={stage}
                scrollToRef={scrollToRef}
                frontImage={frontImage}
                backImage={backImage}
                photo={photo}
                idType={idType}
                country={country}
                position={position}
                setStage={setStage}
                setLoading={setLoading}
              />
            )}

            {stage === 6 && <Verified stage={stage} setStage={setStage} />}
          </Form>
        </div>
      </ProfileContainer>
    </GenericContainer>
  );
};

const MobileProfile = ({ mainData }) => {
  const [stage, setStage] = useState(0);
  const [registering, setRegistering] = useState(false);
  const [country, setCountry] = useState("None");
  const [idType, setIdType] = useState("");
  const [frontImage, setFrontImage] = useState([]);
  const [backImage, setBackImage] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false);

  const position = useRef(null);

  return (
    <MobileGenericContainer>
      {loading && <Loader />}
      <ProfileContainer>
        <div className="rightSection">
          <Form ref={position}>
            {registering ? (
              <div></div>
            ) : (
              <GetStarted
                country={country}
                setCountry={setCountry}
                stage={stage}
                setStage={setStage}
                setRegistering={setRegistering}
                scrollToRef={scrollToRef}
                position={position}
                mainData={mainData}
              />
            )}

            {stage === 1 && (
              <BasicInfo
                country={country}
                stage={stage}
                setStage={setStage}
                setRegistering={setRegistering}
                scrollToRef={scrollToRef}
                position={position}
                mainData={mainData}
              />
            )}

            {stage === 2 && (
              <Advanced_Verf
                stage={stage}
                setStage={setStage}
                scrollToRef={scrollToRef}
                idType={idType}
                setIdType={setIdType}
                position={position}
              />
            )}

            {stage === 3 && (
              <Advanced_Verf_1
                stage={stage}
                setStage={setStage}
                scrollToRef={scrollToRef}
                idType={idType}
                frontImage={frontImage}
                setFrontImage={setFrontImage}
                backImage={backImage}
                setBackImage={setBackImage}
                position={position}
              />
            )}

            {stage === 4 && (
              <Advanced_Verf_2
                stage={stage}
                setStage={setStage}
                scrollToRef={scrollToRef}
                photo={photo}
                setPhoto={setPhoto}
                position={position}
              />
            )}

            {stage === 5 && (
              <Advanced_Verf_3
                stage={stage}
                scrollToRef={scrollToRef}
                frontImage={frontImage}
                backImage={backImage}
                photo={photo}
                idType={idType}
                country={country}
                position={position}
                setStage={setStage}
                setLoading={setLoading}
              />
            )}

            {stage === 6 && <Verified stage={stage} setStage={setStage} />}
          </Form>
        </div>
      </ProfileContainer>
    </MobileGenericContainer>
  );
};

const Profile = ({ mainData }) => {
  return (
    <Dashboard
      index={4}
      element={<ProfileAsElement mainData={mainData} />}
      mobileElement={<MobileProfile mainData={mainData} />}
    />
  );
};

export default Profile;
