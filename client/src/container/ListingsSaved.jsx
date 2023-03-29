import React, { useCallback, useEffect } from "react";
import { LastContainer } from "./ListingsSaved.Style";
import theme from "../application/utils/Theme";
import axios from "axios";
import globalApi from "../api";
import { setConfig } from "../infrastructure/api/user/userRequest";
import { GridContainer } from "../Components/Listing/Listing.styled";
import Listing from "../Components/Listing/Listing";
import { useState } from "react";
import { useGetUserDetails } from "../application/hooks/queryhooks";
import { SpinnerCircular } from "spinners-react";

export default function ListingsSaved() {
  const data = useGetUserDetails();  
  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState({});
  const [savedListings, setSavedListings] = useState([]);
  const getAList = async (id) => {
    await axios
      .get(`${globalApi}/listings/each/${id}`)
      .then((resp) => {
        console.log("returned")
        console.log(resp.data)
        setProperty(resp.data);
      })
      .catch((err) => {
        getAList();
        console.error(err);
      });

    axios
      .patch(`${globalApi}/listings/view/${id}`, {}, setConfig())
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  const getSavedListings = () => {
    const mockListings = [];
    data.savedListing.length > 0 &&
      data.savedListing.map(async (item) => {
        console.log(item)
        // await getAList(String(item));        
        // mockListings.push(property);
        // setSavedListings(mockListings);
        if(savedListings.length === data.savedListing.length){
          // setLoading(false);
        }
      });    
      // setLoading(false);
  };

  useEffect(()=>{
    getSavedListings()
  },[data])

  return (
    <LastContainer>
      {loading ? (
        <>
          <SpinnerCircular
            color="white"
            className="flex justify-center"
            secondaryColor={theme.color}
            size={50}
            thickness={150}
          />
        </>
      ) : (
        <>
          {data.savedListing.length == 0 && (
            <>
              <h3>You don't have any listings saved</h3>
            </>
          )}
          <GridContainer>
            {savedListings.map((items) => {
              return <Listing key={items._id} list={items} />;
            })}
          </GridContainer>
        </>
      )}
    </LastContainer>
  );
}
