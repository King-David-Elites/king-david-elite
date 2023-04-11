import {
  ContentCard,
  EditProfileContainer,
  MidSection,
} from "./EditProfile.Style";
import MainButton from "../../buttons/MainButton";
import { useFormik } from "formik";
import { HiLockClosed } from "react-icons/hi";
import {
  DragDropText,
  FileUploadContainer,
  FormField,
  UploadFileBtn,
} from "../../Categories/Cars/Cars.Style";
import { useEffect, useRef, useState } from "react";
import { Country } from "./Profile_Mockdata";
import DisableButton from "../../buttons/DisabledButton";
import theme from "../../../application/utils/Theme";
import { useLocation, useNavigate } from "react-router-dom";
import services from "../../../ioc/services";
import Loader from "../../Loader/Loader";
import Return from "../../Navbar/Return";
import { getUser } from "../../../infrastructure/api/user/userRequest";
import {
  getStates,
  getCities,
} from "../../../infrastructure/api/user/userRequest";

const EditProfile = ({ mainData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeOption = location.pathname.split("/")[2];
  const isEdit = activeOption == "edit";
  const [editUserProfile, setEditUserProfile] = useState();
  const fileInputField = useRef(null);
  const [file, setFile] = useState(mainData.userData.cover);
  const [loader, setLoader] = useState(false);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [isos, setIsos] = useState({
    countryIso: "",
    stateIso: "",
    cityId: "",
  });

  useEffect(() => {
    getUser();
  }, []);  

  const [initialValues, setInitialValues] = useState({
    firstName: mainData.userData.firstName,
    lastName: mainData.userData.lastName,
    email: mainData.userData.email,
    about: mainData.userData.about,
    websiteURL: mainData.userData.websiteUrl,
    facebookURL: mainData.userData.facebookUrl,
    instagramURL: mainData.userData.instagramUrl,
    cover: file,
    address: mainData.userData.address,
    country: mainData.userData.country,
    locationISO: "",
    city: mainData.userData.city,
    state: mainData.userData.state,
    postalCode: mainData.userData.postalCode,
  });

  const comapanyInitialValues = {
    companyName: "",
    websiteURL: "",
    facebookURL: "",
    instagramURL: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    email: "",
    alternativeEmail: "",
    phone1: "",
    phone2: "",
    cover: file || null,
  };

  const onCompanySubmit = (values) => {
    console.log("data", values);
  };

  const validate = (values) => {
    let errors = {};
    if (!values.firstName) errors.firstName = "Required";
    if (!values.lastName) errors.lastName = "Required";
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email format";
    }
    if (!values.address) errors.address = "Required";
    if (!values.country) errors.country = "Required";
    if (!values.city) errors.city = "Required";
    if (!values.state) errors.state = "Required";
    return errors;
  };

  const onSubmit = async (values) => {
    values.cover = file;
    const userDetails = {
      firstName: values.firstName?.trim(),
      lastName: values.lastName?.trim(),
      cover: values.cover?.trim(),
      about: values?.about,
      websiteUrl: values.websiteURL?.trim(),
      facebookUrl: values.facebookURL?.trim(),
      instagramUrl: values.instagramURL?.trim(),
      address: values.address,
      country: values.country,
      locationISO: "",
      city: values.city,
      postalCode: values.postalCode,
    };
    if (isEdit) {
      setLoader(true);
      await services.api.userRequests
        .updateUserProfile(userDetails)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));
          setEditUserProfile(res.data);
          setLoader(false);
          navigate("/profile");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleChanging = (e) => {    
    let name = e.target.name;
    formik.handleChange(e);
    if (name === "country") {      
      getCountryIso(e.target.value);
    } else if (name === "state") {      
      getStateISO(e.target.value);
    } else if (name === "city") {
      getCityId(e.target.value);
    }
  };

  const getCountryIso = (name) => {
    var countryObject = mainData.countryData.find(
      (country) => country.name === name
    );
    setStateData([])
    setCityData([])
    setIsos({ ...isos, countryIso: countryObject["iso2"] });
    getStates(countryObject["iso2"], setStateData);
  };

  const getStateISO = (name) => {
    var stateObject = stateData.find((state) => state.name === name);
    setCityData([])
    setIsos({ ...isos, stateIso: stateObject["iso2"] });
    getCities(isos["countryIso"], stateObject["iso2"], setCityData);
    // setChanging(!changing);
  };

  const getCityId = (name) => {
    var cityObject = cityData.find((city) => city.name === name);
    setIsos({ ...isos, cityId: cityObject["id"] });
    // setUserInfo({
    //   ...userInfo,
    //   locationISO: `${cityObject["id"]}#${isos["stateIso"]}#${isos["countryIso"]}`,
    // });
    // setChanging(!changing);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const companyFormik = useFormik({
    comapanyInitialValues,
    onCompanySubmit,
  });

  return (
    <>
      {loader && <Loader />}
      <Return link="/profile" />
      <EditProfileContainer padding="12px 12px">
        <div className="content-text">
          <h3>Profile</h3>
          <p>This information will be displayed publicly</p>
        </div>

        <ContentCard background="none">
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">
              First Name <span className=" text-[red]">*</span>
            </label>
            <input
              type="text"
              className="input"
              name="firstName"
              value={formik.values.firstName.trim()}
              onChange={formik.handleChange}
            />
            {formik.errors.firstName ? (
              <div className=" text-[red] opacity-40">
                {formik.errors.firstName}
              </div>
            ) : null}

            <label htmlFor="lastName">
              Last Name <span className="text-[red]">*</span>
            </label>
            <input
              type="text"
              className="input"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
            {formik.errors.lastName ? (
              <div className="text-[red] opacity-40">
                {formik.errors.lastName}
              </div>
            ) : null}

            <label htmlFor="about">About</label>
            <textarea
              type="text"
              className="textarea"
              name="about"
              value={formik.values.about}
              onChange={formik.handleChange}
            />
            <p className="neutral-text">Brief description for your profile</p>

            <div className="lock-div">
              <label htmlFor="websiteURL">Website URL</label>
              <HiLockClosed size={15} />
            </div>
            <input
              type="text"
              className="input neutral-field"
              name="websiteURL"
              placeholder="www.example.com"
              value={formik.values.websiteURL}
              onChange={formik.handleChange}
            />
            <div className="btn-flex">
              <p>website url not available in your account</p>
              <button
                className="upg-btn"
                type="submit"
                onClick={() => navigate("/profile/upgrade")}
              >
                Upgrade
              </button>
            </div>

            <div className="lock-div">
              <label htmlFor="facebookURL">Facebook URL</label>
              <HiLockClosed size={15} />
            </div>
            <input
              type="text"
              className="input"
              name="facebookURL"
              value={formik.values.facebookURL}
              onChange={formik.handleChange}
            />

            <div className="lock-div">
              <label htmlFor="instagramURL">Instagram URL</label>
              <HiLockClosed size={15} />
            </div>
            <input
              type="text"
              className="input"
              name="instagramURL"
              value={formik.values.instagramURL}
              onChange={formik.handleChange}
            />

            <MainButton
              background="blue"
              border="blue"
              marginTop="1em"
              padding="18px 24px"
              type="submit"
            >
              Save
            </MainButton>
          </form>

          <div className="border"></div>

          <div className="form2">
            <h3>Address</h3>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="address" className="space">
                Address<span className=" text-[red]">*</span>
              </label>
              <input
                type="text"
                className="input"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
              {formik.errors.address ? (
                <div className=" text-[red] opacity-40">
                  {formik.errors.address}
                </div>
              ) : null}

              <div className="dropdown">
                <div className="sub-dropdown space">
                  <label htmlFor="country">
                    Country <span className=" text-[red]">*</span>
                  </label>
                  <select
                    name="country"
                    onChange={handleChanging}
                    className="select"
                  >
                    <option value="Country">None</option>
                    {mainData.countryData.map((country) => {
                      return (
                        <>
                          <option key={country.id} value={country.name}>
                            {country.name}
                          </option>
                        </>
                      );
                    })}
                  </select>
                  {formik.errors.country ? (
                    <div className=" text-[red] opacity-40">
                      {formik.errors.country}
                    </div>
                  ) : null}
                </div>
                <div className="sub-dropdown space">
                  {stateData.length > 0 && (
                    <>
                      <label htmlFor="state">
                        State <span className="text-[red]">*</span>
                      </label>
                      <select
                        name="state"
                        onChange={handleChanging}
                        className="select"
                      >
                        <option value="State">None</option>
                        {stateData?.map((state) => {
                          return (
                            <>
                              <option key={state.id} value={state.name}>
                                {state.name}
                              </option>
                            </>
                          );
                        })}
                      </select>
                      {formik.errors.state ? (
                        <div className=" text-[red] opacity-40">
                          {formik.errors.state}
                        </div>
                      ) : null}
                    </>
                  )}
                </div>
              </div>

              <div className="dropdown">
                <div className="sub-dropdown space">
                  {cityData.length > 0 && (
                    <>
                      <label htmlFor="city">
                        City <span className=" text-[red]">*</span>
                      </label>
                      <select
                        name="city"
                        onChange={handleChanging}
                        className="select"
                      >
                        <option value="City">None</option>
                        {cityData?.map((city) => {
                          return (
                            <>
                              <option key={city.id} value={city.name}>
                                {city.name}
                              </option>
                            </>
                          );
                        })}
                      </select>
                      {formik.errors.city ? (
                        <div className=" text-[red] opacity-40">
                          {formik.errors.city}
                        </div>
                      ) : null}
                    </>
                  )}
                </div>
                <div className="sub-dropdown space">
                  <label htmlFor="postalCode">Zip / Postal Code</label>
                  <input
                    type="number"
                    className="input"
                    name="postalCode"
                    id="postalCode"
                    value={formik.values.postalCode}
                  />
                </div>
              </div>
              <MainButton
                background="blue"
                border="blue"
                marginTop="1em"
                padding="18px 24px"
                type="submit"
              >
                Save
              </MainButton>
            </form>
          </div>

          <div className="border"></div>

          <div className="form2">
            <h3>Contact Information</h3>
            <form method="post" onClick={formik.handleSubmit}>
              <label htmlFor="email" className="space">
                Email
              </label>
              <input
                type="text"
                placeholder="company@example.com"
                className="input"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email ? (
                <div className=" text-[red] opacity-40">
                  {formik.errors.email}
                </div>
              ) : null}

              <div className="dropdown">
                <div className="sub-dropdown space">
                  <label htmlFor="phone1">Phone 1</label>
                  <input
                    type="text"
                    className="input"
                    name="phone1"
                    value={formik.values.phone1}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="sub-dropdown space">
                  <label htmlFor="phone2">Phone 2</label>
                  <input
                    type="text"
                    className="input"
                    name="phone2"
                    value={formik.values.phone2}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <MainButton
                background="blue"
                border="blue"
                marginTop="1em"
                padding="18px 24px"
                type="submit"
              >
                Save
              </MainButton>
            </form>
          </div>
        </ContentCard>
      </EditProfileContainer>

      {/* <MidSection>
        <p>This section is not available in your account</p>
        <button type="submit" onClick={() => navigate("/profile/upgrade")}>
          Upgrade
        </button>
      </MidSection>

      <EditProfileContainer padding="12px 12px">
        <div className="content-text">
          <h3>Company / Business</h3>
          <p>This information will be displayed publicly</p>
        </div>

        <ContentCard height="120em">
          <form onSubmit={companyFormik.handleSubmit}>
            <h3 className="neutral-field">Company</h3>
            <div className="lock-div space">
              <label htmlFor="companyName">Company Name</label>
              <HiLockClosed size={15} />
            </div>
            <input
              type="text"
              className="input"
              name="companyName"
              placeholder="KingDavid Team"
              value={companyFormik.values}
              onChange={formik.handleChange}
            />

            <div className="lock-div">
              <label htmlFor="websiteURL">Website URL</label>
              <HiLockClosed size={15} />
            </div>
            <input
              type="text"
              className="input"
              name="websiteURL"
              placeholder="www.example.com"
              value={formik.values.websiteURL}
              onChange={formik.handleChange}
            />

            <div className="lock-div">
              <label htmlFor="facebookURL">Facebook URL</label>
              <HiLockClosed size={15} />
            </div>
            <input
              type="text"
              className="input"
              name="facebookURL"
              value={formik.values.websiteURL}
              onChange={formik.handleChange}
            />

            <div className="lock-div">
              <label htmlFor="instagramURL">Instagram URL</label>
              <HiLockClosed size={15} />
            </div>
            <input
              type="text"
              className="input"
              name="instagramURL"
              value={formik.values.instagramURL}
              onChange={formik.handleChange}
            />

            <DisableButton
              border={theme.backgroundColor}
              marginTop="1em"
              padding="18px 24px"
              type="submit"
            >
              Save
            </DisableButton>
          </form>

          <div className="border"></div>

          <div className="form2">
            <h3>Address</h3>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="address" className="space">
                Address 1
              </label>
              <input
                type="text"
                className="input"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
              />

              <div className="lock-div">
                <label htmlFor="address2">Address 2</label>
                <HiLockClosed size={15} />
              </div>
              <input
                type="text"
                className="input"
                name="address2"
                value={formik.values.instagramURL}
                onChange={formik.handleChange}
              />

              <div className="dropdown">
                <div className="sub-dropdown space">
                  <label htmlFor="country">Country</label>
                  <select
                    name="country"
                    onChange={formik.handleChange}
                    className="select"
                  >
                    <option value="country"></option>
                    {Country.map((list, i) => {
                      return (
                        <>
                          <option key={i} value={list.country}>
                            {list.country}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>
                <div className="sub-dropdown space">
                  <label htmlFor="state">State</label>
                  <select
                    name="state"
                    onChange={formik.handleChange}
                    className="select"
                  >
                    <option value="state"></option>
                    {Country.map((list, i) => {
                      return (
                        <>
                          <option key={i} value={list.country}>
                            {list.country}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="dropdown">
                <div className="sub-dropdown space">
                  <label htmlFor="city">City</label>
                  <select
                    name="city"
                    onChange={formik.handleChange}
                    className="select"
                  >
                    <option value="city"></option>
                    {Country.map((list, i) => {
                      return (
                        <>
                          <option key={i} value={list.country}>
                            {list.country}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>
                <div className="sub-dropdown space">
                  <label htmlFor="postalCode">Zip / Postal Code</label>
                  <select
                    name="postalCode"
                    onChange={formik.handleChange}
                    className="select"
                  >
                    <option value="postalCode"></option>
                    {Country.map((list, i) => {
                      return (
                        <>
                          <option key={i} value={list.country}>
                            {list.country}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>
              </div>
              <DisableButton
                border={theme.backgroundColor}
                marginTop="1em"
                padding="18px 24px"
                type="submit"
              >
                Save
              </DisableButton>
            </form>
          </div>

          <div className="border"></div>

          <div className="form2">
            <h3>Contact Information</h3>
            <form method="post" onClick={formik.handleSubmit}>
              <label htmlFor="email" className="space">
                Email
              </label>
              <input
                type="text"
                placeholder="company@example.com"
                className="input"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />

              <label htmlFor="alternativeEmail" className="space">
                Alternative Email
              </label>
              <input
                type="text"
                className="input"
                name="alternativeEmail"
                value={formik.values.email}
                onChange={formik.handleChange}
              />

              <div className="dropdown">
                <div className="sub-dropdown space">
                  <label htmlFor="phone1">Phone 1</label>
                  <input
                    type="text"
                    className="input"
                    name="phone1"
                    value={formik.values.phone1}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="sub-dropdown space">
                  <label htmlFor="phone2">Phone 2</label>
                  <input
                    type="text"
                    className="input"
                    name="phone2"
                    value={formik.values.phone2}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <DisableButton
                border={theme.backgroundColor}
                marginTop="1em"
                padding="18px 24px"
                type="submit"
              >
                Save
              </DisableButton>
            </form>
          </div>

          <div className="border"></div>

          <div className="form2">
            <h3>Branding</h3>
            <form method="post" onClick={formik.handleSubmit}>
              <label htmlFor="cover" className="space">
                Cover
              </label>
              <FileUploadContainer>
                <UploadFileBtn type="button">
                  <i className="fas fa-file-upload" />
                  <span> Upload a file</span>
                </UploadFileBtn>
                <DragDropText>PNG, JPG, GIF up to 5mb</DragDropText>
                <FormField type="file" ref={fileInputField} title="" value="" />
              </FileUploadContainer>

              <DisableButton
                border={theme.backgroundColor}
                marginTop="1em"
                padding="18px 24px"
                type="submit"
              >
                Save
              </DisableButton>
            </form>
          </div>
        </ContentCard>
      </EditProfileContainer> */}
    </>
  );
};

export default EditProfile;
