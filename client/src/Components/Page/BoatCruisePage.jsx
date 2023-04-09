import { FaRegStar } from 'react-icons/fa';
import kde_blackBg from '../Navbar/Image/kde_whiteBg.png'
import { useFormik } from "formik";
import MainButton from '../buttons/MainButton';
import { Link, useNavigate } from 'react-router-dom';
import boatCruise from '../Categories/LuxuryService/images/pics5.webp'
import InputLayout from '../inputs/InputLayout';
import { InputField } from '../inputs/MainInput';
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { useState } from 'react';
import { MdOutlineRemoveCircle } from 'react-icons/md';
import Return from '../Navbar/Return';
import FormikControl from '../formik/FormikControl';
import { useDispatch, useSelector } from 'react-redux';
import { setBoatCruise, setLuxuryServiceType } from '../../application/store/actions/user';

const BoatCruisePage = () => {
    const [guestsName, setGuestsName] = useState('');
    const [guestsEmail, setGuestEmail] = useState('');
    const [items, setItems] = useState([]);
    const [validationError, setValidationError] = useState('');
    const status = useSelector(state => state.user.status);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

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

    const handleRemove = (index) => {
        const list = [...items]
        list.splice(index, 1);
        setItems(list)
    }

    const guestDetailsInitialValues = {
        guestsEmail: '',
        guestsName: ''
    }

    const validationSchema = Yup.object().shape({
        status: Yup
            .string()
            .oneOf(['silver', 'diamond', 'platinum']),
        numberOfGuest: Yup
            .number()
            .when('status', {
                is: 'silver',
                then: Yup.number().max(2),
            })
            .when('status', {
                is: 'diamond',
                then: Yup.number().max(4),
            })
            .when('status', {
                is: 'platinum',
                then: Yup.number().max(6),
            }).required("Number of guest required"),
        emergencyContactNumber: Yup.string().required("Emergency Number is required"),
        emergencyContactName: Yup.string().required("Emergency Contact Name is required"),
        contact: Yup.string().required("Contact is required"),
        date: Yup.string().required("Date is required"),
        time: Yup.string().required("Time is required"),
        drinkingPreference: Yup.string().required("Drinking preference is required"),
        mealPreference: Yup.string().required("Meal preference is required"),
    });

    const guestValidationSchema = Yup.object({
        guestsName: Yup.string().required("Guest Name is required"),
        guestsEmail: Yup.string().email('Must be a valid email').required("E-mail is required"),
    })

    const onSubmit = () => {
        setItems([...items, { guestsName, guestsEmail }]);
        setGuestsName('');
        setGuestEmail('');
    }

    const formik = useFormik({
        guestDetailsInitialValues,
        onSubmit,
        guestValidationSchema,
    });

    const displayInput = [
        {
            label: "Number of Guest (s)",
            name: "numberOfGuest",
            control: "others",
            type: 'number',
        },
        {
            label: "Contact Information",
            name: "contact",
            control: "others",
            placeholder: "+234",
        },
        {
            label: "Preferred Date for Boat Cruise",
            name: "date",
            type: 'date',
            control: "others"
        },
        {
            label: "Pickup Time",
            name: "time",
            type: 'time',
            control: "others",
        },
        {
            label: "Emergency Number",
            name: "emergencyContactNumber",
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
            label: "Message",
            name: "message",
            control: "textarea2",
            placeholder: 'kindly drop personalised info here'
        },
    ];

    const createBoatCruise = (values) => {
        const boatCruise = {
            guestsEmail: items.map(i => i.guestsEmail),
            guestsName: items.map(i => i.guestsName),
            contact: values.contact,
            date: values.date,
            numberOfGuest: values.numberOfGuest,
            emergencyContactNumber: values.emergencyContactNumber,
            emergencyContactName: values.emergencyContactName,
            time: values.time,
            drinkingPreference: values.drinkingPreference,
            mealPreference: values.mealPreference,
            plan: status,
            message: values.message,
            price: (status === 'silver' && 500000) || (status === 'diamond' && 850000) || (status === 'platinum' && 1200000)
        }
        const payload = {
            data: boatCruise,
        }
        dispatch(setLuxuryServiceType('boat-cruise'));
        dispatch(setBoatCruise(payload));
        navigate('/luxury-service/checkout');
    }

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
                        <p className='font-semibold text-lg md:text-2xl'>Boat Cruises</p>                        
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

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={createBoatCruise}
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

                                <div className="flex gap-2 items-center md:gap-4 font-semibold mt-6">
                                    <input type="checkbox" className="check cursor-pointer" checked={isChecked}
                                        onChange={() => setIsChecked(!isChecked)}
                                    />
                                    <p className="term text-[12px]">I have read and agreed to the <Link to="/terms"><span className='text-[#2301F3]'>KDE's Terms and Condition</span></Link></p>
                                </div>

                                <div className="flex my-[30px] gap-[10px]">
                                    <MainButton className={` ${!isChecked ? "cursor-not-allowed" : "cursor-pointer"}`} disabled={!isChecked} type='submit'>Submit</MainButton>
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

export default BoatCruisePage;