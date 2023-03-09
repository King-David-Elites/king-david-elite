import { Form, Formik } from 'formik';
import { FaRegStar } from 'react-icons/fa';
import FormikControl from '../formik/FormikControl';
import kde_blackBg from '../Navbar/Image/kde_whiteBg.png'
import { useFormik } from "formik";
import MainButton from '../buttons/MainButton';
import { Link } from 'react-router-dom';
import boatCruise from '../Categories/LuxuryService/images/pics5.jpg'
import InputLayout from '../inputs/InputLayout';
import { InputField } from '../inputs/MainInput';
import { Dropdown, Option } from '../inputs/DropdownInput';
import {TextArea}  from '../inputs/TextareaInput'

const BoatCruisePage = () => {

    const initialValues = {
        guestName: '',
        emergencyContact: '',
        numberOfGuest: '',
        contact: '',
        time: '',
        date: '',
        accomodationPreference: '',
        message: ''
    }

    const accomodationPreferences = [
        { key: "Accomodation Preference", value: '' },
        { key: "5 Star", value: "5 Star" },
        { key: "Mainland", value: "Mainland" },
    ];

    const createBoatCruise = () => {

    }

    const validate = (values) => {
        let errors = {};
        if (!values.guestName) errors.guestName = "Required";
        if (!values.numberOfGuest) errors.numberOfGuest = "Required";
        if (!values.guestEmail) {
            errors.guestEmail = "Required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.guestEmail)
        ) {
            errors.guestEmail = "Invalid email format";
        }
        if (!values.contact) errors.contact = "Required";
        if (!values.date) errors.date = "Required";
        if (!values.time) errors.time = "Required";
        if (!values.emergencyContact) errors.emergencyContact = "Required";
        if (!values.accomodationPreference) errors.accomodationPreference = "Required";
        return errors;
    };

    const formik = useFormik({
        initialValues,
        createBoatCruise,
        validate,
    });



    return (
        <div className=" w-full h-[100vh] bg-white md:py-8 px-24 relative">
            <div className='h-[95%]'>
                <div className="w-[70px] h-[auto] flex flex-col">
                    <img src={kde_blackBg}
                        className='w-[100%] h-[100%] cursor-pointer'
                        alt="brandlogo" />
                    <p className='text-[10px] whitespace-nowrap font-semibold ml-1 text-[#d4d72eea] bg-gradient-to-r from-[#fcf8bd]-500 to-[#b9a362]-500'>Kind David Logo</p>
                </div>

                <div className='flex md:gap-5 mt-5 items-center'>
                    <p className='font-semibold text-2xl'>Boat Cruises</p>
                    <div className='flex gap-1'>
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} />
                    </div>
                </div>

                <form onSubmit={formik.handleSubmit} className='mt-6'>
                    <InputLayout label='Names of Guest(s)' name='guestName'>
                        <InputField width='50%' placeholder='e.g Emma Olaosebikan, Williams Ade, Shola Anikulapo' />{formik.errors.guestName ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.guestName}
                            </div>
                        ) : null}
                    </InputLayout>

                    <div className='flex w-[50%] justify-between'>
                        <InputLayout label='Email address Of Guest(s)' name='guestEmail'>
                            <InputField width='100px' />{formik.errors.guestName ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.guestName}
                                </div>
                            ) : null}
                        </InputLayout>

                        <InputLayout label='Number of Guest(s)' name='numberOfGuest'>
                            <InputField type='number' width='20px' placeholder='0' />{formik.errors.numberOfGuest ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.numberOfGuest}
                                </div>
                            ) : null}
                        </InputLayout>
                    </div>

                    <InputLayout label='Contact Information' name='contact'>
                        <InputField width='50%' placeholder='+(234)' />{formik.errors.contact ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.contact}
                            </div>
                        ) : null}
                    </InputLayout>

                    <div className='flex w-[50%] justify-between'>
                        <InputLayout label='Preferred Date for Boat Cruise' name='date'>
                            <InputField type='date' />{formik.errors.date ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.date}
                                </div>
                            ) : null}
                        </InputLayout>

                        <InputLayout label='Time' name='time'>
                            <InputField type='time' />{formik.errors.time ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.time}
                                </div>
                            ) : null}
                        </InputLayout>
                    </div>

                    <InputLayout label='Emergency Contact Information' name='emergencyContact'>
                        <InputField width='20px' placeholder='+(234)' />{formik.errors.emergencyContact ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.emergencyContact}
                            </div>
                        ) : null}
                    </InputLayout>

                    <InputLayout label='Accommodation Preference' name='accomodationPreference'>
                        <Dropdown margin='0.5em 0em'>
                            {accomodationPreferences.map((a) => (
                                <Option key={a.value} value={a.value}> {a.key}</Option>
                            ))}
                        </Dropdown>
                        {formik.errors.accomodationPreference ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.accomodationPreference}
                            </div>
                        ) : null}
                    </InputLayout>

                    <InputLayout label='Message' name='message'>
                        <TextArea placeholder='kindly explicitly describe your expectations and intended activities and destinations' width='50%'/>
                        {formik.errors.message ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.message}
                            </div>
                        ) : null}
                    </InputLayout>
                   
                    <div className="flex md:gap-4 font-semibold mt-6">
                        <input type="checkbox" className="check cursor-pointer" />
                        <p className="term">I have read and agreed to the <Link to="/terms"><span className='text-[#2301F3]'>KDE's Terms and Condition</span></Link></p>

                    </div>

                    <div className="flex my-[30px] gap-[10px]">
                        <MainButton>Submit</MainButton>
                    </div>
                </form>


                <div className='w-[300px] h-[100vh] fixed top-0 right-36 bottom-0'>
                    <img src={boatCruise}
                        className='w-[100%] h-[100%] rounded-md'
                        alt="boatCruise Logo" />
                </div>
            </div>
        </div >
    );
}

export default BoatCruisePage;