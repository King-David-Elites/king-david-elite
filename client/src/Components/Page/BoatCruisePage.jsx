import { FaRegStar } from 'react-icons/fa';
import kde_blackBg from '../Navbar/Image/kde_whiteBg.png'
import { useFormik } from "formik";
import MainButton from '../buttons/MainButton';
import { Link } from 'react-router-dom';
import boatCruise from '../Categories/LuxuryService/images/pics5.jpg'
import InputLayout from '../inputs/InputLayout';
import { InputField } from '../inputs/MainInput';
import { Dropdown, Option } from '../inputs/DropdownInput';
import { TextArea } from '../inputs/TextareaInput'
import { useState } from 'react';
import { MdOutlineRemoveCircle } from 'react-icons/md';

const BoatCruisePage = () => {
    const [guestsName, setGuestsName] = useState('');
    const [guestsEmail, setGuestEmail] = useState('');
    const [items, setItems] = useState([]);
    const [validationError, setValidationError] = useState('');

    const initialValues = {
        guestsName: '',
        guestsEmail: '',
        emergencyContactNumber: '',
        emergencyContactName: '',
        numberOfGuest: '',
        contact: '',
        time: '',
        date: '',
        drinkingPreference: '',
        mealPreference: '',
        message: ''
    }

    const drinkingPreferences = [
        { key: "", value: '' },
        { key: "Alcholic", value: "Alcholic" },
        { key: "Non-Alcholic", value: "Non-Alcholic" },
    ];

    const mealPreferences = [
        { key: "", value: '' },
        { key: "Vegetarian", value: "Vegetarian" },
        { key: "Non-Vegetarian", value: "Non-Vegetarian" },
    ];
    const createBoatCruise = () => {

    }

    const validate = (values) => {
        let errors = {};
        if (!values.guestsName) errors.guestsName = "Required";
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
        if (!values.emergencyContactName) errors.emergencyContactName = "Required";
        if (!values.emergencyNumber) errors.emergencyNumber = "Required";
        if (!values.mealPreference) errors.mealPreference = "Required";
        if (!values.drinkingPreference) errors.drinkingPreference = "Required";
        return errors;
    };

    const handleRemove = (index) => {
        const list = [...items]
        list.splice(index, 1);
        setItems(list)
    }

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

    const formik = useFormik({
        initialValues,
        createBoatCruise,
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
                    <p className='font-semibold text-lg md:text-2xl'>Boat Cruises</p>
                    <div className='flex gap-1'>
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} />
                    </div>
                </div>

                <form onSubmit={formik.handleSubmit} className='mt-1 mb-4' >
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
                            }} width='50%' placeholder='Enter fullName' />
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
                    <InputLayout label='Number of Guest(s)' name='numberOfGuest'>
                        <InputField type='number' width='50%' placeholder='0' />{formik.errors.numberOfGuest ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.numberOfGuest}
                            </div>
                        ) : null}
                    </InputLayout>

                    <InputLayout label='Contact Information' name='contact'>
                        <InputField width='50%' placeholder='+(234)' />{formik.errors.contact ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.contact}
                            </div>
                        ) : null}
                    </InputLayout>

                    <div className='flex md:flex-row flex-col md:w-[50%] justify-between'>
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

                    <div className='flex md:flex-row flex-col md:w-[50%] justify-between'>
                        <InputLayout label='Drinking Preference' name='drinkingPreference'>
                            <Dropdown margin='0.5em 0em'>
                                {drinkingPreferences.map((a) => (
                                    <Option key={a.value} value={a.value}> {a.key}</Option>
                                ))}
                            </Dropdown>
                            {formik.errors.drinkingPreference ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.drinkingPreference}
                                </div>
                            ) : null}
                        </InputLayout>

                        <InputLayout label='Meal Preference' name='mealPreference'>
                            <Dropdown margin='0.5em 0em'>
                                {mealPreferences.map((a) => (
                                    <Option key={a.value} value={a.value}> {a.key}</Option>
                                ))}
                            </Dropdown>
                            {formik.errors.mealPreference ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.mealPreference}
                                </div>
                            ) : null}
                        </InputLayout>
                    </div>


                    <InputLayout label='Message' name='message'>
                        <TextArea placeholder='kindly explicitly describe your expectations and intended activities and destinations' width='50%' />
                        {formik.errors.message ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.message}
                            </div>
                        ) : null}
                    </InputLayout>

                    <div className="flex gap-2 items-center md:gap-4 font-semibold mt-6">
                        <input type="checkbox" className="check cursor-pointer" />
                        <p className="term mt-3 text-[12px]">I have read and agreed to the <Link to="/terms"><span className='text-[#2301F3]'>KDE's Terms and Condition</span></Link></p>
                    </div>

                    <div className="flex my-[30px] gap-[10px]">
                        <MainButton>Submit</MainButton>
                    </div>
                </form>


                <div className='w-[300px] h-[100vh] fixed top-0 right-36 bottom-0 md:block hidden'>
                    <img src={boatCruise}
                        className='w-[100%] h-[100%] rounded-md'
                        alt="boatCruise Logo" />
                </div>
            </div>
        </div >
    );
}

export default BoatCruisePage;