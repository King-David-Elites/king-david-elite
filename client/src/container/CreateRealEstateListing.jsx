import React from "react";
import { useState } from "react";
import { LocationMarker } from "heroicons-react";
import { X } from "heroicons-react";
import { OutProp, InProp, Views } from "./PropertiesContents";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import {
  DragDropText,
  FileUploadContainer,
  UploadFileBtn,
} from "../Components/Cars/Cars.Style";

const CreateRealEstateListing = () => {
  const [outDoorProp, setOutDoorProp] = useState([]);
  const [inDoorProp, setInDoorProp] = useState([]);
  const [viewProp, setViewProp] = useState([]);
  const [features, setFeatures] = useState([]);
  const [valid, setValid] = useState(false);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [changing, setChanging] = useState(false);
  const [error, setError] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [loaded, setLoaded] = useState("");
  const [position, setPosition] = useState(false);  
  const [previous, setPrevious] = useState("");
  const [validImages, setValidImages] = useState(false)

  const navigate = useNavigate();
  const [size, setSize] = useState(0)

  const [userListings, setUserListings] = useState({
    title: "",
    location: "somewhere",
    description: "",
    images: images,
    videos: videos,
    price: "",
    year: new Date().getFullYear(),
    carCondition: "",
    engineType: "",
    colour: "",
    features: [],
    model: "",
    noOfBed: 0,
    noOfBathroom: 0,
  });

  useEffect(()=>{
    userListings["images"] = images;
    userListings["videos"] = videos;
    userListings["features"] = features;   
    setSize(size)
  },[loaded,size])

  useEffect(() => {
    if (
      userListings["title"] &&
      userListings["description"] &&
      userListings["location"] &&
      userListings["features"].length !== 0 &&
      userListings["price"] &&
      userListings["images"].length !== 0 &&
      userListings["videos"].length !== 0
    ) {
      console.log(userListings["features"]);
      console.log(userListings["images"]);
      setValid(true);
      setError(false);
    } else {
      setValid(false);
      setError(true);
    }
    setUserListings({ ...userListings, features: features });
  }, [changing, features]);

  const Load = (base64, type) => {
    if (type === "image") {
      setImages(base64);
      console.log(base64)
    } else if (type === "video") {
      setVideos(base64);
    }
    setLoaded(!loaded);
    setChanging(!changing);
  };

  const setConfig = (userListings) => {
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
        "http://192.168.43.168:9099/listings/upload-list",
        userListings,
        setConfig()
      )
      .then((resp) => {
        console.log(resp.data);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err.data);
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
          <p>Title/Name</p>
          <input type="text" name="title" required onChange={handleChange} />
          <div className="base">Very short headline for your listing</div>
        </div>
        <div className="section">
          <p>Description</p>
          <textarea
            type="text"
            name="description"
            required
            onChange={handleChange}
          />
        </div>
        <div className="section">
          <p>Address</p>
          <input type="text" name="location" required onChange={handleChange} />
        </div>
        <div className="section">
          <hr />
        </div>
        <div className="section" id="section">
          <p>AMENITIES</p>
        </div>
        <div className="section" id="section">
          <p>Choose Outdoor Properties</p>
          <select
            name="OutdoorProperties"
            onChange={(e) => {                           
              if (e.target.value !== "None" && e.target.value !== previous) {                          
                setFeatures([...features, e.target.value]);
                setOutDoorProp([...outDoorProp, {property: e.target.value}]);
                setPrevious(e.target.value)
                setLoaded(!loaded)            
              }              
            }}
          >
            {OutProp.filter((i)=> outDoorProp.findIndex(n => n.property == i.property) === -1  ).map((outDoor) => {            
              return <option>{outDoor.property}</option>;
            })}
          </select>
          <div className="OutProp">
            {outDoorProp.map((items, i) => {
              return (
                <div
                  key={i}
                  className="props"
                  onClick={() => {
                    setFeatures((features) => {
                      return features.filter((item) => item !== items.property);
                    });
                    setOutDoorProp((outDoorProp) => {
                      return outDoorProp.filter(
                        (item) => item.property !== items.property
                      );
                    });
                  }}
                >
                  <X size="20px" />
                  {items.property}
                </div>
              );
            })}
          </div>
        </div>
        <div className="section" id="section">
          <p>Choose Indoor Properties</p>
          <select
            name="IndoorProperties"
            onChange={(e) => {
              if (e.target.value !== "None" && e.target.value !== previous) {                          
                setFeatures([...features, e.target.value]);
                setInDoorProp([...inDoorProp, {property: e.target.value}]);
                setPrevious(e.target.value)
                setLoaded(!loaded)            
              }  
            }}
          >
            {InProp.filter((i)=> inDoorProp.findIndex(n => n.property == i.property) === -1  ).map((inDoor) => {            
              return <option>{inDoor.property}</option>;
            })}
          </select>
          <div className="OutProp">            
          {inDoorProp.map((items, i) => {
              return (
                <div
                  key={i}
                  className="props"
                  onClick={() => {
                    setFeatures((features) => {
                      return features.filter((item) => item !== items.property);
                    });
                    setInDoorProp((inDoorProp) => {
                      return inDoorProp.filter(
                        (item) => item.property !== items.property
                      );
                    });
                  }}
                >
                  <X size="20px" />
                  {items.property}
                </div>
              );
            })}
          </div>
        </div>
        <div className="section" id="section">
          <p>Choose Views</p>
          <select
            name="Views"
            onChange={(e) => {
              if (e.target.value !== "None" && e.target.value !== previous) {                          
                setFeatures([...features, e.target.value]);
                setViewProp([...viewProp, {property: e.target.value}]);
                setPrevious(e.target.value)
                setLoaded(!loaded)            
              }
            }}
          >
            {Views.filter((i)=> viewProp.findIndex(n => n.property == i.property) === -1  ).map((view) => {            
              return <option>{view.property}</option>;
            })}
          </select>
          <div className="OutProp">
            {viewProp.map((items, i) => {
              return (
                <div
                  key={i}
                  className="props"
                  onClick={() => {
                    setFeatures((features) => {
                      return features.filter((item) => item !== items.property);
                    });
                    setViewProp((viewProp) => {
                      return viewProp.filter(
                        (item) => item.property !== items.property
                      );
                    });
                  }}
                >
                  <X size="20px" />
                  {items.property}
                </div>
              );
            })}
          </div>
        </div>
        <div className="section">
          <hr />
        </div>
        <div className="NumbB">
          <div className="sect">
            <p>No of Bedrooms</p>
            <input
              type="text"
              name="noOfBed"
              placeholder="0"
              onChange={handleChange}
            />
          </div>
          <div className="sect">
            <p>No of Bathrooms</p>
            <input
              type="text"
              name="noOfBathroom"
              placeholder="0"
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
                  base64.forEach((item)=>{
                    setSize(size+item.file['size'])                      
                    if(item.type === "image/jpeg" || item.type === "image/png" || item.type === "image/gif"){
                      setValidImages(true)                      
                    }                               
                    else{
                      setValidImages(false)
                    }       
                  })
                  if(size <= 52428800 && validImages){
                    Load(base64, "image"); 
                  }                                                     
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
                  Load(base64, "video");
                }}
              />
              <i className="fas fa-file-upload" />
            </UploadFileBtn>
            <DragDropText>PNG, JPG, GIF up to 5mb</DragDropText>
          </FileUploadContainer>
          <div className="base">
            upload a clear video displaying the views (optional)
          </div>
        </div>
        <div className="NumbB">
          <div className="sect">
            <p>Price</p>
            <div className="price">
              <input name="price" onChange={handleChange} type="text" />
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
export default CreateRealEstateListing;
