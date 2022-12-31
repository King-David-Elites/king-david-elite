import React, { useState, useEffect } from "react";
import axios from "axios";
import globalApi from "../../api";

const useContextAPI = () => {
  const [estateListing, setEstateListing] = useState({});
  const [carsListing, setCarsListing] = useState({});
  const [mails, setMails] = useState([]);
  const [fetched, setFetched] = useState(false);
  const userData = JSON.parse(localStorage.getItem("user"));  

  const getEstates = async () => {
    await axios
      .get(`${globalApi}/listings/all?page=1&type=0`)
      .then((resp) => {
        setEstateListing(resp.data);
        setFetched(!fetched);
        console.log(resp.data);
      })
      .catch((err) => console.error(err));
  };

  const email = async () => {
    await axios
      .get(`${globalApi}/wait-list`)
      .then((resp) => {
        setMails(resp.data);
        setFetched(!fetched);
        console.log(resp.data);
      })
      .catch((err) => console.log(err));
  };

  const getCars = async () => {
    await axios
      .get(`${globalApi}/listings/all?page=1&type=1`)
      .then((resp) => {
        setCarsListing(resp.data);
        setFetched(!fetched);
        console.log(resp.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {    
    getCars();
    getEstates();
    email();        
  }, []);

  return {
    userData: userData,
    estateListing: estateListing,
    carsListing: carsListing,
    mails: mails,
  };
};

export default useContextAPI;
