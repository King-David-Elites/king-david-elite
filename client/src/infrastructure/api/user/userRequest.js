import axios from "axios";

// const BASEURL = "https://kde-api.herokuapp.com";
const BASEURL = "http://192.168.43.168:9099";

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

const setConfig = () => {
  const authToken = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
      ContentType: "application/x-www-form-urlencoded",
    },
  };

  return config;
};
