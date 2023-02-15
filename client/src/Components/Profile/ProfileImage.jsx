import React, { useState } from "react";
import { useGetUserDetails } from "../../application/hooks/queryhooks";
import { FaPen } from "react-icons/fa";
import { X } from "heroicons-react";
import { DisplayImage } from "./Styled";
import FileBase64 from "react-file-base64";
import Loader from "../Loader/Loader";
import services from "../../ioc/services";

const ProfileImage = ({ data, id, setShowImage }) => {
  const user = useGetUserDetails();
  const [loader, setLoader] = useState(false);
  const [image, setImage] = useState(data.profilePicture);

  const upload = (image) => {
    setLoader(true);
    if (!id) {
      data.profilePicture = image;
    }
    const userDetails = {
      profilePicture: image,
    };
    services.api.userRequests
      .updateUserProfile(userDetails)
      .then((res) => {
        setLoader(false);
        setImage(image);
        console.log("res", res);
        localStorage.setItem("user", JSON.stringify(res.data));
        services.toast.success("Uploaded Successfully");
      })
      .catch((error) => {
        console.log(error);
        services.toast.error(error);
      });
  };

  return (
    <>
      <DisplayImage>
        {loader && <Loader />}
        <div className="background">
          <div
            className="close"
            onClick={() => {
              setShowImage(false);
            }}
          >
            <X />
          </div>
          <div className="imageCont">
            <div className="profileName">
              <h1>
                {data.firstName.toUpperCase() +
                  " " +
                  data.lastName.toUpperCase()}
              </h1>
            </div>
            <div className="image">
              <img src={data.profilePicture} alt="profile picture" />
            </div>
            {user._id == data._id && (
              <div className="editProfile">
                <FaPen />
                <p>Edit</p>
                <div className="input">
                  <FileBase64
                    name="cover"
                    defaultValue={image}
                    multiple={false}
                    onDone={(base64) => {
                      upload(base64.base64);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </DisplayImage>
    </>
  );
};

export default ProfileImage;
