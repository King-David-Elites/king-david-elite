import React from "react";
import { useState } from "react";
import { LocationMarker } from "heroicons-react";
import { X } from "heroicons-react";
import { OutProp, InProp, Views } from "./PropertiesContents";

const CreateRealEstateListing = () => {
  const [outDoorProp, setOutDoorProp] = useState([]);
  const [inDoorProp, setInDoorProp] = useState([]);
  const [viewProp, setViewProp] = useState([]);
  const [noOfBedrms, setNoOfBedrms] = useState(0);
  const [noOfBathrms, setNoOfBathrms] = useState(0);
  const [valid, setValid] = useState(false);
  return (
    <>
      <div className="form_Content">
        <div className="locate">
          <LocationMarker color="#2301F3" />
          <p>Add location</p>
        </div>
        <div className="section">
          <p>Title/Name</p>
          <input type="text" />
          <div className="base">Very short headline for your listing</div>
        </div>
        <div className="section">
          <p>Description</p>
          <textarea type="text" />
        </div>
        <div className="section">
          <p>Address</p>
          <input type="text" />
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
              placeholder="0"
              onChange={(e) => {
                setNoOfBedrms(e.target.value);
              }}
            />
          </div>
          <div className="sect">
            <p>No of Bathrooms</p>
            <input
              type="text"
              placeholder="0"
              onChange={(e) => {
                setNoOfBathrms(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="NumbB">
          <div className={valid ? "enable" : "disable"}>Save & Continue</div>
        </div>
        <div className="section">
          <hr />
        </div>
        <div className="section">
            <p>Images</p>
            <input className="dashed" type="file" />
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
                
            </div>                        
        </div>
      </div>
    </>
  );
};
export default CreateRealEstateListing;
