import { useRef, useState } from "react";
import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import MainButton from "../../buttons/MainButton";
import { Brand, Header, LI, LogoText, UL } from "../../Navbar/Navbar.Style";

const Pricing = ({ active = 6 }) => {

    const [activeNav, setActiveNav] = useState(false);
    const weeekendEscapePosition = useRef(null);
    const chauffeurPosition = useRef(null);
    const boatRidePosition = useRef(null);

    const showMenu = () => {
        setActiveNav(!activeNav);
    }

    const navigate = useNavigate()

    const navOptions = [
        {
            title: "All",
            link: "/luxury-service"
        },
        {
            title: "Concierge Weekends",
            link: "/luxury-service/concierge-vacation"
        },
        {
            title: "Chauffeur Services",
            link: "/luxury-service/pricing"
        },
        {
            title: "Boat Cruises",
            link: "/luxury-service/pricing"
        },
        {
            title: "Concierge Vacations",
            link: "/luxury-service/pricing",
        },
        {
            title: "Helicopter Rides",
            link: "/luxury-service/helicopter-ride",
        },
        {
            title: "Pricing",
            link: "/luxury-service/pricing",
        },
    ]

    const chauffeurRidePricingOption = [
        {
            id: 1,
            name: "Luxury Rides"
        },
        {
            id: 2,
            name: "Security Personnel"
        },
        {
            id: 3,
            name: "Hilux Escort"
        },
        {
            id: 4,
            name: "Close Protection"
        }
    ]

    const weekendEscapePricingOption = [
        {
            id: 1,
            name: "Chauffeur Rides"
        },
        {
            id: 2,
            name: "Luxury Accommodation"
        },
        {
            id: 3,
            name: "Exquisite Meals"
        },
        {
            id: 4,
            name: "Gaming Adventures"
        },
        {
            id: 5,
            name: "Boat Cruises"
        },
        {
            id: 6,
            name: "Spa"
        },
    ]

    const boatCruisePricingOption = [
        {
            id: 1,
            name: "Boat Cruise"
        },
        {
            id: 2,
            name: "Onboard Games + Host"
        },
        {
            id: 3,
            name: "Champagne"
        },
        {
            id: 4,
            name: "Onboard Spa Treatment"
        },
        {
            id: 5,
            name: "Exquisite Onboard Meals"
        }
    ]

    const boatCruiseSilverOption = [
        {
            id: 1,
            name: "2 Hours Cruise"
        },
        {
            id: 2,
            name: "Available"
        },
        {
            id: 3,
            name: "2 Cases ( Alc/Non Alc )"
        },
        {
            id: 4,
            name: "Available"
        },
        {
            id: 5,
            name: "Available"
        }
    ]

    const boatCruiseDiamondOption = [
        {
            id: 1,
            name: "3 Hours Cruise"
        },
        {
            id: 2,
            name: "Available"
        },
        {
            id: 3,
            name: "3 Cases ( Alc/Non Alc )"
        },
        {
            id: 4,
            name: "Available"
        },
        {
            id: 5,
            name: "Available"
        }
    ]

    const boatCruisePlatinumOption = [
        {
            id: 1,
            name: "3 Hours Cruise"
        },
        {
            id: 2,
            name: "Available"
        },
        {
            id: 3,
            name: "4 Cases ( Alc/Non Alc )"
        },
        {
            id: 4,
            name: "Available"
        },
        {
            id: 5,
            name: "Available"
        }
    ]

    const weekendEscapeSilverplanOption = [
        {
            id: 1,
            name: "1 Ride"
        },
        {
            id: 2,
            name: "Studio Apartment"
        },
        {
            id: 3,
            name: "1 Standard Meal"
        },
        {
            id: 4,
            name: "Available"
        },
        {
            id: 5,
            name: "_______"
        },
        {
            id: 6,
            name: "_______"
        },
    ]

    const weekendEscapeDaimondplanOption = [
        {
            id: 1,
            name: "1 Ride"
        },
        {
            id: 2,
            name: "1 Bedroom Apartment"
        },
        {
            id: 3,
            name: "2 Standard Meals"
        },
        {
            id: 4,
            name: "Available"
        },
        {
            id: 5,
            name: "_______"
        },
        {
            id: 6,
            name: "Available"
        },
    ]

    const weekendEscapePlatinimplanOption = [
        {
            id: 1,
            name: "1 Ride"
        },
        {
            id: 2,
            name: "2 Bedroom Apartment"
        },
        {
            id: 3,
            name: "3 Standard Meals"
        },
        {
            id: 4,
            name: "Available"
        },
        {
            id: 5,
            name: "Available"
        },
        {
            id: 6,
            name: "Available"
        },
    ]

    const chauffeurRideSilverplanOption = [
        {
            id: 1,
            name: "1 Ride"
        },
        {
            id: 2,
            name: "_______"
        },
        {
            id: 3,
            name: "_______"
        },
        {
            id: 4,
            name: "_______"
        }
    ]

    const chauffeurRideDiamondplanOption = [
        {
            id: 1,
            name: "1 Ride"
        },
        {
            id: 2,
            name: "_______"
        },
        {
            id: 3,
            name: "_______"
        },
        {
            id: 4,
            name: "Available"
        }
    ]

    const chauffeurRidePlatinumplanOption = [
        {
            id: 1,
            name: "1 Ride"
        },
        {
            id: 2,
            name: "Available"
        },
        {
            id: 3,
            name: "Available"
        },
        {
            id: 4,
            name: "Available"
        }
    ]

    return (
        <>
            <Header justifyContent="space-around" z="0" paddingTop='1.5em' className='bg-cover' bg='white' sticky="static" color='black'>

                <Brand>
                    <LogoText color="black" fontSize="1.5rem" onClick={() => navigate("/luxury-service")}>Luxury Services</LogoText>

                    <div className='menu-icon'>
                        <MdMenu size={30} className='menu' onClick={showMenu} />
                    </div>
                </Brand>

                <div>
                    <UL>
                        {
                            navOptions.map((nav, i) => {
                                return (
                                    <LI
                                        key={i}
                                        onClick={() => navigate(nav.link)}
                                        color='black'
                                    >
                                        <div className={active === i && "item-active"}>
                                            {nav.title}
                                        </div>
                                    </LI>
                                )
                            })
                        }
                    </UL>
                </div>
            </Header>

            <div className="w-full h-full p-4 md:hidden flex flex-col gap-4">
                <h3 className="text-center text-[15px] font-semibold md:text-[19px] tracking-wide">Weekend Escape ( A Day Of Bliss)</h3>
                <div className="bg-[#F2F2F2] rounded-lg flex-col gap-3 py-4 px-6">
                    <p className="text-[15px] font-semibold">Silver</p>
                    <p className="text-[20px] font-extrabold">$600</p>

                    <div className="mt-10">
                        <p className="text-[15px] font-semibold">Chauffeur Rides: 1 Ride</p>
                        <p className="text-[15px] font-semibold">Luxury Accomodation: Studio Apartment</p>
                        <p className="text-[15px] font-semibold">Exquisite Meals: 1 Standard Meal</p>
                        <p className="text-[15px] font-semibold">Boat Cruises: None</p>
                        <p className="text-[15px] font-semibold">Spa: None</p>
                    </div>

                    <MainButton marginTop='2em'
                        width='100px' padding='24px 12px'
                        justifyContent='end' onClick={() => navigate('/luxury-service/weekend-escape')}>Get Started</MainButton>
                </div>

                <div className="bg-[#FFECEC] rounded-lg flex-col gap-3 py-4 px-6">
                    <p className="text-[15px] font-semibold">Diamond</p>
                    <p className="text-[20px] font-extrabold">$900</p>

                    <div className="mt-10">
                        <p className="text-[15px] font-semibold">Chauffeur Rides: 1 Ride</p>
                        <p className="text-[15px] font-semibold">Luxury Accomodation: Studio Apartment</p>
                        <p className="text-[15px] font-semibold">Exquisite Meals: 1 Standard Meal</p>
                        <p className="text-[15px] font-semibold">Boat Cruises: None</p>
                        <p className="text-[15px] font-semibold">Spa: None</p>
                    </div>

                    <MainButton marginTop='2em'
                        width='100px' padding='24px 12px'
                        justifyContent='end' onClick={() => navigate('/luxury-service/weekend-escape')}>Get Started</MainButton>
                </div>

                <div className="bg-[#333433] rounded-lg flex-col gap-3 py-4 px-6 text-white">
                    <p className="text-[15px] font-semibold">Platinum</p>
                    <p className="text-[20px] font-extrabold">$1400</p>

                    <div className="mt-10">
                        <p className="text-[15px] font-semibold">Chauffeur Rides: 1 Ride</p>
                        <p className="text-[15px] font-semibold">Luxury Accomodation: Studio Apartment</p>
                        <p className="text-[15px] font-semibold">Exquisite Meals: 1 Standard Meal</p>
                        <p className="text-[15px] font-semibold">Boat Cruises: None</p>
                        <p className="text-[15px] font-semibold">Spa: None</p>
                    </div>

                    <MainButton marginTop='2em'
                        width='100px' padding='24px 12px'
                        justifyContent='end' onClick={() => navigate('/luxury-service/weekend-escape')}>Get Started</MainButton>
                </div>


                <h3 className="text-center text-[15px] mt-5 font-semibold md:text-[19px] tracking-wide">Chauffeur Rides ( 24 Hours)</h3>
                <div className="bg-[#F2F2F2] rounded-lg flex-col gap-3 py-4 px-6">
                    <p className="text-[15px] font-semibold">Silver</p>
                    <p className="text-[20px] font-extrabold">$300 - $1000</p>

                    <div className="mt-10">
                        <p className="text-[15px] font-semibold">Chauffeur Rides: 1 Ride</p>
                        <p className="text-[15px] font-semibold">Luxury Accomodation: Studio Apartment</p>
                        <p className="text-[15px] font-semibold">Exquisite Meals: 1 Standard Meal</p>
                        <p className="text-[15px] font-semibold">Boat Cruises: None</p>
                        <p className="text-[15px] font-semibold">Spa: None</p>
                    </div>

                    <MainButton marginTop='2em'
                        width='100px' padding='24px 12px'
                        justifyContent='end' onClick={() => navigate('/luxury-service/chauffeur')}>Get Started</MainButton>
                </div>

                <div className="bg-[#FFECEC] rounded-lg flex-col gap-3 py-4 px-6">
                    <p className="text-[15px] font-semibold">Diamond</p>
                    <p className="text-[20px] font-extrabold">$1000 - $1600</p>

                    <div className="mt-10">
                        <p className="text-[15px] font-semibold">Chauffeur Rides: 1 Ride</p>
                        <p className="text-[15px] font-semibold">Luxury Accomodation: Studio Apartment</p>
                        <p className="text-[15px] font-semibold">Exquisite Meals: 1 Standard Meal</p>
                        <p className="text-[15px] font-semibold">Boat Cruises: None</p>
                        <p className="text-[15px] font-semibold">Spa: None</p>
                    </div>

                    <MainButton marginTop='2em'
                        width='100px' padding='24px 12px'
                        justifyContent='end' onClick={() => navigate('/luxury-service/chauffeur')}>Get Started</MainButton>
                </div>

                <div className="bg-[#333433] rounded-lg flex-col gap-3 py-4 px-6 text-white">
                    <p className="text-[15px] font-semibold">Platinum</p>
                    <p className="text-[20px] font-extrabold">$1600 Upwards</p>

                    <div className="mt-10">
                        <p className="text-[15px] font-semibold">Chauffeur Rides: 1 Ride</p>
                        <p className="text-[15px] font-semibold">Luxury Accomodation: Studio Apartment</p>
                        <p className="text-[15px] font-semibold">Exquisite Meals: 1 Standard Meal</p>
                        <p className="text-[15px] font-semibold">Boat Cruises: None</p>
                        <p className="text-[15px] font-semibold">Spa: None</p>
                    </div>

                    <MainButton marginTop='2em'
                        width='100px' padding='24px 12px'
                        justifyContent='end' onClick={() => navigate('/luxury-service/chauffeur')}>Get Started</MainButton>
                </div>

                <h3 className="text-center text-[15px] mt-5 font-semibold md:text-[19px] tracking-wide">Boat Cruises ( The Aqua Way)</h3>
                <div className="bg-[#F2F2F2] rounded-lg flex-col gap-3 py-4 px-6">
                    <p className="text-[15px] font-semibold">Silver</p>
                    <p className="text-[20px] font-extrabold">$1000</p>

                    <div className="mt-10">
                        <p className="text-[15px] font-semibold">Chauffeur Rides: 1 Ride</p>
                        <p className="text-[15px] font-semibold">Luxury Accomodation: Studio Apartment</p>
                        <p className="text-[15px] font-semibold">Exquisite Meals: 1 Standard Meal</p>
                        <p className="text-[15px] font-semibold">Boat Cruises: None</p>
                        <p className="text-[15px] font-semibold">Spa: None</p>
                    </div>

                    <MainButton marginTop='2em'
                        width='100px' padding='24px 12px'
                        justifyContent='end' onClick={() => navigate('/luxury-service/boat-cruise')}>Get Started</MainButton>
                </div>

                <div className="bg-[#FFECEC] rounded-lg flex-col gap-3 py-4 px-6">
                    <p className="text-[15px] font-semibold">Diamond</p>
                    <p className="text-[20px] font-extrabold">$1500</p>

                    <div className="mt-10">
                        <p className="text-[15px] font-semibold">Chauffeur Rides: 1 Ride</p>
                        <p className="text-[15px] font-semibold">Luxury Accomodation: Studio Apartment</p>
                        <p className="text-[15px] font-semibold">Exquisite Meals: 1 Standard Meal</p>
                        <p className="text-[15px] font-semibold">Boat Cruises: None</p>
                        <p className="text-[15px] font-semibold">Spa: None</p>
                    </div>

                    <MainButton marginTop='2em'
                        width='100px' padding='24px 12px'
                        justifyContent='end' onClick={() => navigate('/luxury-service/boat-cruise')}>Get Started</MainButton>
                </div>

                <div className="bg-[#333433] rounded-lg flex-col gap-3 py-4 px-6 text-white">
                    <p className="text-[15px] font-semibold">Platinum</p>
                    <p className="text-[20px] font-extrabold">$2000</p>

                    <div className="mt-10">
                        <p className="text-[15px] font-semibold">Chauffeur Rides: 1 Ride</p>
                        <p className="text-[15px] font-semibold">Luxury Accomodation: Studio Apartment</p>
                        <p className="text-[15px] font-semibold">Exquisite Meals: 1 Standard Meal</p>
                        <p className="text-[15px] font-semibold">Boat Cruises: None</p>
                        <p className="text-[15px] font-semibold">Spa: None</p>
                    </div>

                    <MainButton marginTop='2em'
                        width='100px' padding='24px 12px'
                        justifyContent='end' onClick={() => navigate('/luxury-service/boat-cruise')}>Get Started</MainButton>
                </div>
            </div>

            <div className="w-full h-[100%] md:px-[5em] px-[2em] md:py-5 mt-7 md:block hidden">
                <h3 className="text-center text-[15px] font-semibold md:text-[19px] tracking-wide">Weekend Escape ( A Day Of Bliss)</h3>

                <div className="md:flex gap-3 w-[100%] items-center h-auto mt-6 hidden">
                    <p className="md:w-1/4 font-extrabold text-[22px]">Pricing</p>
                    <p className="md:w-1/4 text-neutral-color font-medium text-[16px]">Silver</p>
                    <p className="md:w-1/4 text-neutral-color font-medium text-[16px]">Diamond</p>
                    <p className="md:w-1/4 text-neutral-color font-medium text-[16px]">Platinium</p>
                </div>

                <div className="flex gap-3 w-[100%] h-auto mt-6">
                    <div className="w-1/4 flex flex-col gap-[12em] mb-[-2em] justify-center bg-white rounded-md p-4">
                        <ul className="text-[12px]">
                            {
                                weekendEscapePricingOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="w-1/4 flex flex-col items-center rounded-md  bg-[#F2F2F2] md:py-10">
                        <p className="font-bold text-[25px]">$600</p>
                        <p className="text-[#2301F3] cursor-pointer text-[16px] mt-8 font-bold border-b-2 border-[#2301F3] mb-12" onClick={() => navigate('/luxury-service/weekend-escape')}>Get Started</p>
                        <ul className="text-[12px]">
                            {
                                weekendEscapeSilverplanOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>

                        <MainButton width='100px' padding='12px' marginTop='7em' onClick={() => navigate('/luxury-service/weekend-escape')}>Get Started</MainButton>
                    </div>

                    <div className="w-1/4 flex flex-col items-center  bg-[#FFECEC] rounded-md md:py-10">
                        <p className="font-bold text-[25px]">$900</p>
                        <p className="text-[#2301F3] text-[16px] cursor-pointer mt-8 font-bold border-b-2 border-[#2301F3] mb-12" onClick={() => navigate('/luxury-service/weekend-escape')}>Get Started</p>
                        <ul className="text-[12px]">
                            {
                                weekendEscapeDaimondplanOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>

                        <MainButton width='100px' padding='12px' marginTop='7em' onClick={() => navigate('/luxury-service/weekend-escape')}>Get Started</MainButton>
                    </div>

                    <div className="w-1/4 flex flex-col items-center text-white bg-[#333433] rounded-md md:py-10">
                        <p className="font-bold text-[25px]">$1400</p>
                        <p className="text-white text-[16px] mt-8 cursor-pointer font-bold border-b-2 border-white mb-12" onClick={() => navigate('/luxury-service/weekend-escape')}>Get Started</p>
                        <ul className="text-[12px]">
                            {
                                weekendEscapePlatinimplanOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>

                        <MainButton width='100px' padding='12px' marginTop='7em' onClick={() => navigate('/luxury-service/weekend-escape')}>Get Started</MainButton>
                    </div>
                </div>
            </div>

            <div className="w-full h-[100%] md:px-[5em] md:py-5 mt-7 md:block hidden">
                <h3 className="text-center font-semibold text-[19px] tracking-wide">Chauffeur Rides ( 24 Hours)</h3>

                <div className="flex gap-3 w-[100%] items-center h-auto mt-6">
                    <p className="w-1/4 font-extrabold text-[22px]">Pricing</p>
                    <p className="w-1/4 text-neutral-color font-medium text-[16px]">Silver</p>
                    <p className="w-1/4 text-neutral-color font-medium text-[16px]">Diamond</p>
                    <p className="w-1/4 text-neutral-color font-medium text-[16px]">Platinium</p>
                </div>

                <div className="flex gap-3 w-[100%] h-auto mt-6">
                    <div className="w-1/4 flex flex-col gap-[12em] mb-[-2em] justify-center bg-white rounded-md p-4">
                        <ul className="text-[12px]">
                            {
                                chauffeurRidePricingOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="w-1/4 flex flex-col items-center rounded-md  bg-[#F2F2F2] md:py-10">
                        <p className="font-bold text-[25px]">$300 - $1000</p>
                        <p className="text-[#2301F3] text-[16px] mt-8 cursor-pointer font-bold border-b-2 border-[#2301F3] mb-12" onClick={() => navigate('/luxury-service/chauffeur')}>Get Started</p>
                        <ul className="text-[12px]">
                            {
                                chauffeurRideSilverplanOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>

                        <MainButton width='100px' padding='12px' marginTop='7em' onClick={() => navigate('/luxury-service/chauffeur')}>Get Started</MainButton>
                    </div>

                    <div className="w-1/4 flex flex-col items-center  bg-[#FFECEC] rounded-md md:py-10">
                        <p className="font-bold text-[25px]">$1000 - $1600</p>
                        <p className="text-[#2301F3] cursor-pointer text-[16px] mt-8 font-bold border-b-2 border-[#2301F3] mb-12" onClick={() => navigate('/luxury-service/chauffeur')}>Get Started</p>
                        <ul className="text-[12px]">
                            {
                                chauffeurRideDiamondplanOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>

                        <MainButton width='100px' padding='12px' marginTop='7em' onClick={() => navigate('/luxury-service/chauffeur')}>Get Started</MainButton>
                    </div>

                    <div className="w-1/4 flex flex-col items-center text-white bg-[#333433] rounded-md md:py-10">
                        <p className="font-bold text-[25px]">$1600 Upwards</p>
                        <p className="text-white text-[16px] mt-8 cursor-pointer font-bold border-b-2 border-white mb-12" onClick={() => navigate('/luxury-service/chauffeur')}>Get Started</p>
                        <ul className="text-[12px]">
                            {
                                chauffeurRidePlatinumplanOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>

                        <MainButton width='100px' padding='12px' marginTop='7em' onClick={() => navigate('/luxury-service/chauffeur')}>Get Started</MainButton>
                    </div>
                </div>
            </div>

            <div className="w-full h-[100%] md:px-[5em] md:py-5 mt-7 md:block hidden">
                <h3 className="text-center font-semibold text-[19px] tracking-wide">Boat Cruises ( The Aqua Way)</h3>

                <div className="flex gap-3 w-[100%] items-center h-auto mt-6">
                    <p className="w-1/4 font-extrabold text-[22px]">Pricing</p>
                    <p className="w-1/4 text-neutral-color font-medium text-[16px]">Silver ( 5 people max )</p>
                    <p className="w-1/4 text-neutral-color font-medium text-[16px]">Diamond ( 8 people max )</p>
                    <p className="w-1/4 text-neutral-color font-medium text-[16px]">Platinium ( 10 people max )</p>
                </div>

                <div className="flex gap-3 w-[100%] h-auto mt-6">
                    <div className="w-1/4 flex flex-col gap-[12em] mb-[-2em] justify-center bg-white rounded-md p-4">
                        <ul className="text-[12px]">
                            {
                                boatCruisePricingOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="w-1/4 flex flex-col items-center rounded-md  bg-[#F2F2F2] md:py-10">
                        <p className="font-bold text-[25px]">$1000</p>
                        <p className="text-[#2301F3] text-[16px] mt-8 cursor-pointer font-bold border-b-2 border-[#2301F3] mb-12" onClick={() => navigate('/luxury-service/boat-cruise')}>Get Started</p>
                        <ul className="text-[12px]">
                            {
                                boatCruiseSilverOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>

                        <MainButton width='100px' padding='12px' marginTop='7em' onClick={() => navigate('/luxury-service/boat-cruise')}>Get Started</MainButton>
                    </div>

                    <div className="w-1/4 flex flex-col items-center  bg-[#FFECEC] rounded-md md:py-10">
                        <p className="font-bold text-[25px]">$1500</p>
                        <p className="text-[#2301F3] text-[16px] mt-8 font-bold cursor-pointer border-b-2 border-[#2301F3] mb-12" onClick={() => navigate('/luxury-service/boat-cruise')}>Get Started</p>
                        <ul className="text-[12px]">
                            {
                                boatCruiseDiamondOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>

                        <MainButton width='100px' padding='12px' marginTop='7em' onClick={() => navigate('/luxury-service/boat-cruise')}>Get Started</MainButton>
                    </div>

                    <div className="w-1/4 flex flex-col items-center text-white bg-[#333433] rounded-md md:py-10">
                        <p className="font-bold text-[25px]">$2000</p>
                        <p className="text-white text-[16px] mt-8 font-bold border-b-2 border-white mb-12" onClick={() => navigate('/luxury-service/boat-cruise cursor-pointer')}>Get Started</p>
                        <ul className="text-[12px]">
                            {
                                boatCruisePlatinumOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>

                        <MainButton width='100px' padding='12px' marginTop='7em' onClick={() => navigate('/luxury-service/boat-cruise')}>Get Started</MainButton>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;