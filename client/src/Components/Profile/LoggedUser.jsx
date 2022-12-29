import React, {useState } from "react";
import { Fragment } from "react";
import { FaCheckCircle, FaFacebook, FaIcons, FaInstagram, FaPen } from "react-icons/fa";
import ProfileList from "../../container/ProfileList";
import ProfileStat from "../../container/ProfileStat";
import Verification from "../Verification/Verification";
import { Bio, Details, Header, Switch, Update, Address } from "./Styled";
import Account from "../Account/Account";
import { useGetUserDetails } from "../../application/hooks/queryhooks";
import { Link, useNavigate } from "react-router-dom";

const LoggedUser = ({ logged }) => {
  const [active, setActive] = useState(<ProfileStat />);
  const data = useGetUserDetails()
  const navigate = useNavigate()
  const [file, setFile] = useState(data.cover);

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
          src={data.cover}
          alt=""
          
        />
      </Header>

      <Details>
        <div className="profile">
          <img
            src={data.profilePicture}
            alt=""
          />

          <div className="title">
            <h3>
              {data.firstName + " " + data.lastName}
              <span>
                <FaCheckCircle />
              </span>
            </h3>
            <p>Joined in {( new Date(data.createdAt).getFullYear())}</p>
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

              <div className="edit">Call</div>
            </>
          )}
          {/* : } */}
        </div>
      </Details>

      <Bio>
        {data.about}
      </Bio>

      <Address>
        <p className="address">
          {data?.address}
        </p>
        {
          data.websiteUrl &&
          <Link className="website" to={data.websiteUrl}>{data.websiteUrl}</Link>
        }

        {
          (data.facebookUrl || data.instagramUrl) &&
          <p className="social">
          Social: 
          {
            data.facebookUrl &&
            <Link to={data.facebookUrl}>
            <FaFacebook color="blue"/>
          </Link>
          }
          {
            data.instagramUrl &&
            <Link to={data?.instagramUrl}>
            <FaInstagram color="#FA5936"/>
          </Link>
          }
          
        </p>
        }
        
        
      </Address>

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
