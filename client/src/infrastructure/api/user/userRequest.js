import axios from "axios";

const BASEURL = "https://kde-api.herokuapp.com";

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