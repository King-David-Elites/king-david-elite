import React from "react";
import { useState, useEffect } from "react";
import { X } from "heroicons-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import globalApi from "../api";
import Loader from "../Components/Loader/Loader";


const CreateCarListing = () => {
  const [valid, setValid] = useState(false);
  const [error, setError] = useState(false);
  const [changing, setChanging] = useState(false);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [allImages, setAllImages] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [size, setSize] = useState(0);
  const [loader, setLoader] = useState(false);

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

  useEffect(() => {
    userListings["images"] = images;
    userListings["videos"] = videos;
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
    if (
      userListings["title"] &&
      userListings["description"] &&
      userListings["model"] &&
      userListings["price"] &&
      userListings["carCondition"] &&
      userListings["engineType"] &&
      userListings["colour"] &&
      userListings["images"].length >= 4
    ) {
      setValid(true);
      setError(false);
    } else {
      setValid(false);
      setError(true);
    }
  }, [changing]);

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
        setLoader(false);
        console.log(resp.data);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async () => {
    console.log("fetching data")
    setLoader(true);
    postUserListings(userListings);
  };

  return (
    <>
      {loader && <Loader />}
      <div className="form_Content">
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
                        setChanging(!changing);
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
                    setChanging(!changing);
                  }}
                >
                  Clear All
                </div>
              </div>
            </>
          )}
          <div className="base">PNG, JPEG, GIF. Not more than 50mb.</div>
          <div className="base">
            mark and upload more than one high-quality images (At least 4).
            Listings with low quality images may be rejected.
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
                        setChanging(!changing);
                      }}
                    >
                      <X color="black" width="15px" />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base">MP4. Not more than 50mb</div>
          <div className="base">
            upload a clear video displaying the views (optional)
          </div>
        </div>
        <div className="NumbB">
          <div className="sect">
            <p>Price</p>
            <div className="price">
              <input
                type="number"
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
        <div className="NumbB">
          <div
            className={valid ? "enable" : "disable"}
            onClick={valid && handleSubmit}
          >
            List
          </div>
        </div>
        {error && (
          <p className="error">
            Please fill in the required fields. Selected Images must be more
            than 4 (four)
          </p>
        )}
      </div>
    </>
  );
};
export default CreateCarListing;
