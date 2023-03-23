import axios from "axios";
import { useEffect } from "react";

const BASEURL = "https://kde.cyclic.app";

// """http://localhost:9099"

export const login = async (userDetails) => {
  try {
    const res = await axios.post(`${BASEURL}/users/sign-in`, userDetails);
    // res.data.data.authToken = res.headers.token;
    return res.data;
  } catch (err) {
    return err.data;
  }
};

export const signUp = async (userDetails) => {
  try {
    const res = await axios.post(`${BASEURL}/users/sign-up`, userDetails);
    // res.data.data.authToken = res.headers.token;
    return res.data;
  } catch (err) {
    return err.data;
  }
};

export const getSignedInUser = async () => {
  try {
    const res = await axios.get(`${BASEURL}/users/me`, setConfig());
    return res.data;
  } catch (err) {
    return err.data;
  }
};

export const updateUserProfile = async (userDetails) => {
  const res = await axios.patch(
    `${BASEURL}/users/update`,
    userDetails,
    setConfig()
  );
  return res;
};

export const setConfig = () => {
  const authToken = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
      ContentType: "application/x-www-form-urlencoded",
    },
  };

  return config;
};

export const getStates = async (countryIso, setStateData) => {
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

  fetch(
    `https://api.countrystatecity.in/v1/countries/${countryIso}/states`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {      
      setStateData(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

export const getCities = async (countryIso, stateIso, setCityData) => {    
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

  fetch(
    `https://api.countrystatecity.in/v1/countries/${countryIso}/states/${stateIso}/cities`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {      
      setCityData(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};
