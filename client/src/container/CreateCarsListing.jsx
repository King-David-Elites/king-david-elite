import React from "react";
import { useState, useEffect } from "react";
import { LocationMarker } from "heroicons-react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import {
  DragDropText,
  FileUploadContainer,  
  UploadFileBtn,
} from "../Components/Cars/Cars.Style";
import { FaGalacticSenate } from "react-icons/fa";

const CreateCarListing = () => {
  const [valid, setValid] = useState(false);
  const [features, setFeatures] = useState(false);
  const [error, setError] = useState(false);
  const [changing, setChanging] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [position, setPosition] = useState("");
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loaded, setLoaded] = useState(false)

  const navigate = useNavigate();

  const [userListings, setUserListings] = useState({
    title: "",
    location: "somewhere",
    description: "",
    images: images,
    videos: videos,
    price: "",
    year: new Date().getFullYear(),
    carCondition: "New",
    engineType: "",
    colour: "",
    features: [],
    model: "",
  });
  
  useEffect(()=>{
    userListings['images']=images    
    userListings['videos']=videos    
  },[loaded])

  useEffect(() => {
    if (
      userListings["title"] &&
      userListings["description"] &&
      userListings["model"] &&
      userListings["price"] &&
      userListings["carCondition"] &&
      userListings["engineType"] &&
      userListings["colour"] &&
      userListings["images"].length !== 0 &&
      userListings["videos"].length !== 0
    ) {
      setValid(true);
      setError(false);
    } else {
      setValid(false);
      setError(true);
    }
    setUserListings({ ...userListings, features: features });
  }, [changing, features]);

  const Load = (base64, type) =>{
    if(type === "image"){
      setImages(base64)
    }    
    else if(type === "video"){
      setVideos(base64)
    }
    setLoaded(!loaded)
    setChanging(!changing)            
  }

  const setConfig = () => {
    const authToken = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
        ContentType: "application/json",
      },
    };

    return config;
  };

  const getPosition = async () => {
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setPosition(true);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserListings({ ...userListings, [name]: value });
    setChanging(!changing);
  };

  const postUserListings = async (userListings) => {
    await axios
      .post(
        "https://kde.cyclic.app/listings/upload-list",
        userListings,
        setConfig()
      )
      .then((resp) => {
        console.log(resp.data);
        console.log(userListings["images"]);
        navigate("/profile");
      })
      .catch((err) => {        
        console.log(err);
      });
  };

  const handleSubmit = async () => {
    postUserListings(userListings);
  };
  
  return (
    <>
      <div className="form_Content">
        <div className="locate" onClick={getPosition}>
          <LocationMarker color="#2301F3" />
          <p>Add location</p>
        </div>
        <div className="section">
          <p>Brand Name</p>
          <input type="text" name="title" required onChange={handleChange} />
        </div>
        <div className="section">
          <p>Car Model</p>
          <input type="text" name="model" required onChange={handleChange} />
        </div>
        <div className="section">
          <p>About the Car</p>
          <textarea
            type="text"
            name="description"
            required
            onChange={handleChange}
          />
        </div>
        <div className="section">
          <hr />
        </div>
        <p>Car Condition</p>
        <div className="NumbB">
          <div className="sec">
            <select name="carCondition" required onChange={handleChange}>
              <option value="New">New</option>
              <option value="Used">Preowned</option>
            </select>
          </div>
        </div>
        <p>Engine Type</p>
        <div className="NumbB">
          <div className="sec">
            <input
              type="text"
              name="engineType"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <p>Colour</p>
        <div className="NumbB">
          <div className="sec">
            <input type="text" name="colour" required onChange={handleChange} />
          </div>
        </div>
        <p>Other Features</p>
        <div className="NumbB">
          <div className="sec">
            <input
              type="text"
              name="features"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="section">
          <hr />
        </div>
        <div className="section">
          <p>Images</p>
          <FileUploadContainer>
            <UploadFileBtn type="button">
              <FileBase64
                name="images"
                defaultValue={userListings.images}
                multiple={true}
                onDone={(base64) => {
                  Load(base64, "image")
                }}
              />
              <i className="fas fa-file-upload" />
            </UploadFileBtn>
            <DragDropText>PNG, JPG, GIF up to 5mb</DragDropText>
          </FileUploadContainer>
          <div className="base">
            mark and upload more than one high-quality images, listings with low
            quality images may be rejected
          </div>
        </div>
        <div className="section">
          <p>Video</p>
          <FileUploadContainer>
            <UploadFileBtn type="button">
              <FileBase64
                name="videos"
                defaultValue={userListings.videos}
                multiple={true}
                onDone={(base64) => {
                  Load(base64, "video")
                }}
              />
              <i className="fas fa-file-upload" />
            </UploadFileBtn>
            <DragDropText>Video should not be more than 50mb</DragDropText>
          </FileUploadContainer>        
          <div className="base">
            upload a clear video displaying the views (optional)
          </div>
        </div>
        <div className="NumbB">
          <div className="sect">
            <p>Price</p>
            <div className="price">
              <input
                type="text"
                name="price"
                required
                onChange={handleChange}
              />
              <select>
                <option>USD</option>
                <option>NGN</option>
                <option>INR</option>
                <option>EU</option>
                <option>YEN</option>
              </select>
            </div>
          </div>
        </div>
        <div className="numbw">
          Price input should be only numbers, avoid the use of ',' '-' '/' or
          any other intermediaries
        </div>
        <div className="NumbB">
          <div
            className={valid ? "enable" : "disable"}
            onClick={valid && handleSubmit}
          >
            List
          </div>
        </div>
        {error && <p className="error">Please fill in the required fields</p>}
      </div>
    </>
  );
};
export default CreateCarListing;
