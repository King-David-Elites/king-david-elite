import { ContentCard, EditProfileContainer, MidSection } from "./EditProfile.Style";
import MainButton from "../../buttons/MainButton";
import { useFormik } from 'formik';
import { HiLockClosed } from 'react-icons/hi'
import { DragDropText, FileUploadContainer, FormField, UploadFileBtn } from "../../Cars/Cars.Style";
import { useRef, useState } from "react";
import { Country } from './Profile_Mockdata'
import DisableButton from "../../buttons/DisabledButton";
import theme from "../../../application/utils/Theme";
import { useEffect } from "react";
import axios from "axios";

const EditProfile = (props) => {

    const fileInputField = useRef(null);
    const [files, setFiles] = useState({});

    const [initialValues, setInitialValues] = useState({
        name: "",
        about: "",
        websiteURL: "",
        facebookURL: "",
        instagramURL: "",
        cover: null,
        address: "",
        country: ""
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
        cover: null
    }

    const setConfig = () => {
        const authToken = JSON.stringify(localStorage.getItem("token"));

        const config = {
            headers: {
                Authorization: `Bearer ${authToken}`,
                ContentType: "application/json",
            },
        };

        return config;
    };

    const getSignedInUserDetails =  async () => {
        await axios.get("https://kde-api.herokuapp.com/users/me", setConfig).then(resp => {
            // const user = {
            //     firstName: resp.firstName,
            //     lastname: resp.lastName,
            //     email: resp.email,
            //     profilePicture: resp.profilePicture
            // }
            // setInitialValues(user);
            console.log("res", resp);
        })
            .catch(err => console.log(err))
    }

    const { label, name, type, options, updateFilesCb, maxFileSizeInBytes, DEFAULT_MAX_FILE_SIZE_IN_BYTES, ...rest } = props;

    const convertNestedObjectToArray = (nestedObj) =>
        Object.keys(nestedObj).map((key) => nestedObj[key]);

    const addNewFiles = (newFiles) => {
        for (let file of newFiles) {
            if (file.size < maxFileSizeInBytes) {
                if (!rest.multiple) {
                    return { file };
                }
                files[file.name] = file;
            }
        }
        return { ...files };
    };


    const handleUploadBtnClick = () => {
        fileInputField.current.click();
    };

    const callUpdateFilesCb = (files) => {
        const filesAsArray = convertNestedObjectToArray(files);
        updateFilesCb(filesAsArray);
    };

    useEffect(() => {
        getSignedInUserDetails();
    }, []);

    const handleNewFileUpload = (e) => {
        const { files: newFiles } = e.target;
        if (newFiles.length) {
            let updatedFiles = addNewFiles(newFiles);
            setFiles(updatedFiles);
            callUpdateFilesCb(updatedFiles);
        }
    };

    const onCompanySubmit = values => {
        console.log("data", values)
    }

    const onSubmit = values => {
        console.log("data", values)
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
    })

    const companyFormik = useFormik({
        comapanyInitialValues,
        onCompanySubmit,
    })


    return (
        <>
            <EditProfileContainer>
                <div className="content-text">
                    <h3>Profile</h3>
                    <p>This information will be displayed publicly</p>
                </div>

                <ContentCard background="none">
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input type="text" className="input" name="name" value={formik.values.name} onChange={formik.handleChange} />

                        <label htmlFor="about">About</label>
                        <textarea type='text' className="textarea" name="about" value={formik.values.about} onChange={formik.handleChange} />
                        <p className="neutral-text">Brief description for your profile</p>

                        <div className="lock-div">
                            <label htmlFor="websiteURL">Website URL</label>
                            <HiLockClosed size={15} />
                        </div>
                        <input type="text" className="input neutral-field" name="websiteURL" placeholder="www.example.com" value={formik.values.websiteURL} onChange={formik.handleChange} />
                        <div className="btn-flex">
                            <p>website url not available in your account</p>
                            <button className="upg-btn" type="submit">Upgrade</button >
                        </div>

                        <div className="lock-div">
                            <label htmlFor="facebookURL">Facebook URL</label>
                            <HiLockClosed size={15} />
                        </div>
                        <input type="text" className="input" name="facebookURL" value={formik.values.facebookURL} onChange={formik.handleChange} />

                        <div className="lock-div">
                            <label htmlFor="instagramURL">Instagram URL</label>
                            <HiLockClosed size={15} />
                        </div>
                        <input type="text" className="input" name="instagramURL" value={formik.values.instagramURL} onChange={formik.handleChange} />

                        <label htmlFor="cover">Cover</label>
                        <FileUploadContainer>
                            <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
                                <i className="fas fa-file-upload" />
                                <span> Upload a file</span>
                            </UploadFileBtn>
                            <DragDropText>PNG, JPG, GIF up to 5mb</DragDropText>
                            <FormField
                                type="file"
                                ref={fileInputField}
                                onChange={handleNewFileUpload}
                                title=""
                                value=""
                            />
                        </FileUploadContainer>

                        <MainButton background="blue" border="blue" marginTop='1em' padding="18px 24px" type="submit">Save</MainButton >
                    </form>

                    <div className="border"></div>

                    <div className="form2">
                        <h3>Address</h3>
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="address" className="space">Address 1</label>
                            <input type="text" className="input" name="address" value={formik.values.address} onChange={formik.handleChange} />

                            <div className="dropdown">
                                <div className="sub-dropdown space">
                                    <label htmlFor="country">Country</label>
                                    <select
                                        name="country"
                                        onChange={formik.handleChange}
                                        className="select"
                                    >
                                        <option value="country">
                                        </option>
                                        {
                                            Country.map((list, i) => {
                                                return (
                                                    <>
                                                        <option
                                                            key={i}
                                                            value={list.country}
                                                        >
                                                            {list.country}
                                                        </option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>

                                </div>
                                <div className="sub-dropdown space">
                                    <label htmlFor="state">State</label>
                                    <select
                                        name="state"
                                        onChange={formik.handleChange}
                                        className="select"
                                    >
                                        <option value="state">
                                        </option>
                                        {
                                            Country.map((list, i) => {
                                                return (
                                                    <>
                                                        <option
                                                            key={i}
                                                            value={list.country}
                                                        >
                                                            {list.country}
                                                        </option>
                                                    </>
                                                )
                                            })
                                        }
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
                                        <option value="city">
                                        </option>
                                        {
                                            Country.map((list, i) => {
                                                return (
                                                    <>
                                                        <option
                                                            key={i}
                                                            value={list.country}
                                                        >
                                                            {list.country}
                                                        </option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="sub-dropdown space">
                                    <label htmlFor="postalCode">Zip / Postal Code</label>
                                    <select
                                        name="postalCode"
                                        onChange={formik.handleChange}
                                        className="select"
                                    >
                                        <option value="postalCode">
                                        </option>
                                        {
                                            Country.map((list, i) => {
                                                return (
                                                    <>
                                                        <option
                                                            key={i}
                                                            value={list.country}
                                                        >
                                                            {list.country}
                                                        </option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <MainButton background="blue" border="blue" marginTop='1em' padding="18px 24px" type="submit">Save</MainButton >
                        </form>

                    </div>

                    <div className="border"></div>

                    <div className="form2">
                        <h3>Contact Information</h3>
                        <form method="post" onClick={formik.handleSubmit}>
                            <label htmlFor="email" className="space">Email</label>
                            <input type="text" placeholder="company@example.com" className="input" name="email" value={formik.values.email} onChange={formik.handleChange} />

                            <div className="dropdown">
                                <div className="sub-dropdown space">
                                    <label htmlFor="phone1">Phone 1</label>
                                    <input type="text" className="input" name="phone1" value={formik.values.phone1} onChange={formik.handleChange} />
                                </div>
                                <div className="sub-dropdown space">
                                    <label htmlFor="phone2">Phone 2</label>
                                    <input type="text" className="input" name="phone2" value={formik.values.phone2} onChange={formik.handleChange} />
                                </div>
                            </div>
                            <MainButton background="blue" border="blue" marginTop='1em' padding="18px 24px" type="submit">Save</MainButton >
                        </form>
                    </div>
                </ContentCard>

            </EditProfileContainer>

            <MidSection padding="3em">
                <p >This section is not available in your account</p>
                <button type="submit">Upgrade</button >
            </MidSection>

            <EditProfileContainer padding="4em 1em">
                <div className="content-text">
                    <h3>Company / Business</h3>
                    <p>This information will be displayed publicly</p>
                </div>

                <ContentCard height="120em">
                    <form onSubmit={companyFormik.handleSubmit}>
                        <h3 className="neutral-field">Company</h3>
                        <div className="lock-div space" >
                            <label htmlFor="companyName">Company Name</label>
                            <HiLockClosed size={15} />
                        </div>
                        <input type="text" className="input" name="companyName" placeholder="KingDavid Team" value={companyFormik.values} onChange={formik.handleChange} />

                        <div className="lock-div">
                            <label htmlFor="websiteURL">Website URL</label>
                            <HiLockClosed size={15} />
                        </div>
                        <input type="text" className="input" name="websiteURL" placeholder="www.example.com" value={formik.values.websiteURL} onChange={formik.handleChange} />

                        <div className="lock-div">
                            <label htmlFor="facebookURL">Facebook URL</label>
                            <HiLockClosed size={15} />
                        </div>
                        <input type="text" className="input" name="facebookURL" value={formik.values.websiteURL} onChange={formik.handleChange} />

                        <div className="lock-div">
                            <label htmlFor="instagramURL">Instagram URL</label>
                            <HiLockClosed size={15} />
                        </div>
                        <input type="text" className="input" name="instagramURL" value={formik.values.instagramURL} onChange={formik.handleChange} />

                        <DisableButton border={theme.backgroundColor} marginTop='1em' padding="18px 24px" type="submit">Save</DisableButton >
                    </form>

                    <div className="border"></div>

                    <div className="form2">
                        <h3>Address</h3>
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="address" className="space">Address 1</label>
                            <input type="text" className="input" name="address" value={formik.values.address} onChange={formik.handleChange} />

                            <div className="lock-div">
                                <label htmlFor="address2">Address 2</label>
                                <HiLockClosed size={15} />
                            </div>
                            <input type="text" className="input" name="address2" value={formik.values.instagramURL} onChange={formik.handleChange} />

                            <div className="dropdown">
                                <div className="sub-dropdown space">
                                    <label htmlFor="country">Country</label>
                                    <select
                                        name="country"
                                        onChange={formik.handleChange}
                                        className="select"
                                    >
                                        <option value="country">
                                        </option>
                                        {
                                            Country.map((list, i) => {
                                                return (
                                                    <>
                                                        <option
                                                            key={i}
                                                            value={list.country}
                                                        >
                                                            {list.country}
                                                        </option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>

                                </div>
                                <div className="sub-dropdown space">
                                    <label htmlFor="state">State</label>
                                    <select
                                        name="state"
                                        onChange={formik.handleChange}
                                        className="select"
                                    >
                                        <option value="state">
                                        </option>
                                        {
                                            Country.map((list, i) => {
                                                return (
                                                    <>
                                                        <option
                                                            key={i}
                                                            value={list.country}
                                                        >
                                                            {list.country}
                                                        </option>
                                                    </>
                                                )
                                            })
                                        }
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
                                        <option value="city">
                                        </option>
                                        {
                                            Country.map((list, i) => {
                                                return (
                                                    <>
                                                        <option
                                                            key={i}
                                                            value={list.country}
                                                        >
                                                            {list.country}
                                                        </option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="sub-dropdown space">
                                    <label htmlFor="postalCode">Zip / Postal Code</label>
                                    <select
                                        name="postalCode"
                                        onChange={formik.handleChange}
                                        className="select"
                                    >
                                        <option value="postalCode">
                                        </option>
                                        {
                                            Country.map((list, i) => {
                                                return (
                                                    <>
                                                        <option
                                                            key={i}
                                                            value={list.country}
                                                        >
                                                            {list.country}
                                                        </option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <DisableButton border={theme.backgroundColor} marginTop='1em' padding="18px 24px" type="submit">Save</DisableButton >
                        </form>

                    </div>

                    <div className="border"></div>

                    <div className="form2">
                        <h3>Contact Information</h3>
                        <form method="post" onClick={formik.handleSubmit}>
                            <label htmlFor="email" className="space">Email</label>
                            <input type="text" placeholder="company@example.com" className="input" name="email" value={formik.values.email} onChange={formik.handleChange} />

                            <label htmlFor="alternativeEmail" className="space">Alternative Email</label>
                            <input type="text" className="input" name="alternativeEmail" value={formik.values.email} onChange={formik.handleChange} />

                            <div className="dropdown">
                                <div className="sub-dropdown space">
                                    <label htmlFor="phone1">Phone 1</label>
                                    <input type="text" className="input" name="phone1" value={formik.values.phone1} onChange={formik.handleChange} />
                                </div>
                                <div className="sub-dropdown space">
                                    <label htmlFor="phone2">Phone 2</label>
                                    <input type="text" className="input" name="phone2" value={formik.values.phone2} onChange={formik.handleChange} />
                                </div>
                            </div>
                            <DisableButton border={theme.backgroundColor} marginTop='1em' padding="18px 24px" type="submit">Save</DisableButton >
                        </form>
                    </div>

                    <div className="border"></div>

                    <div className="form2">
                        <h3>Branding</h3>
                        <form method="post" onClick={formik.handleSubmit}>
                            <label htmlFor="cover" className="space">Cover</label>
                            <FileUploadContainer>
                                <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
                                    <i className="fas fa-file-upload" />
                                    <span> Upload a file</span>
                                </UploadFileBtn>
                                <DragDropText>PNG, JPG, GIF up to 5mb</DragDropText>
                                <FormField
                                    type="file"
                                    ref={fileInputField}
                                    onChange={handleNewFileUpload}
                                    title=""
                                    value=""
                                />
                            </FileUploadContainer>

                            <DisableButton border={theme.backgroundColor} marginTop='1em' padding="18px 24px" type="submit">Save</DisableButton >
                        </form>
                    </div>
                </ContentCard>
            </EditProfileContainer>
        </>
    );
}

export default EditProfile;