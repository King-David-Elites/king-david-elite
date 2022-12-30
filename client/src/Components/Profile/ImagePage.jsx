import { HiCamera } from "react-icons/hi";
import { useGetUserDetails } from "../../application/hooks/queryhooks";
import FileBase64 from "react-file-base64";
import { useState } from "react";
import services from "../../ioc/services";
import { useNavigate } from "react-router-dom";
import { Preview } from "./Styled";
import Loader from "../Loader/Loader";

const ImagePage = () => {
  const data = useGetUserDetails();
  const [image, setImage] = useState(data.cover);
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate();

  const upload = (image) => {
    setLoader(true)
    data.cover = image;
    const userDetails = {
      cover: data.cover,
    };
    services.api.userRequests
      .updateUserProfile(userDetails)
      .then((res) => {
        setLoader(false)
        setImage(image);
        console.log("res", res);
        localStorage.setItem("user", JSON.stringify(res.data));
        services.toast.success("Uploaded Successfully");
        // navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        services.toast.error(error);
      });
  };

  return (
    <Preview>
      {
        loader &&
        <Loader />
      }
      <div className="icon">
        <HiCamera color="white" />
      </div>


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

      <img src={image} alt="" />
    </Preview>
  );
};

export default ImagePage;
