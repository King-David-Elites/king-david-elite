import React, {useState } from "react";
import { Fragment } from "react";
import { FaCheckCircle, FaIcons, FaPen } from "react-icons/fa";
import ProfileList from "../../container/ProfileList";
import ProfileStat from "../../container/ProfileStat";
import Verification from "../Verification/Verification";
import { Bio, Details, Header, Switch, Update } from "./Styled";
import Account from "../Account/Account";
import { useNavigate } from "react-router-dom";

const LoggedUser = ({ logged, mainData }) => {
  const [active, setActive] = useState(<ProfileStat />);    
  const navigate = useNavigate()
  const [file, setFile] = useState(mainData.userData.cover);

  //   const logged = true
  const options = [
    {
      title: "Stats",
      component: <ProfileStat />,
    },
    {
      title: "List",
      component: <ProfileList />,
    },
    {
      title: "Account",
      component: <Account />,
    },
    {
      title: "Verification",
      component: <Verification />,
    },
  ];


  return (
    <Fragment>
      <Header className="cursor-pointer" onClick={() => navigate('/profile/viewImage')}>
        <img
          src={mainData.userData.cover}
          alt=""
          
        />
      </Header>

      <Details>
        <div className="profile">
          <img
            src={mainData.userData.profilePicture}
            alt=""
          />

          <div className="title">
            <h3>
              {mainData.userData.firstName + " " + mainData.userData.lastName}
              <span>
                <FaCheckCircle />
              </span>
            </h3>
            <p>Joined 2011</p>
          </div>
        </div>

        <div className="btns">
          {!logged ? (
            <>
              <div className="edit" onClick={() => { navigate("edit") }}>
                <FaPen />
                <p>Edit Profile</p>
              </div>

              <div className="upgrade">
                <p>Upgrade Account</p>
              </div>
            </>
          ) : (
            <>
              <div className="edit">Message</div>

              <div className="upgrade">Call</div>
            </>
          )}
          {/* : } */}
        </div>
      </Details>

      <Bio>
        {mainData.userData.about}
      </Bio>

      {!logged && <Update>Update Account</Update>}

      {
        !logged && (
          <Switch>
            <div className="line" />
            <div className="options">
              {options.map((option, i) => {
                const { title, component } = option;
                return (
                  <div
                    key={i}
                    className="option"
                    onClick={() => {
                      setActive(component);
                    }}
                  >
                    {title}
                  </div>
                );
              })}
            </div>
            <div className="line" />
          </Switch>
        )
      }

      {!logged && active}
    </Fragment >
  );
};

export default LoggedUser;
