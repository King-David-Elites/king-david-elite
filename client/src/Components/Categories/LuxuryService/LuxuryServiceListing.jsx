import { Categories, CategoriesContainer, Category } from "../../Home/Home.Style";
import LuxuryServiceNavbar from "../../Navbar/LuxuryServiceNavbar";
import { Background } from "../Cars/Cars.Style";
import c1 from "../LuxuryService/images/alexandre-chambon-aapSemzfsOk-unsplash.jpg";
import c2 from "../LuxuryService/images/greg-wilson-ro-GJ-Hlz-s-unsplash.jpg";
import c3 from "../LuxuryService/images/samuele-errico-piccarini-MyjVReZ5GLQ-unsplash.jpg";
import c4 from "../LuxuryService/images/pics4.png";
import c5 from "../LuxuryService/images/ishan-seefromthesky-EOAnV_C1a4w-unsplash.jpg"
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const categories = [
    {
        bg: c1,
        title: "Exclusive Events",
        other: "We offer an exceptional and unforgettable experiences to our highly-esteemed clients. From specially curated... Read More"
        //   link: "/real-estate",
    },
    {
        bg: c4,
        title: "Weekend Escapes",
        other: "Get the ultimate VIP experience with our Concierge Weekends service. Whether you’re looking to relax or explore... Read More"
        //   link: "/cars",
    },
    {
        bg: c2,
        title: "Helicopter Rides",
        other: "Soar above the world with our Helicopter Rides. Whether you’re looking for a scenic tour, a corporate event, or ... Read More"
        //   link: "/luxury-service",
    },
    {
        bg: c5,
        title: "Concierge Vacations",
        other: "Leave the planning to us and let us create the ultimate customized vacation experience. Our Concierge  ... Read More"
    },
    {
        bg: c5,
        title: "Boat Cruises",
        other: "Set sail on an unforgettable adventure with our Boat Cruises. Whether you,re looking for a romantic getaw... Read More"
    },
    {
        bg: c3,
        title: "Chauffeur-Driven Services",
        other: "other:"
    },
    {
        bg: c1,
        title: "Weekend Escapes",
        other: "Soar above the world with our Helicopter Rides. Whether you’re looking for a scenic tour, a corporate event, or ... Read More"
    },
    {
        bg: c4,
        title: "Chauffeur-Driven Services",
        other: "We offer an exceptional and unforgettable experiences to our highly-esteemed clients. From specially curated... Read More"
    },
];


const LuxuryServiceListing = () => {
    const navigate = useNavigate();
    const position = useRef(null);

    return (
        <div>
            <LuxuryServiceNavbar />
            <CategoriesContainer>
                <Categories ref={position} margin='-8em 0em' z="100" gap='1.5em' flexWrap='wrap' >
                    {categories.map((category, index) => {
                        return (
                            <Category
                                onClick={() => {
                                    // navigate(category?.link);
                                }}
                                bg={category.bg}
                                key={index}
                            >
                                <div className="text-white flex flex-col mt-50 ml-5 md:mt-[15em] md:ml-7 font-semibold md:text-lg text-sm mb-4">
                                    {category.title}{" "}
                                        <p className="text-sm text-[#A6A6A6]">{category.other}</p>
                                </div>
                            </Category>
                        );
                    })}
                </Categories>
            </CategoriesContainer>
        </div>

    );
}

export default LuxuryServiceListing;