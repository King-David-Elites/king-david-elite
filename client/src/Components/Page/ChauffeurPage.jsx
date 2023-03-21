import { FaRegStar } from 'react-icons/fa';
import kde_blackBg from '../Navbar/Image/kde_whiteBg.png'
import { useFormik } from "formik";
import MainButton from '../buttons/MainButton';
import { Link } from 'react-router-dom';
import boatCruise from '../Categories/LuxuryService/images/samuele-errico-piccarini-MyjVReZ5GLQ-unsplash.jpg'
import InputLayout from '../inputs/InputLayout';
import { InputField } from '../inputs/MainInput';
import { Dropdown, Option } from '../inputs/DropdownInput';
import { TextArea } from '../inputs/TextareaInput'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { MdOutlineRemoveCircle } from 'react-icons/md';

const ChauffeurPage = ({ id }) => {
    const status = useSelector(state => state.user.status);
    const [guestsName, setGuestsName] = useState('');
    const [guestsEmail, setGuestEmail] = useState('');
    const [items, setItems] = useState([]);
    const [validationError, setValidationError] = useState('');


    const handleRemove = (index) => {
        const list = [...items]
        list.splice(index, 1);
        setItems(list)
    }

    const initialValues = {
        fullName: '',
        passengerEmail: '',
        emergencyNumber: '',
        emergencyContactName: '',
        pickUpAddress: '',
        DropOffLocation: '',
        availableVehicle: '',
        noOfhours: '',
        security: '',
        message: ''
    }

    const availableSilverVehicles = [
        { key: "", value: '' },
        { key: "HYUNDAI SONATA(2017) ", value: "HYUNDAI SONATA(2017)" },
        { key: "TOYOTA COROLLA(2017)", value: "TOYOTA COROLLA(2017)" },
        { key: "TOYOTA CAMRY(2017)", value: "TOYOTA CAMRY(2017)" },
        { key: "MERCEDES BENZ C300(2016)", value: "MERCEDES BENZ C300(2016)" },
        { key: "TOYOTA COROLLA(2020)", value: "TOYOTA COROLLA(2020)" },
        { key: "TOYOTA COASTER BUS", value: "TOYOTA COASTER BUS" },
        { key: "TOYOTA HIACE BUS", value: "TOYOTA HIACE BUS" },
        { key: "TOYOTA COASTER EXECUTIVE BUS", value: "TOYOTA COASTER EXECUTIVE BUS" },
        { key: "TOYOTA LANDCRUISER(2016)", value: "TOYOTA LANDCRUISER(2016)" },
        { key: "TOYOTA HIGHLANDER(2018)", value: "TOYOTA HIGHLANDER(2018)" },
        { key: "TOYOTA PRADO(2018)", value: "TOYOTA PRADO(2018)" },
        { key: "LEXUS GX460(2018)", value: "LEXUS GX460(2018)" },
        { key: "TOYOTA PRADO(2020)", value: "TOYOTA PRADO(2020)" },
        { key: "LEXUS LX570(2015)", value: "LEXUS LX570(2015)" },
        { key: "MERCEDES BENZ E300(2017)", value: "MERCEDES BENZ E300(2017)" },
        { key: "BMW GRAND COUPE(2018)", value: "BMW GRAND COUPE(2018)" },
        { key: "TOYOTA LANDCRUISER(2019)", value: "TOYOTA LANDCRUISER(2019)" },
        { key: "LEXUS LX570(2017)", value: "LEXUS LX570(2017)" },
        { key: "JET MOVER BUS", value: "JET MOVER BUS" },
        { key: "TOYOTA LANDCRUISER(2021)", value: "TOYOTA LANDCRUISER(2021)" },
        { key: "JET MOVER EXOTIC BUS", value: "JET MOVER EXOTIC BUS" },
        { key: "MERCEDES BENZ(VINTAGE CAR)", value: "MERCEDES BENZ(VINTAGE CAR)" },
        { key: "RANGE ROVER SUV(2016)", value: "RANGE ROVER SUV(2016)" },
        { key: "MERCEDES BENZ G - WAGON(2014)", value: "MERCEDES BENZ G - WAGON(2014)" },
        { key: "RANGE ROVER VOGUE(2016)", value: "RANGE ROVER VOGUE(2016)" },
    ];

    const availableDiamondVehicles = [
        { key: "", value: '' },
        { key: "FORD MUSTANG", value: "FORD MUSTANG" },
        { key: "MERCEDES VIANO(LUXURY BUS)", value: "MERCEDES VIANO(LUXURY BUS)" },
        { key: "MERCEDES SPRINTER(LUXURY BUS)", value: "MERCEDES SPRINTER(LUXURY BUS)" },
        { key: "CHRYSLER LIMOUSINE(12 SEATER)", value: "CHRYSLER LIMOUSINE(12 SEATER)" },
        { key: "DODGE CHARGER ", value: "DODGE CHARGER " },
        { key: "LEXUS LX570(2020)", value: "LEXUS LX570(2020)" },
        { key: "MERCEDES BENZ GLE(2019)", value: "MERCEDES BENZ GLE(2019)" },
        { key: "RANGE ROVER LIMOUSINE(16 SEATER)", value: "RANGE ROVER LIMOUSINE(16 SEATER)" },
        { key: "RANGE ROVER SUV(2020)", value: "RANGE ROVER SUV(2020)" },
        { key: "MERCEDES G - WAGON(BULLETPROOF)", value: "MERCEDES G - WAGON(BULLETPROOF)" },
        { key: "TOYOTA LANDCRUISER(BULLETPROOF)", value: "TOYOTA LANDCRUISER(BULLETPROOF)" },
        { key: "TOYOTA PRADO(BULLETPROOF)", value: "TOYOTA PRADO(BULLETPROOF)" },
        { key: "MERCEDES G - WAGON(2017)", value: "MERCEDES G - WAGON(2017)" },
        { key: "LEXUS LX570 PREMIUM WHITE(2020)", value: "LEXUS LX570 PREMIUM WHITE(2020)" },
        { key: "MERCEDES S’ CLASS(2017)", value: "MERCEDES S’ CLASS(2017)" }
    ];

    const availablePlatinumVehicles = [
        { key: "", value: '' },
        { key: "ROLLS ROYCE GHOST", value: 'ROLLS ROYCE GHOST' },
        { key: "ROLLS ROYCE PHANTOM", value: 'ROLLS ROYCE PHANTOM' }
    ];

    const createChauffeur = () => {

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

    const validate = (values) => {
        let errors = {};
        if (!values.fullName) errors.fullName = "Required";
        if (!values.emergencyContactName) errors.emergencyContactName = "Required";
        if (!values.emergencyNumber) errors.emergencyNumber = "Required";
        if (!values.passengerEmail) {
            errors.passengerEmail = "Required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.passengerEmail)
        ) {
            errors.passengerEmail = "Invalid email format";
        }
        if (!values.pickUpAddress) errors.pickUpAddress = "Required";
        if (!values.DropOffLocation) errors.DropOffLocation = "Required";
        if (!values.availableVehicle) errors.availableVehicle = "Required";
        if (!values.noOfhours) errors.noOfhours = "Required";
        if (!values.security) errors.security = "Required";
        if (!values.message) errors.message = "Required";
        return errors;
    };

    const formik = useFormik({
        initialValues,
        createChauffeur,
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
                    <p className='font-semibold text-lg md:text-2xl'>Chauffeur-Driven Services</p>
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

                    <div className='flex md:flex-row flex-col md:w-[50%] justify-between'>
                        <InputLayout label='Emergency Contact Phone Number' name='emergencyNumber'>
                            <InputField width='20px' placeholder='+(234)' />{formik.errors.emergencyNumber ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.emergencyNumber}
                                </div>
                            ) : null}
                        </InputLayout>

                        <InputLayout label='Emergency Contact Name' name='emergencyContactName'>
                            <InputField width='20px' placeholder='e.g Adeoye Marvellous' />{formik.errors.emergencyContactName ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.emergencyContactName}
                                </div>
                            ) : null}
                        </InputLayout>
                    </div>

                    <div className='flex md:flex-row flex-col md:w-[50%] justify-between'>
                        <InputLayout label='Pick-Up Address' name='pickUpAddress'>
                            <InputField />{formik.errors.pickUpAddress ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.pickUpAddress}
                                </div>
                            ) : null}
                        </InputLayout>

                        <InputLayout label='Drop-off Location' name='DropOffLocation'>
                            <InputField />{formik.errors.DropOffLocation ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.DropOffLocation}
                                </div>
                            ) : null}
                        </InputLayout>
                    </div>
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

                    {
                        status == 'silver' && <InputLayout label='Available Vehicles' name='availableVehicle'>
                            <Dropdown margin='0.5em 0em'>{
                                availableSilverVehicles.map((a) => (
                                    <Option key={a.value} value={a.value}> {a.key}</Option>
                                ))}
                            </Dropdown>
                            {formik.errors.availableVehicle ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.availableVehicle}
                                </div>
                            ) : null}
                        </InputLayout>
                    }
                    {
                        status == 'diamond' && <InputLayout label='Available Vehicles' name='availableVehicle'>
                            <Dropdown margin='0.5em 0em'>{
                                availableDiamondVehicles.map((a) => (
                                    <Option key={a.value} value={a.value}> {a.key}</Option>
                                ))}
                            </Dropdown>
                            {formik.errors.availableVehicle ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.availableVehicle}
                                </div>
                            ) : null}
                        </InputLayout>
                    }
                    {
                        status == 'platinum' && <InputLayout label='Available Vehicles' name='availableVehicle'>
                            <Dropdown margin='0.5em 0em'>{
                                availablePlatinumVehicles.map((a) => (
                                    <Option key={a.value} value={a.value}> {a.key}</Option>
                                ))}
                            </Dropdown>
                            {formik.errors.availableVehicle ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.availableVehicle}
                                </div>
                            ) : null}
                        </InputLayout>
                    }

                    <label for="noOfHours" className="select-none font-semibold text-[13px]">No. of hours</label>
                    <div className="py-4 flex">
                        <div className="flex items-center mr-4 mb-2">
                            <input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" className="opacity-0 absolute h-8 w-8" />
                            <div className="bg-white border-2 rounded-md border-theme-color w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-theme-color">
                                <svg className="fill-current hidden w-3 h-3 text-theme-color pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fill-rule="evenodd">
                                        <g transform="translate(-9 -11)" fill="#F2BE5C" fill-rule="nonzero">
                                            <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className='text-[12px]'>12 Hours</span>
                        </div>

                        <div className="flex items-center mr-4 mb-2">
                            <input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" className="opacity-0 absolute h-8 w-8" />
                            <div className="bg-white border-2 rounded-md border-theme-color w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-theme-color">
                                <svg className="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fill-rule="evenodd">
                                        <g transform="translate(-9 -11)" fill="#F2BE5C" fill-rule="nonzero">
                                            <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className='text-[12px]'>24 Hours</span>
                        </div>
                    </div>

                    <label for="security" className="select-none font-semibold text-[13px]">Request for Security Personnel(Mopol)</label>
                    <div class="py-4 flex">
                        <div class="flex items-center mr-4 mb-2">
                            <input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" className="opacity-0 cursor-pointer absolute h-8 w-8" />
                            <div class="bg-white border-2 rounded-md border-theme-color w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-theme-color">
                                <svg class="fill-current hidden w-3 h-3 text-theme-color pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fill-rule="evenodd">
                                        <g transform="translate(-9 -11)" fill="#F2BE5C" fill-rule="nonzero">
                                            <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className='text-[12px]'>Yes</span>
                        </div>

                        <div class="flex items-center mr-4 mb-2">
                            <input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" className="opacity-0 cursor-pointer absolute h-8 w-8" />
                            <div class="bg-white border-2 rounded-md border-theme-color w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-theme-color">
                                <svg class="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fill-rule="evenodd">
                                        <g transform="translate(-9 -11)" fill="#F2BE5C" fill-rule="nonzero">
                                            <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className='text-[12px]'>No</span>
                        </div>
                    </div>

                    <label for="security" className="select-none font-semibold text-[13px]">Request for Hilux Escort</label>
                    <div class="py-4 flex">
                        <div class="flex items-center mr-4 mb-2">
                            <input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" className="opacity-0 cursor-pointer absolute h-8 w-8" />
                            <div class="bg-white border-2 rounded-md border-theme-color w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-theme-color">
                                <svg class="fill-current hidden w-3 h-3 text-theme-color pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fill-rule="evenodd">
                                        <g transform="translate(-9 -11)" fill="#F2BE5C" fill-rule="nonzero">
                                            <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className='text-[12px]'>Yes</span>
                        </div>

                        <div class="flex items-center mr-4 mb-2">
                            <input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" className="opacity-0 cursor-pointer absolute h-8 w-8" />
                            <div class="bg-white border-2 rounded-md border-theme-color w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-theme-color">
                                <svg class="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fill-rule="evenodd">
                                        <g transform="translate(-9 -11)" fill="#F2BE5C" fill-rule="nonzero">
                                            <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className='text-[12px]'>No</span>
                        </div>
                    </div>


                    {/* <label htmlFor="noOfhours" className='font-semibold text-[13px]'>No. of Hours</label>
                    <div className="flex md:gap-5 font-semibold my-2 items-center">
                        <input type="checkbox" className="cursor-pointer hidden" /> <span class="left-0 h-[25px] w-[25px] border-theme-color border-2 rounded-md"></span><span className='ml-[-10px] text-[12px]'>12 Hours</span>
                        <input type="checkbox" className="cursor-pointer hidden" /> <span class="left-0 h-[25px] w-[25px] border-theme-color border-2 rounded-md"></span><span className='ml-[-10px] text-[12px]'>24 Hours</span>
                        {formik.errors.noOfHours ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.noOfHours}
                            </div>
                        ) : null}
                    </div> */}

                    {/* <label htmlFor="security" className='font-semibold text-[13px]'>Request for Security Personnel(Mopol)</label>
                    <div className="flex md:gap-5 font-semibold my-2 items-center">
                        <input type="checkbox" className="cursor-pointer hidden" /> <span class="left-0 h-[25px] w-[25px] border-theme-color border-2 rounded-md"></span><span className='ml-[-10px] text-[12px]'>Yes</span>
                        <input type="checkbox" className="cursor-pointer hidden" /> <span class="left-0 h-[25px] w-[25px] border-theme-color border-2 rounded-md"></span><span className='ml-[-10px] text-[12px]'>No</span>
                        {formik.errors.security ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.security}
                            </div>
                        ) : null}
                    </div> */}

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
                        <p className="term  text-[12px]">I have read and agreed to the <Link to="/terms"><span className='text-[#2301F3]'>KDE's Terms and Condition</span></Link></p>
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

export default ChauffeurPage;