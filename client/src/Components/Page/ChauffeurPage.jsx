import { FaRegStar } from 'react-icons/fa';
import kde_blackBg from '../Navbar/Image/kde_whiteBg.png'
import { useFormik, Form, Formik } from "formik";
import MainButton from '../buttons/MainButton';
import { Link, useNavigate } from 'react-router-dom';
import boatCruise from '../Categories/LuxuryService/images/samuele-errico-piccarini-MyjVReZ5GLQ-unsplash.jpg'
import InputLayout from '../inputs/InputLayout';
import * as Yup from 'yup';
import FormikControl from '../formik/FormikControl';
import { InputField } from '../inputs/MainInput';
import { Dropdown, Option } from '../inputs/DropdownInput';
import { TextArea } from '../inputs/TextareaInput'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { MdOutlineRemoveCircle } from 'react-icons/md';
import Return from '../Navbar/Return';
import { RadioField } from '../inputs/RadioInput';
import { setChauffeurRide, setLuxuryServiceType } from '../../application/store/actions/user';

const ChauffeurPage = ({ id }) => {
    const status = useSelector(state => state.user.status);
    const [guestsName, setGuestsName] = useState('');
    const [guestsEmail, setGuestEmail] = useState('');
    const [items, setItems] = useState([]);
    const [validationError, setValidationError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemove = (index) => {
        const list = [...items]
        list.splice(index, 1);
        setItems(list)
    }

    const initialValues = {
        fullName: '',
        passengersEmail: '',
        passengersName: '',
        emergencyNumber: '',
        emergencyContactName: '',
        numberOfGuest: '',
        pickUpAddress: '',
        DropOffLocation: '',
        availableVehicles: '',
        noOfhours: '',
        security: '',
        exort: '',
        price: 0,
        plan: status,
        message: ''
    }

    const securityOptions = [
        { value: "Yes", label: "Yes ~{\n} " },
        { value: "No", label: "No" },
    ];

    const [securityOption, setSecurityOption] = useState(securityOptions[0].value);

    const handleSecurityOptionChange = (value) => {
        setSecurityOption(value);
    };

    const exortOptions = [
        { value: "Yes", label: "Yes ~{\n} " },
        { value: "No", label: "No" },
    ];

    const [exortOption, setExortOption] = useState(exortOptions[0].value);

    const handleExortOptionChange = (value) => {
        setExortOption(value);
    };

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

    const displayInput = [
        {
            label: "Number of Guest (s)",
            name: "numberOfGuest",
            control: "others",
            type: 'number',
        },
        {
            label: "Full Name",
            name: "fullName",
            control: "others",
            placeholder: "e.g Adeoye Marvellous",
        },
        {
            label: "Dropoff Location",
            name: "DropOffLocation",
            placeholder: 'e.g Abeokuta, Ogun State, Nigeria',
            type: 'date',
            control: "others"
        },
        {
            label: "Pickup Address",
            name: "pickUpAddress",
            placeholder: 'e.g Abeokuta, Ogun State, Nigeria',
            control: "others",
        },
        {
            label: "Emergency Number",
            name: "emergencyNumber",
            control: 'others',
            placeholder: "+234",
        },
        {
            label: "Emergency Contact Name",
            name: "emergencyContactName",
            control: 'others',
            placeholder: "+234",
        },
        {
            label: "Drinking Preference",
            name: "drinkingPreference",
            control: 'select',
            options: drinkingPreferences,
        },
        {
            label: "Meal Preference",
            name: "mealPreference",
            control: 'select',
            options: mealPreferences
        },
        {
            label: "Available Vehicles",
            name: "availableVehicles",
            control: 'select',
            options: (status === 'silver' && availableSilverVehicles) || (status === 'diamond' && availableDiamondVehicles) || (status === 'platinum' && availablePlatinumVehicles)
        },
        {
            label: "Message",
            name: "message",
            control: "textarea2",
            placeholder: 'kindly drop personalised info here'
        },
    ];

    const validationSchema = Yup.object({
        numberOfGuest: Yup.string().required("Number of guest is required"),
        emergencyNumber: Yup.string().required("Emergency Number is required"),
        emergencyContactName: Yup.string().required("Emergency Contact Name is required"),
        DropOffLocation: Yup.string().required("Drop off location is required"),
        pickUpAddress: Yup.string().required("Pick up location is required"),
        drinkingPreference: Yup.string().required("Drinking preference is required"),
        mealPreference: Yup.string().required("Meal preference is required"),
        fullName: Yup.string().required("Full Name is required"),
        availableVehicles: Yup.string().required("Required"),
    });

    const createChauffeur = (values) => {
        const chauffeur = {
            guestsEmail: items.map(i => i.guestsEmail),
            guestsName: items.map(i => i.guestsName),
            DropOffLocation: values.DropOffLocation,
            pickUpAddress: values.pickUpAddress,
            numberOfGuest: values.numberOfGuest,
            emergencyNumber: values.emergencyNumber,
            emergencyContactName: values.emergencyContactName,
            fullName: values.fullName,
            drinkingPreference: values.drinkingPreference,
            mealPreference: values.mealPreference,
            availableVehicles: values.availableVehicles,
            security: securityOption,
            exort: exortOption,
            plan: status,
            message: values.message,
            price: (status === 'silver' && 235000) || (status === 'diamond' && 335000) || (status === 'platinum' && 800000)
        }
        const payload = {
            data: chauffeur,
        }
        dispatch(setLuxuryServiceType('chauffeur-ride'));
        dispatch(setChauffeurRide(payload));
        console.log(payload)
        navigate('/luxury-service/checkout');
    }

    const guestDetailsInitialValues = {
        guestsEmail: '',
        guestsName: ''
    }

    const onSubmit = () => {
        setItems([...items, { guestsName, guestsEmail }]);
        setGuestsName('');
        setGuestEmail('');
    }

    const guestValidationSchema = Yup.object({
        guestsName: Yup.string().required("Guest Name is required"),
        guestsEmail: Yup.string().email('Must be a valid email').required("E-mail is required"),
    })

    const formik = useFormik({
        guestDetailsInitialValues,
        onSubmit,
        guestValidationSchema,
    });


    return (
        <>
            <Return />
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
                                }} width='50%' placeholder='e.g Emma Olaosebikan' />
                                {/* <div className=" text-[red] opacity-40">
                                    {
                                        validationError && <p>{validationError}</p>
                                    }
                                </div> */}
                            </InputLayout>

                            <InputLayout label='Email Address Of Passengers(s)' name='guestsEmail'>
                                <InputField name='guestsEmail' type='text' onChange={(e) => {
                                    if (e.target.name === 'guestsEmail') {
                                        setGuestEmail(e.target.value);
                                    }
                                }} width='100px' />
                            </InputLayout>
                        </div>

                        <MainButton width='100px' marginTop='1em' type='button' onClick={(e) => onSubmit(e)}>Add Guest</MainButton>
                    </form>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={createChauffeur}
                        validateOnChange={false}
                    >
                        {formik => (
                            <Form>
                                <div className="grid gap-6 pt-4 md:justify-center md:gap-x-[8rem] md:gap-y-8 md:grid-cols-2 md:w-[45%] w-full">
                                    {displayInput.map((d, index) => (
                                        <FormikControl
                                            key={index * 0.5}
                                            label={d.label}
                                            name={d.name}
                                            type={d?.type}
                                            placeholder={d.placeholder}
                                            options={d?.options}
                                            control={d.control}
                                        />
                                    ))}
                                </div>

                                <label name={securityOptions.map(i => i.value)}>Security Personnel: </label>
                                <div className='flex md:flex-row flex-col md:w-[50%] justify-between mr-4'>
                                    <InputLayout label={securityOptions.map(i => i.label)}  >
                                        <div className='flex justify-between'>
                                            {
                                                securityOptions.map((option) => (
                                                    <RadioField type='radio' id={option.value}
                                                        name={option.value}
                                                        value={option.value}
                                                        checked={securityOption === option.value}
                                                        onChange={(e) => handleSecurityOptionChange(e.target.name)} />
                                                ))
                                            }
                                        </div>
                                    </InputLayout>
                                </div>

                                <label name={exortOptions.map(i => i.value)}>Request for Exort: </label>
                                <div className='flex md:flex-row flex-col md:w-[50%] justify-between mr-4'>
                                    <InputLayout label={exortOptions.map(i => i.label)} name={exortOptions.map(i => i.value)} >
                                        <div className='flex justify-between'>
                                            {
                                                exortOptions.map((option) => (
                                                    <RadioField type='radio' id={option.value}
                                                        name={option.value}
                                                        value={option.value}
                                                        checked={exortOption === option.value}
                                                        onChange={(e) => handleExortOptionChange(e.target.name)} />
                                                ))
                                            }
                                        </div>
                                    </InputLayout>
                                </div>

                                <div className="flex gap-2 items-center md:gap-4 font-semibold mt-6">
                                    <input type="checkbox" className="check cursor-pointer" />
                                    <p className="term text-[12px]">I have read and agreed to the <Link to="/terms"><span className='text-[#2301F3]'>KDE's Terms and Condition</span></Link></p>
                                </div>
                                <div className="flex my-[30px] gap-[10px]">
                                    <MainButton type='submit'>Submit</MainButton>
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <div className='w-[300px] h-[100vh] fixed top-0 right-36 bottom-0 md:block hidden'>
                        <img src={boatCruise}
                            className='w-[100%] h-[100%] rounded-md'
                            alt="boatCruise Logo" />
                    </div>
                </div>
            </div >
        </>

    );
}

export default ChauffeurPage;

{/* <form onSubmit={formik.handleSubmit} className='mt-6'>

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
    <MainButton type='submit'>Submit</MainButton>
</div>
</form> */}