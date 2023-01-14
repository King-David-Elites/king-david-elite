import React, { useState, useEffect } from "react";
import axios from "axios";
import globalApi from "../../api";

const useContextAPI = () => {
  const [listing, setListing] = useState([]);
  const [cars, setCars] = useState([]);
  const [mails, setMails] = useState([]);  
  const userData = JSON.parse(localStorage.getItem("user"));  

  const getListings = async () => {
    await axios
      .get(`${globalApi}/listings/all?page=1&type=0`)
      .then((resp) => {
        setListing(resp.data.listings);
        console.log(resp.data)
      })
      .catch((err) => console.error(err));
  };

  const getCarsListings = async () => {
    await axios
      .get(`${globalApi}/listings/all?page=1&type=1`)
      .then((resp) => {
        setCars(resp.data.listings);
      })
      .catch((err) => console.error(err));
  };

  const email = async () => {
    await axios
      .get(`${globalApi}/wait-list`)
      .then((resp) => {
        setMails(resp.data);                
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    email();
    getListings();  
    getCarsListings();  
  }, []);

  return {
    userData: userData,
    setListing: setListing,
    listing: listing,
    mails: mails,
    cars: cars,
    setCars: setCars
  };
};

export default useContextAPI;
