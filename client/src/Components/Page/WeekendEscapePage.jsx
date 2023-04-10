import { FaRegStar } from "react-icons/fa";
import kde_blackBg from "../Navbar/Image/kde_whiteBg.png";
import { Form, Formik, useFormik } from "formik";
import MainButton from "../buttons/MainButton";
import { Link, useNavigate, useParams } from "react-router-dom";
import daycation from "../Categories/LuxuryService/images/pics4.webp";
import { useState } from "react";
import Return from "../Navbar/Return";
import FormikControl from "../formik/FormikControl";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
    setDaycation,
    setLuxuryServiceType,
} from "../../application/store/actions/user";
import { MdOutlineRemoveCircle } from "react-icons/md";
import InputLayout from "../inputs/InputLayout";
import { InputField } from "../inputs/MainInput";
import { RadioField } from "../inputs/RadioInput";

const WeekendEscapePage = () => {
    const { Id } = useParams();
    const [guestsName, setGuestsName] = useState("");
    const [guestsEmail, setGuestEmail] = useState("");
    const [items, setItems] = useState([]);
    const plan = useSelector((state) => state.user.status);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(false);

    const handleRemove = (index) => {
        const list = [...items];
        list.splice(index, 1);
        setItems(list);
    };

    const initialValues = {
        departureDate: "",
        numberOfGuest: "",
        contact: "",
        arrivalDate: "",
        emergencyNumber: "",
        emergencyContactName: "",
        drinkingPreference: "",
        mealPreference: "",
        message: "",
        spa: "",
        plan: plan,
        price: 0,
    };

    const guestDetailsInitialValues = {
        guestsEmail: "",
        guestsName: "",
    };

    const drinkingPreferences = [
        { key: "", value: "" },
        { key: "Alcholic", value: "Alcholic" },
        { key: "Non-Alcholic", value: "Non-Alcholic" },
    ];

    const mealPreferences = [
        { key: "", value: "" },
        { key: "Vegetarian", value: "Vegetarian" },
        { key: "Non-Vegetarian", value: "Non-Vegetarian" },
    ];

    const options = [
        { value: "mobileSession", label: "Mobile Session" },
        { value: "walkInSession", label: "Walk In Session" },
    ];

    const [selectedOption, setSelectedOption] = useState(options[0].value);

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    const displayInput = [
        {
            label: "Number of Guest (s)",
            name: "numberOfGuest",
            control: "others",
            type: "number",
        },
        {
            label: "Contact",
            name: "contact",
            control: "others",
            placeholder: "+234",
        },
        {
            label: "Departure Date",
            name: "departureDate",
            control: "others",
            type: "date",
        },
        {
            label: "Arrival Date",
            name: "arrivalDate",
            type: "date",
            control: "others",
        },
        {
            label: "Emergency Number",
            name: "emergencyNumber",
            control: "others",
            placeholder: "+234",
        },
        {
            label: "Emergency Contact Name",
            name: "emergencyContactName",
            control: "others",
            placeholder: "+234",
        },
        {
            label: "Drinking Preference",
            name: "drinkingPreference",
            control: "select",
            options: drinkingPreferences,
        },
        {
            label: "Meal Preference",
            name: "mealPreference",
            control: "select",
            options: mealPreferences,
        },
        {
            label: "Message",
            name: "message",
            control: "textarea2",
            placeholder: "kindly drop personalised request here",
        },
    ];

    const guestValidationSchema = Yup.object({
        guestsName: Yup.string().required("Guest Name is required"),
        guestsEmail: Yup.string()
            .email("Must be a valid email")
            .required("E-mail is required"),
    });

    const validationSchema = Yup.object().shape({
        plan: Yup.string().oneOf(["silver", "diamond", "platinum"]),
        numberOfGuest: Yup.number()
            .when("plan", {
                is: "silver",
                then: Yup.number().max(2),
            })
            .when("plan", {
                is: "diamond",
                then: Yup.number().max(4),
            })
            .when("plan", {
                is: "platinum",
                then: Yup.number().max(6),
            })
            .required("Number of guest required"),
        emergencyNumber: Yup.string().required("Emergency Number is required"),
        contact: Yup.string().required("Contact is required"),
        emergencyContactName: Yup.string().required(
            "Emergency Contact Name is required"
        ),
        departureDate: Yup.string().required("Departure date is required"),
        arrivalDate: Yup.string().required("Arrival is required"),
        drinkingPreference: Yup.string().required(
            "Drinking preference is required"
        ),
        mealPreference: Yup.string().required("Meal preference is required"),
        // spa: Yup.string().required("Spa session is required"),
    });

    const createDaycation = (values) => {
        const daycation = {
            guestsEmail: items.map((i) => i.guestsEmail),
            guestsName: items.map((i) => i.guestsName),
            departureDate: values.departureDate,
            arrivalDate: values.arrivalDate,
            numberOfGuest: values.numberOfGuest,
            emergencyNumber: values.emergencyNumber,
            emergencyContactName: values.emergencyContactName,
            contact: values.contact,
            drinkingPreference: values.drinkingPreference,
            mealPreference: values.mealPreference,
            spa: selectedOption,
            plan: plan,
            message: values.message,
            price:
                (plan === "silver" && 500000) ||
                (plan === "diamond" && 750000) ||
                (plan === "platinum" && 1000000),
        };
        const payload = {
            data: daycation,
        };
        dispatch(setLuxuryServiceType("daycation"));
        dispatch(setDaycation(payload));
        navigate("/luxury-service/checkout");
    };

    const onSubmit = () => {
        setItems([...items, { guestsName, guestsEmail }]);
        setGuestsName("");
        setGuestEmail("");
    };

    const formik = useFormik({
        guestDetailsInitialValues,
        onSubmit,
        guestValidationSchema,
    });

    return (
        <>
            <Return />
            <div className="w-full h-[100vh] bg-white md:py-8 md:px-24 py-3 px-5 relative">
                <div className="h-[95%]">
                    <div className="w-[70px] h-[auto] flex flex-col">
                        <img
                            src={kde_blackBg}
                            className="w-[100%] h-[100%] cursor-pointer"
                            alt="brandlogo"
                        />
                        <p className="text-[10px] whitespace-nowrap font-semibold ml-1 text-[#d4d72eea] bg-gradient-to-r from-[#fcf8bd]-500 to-[#b9a362]-500">
                            Kind David Logo
                        </p>
                    </div>

                    <div className="flex gap-2 md:gap-5 mt-5 items-center">
                        <p className="font-semibold text-lg md:text-2xl">Daycation {Id} </p>
                    </div>

                    <div className="mt-3 w-[100%] md:w-[60%] text-[12px] font-medium tracking-wide text-neutral-color">
                        <p>
                            <span className="text-black text-[13px] mr-1 font-bold">
                                Experience:
                            </span>
                            Welcome to King David Elites! Our daycation experience is designed
                            to provide you with the perfect blend of relaxation and
                            exploration.
                        </p>
                        <br />
                        <p>
                            Our chauffeurs will pick you up from your preferred location and
                            bring you to our luxurious lodge. Our friendly staff will give you
                            a warm welcome and help you check-in to your elegantly decorated
                            guest room, which is equipped with modern furnishings and high-end
                            finishes for your comfort.
                        </p>
                        <br />
                        <p>
                            During your stay, you can enjoy various amenities, such as a
                            rejuvenating spa treatment, a refreshing dip in the outdoor pool,
                            or fun gaming adventures in the city's upper echelon spots. You
                            will be served with fine dishes three times during your 24-hour
                            stay, and also get to unwind and sip some sparkling wine or
                            champagne on a one-hour boat cruise.
                        </p>
                        <br />
                        <p>
                            Our concierge team is always available to help you plan your
                            itinerary and explore the city's top attractions, including fine
                            dining restaurants, luxury shopping boutiques, and cultural
                            landmarks. Come and experience the King David Elites daycation for
                            a memorable and indulgent getaway that you will cherish for years
                            to come.
                        </p>
                    </div>

                    <form onSubmit={formik.handleSubmit} className="mt-6">
                        <div>
                            {items.map((item, index) => (
                                <div>
                                    {item.guestsName && item.guestsEmail != "" && (
                                        <div className="flex gap-5 items-center" key={index}>
                                            <p>
                                                {item.guestsName} | {item.guestsEmail}
                                            </p>
                                            <button
                                                type="button"
                                                className="cursor-pointer"
                                                onClick={() => handleRemove(index)}
                                            >
                                                <MdOutlineRemoveCircle color="red" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="flex md:flex-row flex-col gap-[2em] md:w-[50%] justify-between">
                            <InputLayout label="Names of Passenger(s)" name="guestsName">
                                <InputField
                                    value={guestsName}
                                    name="guestsName"
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.name === "guestsName") {
                                            setGuestsName(e.target.value);
                                        }
                                    }}
                                    width="50%"
                                    placeholder="e.g Emma Olaosebikan"
                                />
                                {/* <div className=" text-[red] opacity-40">
                                    {
                                        validationError && <p>{validationError}</p>
                                    }
                                </div> */}
                            </InputLayout>

                            <InputLayout
                                label="Email Address Of Passengers(s)"
                                name="guestsEmail"
                            >
                                <InputField
                                    value={guestsEmail}
                                    name="guestsEmail"
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.name === "guestsEmail") {
                                            setGuestEmail(e.target.value);
                                        }
                                    }}
                                    width="100px"
                                />
                            </InputLayout>
                        </div>

                        <MainButton
                            width="100px"
                            marginTop="1em"
                            type="button"
                            onClick={(e) => onSubmit(e)}
                        >
                            Add Guest
                        </MainButton>
                    </form>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={createDaycation}
                        validateOnChange={false}
                    >
                        {(formik) => (
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

                                <div name="spaSession" className="flex gap-[4.5em]">
                                    {options.map((label, key) => {
                                        return (
                                            <div className="font-semibold text-[13px]" key={key}>
                                                {label.label}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="md:w-[20%] mb-5">
                                    <InputLayout name={options.map((i) => i.value)}>
                                        <div className="flex gap-[9.5em]">
                                            {options.map((option) => (
                                                <RadioField
                                                    type="radio"
                                                    id={option.value}
                                                    name={option.value}
                                                    value={option.value}
                                                    checked={selectedOption === option.value}
                                                    onChange={(e) => handleOptionChange(e.target.name)}
                                                />
                                            ))}
                                        </div>
                                    </InputLayout>
                                </div>

                                <div className="flex gap-2 items-center md:gap-4 font-semibold mt-6">
                                    <input
                                        type="checkbox"
                                        className="check cursor-pointer"
                                        checked={isChecked}
                                        onChange={() => setIsChecked(!isChecked)}
                                    />
                                    <p className="term text-[12px]">
                                        I have read and agreed to the{" "}
                                        <Link to="/terms">
                                            <span className="text-[#2301F3]">
                                                KDE's Terms and Condition
                                            </span>
                                        </Link>
                                    </p>
                                </div>

                                <div className="flex my-[30px] gap-[10px]">
                                    <MainButton
                                        className={` ${!isChecked ? "cursor-not-allowed" : "cursor-pointer"
                                            }`}
                                        disabled={!isChecked}
                                        type="submit"
                                    >
                                        Submit
                                    </MainButton>
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <div className="w-[300px] h-[100vh] fixed top-0 right-36 bottom-0 md:block hidden">
                        <img
                            src={daycation}
                            className="w-[100%] h-[100%] rounded-md"
                            alt="exclusiveEventLogo"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default WeekendEscapePage;

{
    /* <form onSubmit={formik.handleSubmit} className='mt-6' >
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
          }} width='50%' placeholder='e.g Emma Olaosebikan, Williams Ade, Shola Anikulapo' />
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
  
  <InputLayout label='No of Guest(s)' name='numberOfGuest'>
      <InputField width='50%' type='number' placeholder='0' />{formik.errors.numberOfGuest ? (
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
  
  <label for="spa" className="select-none font-semibold text-[13px]">Spa:</label>
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
          <span className='text-[12px]'>Mobile Session</span>
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
          <span className='text-[12px]'>Walk in session</span>
      </div>
  </div>
  
  <div className='flex md:flex-row flex-col md:w-[50%] justify-between'>
      <InputLayout label='Departure Date' name='departureDate'>
          <InputField type='date' />{formik.errors.departureDate ? (
              <div className=" text-[red] opacity-40">
                  {formik.errors.departureDate}
              </div>
          ) : null}
      </InputLayout>
  
      <InputLayout label='Arrival Date' name='arrivalDate'>
          <InputField type='date' placeholder='DD / MM / YYYY' />{formik.errors.arrivalDate ? (
              <div className=" text-[red] opacity-40">
                  {formik.errors.arrivalDate}
              </div>
          ) : null}
      </InputLayout>
  </div>
  
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
      <TextArea placeholder='Enter any personalized requests into this box' width='50%' />
      {formik.errors.message ? (
          <div className=" text-[red] opacity-40">
              {formik.errors.message}
          </div>
      ) : null}
  </InputLayout>
  
  <div className="flex gap-2 items-center md:gap-4 font-semibold mt-6">
      <input type="checkbox" className="check cursor-pointer" />
      <p className="term text-[12px]">I have read and agreed to the <Link to="/terms"><span className='text-[#2301F3]'>KDE's Terms and Condition</span></Link></p>
  
  </div>
  
  <div className="flex my-[30px] gap-[10px]">
      <MainButton>Submit</MainButton>
  </div>
  </form> */
}
