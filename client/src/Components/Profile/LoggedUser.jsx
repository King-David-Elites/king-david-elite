import React, { useState } from "react";
import { Fragment } from "react";
import {
  FaCheckCircle,
  FaFacebook,
  FaIcons,
  FaInstagram,
  FaPen,
} from "react-icons/fa";
import ProfileList from "../../container/ProfileList";
import ProfileStat from "../../container/ProfileStat";
import ProfileImage from "./ProfileImage";
import Verification from "../Verification/Verification";
import {
  Bio,
  Details,
  Header,
  Switch,
  Update,
  Address,
  UsersListings,
} from "./Styled";
import Account from "../Account/Account";
import { useGetUserDetails } from "../../application/hooks/queryhooks";
import { a, useNavigate, useParams } from "react-router-dom";
import Return from "../Navbar/Return";
import axios from "axios";
import globalApi from "../../api";
import { useEffect } from "react";
import { GridContainer } from "../Listing/Listing.styled";
import Listing from "../Listing/Listing";
import { setConfig } from "../../infrastructure/api/user/userRequest";

const LoggedUser = ({ logged }) => {
  const [active, setActive] = useState(<ProfileStat />);
  const [showImage, setShowImage] = useState(false);
  const [showCover, setShowCover] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [file, setFile] = useState(data.cover);
  const { id } = useParams();
  let user = useGetUserDetails();
  const [listings, setListings] = useState([]);

  const getListings = (() => {
    axios
      .get(`${globalApi}/listings/user-listing?id=${id}`, setConfig())
      .then((resp) => {
        setListings(resp.data);
      })
      .catch((err) => console.log(err));
  }, [id])
  

  if (id == user._id) {
    navigate("/profile");
  }

  if(id == user?._id){
    navigate("/profile")
  }

  const createConversation = ()=>{
    axios.post(`http://localhost:9099/conversations/new-conversation/${id}`, {}, setConfig())
    .then(resp => {
      console.log(resp.data)
      navigate(`/dashboard/messages/chat/${resp.data._id}`)
    })
    .catch(err => console.log(err))
  }

  
  useEffect(()=>{
    if(!id){
        setData(user)
      }
      else{
        axios.get(`${globalApi}/users/${id}`)
        .then(resp => {
          setData(resp.data)
          console.log(resp.data)
        })
        getListings();
      }

  }, [id, user, getListings])


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
      {showImage && (
        <ProfileImage data={data} id={id} type="profile" setShowImage={setShowImage} />
      )}
      {showCover && (
        <ProfileImage data={data} id={id} type="cover" setShowCover={setShowCover} />
      )}
      <Return transparent={true} />
      <Header
        className="cursor-pointer"
        // onClick={() => navigate("/profile/viewImage")}
        onClick={() => {
          setShowCover(true);
        }}
      >
        <img src={data.cover} alt="" />
      </Header>

      <Details>
        <div
          className="profile"
          onClick={() => {
            setShowImage(true);
          }}
        >
          <img src={data.profilePicture} alt="" />

          <div className="title">
            <h3>
              {data.firstName + " " + data.lastName}
              <span>
                <FaCheckCircle />
              </span>
            </h3>
            <p>Joined in {new Date(data.createdAt).getFullYear()}</p>
          </div>
        </div>

        <div className="btns">
          {!logged ? (
            <>
              <div
                className="edit"
                onClick={() => {
                  navigate("edit");
                }}
              >
                <FaPen />
                <p>Edit Profile</p>
              </div>

              <div
                className="upgrade"
                onClick={() => navigate("/profile/upgrade")}
              >
                <p>Upgrade Account</p>
              </div>
            </>
          ) : (
            <>
              <div className="edit" onClick={createConversation}>Message</div>

              <div className="edit">Call</div>
            </>
          )}
          {/* : } */}
        </div>
      </Details>

      <Bio>{data.about}</Bio>

      <Address>
        <p className="address">{data?.address}</p>
        {data.websiteUrl && (
          <a className="website" href={`https://${data.websiteUrl}`}>
            {data.websiteUrl}
          </a>
        )}

        {(data.facebookUrl || data.instagramUrl) && (
          <p className="social">
            Social:
            {data.facebookUrl && (
              <a href={data.facebookUrl}>
                <FaFacebook color="blue" />
              </a>
            )}
            {data.instagramUrl && (
              <a href={data?.instagramUrl}>
                <FaInstagram color="#FA5936" />
              </a>
            )}
          </p>
        )}
      </Address>

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

      {!logged && active}

      {logged && (
        <UsersListings>
          <h3>{listings.length} Listings for Sale</h3>

          <GridContainer>
            {listings.map((items) => {
              return (
                // <RealEstate key={items._id} {...items} />
                <Listing key={items._id} list={items} />
              );
            })}
          </GridContainer>
        </UsersListings>
      )}
    </Fragment>
  );
};

export default LoggedUser;
