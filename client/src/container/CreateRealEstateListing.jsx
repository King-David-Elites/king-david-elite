import React from "react";
import { useState } from "react";
import { LocationMarker } from 'heroicons-react'
import { OutProp, InProp, Views } from "./PropertiesContents";

const CreateRealEstateListing = () =>{
    const [outDoorProp, setOutDoorProp] = useState([])    
    const [inDoorProp, setInDoorProp] = useState([])
    const [viewProp, setViewProp] = useState([])
    const [noOfBedrms, setNoOfBedrms] = useState(0)
    const [noOfBathrms, setNoOfBathrms] = useState(0)
    return(
        <>
            <div className="form_Content">
                <div className="locate">
                    <LocationMarker color="#2301F3"/>
                    <p>Add location</p>
                </div>
                <div className="section">
                    <p>Title/Name</p>
                    <input 
                        type="text" 
                    />
                    <div className="base">
                        Very short headline for your listing
                    </div>
                </div>
                <div className="section">
                    <p>Description</p>
                    <textarea type="text" />
                </div>
                <div className="section">
                    <p>Address</p>
                    <input type="text"/>
                </div>
                <div className="section">
                    <hr/>
                </div>                
                <div className="section" id="section">
                    <p>AMENITIES</p>
                </div>
                <div className="section" id="section">                
                    <p>Choose Outdoor Properties</p>
                    <select
                        name="OutdoorProperties"
                        onChange={(e)=>{
                            setOutDoorProp([...outDoorProp,{property:e.target.value}])
                        }}
                    >
                        {
                            OutProp.map((outDoor)=>{
                                return(
                                    <option>
                                        {outDoor.property}
                                    </option>
                                )
                            })
                        }
                    </select>                    
                    <div className="OutProp">
                        {
                            outDoorProp.map((items,i)=>{
                                return(
                                    <div
                                        key={i} 
                                        className="props"
                                    >
                                        {items.property}
                                    </div>
                                )                                   
                            })
                        }
                    </div>
                </div>
                <div className="section" id="section">                
                    <p>Choose Indoor Properties</p>
                    <select
                        name="IndoorProperties"
                        onChange={(e)=>{
                            setInDoorProp([...inDoorProp,{property:e.target.value}])
                        }}
                    >
                        {
                            InProp.map((inDoor)=>{
                                return(
                                    <option>
                                        {inDoor.property}
                                    </option>
                                )
                            })
                        }
                    </select>                    
                    <div className="OutProp">
                        {
                            inDoorProp.map((items,i)=>{
                                return(
                                    <div
                                        key={i} 
                                        className="props"
                                    >
                                        {items.property}
                                    </div>
                                )                                   
                            })
                        }
                    </div>
                </div>
                <div className="section" id="section">                
                    <p>Choose Views</p>
                    <select
                        name="Views"
                        onChange={(e)=>{
                            setViewProp([...viewProp,{property:e.target.value}])
                        }}
                    >
                        {
                            Views.map((view)=>{
                                return(
                                    <option>
                                        {view.property}
                                    </option>
                                )
                            })
                        }
                    </select>                    
                    <div className="OutProp">
                        {
                            viewProp.map((items,i)=>{
                                return(
                                    <div
                                        key={i} 
                                        className="props"
                                    >
                                        {items.property}
                                    </div>
                                )                                   
                            })
                        }
                    </div>
                </div>
                <div className="section">
                    <hr/>
                </div>
                <div className="NumbB">
                    <div className="sect">
                        <p>No of Bedrooms</p>
                        <input 
                            type="text"
                            placeholder="0"
                            onChange={(e)=>{
                                setNoOfBedrms(e.target.value)
                            }}
                        />
                    </div>
                    <div className="sect">
                        <p>No of Bathrooms</p>
                        <input 
                            type="text"
                            placeholder="0"
                            onChange={(e)=>{
                                setNoOfBathrms(e.target.value)
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreateRealEstateListing;