import React, { useState } from "react";
import { Fragment } from "react";
import { FaCheckCircle, FaIcons, FaPen } from "react-icons/fa";
import ProfileList from "../../container/ProfileList";
import ProfileStat from "../../container/ProfileStat";
import Verification from "../Verification/Verification";
import { Bio, Details, Header, Switch, Update } from "./Styled";
import Account from "../Account/Account";

const LoggedUser = ({ logged }) => {
  const [active, setActive] = useState(<ProfileStat />);

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
      <Header>
        <img
          src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png"
          alt=""
        />
      </Header>

      <Details>
        <div className="profile">
          <img
            src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png"
            alt=""
          />

          <div className="title">
            <h3>
              King David Elite{" "}
              <span>
                <FaCheckCircle />{" "}
              </span>
            </h3>
            <p>Joined 2011</p>
          </div>
        </div>

        <div className="btns">
          {!logged ? (
            <>
              <div className="edit">
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, incidunt
        facilis! Ad rerum ipsam earum ducimus veniam maiores voluptatum repellat
        pariatur maxime impedit similique ab magni repudiandae quidem, ipsa
        amet, enim eveniet quae voluptates architecto minus inventore. Quia
        odio, cupiditate minima, ad culpa incidunt, rem eaque optio animi
        quaerat magni.
      </Bio>

      {!logged && <Update>Update Account</Update>}

      {!logged && (
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
      )}

       { !logged && active}
    </Fragment>
  );
};

export default LoggedUser;
