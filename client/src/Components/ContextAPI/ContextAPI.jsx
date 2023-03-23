import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import globalApi from "../../api";
import { setConfig } from "../../infrastructure/api/user/userRequest";

const useContextAPI = () => {
  const [listing, setListing] = useState([]);
  const [cars, setCars] = useState([]);
  const [mails, setMails] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const userData = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState({});

  const getUser = async () => {
    await axios
      .get(`${globalApi}/users/me`, setConfig())
      .then((resp) => {        
        setUser(resp.data);        
      })
      .catch((err) => console.error(err));
  };

  const getListings = async () => {
    await axios
      .get(`${globalApi}/listings/all?page=1&category=real-estate`)
      .then((resp) => {
        setListing(resp.data.listings);
      })
      .catch((err) => console.error(err));
  };

  const getCarsListings = async () => {
    await axios
      .get(`${globalApi}/listings/all?page=1&category=cars`)
      .then((resp) => {
        setCars(resp.data.listings);
      })
      .catch((err) => console.error(err));
  };

  const getCountry = async () => {
    var headers = new Headers();
    headers.append(
      "X-CSCAPI-KEY",
      "bWxLejVmcWtRSTg1ekRyaXlKZ3l1YjN2MHI1OFBwUWVDYkVCbWNNVw=="
    );

    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    await fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setCountryData(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  };

  const email = async () => {
    await axios
      .get(`${globalApi}/wait-list`)
      .then((resp) => {
        setMails(resp.data);
      })
      .catch((err) => console.log(err));
  };

  const allCallBacks = useCallback(() => {
    email();
    getUser();
    getListings();
    getCarsListings();
    getCountry();
  }, []);

  useEffect(() => {
    allCallBacks();
  }, [allCallBacks]);

  return {
    user: user,
    userData: userData,
    setListing: setListing,
    listing: listing,
    mails: mails,
    cars: cars,
    setCars: setCars,
    countryData: countryData,
  };
};

export default useContextAPI;
