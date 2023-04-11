import { FaRegStar } from 'react-icons/fa';
import kde_blackBg from '../Navbar/Image/kde_whiteBg.png'
import { useFormik } from "formik";
import MainButton from '../buttons/MainButton';
import { Link, useNavigate } from 'react-router-dom';
import helicopterRide from '../Categories/LuxuryService/images/greg-wilson-ro-GJ-Hlz-s-unsplash.webp'
import InputLayout from '../inputs/InputLayout';
import { InputField } from '../inputs/MainInput';
import { useState } from 'react';
import { MdOutlineRemoveCircle } from 'react-icons/md';
import Return from '../Navbar/Return';
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import FormikControl from '../formik/FormikControl';
import { setHelicopterRide, setLuxuryServiceType } from '../../application/store/actions/user';
import { useDispatch } from 'react-redux';
import DisableButton from '../buttons/DisabledButton';

const HelicopterRidePage = () => {
    const [guestsName, setGuestsName] = useState('');
    const [guestsEmail, setGuestEmail] = useState('');
    const [guestsNationality, setGuestsNationality] = useState('');
    const [items, setItems] = useState([]);
    const [validationError, setValidationError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);



    const handleRemove = (index) => {
        const list = [...items]
        list.splice(index, 1);
        setItems(list)
    }

    const onSubmit = () => {
        if (guestsName.trim() === '' || guestsEmail.trim() === '' || guestsNationality.trim() === '') {
            setValidationError('Both are required');
        } else {
            setValidationError('');
            setItems([...items, { guestsName, guestsEmail, guestsNationality }]);
            setGuestsName('');
            setGuestEmail('');
            setGuestsNationality('')
        }
    }

    const initialValues = {
        guestsName: '',
        guestsEmail: '',
        guestsNationality: '',
        emergencyContactNumber: '',
        emergencyContactName: '',
        numberOfGuest: '',
        contact: '',
        fullName: '',
        pickUpLocation: '',
        dropOffLocation: '',
        flightDate: '',
        time: '',
        email: '',
        message: ''
    }

    const displayInput = [
        {
            label: "Number of Guest (s)",
            name: "numberOfGuest",
            control: "others",
            type: 'number',
        },
        {
            label: "Mobile Number",
            name: "contact",
            control: "others",
            placeholder: "+234",
        },
        {
            label: "Full Name",
            name: "fullName",
            placeholder: 'e.g. Adeoye Marvellous',
            control: "others"
        },
        {
            label: "Email Address",
            name: "email",
            placeholder: 'adeoyemarvellous7@gmail.com',
            control: "others",
        },
        {
            label: "Pick-up Location/Address",
            name: "pickUpLocation",
            control: 'others',
        },
        {
            label: "Drop Off Location",
            name: "dropOffLocation",
            control: 'others',
            placeholder: "+234",
        },
        {
            label: "Flight Date",
            name: "flightDate",
            control: 'others',
            type: "date",
        },
        {
            label: "Flight Time",
            name: "time",
            control: 'others',
            type: "time"
        },
        {
            label: "Emergency Contact Number",
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
            label: "Message",
            name: "message",
            control: "textarea2",
            placeholder: 'kindly drop personalised info here'
        },
    ];

    const createHelicopterRide = (values) => {
        const boatCruise = {
            guestsEmail: items.map(i => i.guestsEmail),
            guestsName: items.map(i => i.guestsName),
            contact: values.contact,
            guestsNationality: items.map(i => i.guestsNationality),
            numberOfGuest: values.numberOfGuest,
            emergencyContactNumber: values.emergencyContactNumber,
            emergencyContactName: values.emergencyContactName,
            time: values.time,
            fullName: values.fullName,
            pickUpLocation: values.pickUpLocation,
            dropOffLocation: values.dropOffLocation,
            flightDate: values.flightDate,
            message: values.message,
            price: 300000
        }
        const payload = {
            data: boatCruise,
        }
        dispatch(setLuxuryServiceType('helicopter-ride'));
        dispatch(setHelicopterRide(payload));
        navigate('/luxury-service/checkout');
    }

    const validationSchema = Yup.object({
        numberOfGuest: Yup.string().required("Number of guest is required"),
        emergencyContactNumber: Yup.string().required("Emergency Number is required"),
        emergencyContactName: Yup.string().required("Emergency Contact Name is required"),
        contact: Yup.string().required("Contact is required"),
        fullName: Yup.string().required("Full Name is required"),
        email: Yup.string().required("Email Address is required"),
        pickUpLocation: Yup.string().required("Pickup Location is required"),
        dropOffLocation: Yup.string().required("Drop off Location is required"),
        flightDate: Yup.string().required("Flight Date is required"),
        time: Yup.string().required("Flight time is required"),
    });

    const guestValidationSchema = Yup.object({
        guestsName: Yup.string().required("Guest Name is required"),
        guestsEmail: Yup.string().email('Must be a valid email').required("E-mail is required"),
    })

    const guestDetailsInitialValues = {
        guestsEmail: '',
        guestsName: ''
    }

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
                            alt="brandlogo"
                            onClick={() => navigate(window.history.back())} />
                    </div>

                    <div className='flex gap-2 md:gap-5 mt-5 items-center'>
                        <p className='font-semibold text-lg md:text-2xl'>Helicopter Rides</p>
                    </div>

                    <form onSubmit={formik.handleSubmit} className='mt-6' >
                        <div>
                            {items.map((item, index) => (
                                <div>
                                    {
                                        item.guestsName && item.guestsEmail !== '' && <div className='flex gap-5 items-center' key={index}>
                                            <p>{item.guestsName} | {item.guestsEmail} | {item.guestsNationality}</p>
                                            <button type='button' className='cursor-pointer' onClick={() => handleRemove(index)}><MdOutlineRemoveCircle color='red' /></button>
                                        </div>
                                    }
                                </div>
                            ))}
                        </div>

                        <div className='flex md:flex-row flex-col md:w-[50%] justify-between'>
                            <InputLayout label='Names of Passenger(s)' name='guestsName'>
                                <InputField value={guestsName} name='guestsName' type='text' onChange={(e) => {
                                    if (e.target.name === 'guestsName') {
                                        setGuestsName(e.target.value);
                                    }
                                }} width='50%' placeholder='e.g Emma Olaosebikan' />
                                <div className=" text-[red] opacity-40">
                                    {
                                        validationError && <p>{validationError}</p>
                                    }
                                </div>
                            </InputLayout>

                            <InputLayout label='Email Address Of Passengers(s)' name='guestsEmail'>
                                <InputField value={guestsEmail} name='guestsEmail' type='text' onChange={(e) => {
                                    if (e.target.name === 'guestsEmail') {
                                        setGuestEmail(e.target.value);
                                    }
                                }} width='100px' />
                            </InputLayout>
                        </div>

                        <InputLayout label='Nationality Of Passengers(s)' name='guestsNationality'>
                            <InputField value={guestsNationality} name='guestsNationality' type='text' onChange={(e) => {
                                if (e.target.name === 'guestsNationality') {
                                    setGuestsNationality(e.target.value);
                                }
                            }} width='100px' />
                        </InputLayout>
                        <MainButton width='100px' type='button' onClick={(e) => onSubmit(e)}>Add Guest</MainButton>
                    </form>


                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={createHelicopterRide}
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
                                    {
                                        !isChecked ? <DisableButton className="cursor-not-allowed" disabled={!isChecked}>Submit</DisableButton> : <MainButton
                                            className="cursor-pointer"
                                            type="submit"
                                        >
                                            Submit
                                        </MainButton>
                                    }
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <div className='w-[300px] h-[100vh] fixed top-0 right-36 bottom-0 md:block hidden'>
                        <img src={helicopterRide}
                            className='w-[100%] h-[100%] rounded-md'
                            alt="exclusiveEventLogo" />
                    </div>
                </div>
            </div >
        </>
    );
}

export default HelicopterRidePage;