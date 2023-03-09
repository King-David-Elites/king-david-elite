import { Form, Formik } from 'formik';
import { FaRegStar } from 'react-icons/fa';
import FormikControl from '../formik/FormikControl';
import kde_blackBg from '../Navbar/Image/kde_whiteBg.png'
import { useFormik } from "formik";
import MainButton from '../buttons/MainButton';
import { Link } from 'react-router-dom';
import conceirgeVacation from '../Categories/LuxuryService/images/pics4.png'
import InputLayout from '../inputs/InputLayout';
import { InputField } from '../inputs/MainInput';
import { Dropdown, Option } from '../inputs/DropdownInput';
import { TextArea } from '../inputs/TextareaInput'

const ConceirgeVacationPage = () => {

    const initialValues = {
        message: '',
        emergencyContact: '',
        numberOfGuest: '',
        guestName: '',
        mobileNumber: '',
        email: '',
        fullName: '',
        accomodationPreference: '',
    }

    const accomodationPreferences = [
        { key: "Accomodation Preference", value: '' },
        { key: "5 Star", value: "5 Star" },
        { key: "Mainland", value: "Mainland" },
    ];

    const createEvent = () => {

    }

    const validate = (values) => {
        let errors = {};
        if (!values.emergencyContact) errors.emergencyContact = "Required";
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
        if (!values.accomodationPreference) errors.accomodationPreference = "Required";
        return errors;
    };

    const formik = useFormik({
        initialValues,
        createEvent,
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
                    <p className='font-semibold text-2xl'>Concierge Vacations</p>
                    <div className='flex gap-1'>
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} className='text-theme-color cursor-pointer' />
                        <FaRegStar size={20} />
                    </div>
                </div>

                <div className='mt-3 w-[60%] text-[12px] font-medium tracking-wide text-neutral-color'>

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
                        <InputField width='50%' placeholder='e.g Emma Olaosebikan, Williams Ade, Shola Anikulapo' />{formik.errors.fullName ? (
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


                    <div className='flex w-[50%] justify-between'>
                        <InputLayout label='Names Of Guest(s)' name='guestName'>
                            <InputField placeholder='e.g Emma Olaosebikan, Williams Ade, Shola Anikulapo' />{formik.errors.guestName ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.guestName}
                                </div>
                            ) : null}
                        </InputLayout>

                        <InputLayout label='Number Of Guests' name='numberOfGuest'>
                            <InputField type='number' placeholder='0' />{formik.errors.numberOfGuest ? (
                                <div className=" text-[red] opacity-40">
                                    {formik.errors.numberOfGuest}
                                </div>
                            ) : null}
                        </InputLayout>
                    </div>

                    <InputLayout label='Accommodation Preference' name='accomodationPreference'>
                        <Dropdown margin='0.5em 0em'>
                            {accomodationPreferences.map((a) => (
                                <Option key={a.value} value={a.value}> {a.key}</Option>
                            ))}
                        </Dropdown>
                        {formik.errors.accomodationPreference ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.accomodationPreference}
                            </div>
                        ) : null}
                    </InputLayout>

                    <InputLayout label='Emergency Contact Information' name='emergencyContact'>
                        <InputField width='20px' placeholder='+(234)' />{formik.errors.emergencyContact ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.emergencyContact}
                            </div>
                        ) : null}
                    </InputLayout>

                    <InputLayout label='Message' name='message'>
                        <TextArea placeholder='kindly explicitly describe your expectations and intended activities and destinations' width='50%' />
                        {formik.errors.message ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.message}
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
                    <img src={conceirgeVacation}
                        className='w-[100%] h-[100%] rounded-md'
                        alt="conceirgeVacationLogo" />
                </div>
            </div>
        </div >
    );
}

export default ConceirgeVacationPage;