import React from "react";
import { useState, useEffect } from "react";
import { X } from "heroicons-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import globalApi from "../api";
import Loader from "../Components/Loader/Loader";
import useContextAPI from "../Components/ContextAPI/ContextAPI";
import { getStates, getCities } from "../infrastructure/api/user/userRequest";

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
  const [loadImage, setLoadImage] = useState(false);

  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [isos, setIsos] = useState({
    countryIso: "",
    stateIso: "",
    cityId: "",
  });

  const mainData = useContextAPI();

  const navigate = useNavigate();

  const [userListings, setUserListings] = useState({
    title: "",
    location: "",
    locationISO: "",
    category: "cars",
    description: "",
    forRent: false,
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
    setLoadImage(loadImage);
    userListings["images"] = images;
    userListings["videos"] = videos;
    if (allImages.length !== 0 && loadImage === true) {
      Load(allImages, "image", size);
    }
    if (allVideos.length !== 0 && loadImage === false) {
      Load(allVideos, "video", size);
    }
  }, [loaded, loadImage]);

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
      userListings["images"].length >= 4 &&
      userListings["location"] &&
      userListings["locationISO"]
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

  const getCountryIso = (name) => {
    var countryObject = mainData.countryData.find(
      (country) => country.name === name
    );
    setStateData([]);
    setCityData([]);
    setIsos({ ...isos, countryIso: countryObject["iso2"] });
    getStates(countryObject["iso2"], setStateData);
    var location = `${city}#${state}#${name}`;
    var locationISO = `${isos["cityId"]}#${isos["stateIso"]}#${countryObject["iso2"]}`;
    setUserListings({
      ...userListings,
      locationISO: locationISO,
      location: location,
    });
    setChanging(!changing);
  };

  const getStateIso = (name) => {
    var stateObject = stateData.find((state) => state.name === name);
    setCityData([]);
    setIsos({ ...isos, stateIso: stateObject["iso2"] });
    getCities(isos["countryIso"], stateObject["iso2"], setCityData);
    var location = `${city}#${name}#${country}`;
    var locationISO = `${isos["cityId"]}#${stateObject["iso2"]}#${isos["countryIso"]}`;
    setUserListings({
      ...userListings,
      locationISO: locationISO,
      location: location,
    });
    setChanging(!changing);
  };

  const getCityId = (name) => {
    var cityObject = cityData.find((city) => city.name === name);
    setIsos({ ...isos, cityId: cityObject["id"] });
    var location = `${name}#${state}#${country}`;
    var locationISO = `${cityObject["id"]}#${isos["stateIso"]}#${isos["countryIso"]}`;
    setUserListings({
      ...userListings,
      locationISO: locationISO,
      location: location,
    });
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
        navigate("/profile");
      })
      .catch((err) => {
        postUserListings(userListings);
        console.log(err);
      });
  };

  const handleSubmit = async () => {
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
          <p>Country</p>
          <select
            className="w-full p-3 bg-white border rounded-md shadow-sm outline-none focus:border-theme-color"
            name="Country"
            onChange={(e) => {
              setCountry(e.target.value);
              getCountryIso(e.target.value);
            }}
          >
            <option value="Country">None</option>
            {mainData.countryData.map((country) => {
              return (
                <>
                  <option key={country.id} value={country.name}>
                    {country.name}
                  </option>
                </>
              );
            })}
          </select>
        </div>
        <div className="section">
          {stateData.length > 0 && (
            <>
              <p>State</p>
              <select
                name="state"
                onChange={(e) => {
                  setState(e.target.value);
                  getStateIso(e.target.value);
                }}
              >
                <option value="State">None</option>
                {stateData?.map((state) => {
                  return (
                    <>
                      <option key={state.id} value={state.name}>
                        {state.name}
                      </option>
                    </>
                  );
                })}
              </select>
            </>
          )}
        </div>
        <div className="section">
          {cityData.length > 0 && (
            <>
              <p>City</p>
              <select
                name="city"
                onChange={(e) => {
                  setCity(e.target.value);
                  getCityId(e.target.value);
                }}
              >
                <option value="City">None</option>
                {cityData?.map((city) => {
                  return (
                    <>
                      <option key={city.id} value={city.name}>
                        {city.name}
                      </option>
                    </>
                  );
                })}
              </select>
            </>
          )}
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
        <div className="rental">
          <div className="sect">
            <p>For Sale</p>
            <input
              type="checkbox"
              name="forRent"
              checked={userListings["forRent"] === false ? true : false}
              onClick={() => {
                if (userListings["forRent"] === true) {
                  setUserListings({ ...userListings, forRent: false });
                } else {
                  setUserListings({ ...userListings, forRent: true });
                }
              }}
            />
          </div>
          <div className="sect">
            <p>For Rent</p>
            <input
              type="checkbox"
              name="forRent"
              checked={userListings["forRent"] === true ? true : false}
              onClick={() => {
                if (userListings["forRent"] === false) {
                  setUserListings({ ...userListings, forRent: true });
                } else {
                  setUserListings({ ...userListings, forRent: false });
                }
              }}
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
                    setLoadImage(true);
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
                    setLoadImage(false);
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
