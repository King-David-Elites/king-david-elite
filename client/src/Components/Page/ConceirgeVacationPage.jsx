import { FaRegStar } from 'react-icons/fa';
import kde_blackBg from '../Navbar/Image/kde_whiteBg.png'
import { useFormik } from "formik";
import MainButton from '../buttons/MainButton';
import { Link, useNavigate } from 'react-router-dom';
import conceirgeVacation from '../Categories/LuxuryService/images/pics4.png'
import InputLayout from '../inputs/InputLayout';
import { InputField } from '../inputs/MainInput';
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { useState } from 'react';
import { MdOutlineRemoveCircle } from 'react-icons/md';
import Return from '../Navbar/Return';
import FormikControl from '../formik/FormikControl';
import { setConceigeVacation, setLuxuryServiceType } from '../../application/store/actions/user';
import { useDispatch } from 'react-redux';

const ConceirgeVacationPage = () => {
    const [guestsName, setGuestsName] = useState('');
    const [guestsEmail, setGuestEmail] = useState('');
    const [items, setItems] = useState([]);
    const [validationError, setValidationError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        message: '',
        emergencyContactName: '',
        emergencyContactNumber: '',
        numberOfGuest: '',
        guestName: '',
        mobileNumber: '',
        email: '',
        fullName: '',
    }

    const validationSchema = Yup.object({
        numberOfGuest: Yup.string().required("Number of guest is required"),
        emergencyContactNumber: Yup.string().required("Emergency Number is required"),
        emergencyContactName: Yup.string().required("Emergency Contact Name is required"),
        mobileNumber: Yup.string().required("Mobile Number is required"),
        email: Yup.string().required("Email is required"),
        fullName: Yup.string().required("FullName is required"),
    });

    const guestValidationSchema = Yup.object({
        guestsName: Yup.string().required("Guest Name is required"),
        guestsEmail: Yup.string().email('Must be a valid email').required("E-mail is required"),
    })

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
            label: "Email Address",
            name: "email",
            control: "others"
        },
        {
            label: "Mobile Number",
            name: "mobileNumber",
            type: 'text',
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
            placeholder: "e.g Adeoye Marvellous",
        },
        {
            label: "Message",
            name: "message",
            control: "textarea2",
            placeholder: 'kindly drop personalised info here'
        },
    ];

    const guestDetailsInitialValues = {
        guestsEmail: '',
        guestsName: ''
    }

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

    const createConceigeVacation = (values) => {
        const conceigeVacation = {
            guestsEmail: items.map(i => i.guestsEmail),
            guestsName: items.map(i => i.guestsName),
            mobileNumber: values.mobileNumber,
            fullName: values.fullName,
            numberOfGuest: values.numberOfGuest,
            emergencyContactNumber: values.emergencyContactNumber,
            emergencyContactName: values.emergencyContactName,
            message: values.message,
            price: 800000
        }
        const payload = {
            data: conceigeVacation,
        }
        dispatch(setLuxuryServiceType('conceige-vacation'));
        dispatch(setConceigeVacation(payload));
        navigate('/luxury-service/checkout');
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
                            alt="brandlogo" />
                        <p className='text-[10px] whitespace-nowrap font-semibold ml-1 text-[#d4d72eea] bg-gradient-to-r from-[#fcf8bd]-500 to-[#b9a362]-500'>Kind David Logo</p>
                    </div>

                    <div className='flex gap-2 md:gap-5 mt-5 items-center'>
                        <p className='font-semibold text-lg md:text-2xl'>Concierge Vacations</p>
                        <div className='flex gap-1'>
                            <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                            <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                            <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                            <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                            <FaRegStar size={20} />
                        </div>
                    </div>

                    <div className='mt-3 w-[100%] md:w-[60%] text-[12px] font-medium tracking-wide text-neutral-color'>
                        <p>
                            <span className='text-black text-[13px] mr-1 font-bold'>
                                Experience:
                            </span>
                            The weekend escape experience begins with a personalized welcome at the hotel's grand lobby, where guests are greeted by a friendly and attentive staff. Upon check-in, guests are escorted to their luxurious guest rooms, which are elegantly decorated with modern furnishings and high-end finishes.
                        </p>
                        <br />
                        <p>
                            During the stay, guests can indulge in a variety of activities and amenities, including a rejuvenating spa treatment at the hotel's full-service spa, a refreshing dip in the outdoor pool, or a workout at the state-of-the-art fitness center. The hotel also features a fine-dining restaurant that offers a diverse menu of gourmet dishes crafted by renowned chefs.
                        </p>
                        <br />
                        <p>

                            In addition to the hotel's amenities, guests can explore the surrounding city and take part in various cultural and entertainment activities. The hotel's concierge team is available to assist guests in planning their itinerary and securing tickets to top shows and events.
                        </p>
                        <br />
                        <p>
                            Overall, the luxury brand's weekend escape experience offers a perfect balance of relaxation and exploration, providing guests with a memorable and indulgent getaway that they will cherish for years to come.
                        </p>

                        <p className='mt-3'>
                            <span className='text-black text-[13px] mr-1 font-bold'>
                                Accommodation:
                            </span>
                            The luxury brand offers a weekend escape experience at a five-star hotel located in the heart of a vibrant city. The hotel features lavish and spacious guest rooms, each equipped with top-of-the-line amenities such as premium bedding, plush bathrobes, and high-speed Wi-Fi.
                        </p>


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
                        onSubmit={createConceigeVacation}
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
                        <img src={conceirgeVacation}
                            className='w-[100%] h-[100%] rounded-md'
                            alt="conceirgeVacationLogo" />
                    </div>
                </div>
            </div >
        </>

    );
}

export default ConceirgeVacationPage;