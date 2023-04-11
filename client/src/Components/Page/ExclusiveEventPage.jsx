import { Form, Formik } from 'formik';
import { FaRegStar } from 'react-icons/fa';
import FormikControl from '../formik/FormikControl';
import kde_blackBg from '../Navbar/Image/kde_whiteBg.png'
import * as Yup from 'yup';
import MainButton from '../buttons/MainButton';
import { Link, useNavigate } from 'react-router-dom';
import exclusiveImg from '../Categories/LuxuryService/images/alexandre-chambon-aapSemzfsOk-unsplash.webp'
import Return from '../Navbar/Return';
import { useDispatch } from 'react-redux';
import { setExclusiveEvent, setLuxuryServiceType } from '../../application/store/actions/user';
import { useState } from 'react';
import DisableButton from '../buttons/DisabledButton';

const ExclusiveEventPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const initialValues = {
        fullName: '',
        email: '',
        phoneNumber: '',
        emergencyNumber: '',
        message: '',
        price: ''
    }

    const validationSchema = Yup.object({
        fullName: Yup.string().required("Full Name is required"),
        email: Yup.string().email('Must be a valid email').required("E-mail is required"),
        phoneNumber: Yup.string().required("Phone Number is required"),
        emergencyNumber: Yup.string().required("Emergency Number is required"),
    });

    const displayInput = [
        {
            label: "Full name",
            name: "fullName",
            control: "others",
            placeholder: "e.g Emma Olaosebikan",
        },
        {
            label: "Email Address",
            name: "email",
            control: "others",
            placeholder: "Enter email Address",
        },
        {
            label: "Phone Number",
            name: "phoneNumber",
            control: "others",
            placeholder: "+(234)",
        },
        {
            label: "Emergency Number",
            name: "emergencyNumber",
            control: "others",
            placeholder: "+(234)",
        },
        {
            label: "Message",
            name: "message",
            control: "textarea2",
            placeholder: 'kindly drop personalised info here'
        },
    ];

    const createEvent = (values) => {
        const event = {
            fullName: values.fullName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            emergencyNumber: values.emergencyNumber,
            message: values.message,
            price: 1000000
        }
        const payload = {
            data: event,
        }
        dispatch(setLuxuryServiceType('exclusive-event'));
        dispatch(setExclusiveEvent(payload));
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
                        <p className='font-semibold text-lg md:text-2xl'>Exclusive Events</p>
                        <div className='flex gap-1'>
                            <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                            <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                            <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                            <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                            <FaRegStar size={20} />
                        </div>
                    </div>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={createEvent}
                        validateOnChange={false}
                    >
                        {formik => (
                            <Form>
                                <div className="grid gap-1 pt-4" >
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

                    <div className='w-[350px] h-[100vh] fixed top-0 right-36 bottom-0 md:block hidden'>
                        <img src={exclusiveImg}
                            className='w-[100%] h-[100%] rounded-md'
                            alt="exclusiveEventLogo" />
                    </div>
                </div>
            </div>
        </>

    );
}

export default ExclusiveEventPage;