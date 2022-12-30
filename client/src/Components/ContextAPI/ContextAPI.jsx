import React, { useState, useEffect } from "react";
import axios from "axios";
import globalApi from "../../api";

const useContextAPI = () => {
  const [listing, setListing] = useState([]);
  const [mails, setMails] = useState([]);
  const userData = JSON.parse(localStorage.getItem("user"));  
  const getListings = async () => {
    await axios
      .get(`${globalApi}/listings/all`)
      .then((resp) => {
        setListing(resp.data);
        console.log(resp.data);
      })
      .catch((err) => console.error(err));
  };

  const email = async () => {
    await axios
      .get(`${globalApi}/wait-list`)
      .then((resp) => {
        setMails(resp.data);
        console.log(resp.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    email();
    getListings();    
  }, []);

  return {
    userData: userData,
    listing: listing,
    mails: mails
  };
};

export default useContextAPI;
