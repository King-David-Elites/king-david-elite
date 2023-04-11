import { FaRegStar } from "react-icons/fa";
import kde_blackBg from "../Navbar/Image/kde_whiteBg.png";
import { useFormik, Form, Formik } from "formik";
import MainButton from "../buttons/MainButton";
import { Link, useNavigate } from "react-router-dom";
import boatCruise from "../Categories/LuxuryService/images/samuele-errico-piccarini-MyjVReZ5GLQ-unsplash.webp";
import InputLayout from "../inputs/InputLayout";
import * as Yup from "yup";
import FormikControl from "../formik/FormikControl";
import { InputField, InputLabel } from "../inputs/MainInput";
import { Dropdown, Option } from "../inputs/DropdownInput";
import { TextArea } from "../inputs/TextareaInput";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { MdOutlineRemoveCircle } from "react-icons/md";
import Return from "../Navbar/Return";
import { RadioField } from "../inputs/RadioInput";
import {
    setChauffeurRide,
    setLuxuryServiceType,
} from "../../application/store/actions/user";
import DisableButton from "../buttons/DisabledButton";

const ChauffeurPage = ({ id }) => {
    const status = useSelector((state) => state.user.status);
    const [guestsName, setGuestsName] = useState("");
    const [guestsEmail, setGuestEmail] = useState("");
    const [items, setItems] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const handleRemove = (index) => {
        const list = [...items];
        list.splice(index, 1);
        setItems(list);
    };

    const initialValues = {
        fullName: "",
        passengersEmail: "",
        passengersName: "",
        emergencyNumber: "",
        emergencyContactName: "",
        numberOfGuest: "",
        pickUpAddress: "",
        DropOffLocation: "",
        availableVehicles: "",
        vehiclePrice: "",
        noOfhours: "",
        security: "",
        exort: "",
        price: 0,
        plan: status,
        message: "",
    };

    const securityOptions = [
        { value: "Yes", label: "Yes", price: 100000 },
        { value: "No", label: "No", price: 0 },
    ];

    const [price, setPrice] = useState(0);

    const [securityOption, setSecurityOption] = useState(
        securityOptions[1].value
    );

    const handleSecurityOptionChange = (value) => {
        setSecurityOption(value);
    };

    const exortOptions = [
        { value: "Yes1", label: "Yes", price: 50000 },
        { value: "No1", label: "No", price: 0 },
    ];

    const [exortOption, setExortOption] = useState(exortOptions[1].value);

    const handleExortOptionChange = (value) => {
        setExortOption(value);
    };

    const availableSilverVehicles = [
        { key: "", value: "" },
        {
            key: "HYUNDAI SONATA(2017) ",
            value: "HYUNDAI SONATA(2017)",
            price: "100000",
        },
        {
            key: "TOYOTA COROLLA(2017)",
            value: "TOYOTA COROLLA(2017)",
            price: "100000",
        },
        { key: "TOYOTA CAMRY(2017)", value: "TOYOTA CAMRY(2017)", price: "100000" },
        {
            key: "MERCEDES BENZ C300(2016)",
            value: "MERCEDES BENZ C300(2016)",
            price: "100000",
        },
        {
            key: "TOYOTA COROLLA(2020)",
            value: "TOYOTA COROLLA(2020)",
            price: "100000",
        },
        { key: "TOYOTA COASTER BUS", value: "TOYOTA COASTER BUS", price: "100000" },
        { key: "TOYOTA HIACE BUS", value: "TOYOTA HIACE BUS", price: "100000" },
        {
            key: "TOYOTA COASTER EXECUTIVE BUS",
            value: "TOYOTA COASTER EXECUTIVE BUS",
            price: "135000",
        },
        {
            key: "TOYOTA LANDCRUISER(2016)",
            value: "TOYOTA LANDCRUISER(2016)",
            price: "135000",
        },
        {
            key: "TOYOTA HIGHLANDER(2018)",
            value: "TOYOTA HIGHLANDER(2018)",
            price: "135000",
        },
        { key: "TOYOTA PRADO(2018)", value: "TOYOTA PRADO(2018)", price: "135000" },
        { key: "LEXUS GX460(2018)", value: "LEXUS GX460(2018)", price: "135000" },
        { key: "TOYOTA PRADO(2020)", value: "TOYOTA PRADO(2020)", price: "150000" },
        { key: "LEXUS LX570(2015)", value: "LEXUS LX570(2015)", price: "150000" },
        {
            key: "MERCEDES BENZ E300(2017)",
            value: "MERCEDES BENZ E300(2017)",
            price: "150000",
        },
        {
            key: "BMW GRAND COUPE(2018)",
            value: "BMW GRAND COUPE(2018)",
            price: "150000",
        },
        {
            key: "TOYOTA LANDCRUISER(2019)",
            value: "TOYOTA LANDCRUISER(2019)",
            price: "200000",
        },
        { key: "LEXUS LX570(2017)", value: "LEXUS LX570(2017)", price: "200000" },
        { key: "JET MOVER BUS", value: "JET MOVER BUS", price: "220000" },
        {
            key: "TOYOTA LANDCRUISER(2021)",
            value: "TOYOTA LANDCRUISER(2021)",
            price: "235000",
        },
        {
            key: "JET MOVER EXOTIC BUS",
            value: "JET MOVER EXOTIC BUS",
            price: "250000",
        },
        {
            key: "MERCEDES BENZ(VINTAGE CAR)",
            value: "MERCEDES BENZ(VINTAGE CAR)",
            price: "250000",
        },
        {
            key: "RANGE ROVER SUV(2016)",
            value: "RANGE ROVER SUV(2016)",
            price: "300000",
        },
        {
            key: "MERCEDES BENZ G - WAGON(2014)",
            value: "MERCEDES BENZ G - WAGON(2014)",
            price: "300000",
        },
        {
            key: "RANGE ROVER VOGUE(2016)",
            value: "RANGE ROVER VOGUE(2016)",
            price: "300000",
        },
    ];

    const availableDiamondVehicles = [
        { key: "", value: "" },
        { key: "FORD MUSTANG", value: "FORD MUSTANG", price: "300000" },
        {
            key: "MERCEDES VIANO(LUXURY BUS)",
            value: "MERCEDES VIANO(LUXURY BUS)",
            price: "350000",
        },
        {
            key: "MERCEDES SPRINTER(LUXURY BUS)",
            value: "MERCEDES SPRINTER(LUXURY BUS)",
            price: "350000",
        },
        {
            key: "CHRYSLER LIMOUSINE(12 SEATER)",
            value: "CHRYSLER LIMOUSINE(12 SEATER)",
            price: "350000",
        },
        { key: "DODGE CHARGER ", value: "DODGE CHARGER", price: "350000" },
        { key: "LEXUS LX570(2020)", value: "LEXUS LX570(2020)", price: "375000" },
        { key: "MERCEDES BENZ GLE(2019)", value: "MERCEDES BENZ GLE(2019)", price: "375000" },
        {
            key: "RANGE ROVER LIMOUSINE(16 SEATER)",
            value: "RANGE ROVER LIMOUSINE(16 SEATER)", price: "400000"
        },
        { key: "RANGE ROVER SUV(2020)", value: "RANGE ROVER SUV(2020)", price: "400000" },
        {
            key: "MERCEDES G - WAGON(BULLETPROOF)",
            value: "MERCEDES G - WAGON(BULLETPROOF)", price: "450000"
        },
        {
            key: "TOYOTA LANDCRUISER(BULLETPROOF)",
            value: "TOYOTA LANDCRUISER(BULLETPROOF)", price: "450000"
        },
        { key: "TOYOTA PRADO(BULLETPROOF)", value: "TOYOTA PRADO(BULLETPROOF)", price: "450000" },
        { key: "MERCEDES G - WAGON(2017)", value: "MERCEDES G - WAGON(2017)", price: "475000" },
        {
            key: "LEXUS LX570 PREMIUM WHITE(2020)",
            value: "LEXUS LX570 PREMIUM WHITE(2020)", price: "500000"
        },
        { key: "MERCEDES S’ CLASS(2017)", value: "MERCEDES S’ CLASS(2017)", price: "500000" },
    ];

    const availablePlatinumVehicles = [
        { key: "", value: "" },
        { key: "ROLLS ROYCE GHOST", value: "ROLLS ROYCE GHOST", price: "1000000" },
        { key: "ROLLS ROYCE PHANTOM", value: "ROLLS ROYCE PHANTOM", price: "1000000" },
    ];

    const displayInput = [
        {
            label: "Number of Guest (s)",
            name: "numberOfGuest",
            control: "others",
            type: "number",
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
            placeholder: "e.g Abeokuta, Ogun State, Nigeria",
            type: "date",
            control: "others",
        },
        {
            label: "Pickup Address",
            name: "pickUpAddress",
            placeholder: "e.g Abeokuta, Ogun State, Nigeria",
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
            label: "Available Vehicles",
            name: "availableVehicles",
            control: "select",
            options:
                (status === "silver" && availableSilverVehicles) ||
                (status === "diamond" && availableDiamondVehicles) ||
                (status === "platinum" && availablePlatinumVehicles),
        },
        {
            label: "Message",
            name: "message",
            control: "textarea2",
            placeholder: "kindly drop personalised request here",
        },
    ];

    const validationSchema = Yup.object({
        numberOfGuest: Yup.number().max(4).required("Number of guest is required"),
        emergencyNumber: Yup.string().required("Emergency Number is required"),
        emergencyContactName: Yup.string().required(
            "Emergency Contact Name is required"
        ),
        DropOffLocation: Yup.string().required("Drop off location is required"),
        pickUpAddress: Yup.string().required("Pick up location is required"),
        fullName: Yup.string().required("Full Name is required"),
        availableVehicles: Yup.string().required("Required"),
    });

    const createChauffeur = (values) => {
        const chauffeur = {
            guestsEmail: items.map((i) => i.guestsEmail),
            guestsName: items.map((i) => i.guestsName),
            DropOffLocation: values.DropOffLocation,
            pickUpAddress: values.pickUpAddress,
            numberOfGuest: values.numberOfGuest,
            emergencyNumber: values.emergencyNumber,
            emergencyContactName: values.emergencyContactName,
            fullName: values.fullName,
            availableVehicles: values.availableVehicles.split(",")[1],
            vehiclePrice: parseInt(values.availableVehicles.split(",")[0]),
            security: securityOption,
            exort: exortOption,
            plan: status,
            message: values.message,
            price: price,
        };
        const payload = {
            data: chauffeur,
        };
        dispatch(setLuxuryServiceType("chauffeur-ride"));
        dispatch(setChauffeurRide(payload));
        navigate("/luxury-service/checkout");
    };

    const guestDetailsInitialValues = {
        guestsEmail: "",
        guestsName: "",
    };

    const onSubmit = () => {
        setItems([...items, { guestsName, guestsEmail }]);
        setGuestsName("");
        setGuestEmail("");
    };

    const guestValidationSchema = Yup.object({
        guestsName: Yup.string().required("Guest Name is required"),
        guestsEmail: Yup.string()
            .email("Must be a valid email")
            .required("E-mail is required"),
    });

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
                        <p className="font-semibold text-lg md:text-2xl">
                            Chauffeur-Driven Services
                        </p>
                    </div>

                    <div className="mt-3 w-[100%] md:w-[60%] text-[12px] font-medium tracking-wide text-neutral-color">
                        <p>
                            <span className="text-black text-[13px] mr-1 font-bold">
                                Experience:
                            </span>
                            Welcome to our luxury chauffeur services! Our experienced
                            chauffeurs provide you with seamless and sophisticated
                            transportation, whether for business or pleasure.
                        </p>
                        <br />
                        <p>
                            We pick you up from your location in a meticulously maintained
                            luxury vehicle, featuring plush seating, top notch sound system
                            and high-end amenities. Our knowledgeable drivers can also provide
                            you with insider tips on the best restaurants, shopping, and
                            entertainment options in the city.
                        </p>
                        <br />
                        <p>
                            As a premier provider of chauffeur services, we also offer
                            suitable refreshments during your trip, making your journey all
                            the more enjoyable. Come and experience our first-class
                            transportation service for yourself.
                        </p>
                        <br />
                        <p>Book now and let us take you there in style.</p>
                    </div>

                    <form onSubmit={formik.handleSubmit} className="mt-6">
                        <div>
                            {items.map((item, index) => (
                                <div>
                                    {item.guestsName && item.guestsEmail !== "" && (
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
                        onSubmit={createChauffeur}
                        validateOnChange={false}
                    >
                        {(formik) => (
                            <Form>
                                <div className="grid gap-6 pt-4 md:justify-center md:gap-x-[8rem] md:gap-y-8 md:grid-cols-2 md:w-[45%] w-full">
                                    {displayInput.map((d, index) => (
                                        <>
                                            <FormikControl
                                                key={index * 0.5}
                                                label={d.label}
                                                name={d.name}
                                                type={d?.type}
                                                placeholder={d.placeholder}
                                                options={d?.options}
                                                control={d.control}
                                            />
                                        </>
                                    ))}
                                </div>

                                {
                                    <p>Price: {price}</p>
                                }
                                <label className="font-bold text-[13px]" name="securityOption">
                                    Security Personnel:{" "}
                                </label>
                                <div name="securityOption" className="flex gap-[4.5em]">
                                    {securityOptions.map((label, key) => {
                                        return <div key={key}>{label.label}</div>;
                                    })}
                                </div>
                                <div className="md:w-[10%] mb-5">
                                    <InputLayout name="securityOption">
                                        <div className="flex gap-[5em]">
                                            {securityOptions.map((option) => (
                                                <RadioField
                                                    type="radio"
                                                    id={option.value}
                                                    name={option.value}
                                                    value={option.value}
                                                    checked={securityOption === option.value}
                                                    onChange={(e) => {
                                                        handleSecurityOptionChange(e.target.name)
                                                        if (option.price > 0) {
                                                            setPrice(price + option.price);
                                                        }
                                                        else if (option.price === 0) {
                                                            setPrice(price - 100000)
                                                        }
                                                    }
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </InputLayout>
                                </div>

                                <label className="font-bold text-[13px]" name="excortOption">
                                    Request for excort:{" "}
                                </label>
                                <div name="excortOption" className="flex gap-[4.5em]">
                                    {exortOptions.map((label, key) => {
                                        return <div key={key}>{label.label}</div>;
                                    })}
                                </div>
                                <div className="md:w-[10%]">
                                    <InputLayout name="exortOption">
                                        <div className="flex gap-[5em]">
                                            {exortOptions.map((option) => (
                                                <RadioField
                                                    type="radio"
                                                    id={option.value}
                                                    name={option.value}
                                                    value={option.value}
                                                    checked={exortOption === option.value}
                                                    onChange={(e) => {
                                                        handleExortOptionChange(e.target.name)
                                                        if (option.price > 0) {
                                                            setPrice(price + option.price);
                                                        }
                                                        else if (option.price === 0) {
                                                            setPrice(price - 50000)
                                                        }
                                                    }
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

export default ChauffeurPage;
