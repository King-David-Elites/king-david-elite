import { FaRegStar } from 'react-icons/fa';
import kde_blackBg from '../Navbar/Image/kde_whiteBg.png'
import { useFormik } from "formik";
import MainButton from '../buttons/MainButton';
import { Link } from 'react-router-dom';
import helicopterRide from '../Categories/LuxuryService/images/greg-wilson-ro-GJ-Hlz-s-unsplash.jpg'
import InputLayout from '../inputs/InputLayout';
import { InputField } from '../inputs/MainInput';
import { useState } from 'react';
import { MdOutlineRemoveCircle } from 'react-icons/md';

const HelicopterRidePage = () => {

    const [guestsName, setGuestsName] = useState('');
    const [guestsEmail, setGuestEmail] = useState('');
    const [items, setItems] = useState([]);
    const [validationError, setValidationError] = useState('');


    const handleRemove = (index) => {
        const list = [...items]
        list.splice(index, 1);
        setItems(list)
    }

    const validate = (values) => {
        let errors = {};
        if (!values.guestsName) errors.guestsName = "Required";
        if (!values.guestsEmail) {
            errors.guestsEmail = "Required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.guestsEmail)
        ) {
            errors.guestsEmail = "Invalid email format";
        }
        if (!values.guestsName) errors.guestsName = "Required";
        if (!values.passengerNationality) errors.passengerNationality = "Required";
        if (!values.passengerNumber) errors.passengerNumber = "Required";
        if (!values.guestsEmail) {
            errors.guestsEmail = "Required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.guestsEmail)
        ) {
            errors.guestsEmail = "Invalid email format";
        }
        if (!values.contact) errors.contact = "Required";
        if (!values.pickUpLocation) errors.pickUpLocation = "Required";
        if (!values.dropOffLocation) errors.dropOffLocation = "Required";
        if (!values.emergencyContact) errors.emergencyContact = "Required";
        if (!values.time) errors.time = "Required";
        if (!values.flightDate) errors.flightDate = "Required";
        return errors;
    };

    const onSubmit = () => {
        if (guestsName.trim() === '' || guestsEmail.trim() === '') {
            setValidationError('Both are required');
        } else {
            setValidationError('');
            setItems([...items, { guestsName, guestsEmail }]);
            setGuestsName('');
            setGuestEmail('');
        }
    }

    const initialValues = {
        guestsEmail: '',
        guestsName: '',
        passengerNationality: '',
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


    const formik = useFormik({
        initialValues,
        createHelicopterRide,
        validate,
    });


    return (
        <div className="w-full h-[100vh] bg-white md:py-8 md:px-24 py-3 px-5 relative">
            <div className='h-[95%]'>
                <div className="w-[70px] h-[auto] flex flex-col">
                    <img src={kde_blackBg}
                        className='w-[100%] h-[100%] cursor-pointer'
                        alt="brandlogo" />
                    <p className='text-[10px] whitespace-nowrap font-semibold ml-1 text-[#d4d72eea] bg-gradient-to-r from-[#fcf8bd]-500 to-[#b9a362]-500'>Kind David Logo</p>
                </div>

                <div className='flex gap-2 md:gap-5 mt-5 items-center'>
                    <p className='font-semibold text-lg md:text-2xl'>Helicopter Rides</p>
                    <div className='flex gap-1'>
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} />
                    </div>
                </div>

                <form onSubmit={formik.handleSubmit} className='mt-6' >
                    <div>
                        {items.map((item, index) => (
                            <div>
                                {
                                    item.guestsName && item.guestsEmail != '' && <div className='flex gap-5 items-center' key={index}>
                                        <p>{item.guestsName} | {item.guestsEmail}</p>
                                        <button type='button' className='cursor-pointer' onClick={() => handleRemove(index)}><MdOutlineRemoveCircle color='red' /></button>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>

                    <div className='flex md:flex-row flex-col md:w-[50%] justify-between'>
                        <InputLayout label='Names of Passenger(s)' name='guestsName'>
                            <InputField name='guestsName' type='text' onChange={(e) => {
                                if (e.target.name === 'guestsName') {
                                    setGuestsName(e.target.value);
                                }
                            }} width='50%' placeholder='e.g Emma Olaosebikan, Williams Ade, Shola Anikulapo' />
                            <div className=" text-[red] opacity-40">
                                {
                                    validationError && <p>{validationError}</p>
                                }
                            </div>
                        </InputLayout>

                        <InputLayout label='Email Address Of Passengers(s)' name='guestsEmail'>
                            <InputField name='guestsEmail' type='text' onChange={(e) => {
                                if (e.target.name === 'guestsEmail') {
                                    setGuestEmail(e.target.value);
                                }
                            }} width='100px' />
                        </InputLayout>
                    </div>
                    <MainButton width='100px' type='button' onClick={(e) => onSubmit(e)}>Add Guest</MainButton>
                </form>

                <form onSubmit={formik.handleSubmit} className='mt-6'>
                    <div className='flex md:flex-row flex-col md:w-[50%] justify-between'>
                        <InputLayout label='Nationality of Passenger(s)' name='passengerNationality'>
                            <InputField width='50%' placeholder='+(234)' />{formik.errors.passengerNationality ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.passengerNationality}
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

                    <div className='flex md:flex-row flex-col md:w-[50%] justify-between'>
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

                    <div className='flex md:flex-row flex-col md:w-[50%] justify-between'>
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

                    <div className="flex gap-2 items-center md:gap-4 font-semibold mt-6">
                        <input type="checkbox" className="check cursor-pointer" />
                        <p className="term text-[12px]">I have read and agreed to the <Link to="/terms"><span className='text-[#2301F3]'>KDE's Terms and Condition</span></Link></p>
                    </div>

                    <div className="flex my-[30px] gap-[10px]">
                        <MainButton type='submit'>Submit</MainButton>
                    </div>
                </form>


                <div className='w-[300px] h-[100vh] fixed top-0 right-36 bottom-0 md:block hidden'>
                    <img src={helicopterRide}
                        className='w-[100%] h-[100%] rounded-md'
                        alt="exclusiveEventLogo" />
                </div>
            </div>
        </div >
    );
}

export default HelicopterRidePage;