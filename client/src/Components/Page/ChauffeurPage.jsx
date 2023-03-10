import { Form, Formik } from 'formik';
import { FaRegStar } from 'react-icons/fa';
import FormikControl from '../formik/FormikControl';
import kde_blackBg from '../Navbar/Image/kde_whiteBg.png'
import { useFormik } from "formik";
import MainButton from '../buttons/MainButton';
import { Link } from 'react-router-dom';
import boatCruise from '../Categories/LuxuryService/images/samuele-errico-piccarini-MyjVReZ5GLQ-unsplash.jpg'
import InputLayout from '../inputs/InputLayout';
import { InputField } from '../inputs/MainInput';
import { Dropdown, Option } from '../inputs/DropdownInput';
import { TextArea } from '../inputs/TextareaInput'

const ChauffeurPage = () => {

    const initialValues = {
        fullName: '',
        passengerEmail: '',
        emergencyContact: '',
        pickUpAddress: '',
        DropOffLocation: '',
        availableVehicle: '',
        noOfhours: '',
        security: '',
        message: ''
    }

    const availableVehicles = [
        { key: "", value: '' },
        { key: "Lamboghini", value: "Lamboghini" },
        { key: "Ferrari", value: "Ferrari" },
    ];

    const createChauffeur = () => {

    }

    const validate = (values) => {
        let errors = {};
        if (!values.fullName) errors.fullName = "Required";
        if (!values.emergencyContact) errors.emergencyContact = "Required";
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

                <form onSubmit={formik.handleSubmit} className='mt-6'>
                    <InputLayout label='Full Names of passenger(s)' name='fullName'>
                        <InputField width='50%' placeholder='e.g Emma Olaosebikan, Williams Ade, Shola Anikulapo' />{formik.errors.fullName ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.fullName}
                            </div>
                        ) : null}
                    </InputLayout>

                    <InputLayout label='E-mails of passenger(s)' name='passengerEmail'>
                        <InputField width='50%' placeholder='Enter email here' />{formik.errors.passengerEmail ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.passengerEmail}
                            </div>
                        ) : null}
                    </InputLayout>

                    <InputLayout label='Emergency Contact Information' name='emergencyContact'>
                        <InputField width='50%' placeholder='+(234)' />{formik.errors.emergencyContact ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.emergencyContact}
                            </div>
                        ) : null}
                    </InputLayout>

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

                    <InputLayout label='Available Vehicles' name='availableVehicle'>
                        <Dropdown margin='0.5em 0em'>
                            {availableVehicles.map((a) => (
                                <Option key={a.value} value={a.value}> {a.key}</Option>
                            ))}
                        </Dropdown>
                        {formik.errors.availableVehicle ? (
                            <div className=" text-[red] opacity-40">
                                {formik.errors.availableVehicle}
                            </div>
                        ) : null}
                    </InputLayout>

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