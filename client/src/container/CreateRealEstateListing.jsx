import React from "react";
import { useState } from "react";
import { LocationMarker } from "heroicons-react";
import { X } from "heroicons-react";
import { OutProp, InProp, Views } from "./PropertiesContents";
import axios from "axios";
import { useEffect } from "react";

const CreateRealEstateListing = () => {
  const [outDoorProp, setOutDoorProp] = useState([]);
  const [inDoorProp, setInDoorProp] = useState([]);
  const [viewProp, setViewProp] = useState([]);
  const [valid, setValid] = useState(false);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  const [userListings,setUserListings] = useState({
    title:"",
    location:"",
    description:"",
    images:[],
    videos:[],
    price:"",
    year:"",
    carCondition:"",
    engineType:"",
    colour:"",
    features:[],
    model:"",
    noOfBed:"",
    noOfBathroom:""
  })

  useEffect(()=>{
    
  },[])
  const setConfig = (userListings) => {
    const authToken = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${authToken}`,
            ContentType: "application/json",
        },
        data:JSON.stringify(userListings),
        xhrFields: {
          withCredentials: true
        },
        crossDomain: true,
    };

    return config;
  };

  const handleChange = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    setUserListings({...userListings, [name]:value})
  }

  const saveDetails = () =>{
    postUserListings(userListings)
  }

  const postUserListings = async(userListings) =>{
    await axios.post('listings/upload-list',setConfig(userListings)).then((resp)=>{
      console.log(resp.message)
    })
  }

  const handleSubmit = async ()=>{
    
  }

  return (
    <>
      <div className="form_Content">
        <div className="locate">
          <LocationMarker color="#2301F3" />
          <p>Add location</p>
        </div>
        <div className="section">
          <p>Title/Name</p>
          <input 
            type="text"
            name="title"
            required
            onChange={handleChange}  
          />
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
          <input 
            type="text" 
            name="address"
          />
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
              setOutDoorProp([...outDoorProp, { property: e.target.value }]);
            }}
          >
            {OutProp.map((outDoor) => {
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
              setInDoorProp([...inDoorProp, { property: e.target.value }]);
            }}
          >
            {InProp.map((inDoor) => {
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
              setViewProp([...viewProp, { property: e.target.value }]);
            }}
          >
            {Views.map((view) => {
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
        <div className="NumbB">
          <div 
            className={valid ? "enable" : "disable"}
            onClick={valid && saveDetails}
          >
            Save & Continue
          </div>
        </div>
        <div className="section">
          <hr />
        </div>
        <div className="section">
            <p>Images</p>
            <input 
              className="dashed" 
              type="file" 
              onChange={(e)=>{
                setImages([...images, e.target.value])
                setUserListings({...userListings, images:images})        
              }}
            />
            <div className="base">
                mark and upload more than one high-quality images, listings with low quality images may be rejected
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
                      name="price"
                      onChange={handleChange}
                      type="text" 
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
          <div className="enable">List</div>
        </div>
      </div>
    </>
  );
};
export default CreateRealEstateListing;
