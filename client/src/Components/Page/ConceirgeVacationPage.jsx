import { FaRegStar } from 'react-icons/fa';
import kde_blackBg from '../Navbar/Image/kde_whiteBg.png'
import { useFormik } from "formik";
import MainButton from '../buttons/MainButton';
import { Link } from 'react-router-dom';
import conceirgeVacation from '../Categories/LuxuryService/images/pics4.png'
import InputLayout from '../inputs/InputLayout';
import { InputField } from '../inputs/MainInput';
import { TextArea } from '../inputs/TextareaInput'
import { useState } from 'react';
import { MdOutlineRemoveCircle } from 'react-icons/md';


const ConceirgeVacationPage = () => {
    const [guestsName, setGuestsName] = useState('');
    const [guestsEmail, setGuestEmail] = useState('');
    const [items, setItems] = useState([]);
    const [validationError, setValidationError] = useState('');
    const initialValues = {
        message: '',
        emergencyContactName: '',
        emergencyNumber: '',
        numberOfGuest: '',
        guestName: '',
        mobileNumber: '',
        email: '',
        fullName: '',
    }

    const createEvent = () => {

    }

    const validate = (values) => {
        let errors = {};
        if (!values.emergencyContactName) errors.emergencyContactName = "Required";
        if (!values.emergencyNumber) errors.emergencyNumber = "Required";
        if (!values.numberOfGuest) errors.numberOfGuest = "Required";
        if (!values.email) {
            errors.email = "Required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Invalid email format";
        }
        if (!values.guestName) errors.guestName = "Required";
        if (!values.mobileNumber) errors.mobileNumber = "Required";
        if (!values.fullName) errors.fullName = "Required";
        if (!values.message) errors.message = "Required";
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
        createEvent,
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

                <form onSubmit={formik.handleSubmit} className='mt-6'>
                    <InputLayout label='Full Name' name='fullName'>
                        <InputField width='50%' placeholder='e.g Emma Olaosebikan' />{formik.errors.fullName ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.fullName}
                            </div>
                        ) : null}
                    </InputLayout>

                    <InputLayout label='Email Address' name='email'>
                        <InputField width='50%' placeholder='Enter email' />{formik.errors.email ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.email}
                            </div>
                        ) : null}
                    </InputLayout>

                    <InputLayout label='Mobile Number' name='mobileNumber'>
                        <InputField width='50%' placeholder='(+234)' />{formik.errors.mobileNumber ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.mobileNumber}
                            </div>
                        ) : null}
                    </InputLayout>

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
                        <MainButton className='cursor-pointer' type='button' onClick={(e) => onSubmit(e)}>Add Guest</MainButton>
                    </form>

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

                    <InputLayout label='Message' name='message'>
                        <TextArea placeholder='kindly explicitly describe your expectations and intended activities and destinations' width='50%' />
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
                    <img src={conceirgeVacation}
                        className='w-[100%] h-[100%] rounded-md'
                        alt="conceirgeVacationLogo" />
                </div>
            </div>
        </div >
    );
}

export default ConceirgeVacationPage;