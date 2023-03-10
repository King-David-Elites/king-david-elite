import { FaRegStar } from 'react-icons/fa';
import kde_blackBg from '../Navbar/Image/kde_whiteBg.png'
import { useFormik } from "formik";
import MainButton from '../buttons/MainButton';
import { Link } from 'react-router-dom';
import helicopterRide from '../Categories/LuxuryService/images/greg-wilson-ro-GJ-Hlz-s-unsplash.jpg'
import InputLayout from '../inputs/InputLayout';
import { InputField } from '../inputs/MainInput';

const HelicopterRidePage = () => {

    const initialValues = {
        passengerName: '',
        passengerNationality: '',
        passsengerEmail: '',
        passengerNumber: '',
        contact: '',
        pickUpLocation: '',
        dropOffLocation: '',
        flightDate: '',
        time: '',
        emergencyContact: ''
    }


    const createHelicopterRide = () => {

    }

    const validate = (values) => {
        let errors = {};
        if (!values.passengerName) errors.passengerName = "Required";
        if (!values.passengerNationality) errors.passengerNationality = "Required";
        if (!values.passengerNumber) errors.passengerNumber = "Required";
        if (!values.passsengerEmail) {
            errors.passsengerEmail = "Required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.passsengerEmail)
        ) {
            errors.passsengerEmail = "Invalid email format";
        }
        if (!values.contact) errors.contact = "Required";
        if (!values.pickUpLocation) errors.pickUpLocation = "Required";
        if (!values.dropOffLocation) errors.dropOffLocation = "Required";
        if (!values.emergencyContact) errors.emergencyContact = "Required";
        if (!values.time) errors.time = "Required";
        if (!values.flightDate) errors.flightDate = "Required";
        return errors;
    };

    const formik = useFormik({
        initialValues,
        createHelicopterRide,
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
                    <p className='font-semibold text-2xl'>Helicopter Rides</p>
                    <div className='flex gap-1'>
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} />
                    </div>
                </div>

                <form onSubmit={formik.handleSubmit} className='mt-6'>
                    <InputLayout label='Names of Passenger(s)' name='passengerName'>
                        <InputField width='50%' placeholder='e.g Emma Olaosebikan, Williams Ade, Shola Anikulapo' />{formik.errors.passengerName ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.passengerName}
                            </div>
                        ) : null}
                    </InputLayout>

                    <InputLayout label='Nationality of Passenger(s)' name='passengerNationality'>
                        <InputField width='50%' placeholder='+(234)' />{formik.errors.passengerNationality ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.passengerNationality}
                            </div>
                        ) : null}
                    </InputLayout>

                    <div className='flex w-[50%] justify-between'>
                        <InputLayout label='Email Address Of Passengers(s)' name='passsengerEmail'>
                            <InputField width='100px' />{formik.errors.passsengerEmail ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.passsengerEmail}
                                </div>
                            ) : null}
                        </InputLayout>

                        <InputLayout label='Number Of Passengers' name='passengerNumber'>
                            <InputField width='20px' placeholder='0' />{formik.errors.passengerNumber ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.passengerNumber}
                                </div>
                            ) : null}
                        </InputLayout>
                    </div>

                    <InputLayout label='Contact Information' name='contact'>
                        <InputField width='20px' placeholder='+(234)' />{formik.errors.contact ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.contact}
                            </div>
                        ) : null}
                    </InputLayout>

                    <div className='flex w-[50%] justify-between'>
                        <InputLayout label='Pick-up Location/Address' name='pickUpLocation'>
                            <InputField />{formik.errors.pickUpLocation ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.pickUpLocation}
                                </div>
                            ) : null}
                        </InputLayout>

                        <InputLayout label='Drop Off Location/Address' name='dropOffLocation'>
                            <InputField placeholder='DD / MM / YYYY' />{formik.errors.dropOffLocation ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.dropOffLocation}
                                </div>
                            ) : null}
                        </InputLayout>
                    </div>

                    <div className='flex w-[50%] justify-between'>
                        <InputLayout label='Flight Date' name='flightDate'>
                            <InputField type='date' />{formik.errors.flightDate ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.flightDate}
                                </div>
                            ) : null}
                        </InputLayout>

                        <InputLayout label='Time' name='time'>
                            <InputField placeholder='00:00' type='time' />{formik.errors.time ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.time}
                                </div>
                            ) : null}
                        </InputLayout>
                    </div>

                    <InputLayout label='Emergency Contact Information' name='emergencyContact'>
                        <InputField width='50%' placeholder='+(234)' />{formik.errors.emergencyContact ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.emergencyContact}
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
                    <img src={helicopterRide}
                        className='w-[100%] h-[100%] rounded-md'
                        alt="exclusiveEventLogo" />
                </div>
            </div>
        </div >
    );
}

export default HelicopterRidePage;