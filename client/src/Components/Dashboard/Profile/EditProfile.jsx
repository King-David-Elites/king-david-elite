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
} from "../../Cars/Cars.Style";
import { useRef, useState } from "react";
import { Country } from "./Profile_Mockdata";
import DisableButton from "../../buttons/DisabledButton";
import theme from "../../../application/utils/Theme";
import { useLocation, useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import services from "../../../ioc/services";
import { useGetUserDetails } from "../../../application/hooks/queryhooks";

const EditProfile = () => {
  const navigate = useNavigate();
  const data = useGetUserDetails();
  const location = useLocation();
  const activeOption = location.pathname.split("/")[2];
  const isEdit = activeOption == "edit";
  const [editUserProfile, setEditUserProfile] = useState();
  const fileInputField = useRef(null);
  const [file, setFile] = useState(data.cover);

  const [initialValues, setInitialValues] = useState({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    about: data.about,
    websiteURL: data.websiteURL,
    facebookURL: data.facebookURL,
    instagramURL: data.facebookURL,
    cover: file,
    address: data.address,
    country: data.country,
    city: data.city,
    state: data.state,
    postalCode: data.postalCode
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

  // const getSignedInUserDetails = async () => {
  //   await services.api.userRequests
  //     .getSignedInUser()
  //     .then((resp) => {
  //       const user = {
  //         firstName: resp.firstName,
  //         lastname: resp.lastName,
  //         email: resp.email,
  //         cover: resp.cover,
  //       };
  //       console.log("res", resp);
  //       setInitialValues(user);
  //     })
  //     .catch((err) => console.log(err));
  // };


  const onCompanySubmit = (values) => {
    console.log("data", values);
  };

  const validate = values => {
    let errors = {}
    if (!values.firstName) errors.firstName = "Required";
    if (!values.lastName) errors.lastName = "Required";
    if (!values.email) { errors.email = "Required"; } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) { errors.email = 'Invalid email format' }
    if (!values.address) errors.address = "Required";
    if (!values.country) errors.country = "Required";
    if (!values.city) errors.city = "Required";
    if (!values.state) errors.state = "Required";
    return errors;
  }

  const onSubmit = async (values) => {
    values.cover = file;
    const userDetails = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      cover: values.cover.trim(),
      about: values.about,
      websiteURL: values.websiteURL.trim(),
      facebookURL: values.facebookURL.trim(),
      instagramURL: values.instagramURL.trim(),
      address: values.address,
      country: values.country,
      city: values.city,
      postalCode: values.postalCode
    };
    if (isEdit) {
      await services.api.userRequests
        .updateUserProfile(userDetails)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));
          setEditUserProfile(res.data);
          navigate("/profile");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  const companyFormik = useFormik({
    comapanyInitialValues,
    onCompanySubmit,
  });


  // const errorLength = Object.keys(formik.errors).length

  return (
    <>
      <EditProfileContainer padding="12px 12px">
        <div className="content-text">
          <h3>Profile</h3>
          <p>This information will be displayed publicly</p>
        </div>

        <ContentCard background="none">
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="input"
              name="firstName"
              value={formik.values.firstName.trim()}
              onChange={formik.handleChange}
            />
            {formik.errors.firstName ? <div className=" text-[red] opacity-40">{formik.errors.firstName}</div> : null}

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="input"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
            {formik.errors.lastName ? <div className=" text-[red] opacity-40">{formik.errors.lastName}</div> : null}

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
              <button className="upg-btn" type="submit">
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

            {/* <label htmlFor="cover">Cover</label> */}
            {/* <FileUploadContainer>
              <UploadFileBtn type="button">
                <FileBase64
                  name="cover"
                  defaultValue={formik.values.cover}
                  onChange={formik.handleChange}
                  multiple={false}
                  onDone={(base64) => {
                    setFile(base64.base64);
                  }}
                />
                <i className="fas fa-file-upload" />
              </UploadFileBtn>
              <DragDropText>PNG, JPG, GIF up to 5mb</DragDropText>
            </FileUploadContainer> */}
            <MainButton background="blue" border="blue" marginTop="1em" padding="18px 24px" type="submit"
            >
              Save
            </MainButton>
          </form>

          <div className="border"></div>

          <div className="form2">
            <h3>Address</h3>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="address" className="space">
                Address
              </label>
              <input
                type="text"
                className="input"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
              {formik.errors.address ? <div className=" text-[red] opacity-40">{formik.errors.address}</div> : null}

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
                          <option key={i} value={formik.values.country} selected>
                            {list.country}
                          </option>
                        </>
                      );
                    })}
                  </select>
                  {formik.errors.country ? <div className=" text-[red] opacity-40">{formik.errors.country}</div> : null}
                </div>
                <div className="sub-dropdown space">
                  <label htmlFor="state">State</label>
                  <select
                    name="state"
                    onChange={formik.handleChange}
                    className="select"
                  >
                    <option value="state" ></option>
                    {Country.map((list, i) => {
                      return (
                        <>
                          <option key={i} value={formik.values.country} selected>
                            {list.country}
                          </option>
                        </>
                      );
                    })}
                  </select>
                  {formik.errors.state ? <div className=" text-[red] opacity-40">{formik.errors.state}</div> : null}
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
                          <option key={i} value={formik.values.city} selected>
                            {list.country}
                          </option>
                        </>
                      );
                    })}
                  </select>
                  {formik.errors.city ? <div className=" text-[red] opacity-40">{formik.errors.city}</div> : null}
                </div>
                <div className="sub-dropdown space">
                  <label htmlFor="postalCode">Zip / Postal Code</label>
                  <input type="number" className="input" name="postalCode" id="postalCode" value={formik.values.postalCode} />
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
              {formik.errors.email ? <div className=" text-[red] opacity-40">{formik.errors.email}</div> : null}

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

      <MidSection padding="3em">
        <p>This section is not available in your account</p>
        <button type="submit">Upgrade</button>
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
      </EditProfileContainer>
    </>
  );
};

export default EditProfile;
