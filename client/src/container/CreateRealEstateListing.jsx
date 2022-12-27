import React from "react";
import { useState } from "react";
import { X } from "heroicons-react";
import { OutProp, InProp, Views } from "./PropertiesContents";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import globalApi from "../api";
import Loader from "../Components/Loader/Loader";

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
  const [loaded, setLoaded] = useState("");
  const [previous, setPrevious] = useState("");
  const [allImages, setAllImages] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [modal, setModal] = useState(false);
  const [loader, setLoader] = useState(false)

  const navigate = useNavigate();
  const [size, setSize] = useState(0);

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

  useEffect(() => {
    userListings["images"] = images;
    userListings["videos"] = videos;
    userListings["features"] = features;
    if (allImages.length !== 0) {
      Load(allImages, "image", size);
    }
    if (allVideos.length !== 0) {
      Load(allVideos, "video", size);
    }
  }, [loaded]);

  useEffect(() => {
    userListings["images"] = images;
    userListings["videos"] = videos;
    userListings["features"] = features;
    if (
      userListings["title"] &&
      userListings["description"] &&
      userListings["location"] &&
      userListings["features"].length !== 0 &&
      userListings["price"] &&
      userListings["images"].length !== 0
    ) {
      setValid(true);
      setError(false);
    } else {
      setValid(false);
      setError(true);
    }
    setUserListings({ ...userListings, features: features });
  }, [changing, features]);

  const Load = (base64, type, size) => {
    if (type === "image") {
      if (size <= 52428800 && size !== 0) {
        setImages(
          images.concat(
            base64.filter(
              (items) =>
                items.type === "image/jpeg" ||
                items.type === "image/png" ||
                items.type === "image/gif"
            )
          )
        );
      }
    }
    if (type === "video") {
      if (size <= 52428800 && size !== 0) {
        setVideos(base64.filter((items) => items.type === "video/mp4"));
      }
    }
    setChanging(!changing);
  };

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

  // const getPosition = async () => {
  //   await navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       setLatitude(position.coords.latitude);
  //       setLongitude(position.coords.longitude);
  //       setPosition(true);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserListings({ ...userListings, [name]: value });
    setChanging(!changing);
  };

  const postUserListings = async (userListings) => {
    await axios
      .post(`${globalApi}/listings/upload-list`, userListings, setConfig())
      .then((resp) => {
        console.log(resp.data);
        setLoader(false);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  const handleSubmit = async () => {
    setLoader(true)
    postUserListings(userListings);
  };

  return (
    <>
      {
        loader && <Loader />
      }
      <div className="form_Content">
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
                setOutDoorProp([...outDoorProp, { property: e.target.value }]);
                setPrevious(e.target.value);
                setChanging(!changing);
              }
            }}
          >
            {OutProp.filter(
              (i) =>
                outDoorProp.findIndex((n) => n.property == i.property) === -1
            ).map((outDoor) => {
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
                setInDoorProp([...inDoorProp, { property: e.target.value }]);
                setPrevious(e.target.value);
                setChanging(!changing);
              }
            }}
          >
            {InProp.filter(
              (i) =>
                inDoorProp.findIndex((n) => n.property == i.property) === -1
            ).map((inDoor) => {
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
                setViewProp([...viewProp, { property: e.target.value }]);
                setPrevious(e.target.value);
                setChanging(!changing);
              }
            }}
          >
            {Views.filter(
              (i) => viewProp.findIndex((n) => n.property == i.property) === -1
            ).map((view) => {
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
              type="number"
              name="noOfBed"
              placeholder="0"
              onChange={handleChange}
            />
          </div>
          <div className="sect">
            <p>No of Bathrooms</p>
            <input
              type="number"
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
          <div className="sectionHead">
            <p>Images ({images.length})</p>
            <div className="browseCont">
              <p>Browse</p>
              <div className="browse">
                <FileBase64
                  name="images"
                  defaultValue={userListings.images}
                  multiple={true}
                  onDone={(base64) => {
                    setSize(0);
                    base64.forEach((item) => {
                      setSize(size + item.file["size"]);
                      setLoaded(!loaded);
                    });
                    setAllImages(base64);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="chosenImages">
            {images.map((image) => {
              return (
                <>
                  <div className="imgCont">
                    <img src={image.base64} alt="listedImage" />
                    <div
                      className="close"
                      onClick={() => {
                        setImages((images) => {
                          return images.filter(
                            (item) => item.base64 !== image.base64
                          );
                        });
                        setChanging(!changing)
                      }}
                    >
                      <X color="black" width="15px" />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          {images.length !== 0 && (
            <>
              <div className="clearCont">
                <div
                  className="clear"
                  onClick={() => {
                    setImages([]);
                    setAllImages([]);
                    setChanging(!changing)
                  }}
                >
                  Clear All
                </div>
              </div>
            </>
          )}
          <div className="base">PNG, JPEG, GIF. Not more than 50mb.</div>
          <div className="base">
            mark and upload more than one high-quality images, listings with low
            quality images may be rejected.
          </div>
        </div>
        <div className="section">
          <div className="sectionHead">
            <p>Video</p>
            <div className="browseCont">
              <p>Browse</p>
              <div className="browse">
                <FileBase64
                  name="videos"
                  defaultValue={userListings.videos}
                  multiple={false}
                  onDone={(base64) => {
                    setSize(0);
                    setSize(base64.file["size"]);
                    setLoaded(!loaded);
                    setAllVideos([base64]);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="chosenImages">
            {videos.map((video) => {
              return (
                <>
                  <div className="videoCont">
                    <video width="300px" height="300px" controls>
                      <source src={video.base64} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div
                      className="close"
                      onClick={() => {
                        setVideos([]);
                        setAllVideos([]);
                        setChanging(!changing)
                      }}
                    >
                      <X color="black" width="15px" />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base">MP4. Not more than 50mb.</div>
          <div className="base">
            upload a clear video displaying the views (optional)
          </div>
        </div>
        <div className="NumbB">
          <div className="sect">
            <p>Price</p>
            <div className="price">
              <input name="price" onChange={handleChange} type="number" />
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
