import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import globalApi from "../../api";
import { requestUserData } from "../../infrastructure/api/user/userRequest";
import { setConfig } from "../../infrastructure/api/user/userRequest";

const useContextAPI = () => {
  const [mails, setMails] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const userData = requestUserData(); 

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
    getCountry();
  }, []);

  useEffect(() => {
    allCallBacks();
  }, [allCallBacks]);

  return {    
    userData: userData,
    mails: mails,
    countryData: countryData,
  };
};

export default useContextAPI;
