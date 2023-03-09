import { Categories, CategoriesContainer, Category } from "../../Home/Home.Style";
import LuxuryServiceNavbar from "../../Navbar/LuxuryServiceNavbar";
import c1 from "../LuxuryService/images/alexandre-chambon-aapSemzfsOk-unsplash.jpg";
import c2 from "../LuxuryService/images/greg-wilson-ro-GJ-Hlz-s-unsplash.jpg";
import c3 from "../LuxuryService/images/samuele-errico-piccarini-MyjVReZ5GLQ-unsplash.jpg";
import c4 from "../LuxuryService/images/pics4.png";
import c5 from "../LuxuryService/images/ishan-seefromthesky-EOAnV_C1a4w-unsplash.jpg"
import c6 from '../LuxuryService/images/pics5.jpg'
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import Footer from "../../Footer/Footer";
import { IoMdArrowForward } from "react-icons/io";

const categories = [
    {
        bg: c1,
        title: "Exclusive Events",
        other: "We offer an exceptional and unforgettable experiences to our highly-esteemed clients. From specially curated",
        link: "/luxury-service/exclusive-event",
    },
    {
        bg: c4,
        title: "Weekend Escapes",
        other: "Get the ultimate VIP experience with our Concierge Weekends service. Whether you’re looking to relax or explore",
        link: "/luxury-service/weekend-escape",
    },
    {
        bg: c2,
        title: "Helicopter Rides",
        other: "Soar above the world with our Helicopter Rides. Whether you’re looking for a scenic tour, a corporate event, or ",
        link: "/luxury-service/helicopter-ride",
    },
    {
        bg: c5,
        title: "Concierge Vacations",
        other: "Leave the planning to us and let us create the ultimate customized vacation experience. Our Concierge Read More",
        link: "/luxury-service/concierge-vacation"
    },
    {
        bg: c6,
        title: "Boat Cruises",
        other: "Set sail on an unforgettable adventure with our Boat Cruises. Whether you,re looking for a romantic getaw",
        link: "/luxury-service/boat-cruise"
    },
    {
        bg: c3,
        title: "Chauffeur-Driven Services",
        other: "Get the ultimate VIP experience with our Concierge Weekends service. Whether you’re looking to relax or explore",
        link: "/luxury-service/chauffeur"
    },
];


const LuxuryServiceListing = () => {
    const navigate = useNavigate();
    const position = useRef(null);
    const [showLess, setShowLess] = useState(true);
    const [step, setStep] = useState(false);

    const toggleText = () => {
        setStep(true);
        setShowLess(prevState => !prevState);
    }

    return (
        <>
            <LuxuryServiceNavbar />
            <Categories ref={position} margin='-8em 0em 3em 0em' gap='1em' flexWrap='wrap' z='100'>
                {categories.map((category, index) => {
                    return (
                        <Category
                            onClick={() => {
                                // navigate(category?.link);
                            }}
                            bg={category.bg}
                            key={index}
                            className='hover:text-black hover:bg-[#E98C00]'
                            flex='1 0 30%'
                        >
                            <div className="text-white flex flex-col mt-50 ml-5 md:mt-[15em] md:ml-7 font-semibold md:text-lg text-sm mb-4">
                                <div className="flex items-center justify-between">
                                    {category.title}{" "}
                                    <IoMdArrowForward size={30} color='black' className="bg-theme-color rounded-full p-2 w-8 h-8" onClick={() => navigate(category.link)} />
                                </div>

                                <p onClick={toggleText} style={{ color: "#A6A6A6", fontSize: '14px' }}>
                                    {showLess ? category.other.substring(0, 80).concat("....", "ReadMore") : category.other}
                                </p>
                            </div>
                        </Category>
                    );
                })}
            </Categories>
            <Footer />
        </>

    );
}

export default LuxuryServiceListing;