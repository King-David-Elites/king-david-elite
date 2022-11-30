import React from "react";
import { useState, useEffect } from "react";
import { LocationMarker } from "heroicons-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateCarListing = () => {  
  const [valid, setValid] = useState(false);
  const [features, setFeatures] = useState(false);
  const [error, setError] = useState(false);
  const [changing, setChanging] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [position, setPosition] = useState("");

  const navigate = useNavigate();

  const [userListings, setUserListings] = useState({
    title: "",
    location: "somewhere",
    description: "",
    images: [],
    videos: [],
    price: "",
    year: new Date().getFullYear(),
    carCondition: "New",
    engineType: "",
    colour: "",
    features: [],
    model: "",
    noOfBed: 0,
    noOfBathroom: 0,
  });

  useEffect(() => {
    console.log(longitude);
    console.log(latitude);
  }, [position]);

  useEffect(() => {
    if (
      userListings["title"] &&
      userListings["description"] &&
      userListings["model"] &&
      userListings["price"] &&
      userListings["carCondition"] &&
      userListings["engineType"] &&
      userListings["colour"]
    ) {
      setValid(true);
      setError(false);
    } else {
      setValid(false);
      setError(true);
    }
    setUserListings({ ...userListings, features: features });
  }, [changing, features]);

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
        "https://kde-api.herokuapp.com/listings/upload-list",
        userListings,
        setConfig()
      )
      .then((resp) => {
        console.log(resp.data);
        navigate('/profile')
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
        {/* <p>Year</p>
        <div className="NumbB">
          <div className="sec">
            <input type="text" />
          </div>
        </div> */}
        <p>Car Condition</p>
        <div className="NumbB">
          <div className="sec">
            <select name="carCondition" required onChange={handleChange}>
              <option value="New">New</option>
              <option value="Used">Used</option>
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
          <input className="dashed" type="file" />
          <div className="base">
            mark and upload more than one high-quality images, listings with low
            quality images may be rejected
          </div>
        </div>
        <div className="section">
          <p>Video</p>
          <input className="dashed" type="file" />
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
