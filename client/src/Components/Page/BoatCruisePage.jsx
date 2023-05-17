import kde_blackBg from "../Navbar/Image/kde_whiteBg.png";
import { useFormik } from "formik";
import MainButton from "../buttons/MainButton";
import { Link, useNavigate, useParams } from "react-router-dom";
import boatCruise from "../Categories/LuxuryService/images/pics5.webp";
import InputLayout from "../inputs/InputLayout";
import { InputField } from "../inputs/MainInput";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { MdOutlineRemoveCircle } from "react-icons/md";
import Return from "../Navbar/Return";
import FormikControl from "../formik/FormikControl";
import { useDispatch, useSelector } from "react-redux";
import {
    setBoatCruise,
    setLuxuryServiceType,
} from "../../application/store/actions/user";
import DisableButton from "../buttons/DisabledButton";
import { RadioField } from "../inputs/RadioInput";

const BoatCruisePage = ({ mainData }) => {
    const { id } = useParams();
    const [guestsName, setGuestsName] = useState("");
    const [guestsEmail, setGuestEmail] = useState("");
    const [items, setItems] = useState([]);
    const status = useSelector((state) => state.user.status);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const [price, setPrice] = useState("");
    const [firstName] = useState(mainData.userData.firstName);
    const [lastName] = useState(mainData.userData.lastName);
    const [email] = useState(mainData.userData.email);
    const [fullName] = useState(`${firstName} ${lastName}`,)

    useEffect(() => {
        items.push({
            guestsName: fullName,
            guestsEmail: email
        })
    }, [])

    const hostOptions = [
        { value: "Yes", label: "Yes", price: 50000 },
        { value: "No", label: "No", price: 0 },
    ];

    const [hostOption, setHostOption] = useState(hostOptions[1].value);


    useEffect(() => {
        if (String(id) === "silver") {
            setPrice("500,000");
        } else if (String(id) === "diamond") {
            setPrice("1,000,000");
        } else if (String(id) === "platinum") {
            setPrice("1,500,000");
        }
    }, [id]);

    const initialValues = {
        guestsName: "",
        guestsEmail: "",
        emergencyContactNumber: "",
        emergencyContactName: "",
        contact: "",
        time: "",
        date: "",
        drinkingPreference: "",
        mealPreference: "",
        host: "",
        message: "",
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


    const handleRemove = (index) => {
        const list = [...items];
        list.splice(index, 1);
        setItems(list);
    };

    const [guestDetailsInitialValues, setGuestDetailsInitialValues] = useState({
        guestsEmail: "",
        guestsName: "",
    });

    const validationSchema = Yup.object().shape({
        emergencyContactNumber: Yup.string().required(
            "Emergency Number is required"
        ),
        emergencyContactName: Yup.string().required(
            "Emergency Contact Name is required"
        ),
        contact: Yup.string().required("Contact is required"),
        date: Yup.string().required("Date is required"),
        time: Yup.string().required("Time is required"),
        drinkingPreference: Yup.string().required(
            "Drinking preference is required"
        ),
        mealPreference: Yup.string().required("Meal preference is required"),
    });

    const guestValidationSchema = Yup.object({
        guestsName: Yup.string().required("Guest Name is required"),
        guestsEmail: Yup.string()
            .email("Must be a valid email")
            .required("E-mail is required"),
    });


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

    const displayInput = [
        {
            label: "Contact Information",
            name: "contact",
            control: "others",
            placeholder: "+234",
        },
        {
            label: "Preferred Date for Boat Cruise",
            name: "date",
            type: "date",
            control: "others",
        },
        {
            label: "Pickup Time",
            name: "time",
            type: "time",
            control: "others",
        },
        {
            label: "Emergency Number",
            name: "emergencyContactNumber",
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

    const createBoatCruise = (values) => {
        const boatCruise = {
            guestsEmail: items.map((i) => i.guestsEmail),
            guestsName: items.map((i) => i.guestsName),
            contact: values.contact,
            date: values.date,
            emergencyContactNumber: values.emergencyContactNumber,
            emergencyContactName: values.emergencyContactName,
            time: values.time,
            drinkingPreference: values.drinkingPreference,
            mealPreference: values.mealPreference,
            plan: status,
            host: hostOption,
            message: values.message,
            price: price
        };
        const payload = {
            data: boatCruise,
        };
        dispatch(setLuxuryServiceType("boat-cruise"));
        dispatch(setBoatCruise(payload));
        navigate("/luxury-service/checkout");
    };

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
                            onClick={() => navigate(window.history.back())}
                        />
                    </div>

                    <div className="flex gap-2 md:gap-5 mt-5 items-center">
                        <p className="font-semibold text-lg md:text-2xl">Boat Cruises &#8358;{price}</p>
                    </div>

                    <div className="mt-3 w-[100%] md:w-[60%] text-[12px] font-medium tracking-wide text-neutral-color">
                        <p>
                            <span className="text-black text-[13px] mr-1 font-bold">
                                Experience:
                            </span>
                            Welcome aboard our luxury mini yacht cruise experience! Our cruise
                            is designed to provide you with the perfect blend of excitement
                            and relaxation on the open water.
                        </p>
                        <br />
                        <p>
                            Our experienced captain and crew will welcome you on board and
                            provide you with a brief orientation of the yacht's amenities and
                            safety features. You will be shown to your elegant cabin,
                            featuring comfortable furnishings and modern finishes for your
                            comfort.
                        </p>
                        <br />
                        <p>
                            During your cruise, you can indulge in various activities, such as
                            taking in the sights of the coastline, feeling the refreshing sea
                            breeze on your skin, and enjoying the sparkling wines or champagne
                            that we have reserved for you. You will be served with suitable
                            spicy refreshments and refreshing beverages prepared by some of
                            the best culinary teams in town.
                        </p>
                        <br />
                        <p>
                            As you cruise, you will enjoy breathtaking views of the sea and
                            sky, as well as a range of onboard amenities such as comfortable
                            seating, a sound system, and a spacious deck for you to socialize,
                            relax and take in the scenery.
                        </p>
                        <br />
                        <p>
                            Whether you're seeking a romantic evening with your loved one or
                            an intimate gathering with your friends, our mini yacht cruise
                            promises to be an unforgettable experience that you will cherish
                            for years to come.
                        </p>
                        <br />
                        <p>
                            We hope to see you soon on board our luxury mini yacht cruise
                            experience!
                        </p>
                    </div>

                    <div className="mt-3 w-[100%] md:w-[60%] text-[12px] font-medium tracking-wide text-neutral-color">
                        <p>
                            <span className="text-black text-[13px] mr-1 font-bold">
                                TERMS OF USAGE:
                            </span>
                            Your booking will be confirmed upon receipt of payment, ensuring a seamless and hassle-free experience with King David Elites.
                        </p>
                        <br />
                        <p>
                            Please note that prices for any additional services may vary, so you can customize your booking to fit your unique needs.
                        </p>
                        <br />
                        <p>
                            If you have any special requests or personalized orders, please provide all necessary details in the message box provided during the booking process. Our customer support team will reach out to you promptly, typically within an hour, to ensure your needs are met.
                        </p>
                        <br />
                        <p>
                            As a patron, you are responsible for any damages incurred during your use of our services, so we kindly ask that you treat our facilities and equipment with the utmost care and caution.

                        </p>
                        <br />
                        <p>
                            We sincerely appreciate your choice of King David Elites, and we look forward to providing you with an exceptional luxury experience.
                        </p>
                    </div>

                    <form onSubmit={formik.handleSubmit} className="mt-4 mb-4">
                        <div>
                            {items.map((item, index) => (
                                <div>
                                    {item.guestsName && item.guestsEmail !== "" && (
                                        <div className="flex gap-5 items-center" key={index}>
                                            <p>
                                                {item.guestsName} | {item.guestsEmail}
                                            </p>

                                            <div className={index !== 0 ? "block" : "hidden"}>
                                                <button
                                                    type="button"
                                                    className="cursor-pointer"
                                                    onClick={() => handleRemove(index)}
                                                >
                                                    <MdOutlineRemoveCircle color="red" />
                                                </button>
                                            </div>

                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {
                            ((status === "silver" && items.length < 8) || (status === "diamond" && items.length < 12) || (status === "platinum" && items.length < 15)) &&
                            <>
                                <div className="flex md:flex-row gap-[2em] flex-col md:w-[50%] justify-between">
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
                                            placeholder="Enter fullName"
                                        />
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
                                    type="button"
                                    className={`hidden`}
                                    onClick={(e) => onSubmit(e)}
                                >
                                    Add Guest
                                </MainButton>
                            </>
                        }

                    </form>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={createBoatCruise}
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

                                <label className="font-bold text-[13px]" name="host">
                                    Onboard Games + Host{" "}
                                </label>
                                <div name="host" className="flex gap-[4.5em]">
                                    {hostOptions.map((label, key) => {
                                        return <div key={key}>{label.label}</div>;
                                    })}
                                </div>
                                <div className="md:w-[10%] mb-5">
                                    <InputLayout name="host">
                                        <div className="flex gap-[5em]">
                                            {hostOptions.map((option) => (
                                                <RadioField
                                                    type="radio"
                                                    id={option.value}
                                                    name={option.value}
                                                    value={option.value}
                                                    checked={hostOption === option.value}
                                                    onChange={(e) => 
                                                        setHostOption(e.target.name)
                                                    }
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

                    <div className="w-[300px] h-[100vh] fixed top-0 right-36 bottom-0 md:block hidden">
                        <img
                            src={boatCruise}
                            className="w-[100%] h-[100%] rounded-md"
                            alt="boatCruise Logo"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BoatCruisePage;
