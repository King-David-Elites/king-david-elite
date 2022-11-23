import React from "react";
import { useState } from "react";
import { LocationMarker } from "heroicons-react";
import { X } from "heroicons-react";
import { OutProp, InProp, Views } from "./PropertiesContents";

const CreateCarListing = () => {  
  const [valid, setValid] = useState(false);
  return (
    <>
      <div className="form_Content">
        <div className="locate">
          <LocationMarker color="#2301F3" />
          <p>Add location</p>
        </div>
        <div className="section">
          <p>Brand Name</p>
          <input type="text" />
        </div>
        <div className="section">
          <p>Car Model</p>
          <input type="text" />
        </div>
        <div className="section">
          <p>About the Car</p>
          <textarea type="text" />
        </div>
        <div className="section">
          <hr />
        </div>
        <p>Year</p>
        <div className="NumbB">
            <div className="sec">
              <input type="text"/>
            </div>
        </div>
        <p>Car Condition</p>
        <div className="NumbB">
          <div className="sec">
            <select name="CarStatus">
              <option value="New">New</option>
              <option value="Used">Used</option>
            </select>
          </div>            
        </div>
        <p>Engine Type</p>
        <div className="NumbB">
            <div className="sec">
              <input type="text"/>
            </div>
        </div>
        <p>Colour</p>
        <div className="NumbB">
            <div className="sec">
              <input type="text"/>
            </div>
        </div>
        <p>Other Features</p>
        <div className="NumbB">
            <div className="sec">
              <input type="text"/>
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
                <div className="price">
                    <input type="text" />
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
export default CreateCarListing;
