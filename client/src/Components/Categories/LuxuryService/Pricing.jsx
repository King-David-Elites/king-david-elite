
import { useRef, useState } from "react";
import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import MainButton from "../../buttons/MainButton";
import { Brand, Header, LI, LogoText, UL } from "../../Navbar/Navbar.Style";
import { useDispatch } from 'react-redux';
import { setPackagePlan } from '../../../application/store/actions/user';

const Pricing = ({ active = 6 }) => {
    const [activeNav, setActiveNav] = useState(false);
    const [id, setId] = useState();
    const dispatch = useDispatch();

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
            name: "Luxury Car"
        },
        {
            id: 2,
            name: "Refreshments"
        },
        {
            id: 3,
            name: "Security Personnel"
        },
        {
            id: 4,
            name: "HILUX ESCORT"
        }
    ]

    const dayCationPricingOption = [
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
        {
            id: 7,
            name: "Champagne/Sparkling Wine"
        },
    ]

    const boatCruisePricingOption = [
        {
            id: 1,
            name: "BOAT SIZE"
        },
        {
            id: 2,
            name: "DURATION"
        },
        {
            id: 3,
            name: "ONBOARD GAMES+HOST"
        },
        {
            id: 4,
            name: "CHAMPAGNE/SPARKLING WINE"
        },
        {
            id: 5,
            name: "ONBOARD SPA TREATMENT"
        },
        {
            id: 6,
            name: "EXQUISITE ONBOARD MEALS"
        }
    ]

    const boatCruiseSilverOption = [
        {
            id: 1,
            name: "8 PASSENGER MINI YACHT"
        },
        {
            id: 2,
            name: "2 HOURS CRUISE"
        },
        {
            id: 3,
            name: "AVAILABLE ON REQUEST"
        },
        {
            id: 4,
            name: "3 CASES OF MARTINI ROSE(ALC)/EISBERG SPARKLING ROSE WINE(NON-ALC)"
        },
        {
            id: 5,
            name: "AVAILABLE"
        },
        {
            id: 6,
            name: "AVAILABLE"
        }
    ]

    const boatCruiseDiamondOption = [
        {
            id: 1,
            name: "10 PASSENGER MINI YACHT"
        },
        {
            id: 2,
            name: "3 HOURS CRUISE"
        },
        {
            id: 3,
            name: "AVAILABLE ON REQUEST"
        },
        {
            id: 4,
            name: "3 CASES OF SENSI PROSECCO (ALC)/WELCH SPARKLING WINE(NON-ALC)"
        },
        {
            id: 5,
            name: "AVAILABLE"
        },
        {
            id: 6,
            name: "AVAILABLE"
        }
    ]

    const boatCruisePlatinumOption = [
        {
            id: 1,
            name: "15 PASSENGER MINI YACHT"
        },
        {
            id: 2,
            name: "3 HOURS CRUISE"
        },
        {
            id: 3,
            name: "AVAILABLE ON REQUEST"
        },
        {
            id: 4,
            name: "4 CASES OF MOET CHANDON (ALC)/ST. REGIS SPARKLING BRUT (NON- ALC)"
        },
        {
            id: 5,
            name: "AVAILABLE"
        },
        {
            id: 6,
            name: "AVAILABLE"
        }
    ]

    const dayCationSilverplanOption = [
        {
            id: 1,
            name: "EXECUTIVE SEDAN (24 HOURS)"
        },
        {
            id: 2,
            name: "1 BEDROOM APARTMENT"
        },
        {
            id: 3,
            name: "1 STANDARD MEAL"
        },
        {
            id: 4,
            name: "2 X SILVER INDOOR PACKAGE "
        },
        {
            id: 5,
            name: "8 PASSENGER BOAT"
        },
        {
            id: 6,
            name: "MOBILE/WALK IN SESSION (2)"
        },
        {
            id: 7,
            name: "2 CASES OF MARTINI ROSE(ALC)/EISBERG SPARKLING ROSE WINE(NON-ALC)"
        },
    ]

    const dayCationDaimondplanOption = [
        {
            id: 1,
            name: "EXECUTIVE SUV (24 HOURS)"
        },
        {
            id: 2,
            name: "2 BEDROOM APARTMENT"
        },
        {
            id: 3,
            name: "2 STANDARD MEALS"
        },
        {
            id: 4,
            name: "2 X GOLD INDOOR PACKAGE"
        },
        {
            id: 5,
            name: "8 PASSENGER MINI-YACHT"
        },
        {
            id: 6,
            name: "MOBILE/WALK IN SESSION (3) "
        },
        {
            id: 7,
            name: "2 CASES OF SENSI PROSECCO (ALC)/WELCH SPARKLING WINE(NON-ALC)"
        },
    ]

    const dayCationPlatinimplanOption = [
        {
            id: 1,
            name: "LUXURY SUV (24 HOURS)"
        },
        {
            id: 2,
            name: "3 BEDROOM APARTMENT"
        },
        {
            id: 3,
            name: "3 STANDARD MEALS"
        },
        {
            id: 4,
            name: "3X GOLD INDOOR PACKAGE"
        },
        {
            id: 5,
            name: "3X GOLD INDOOR PACKAGE"
        },
        {
            id: 6,
            name: "MOBILE/WALK IN SESSION(4)"
        },
        {
            id: 7,
            name: "2 CASES OF MOET CHANDON (ALC)/ST. REGIS SPARKLING BRUT (NON- ALC)"
        },
    ]

    const chauffeurRideSilverplanOption = [
        {
            id: 1,
            name: "12 HOURS SERVICE"
        },
        {
            id: 2,
            name: "READILY AVAILABLE"
        },
        {
            id: 3,
            name: "AVAILABLE ON REQUEST"
        },
        {
            id: 4,
            name: "AVAILABLE ON REQUEST"
        }
    ]

    const chauffeurRideDiamondplanOption = [
        {
            id: 1,
            name: "12 HOURS SERVICE"
        },
        {
            id: 2,
            name: "READILY AVAILABLE"
        },
        {
            id: 3,
            name: "AVAILABLE ON REQUEST"
        },
        {
            id: 4,
            name: "AVAILABLE ON REQUEST"
        }
    ]

    const chauffeurRidePlatinumplanOption = [
        {
            id: 1,
            name: "12 HOURS SERVICE"
        },
        {
            id: 2,
            name: "READILY AVAILABLE"
        },
        {
            id: 3,
            name: "AVAILABLE ON REQUEST"
        },
        {
            id: 4,
            name: "AVAILABLE ON REQUEST"
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
                <h3 className="text-center text-[15px] font-semibold md:text-[19px] tracking-wide">Daycation ( 24 HOURS OF BLISS)</h3>
                <div className="bg-[#F2F2F2] rounded-lg flex-col gap-3 py-4 px-6">
                    <p className="text-[15px] font-semibold mb-1">Silver</p>
                    <p className="text-[20px] font-extrabold">500K</p>

                    <div className="mt-10">
                        <p className="text-[15px] font-semibold mb-1">Chauffeur Rides: EXECUTIVE SEDAN (24 HOURS)</p>
                        <p className="text-[15px] font-semibold mb-1">Luxury Accomodation: 1 BEDROOM APARTMENT</p>
                        <p className="text-[15px] font-semibold mb-1">Exquisite Meals: 1 STANDARD MEAL</p>
                        <p className="text-[15px] font-semibold mb-1">Gaming Adventures: 2X SILVER INDOOR PACKAGE </p>
                        <p className="text-[15px] font-semibold mb-1">Boat Cruise: 8 PASSENGER BOAT</p>
                        <p className="text-[15px] font-semibold mb-1">Spa: MOBILE/WALK IN SESSION (2)</p>
                        <p className="text-[15px] font-semibold mb-1">Champagne/Sparkling Wine: 2 CASES OF MARTINI ROSE(ALC)/EISBERG SPARKLING ROSE WINE(NON-ALC)</p>
                    </div>

                    <MainButton marginTop='2em'
                        width='100px' padding='24px 12px'
                        justifyContent='end' onClick={() => navigate('/luxury-service/weekend-escape')}>Get Started</MainButton>
                </div>

                <div className="bg-[#FFECEC] rounded-lg flex-col gap-3 py-4 px-6">
                    <p className="text-[15px] font-semibold mb-1">Diamond</p>
                    <p className="text-[20px] font-extrabold">700K</p>

                    <div className="mt-10">
                        <p className="text-[15px] font-semibold mb-1">Chauffeur Rides: EXECUTIVE SUV (24 HOURS)</p>
                        <p className="text-[15px] font-semibold mb-1">Luxury Accomodation: 2 BEDROOM APARTMENT</p>
                        <p className="text-[15px] font-semibold mb-1">Exquisite Meals: 2 STANDARD MEAL</p>
                        <p className="text-[15px] font-semibold mb-1">Gaming Adventures: 2X GOLD INDOOR PACKAGE </p>
                        <p className="text-[15px] font-semibold mb-1">Boat Cruise: 8 PASSENGER MINI-YACHT</p>
                        <p className="text-[15px] font-semibold mb-1">Spa: MOBILE/WALK IN SESSION (3)</p>
                        <p className="text-[15px] font-semibold mb-1">Champagne/Sparkling Wine: 2 CASES OF SENSI PROSECCO (ALC)/WELCH SPARKLING WINE(NON-ALC)</p>
                    </div>

                    <MainButton marginTop='2em'
                        width='100px' padding='24px 12px'
                        justifyContent='end' onClick={() => navigate('/luxury-service/weekend-escape')}>Get Started</MainButton>
                </div>

                <div className="bg-[#333433] rounded-lg flex-col gap-3 py-4 px-6 text-white">
                    <p className="text-[15px] font-semibold mb-1">Platinum</p>
                    <p className="text-[20px] font-extrabold">900k</p>

                    <div className="mt-10">
                        <p className="text-[15px] font-semibold mb-1">Chauffeur Rides: LUXURY SUV (24 HOURS)</p>
                        <p className="text-[15px] font-semibold mb-1">Luxury Accomodation: 3 BEDROOM APARTMENT</p>
                        <p className="text-[15px] font-semibold mb-1">Exquisite Meals: 3 STANDARD MEAL</p>
                        <p className="text-[15px] font-semibold mb-1">Gaming Adventures: 3X GOLD INDOOR PACKAGE </p>
                        <p className="text-[15px] font-semibold mb-1">Boat Cruise: 12 PASSENGER MINI-YACHT</p>
                        <p className="text-[15px] font-semibold mb-1">Spa: MOBILE/WALK IN SESSION (4)</p>
                        <p className="text-[15px] font-semibold mb-1">Champagne/Sparkling Wine: 2 CASES OF MOET CHANDON (ALC)/ST. REGIS SPARKLING BRUT (NON- ALC)</p>
                    </div>

                    <MainButton marginTop='2em'
                        width='100px' padding='24px 12px'
                        justifyContent='end' onClick={() => navigate('/luxury-service/weekend-escape')}>Get Started</MainButton>
                </div>


                <h3 className="text-center text-[15px] mt-5 font-semibold md:text-[19px] tracking-wide">Chauffeur Rides (THE COMFORT ZONE)</h3>
                <div className="bg-[#F2F2F2] rounded-lg flex-col gap-3 py-4 px-6">
                    <p className="text-[15px] font-semibold mb-1">Silver</p>
                    <p className="text-[20px] font-extrabold">100K - 300K</p>

                    <div className="mt-10">
                        <p className="text-[15px] font-semibold mb-1">Luxury Car: 12 HOURS SERVICE</p>
                        <p className="text-[15px] font-semibold mb-1">Refreshments: READILY AVAILABLE</p>
                        <p className="text-[15px] font-semibold mb-1">Security Personnel: AVAILABLE ON REQUEST</p>
                        <p className="text-[15px] font-semibold mb-1">Hilux Escort: AVAILABLE ON REQUEST</p>
                    </div>

                    <MainButton marginTop='2em'
                        width='100px' padding='24px 12px'
                        justifyContent='end' onClick={() => {dispatch(setPackagePlan('silver'));navigate('/luxury-service/chauffeur')}}>Get Started</MainButton>
                </div>

                <div className="bg-[#FFECEC] rounded-lg flex-col gap-3 py-4 px-6">
                    <p className="text-[15px] font-semibold mb-1">Diamond</p>
                    <p className="text-[20px] font-extrabold">300K - 500K</p>

                    <div className="mt-10">
                        <p className="text-[15px] font-semibold mb-1">Luxury Car: 12 HOURS SERVICE</p>
                        <p className="text-[15px] font-semibold mb-1">Refreshments: READILY AVAILABLE</p>
                        <p className="text-[15px] font-semibold mb-1">Security Personnel: AVAILABLE ON REQUEST</p>
                        <p className="text-[15px] font-semibold mb-1">Hilux Escort: AVAILABLE ON REQUEST</p>
                    </div>

                    <MainButton marginTop='2em'
                        width='100px' padding='24px 12px'
                        justifyContent='end' onClick={() => {dispatch(setPackagePlan('diamond')); navigate('/luxury-service/chauffeur')}}>Get Started</MainButton>
                </div>

                <div className="bg-[#333433] rounded-lg flex-col gap-3 py-4 px-6 text-white">
                    <p className="text-[15px] font-semibold mb-1">Platinum</p>
                    <p className="text-[20px] font-extrabold">500k Upwards</p>

                    <div className="mt-10">
                        <p className="text-[15px] font-semibold mb-1">Luxury Car: 12 HOURS SERVICE</p>
                        <p className="text-[15px] font-semibold mb-1">Refreshments: READILY AVAILABLE</p>
                        <p className="text-[15px] font-semibold mb-1">Security Personnel: AVAILABLE ON REQUEST</p>
                        <p className="text-[15px] font-semibold mb-1">Hilux Escort: AVAILABLE ON REQUEST</p>
                    </div>

                    <MainButton marginTop='2em'
                        width='100px' padding='24px 12px'
                        justifyContent='end' onClick={() => { dispatch(setPackagePlan('platinum')); navigate('/luxury-service/chauffeur')}}>Get Started</MainButton>
                </div>

                <h3 className="text-center text-[15px] mt-5 font-semibold md:text-[19px] tracking-wide">Boat Cruises ( The Aqua Way)</h3>
                <div className="bg-[#F2F2F2] rounded-lg flex-col gap-3 py-4 px-6">
                    <p className="text-[15px] font-semibold mb-1">Silver</p>
                    <p className="text-[20px] font-extrabold">500K</p>

                    <div className="mt-10">
                        <p className="text-[15px] font-semibold mb-1">Boat Size: 8 PASSENGER MINI YACHT</p>
                        <p className="text-[15px] font-semibold mb-1">Duration: 2 HOURS CRUISE</p>
                        <p className="text-[15px] font-semibold mb-1">Onboard Games+Host: AVAILABLE ON REQUEST</p>
                        <p className="text-[15px] font-semibold mb-1">Champagne/Sparking Wine: 3 CASES OF MARTINI ROSE(ALC)/EISBERG SPARKLING ROSE WINE(NON-ALC)</p>
                        <p className="text-[15px] font-semibold mb-1">Onboard Spa Treatment: AVAILABLE</p>
                        <p className="text-[15px] font-semibold mb-1">Exquisite Onboard Meals: AVAILABLE</p>
                    </div>

                    <MainButton marginTop='2em'
                        width='100px' padding='24px 12px'
                        justifyContent='end' onClick={() => navigate('/luxury-service/boat-cruise')}>Get Started</MainButton>
                </div>

                <div className="bg-[#FFECEC] rounded-lg flex-col gap-3 py-4 px-6">
                    <p className="text-[15px] font-semibold mb-1">Diamond</p>
                    <p className="text-[20px] font-extrabold">850K</p>

                    <div className="mt-10">
                        <p className="text-[15px] font-semibold mb-1">Boat Size: 10 PASSENGER MINI YACHT</p>
                        <p className="text-[15px] font-semibold mb-1">Duration: 3 HOURS CRUISE</p>
                        <p className="text-[15px] font-semibold mb-1">Onboard Games+Host: AVAILABLE ON REQUEST</p>
                        <p className="text-[15px] font-semibold mb-1">Champagne/Sparking Wine: 3 CASES OF SENSI PROSECCO (ALC)/WELCH SPARKLING WINE(NON-ALC)</p>
                        <p className="text-[15px] font-semibold mb-1">Onboard Spa Treatment: AVAILABLE</p>
                        <p className="text-[15px] font-semibold mb-1">Exquisite Onboard Meals: AVAILABLE</p>
                    </div>

                    <MainButton marginTop='2em'
                        width='100px' padding='24px 12px'
                        justifyContent='end' onClick={() => navigate('/luxury-service/boat-cruise')}>Get Started</MainButton>
                </div>

                <div className="bg-[#333433] rounded-lg flex-col gap-3 py-4 px-6 text-white">
                    <p className="text-[15px] font-semibold mb-1">Platinum</p>
                    <p className="text-[20px] font-extrabold">#1.2M</p>

                    <div className="mt-10">
                        <p className="text-[15px] font-semibold mb-1">Boat Size: 15 PASSENGER MINI YACHT</p>
                        <p className="text-[15px] font-semibold mb-1">Duration: 3 HOURS CRUISE</p>
                        <p className="text-[15px] font-semibold mb-1">Onboard Games+Host: AVAILABLE ON REQUEST</p>
                        <p className="text-[15px] font-semibold mb-1">Champagne/Sparking Wine: 4 CASES OF MOET CHANDON (ALC)/ST. REGIS SPARKLING BRUT (NON- ALC)</p>
                        <p className="text-[15px] font-semibold mb-1">Onboard Spa Treatment: AVAILABLE</p>
                        <p className="text-[15px] font-semibold mb-1">Exquisite Onboard Meals: AVAILABLE</p>
                    </div>

                    <MainButton marginTop='2em'
                        width='100px' padding='24px 12px'
                        justifyContent='end' onClick={() => navigate('/luxury-service/boat-cruise')}>Get Started</MainButton>
                </div>
            </div>

            <div className="w-full h-[100%] md:px-[5em] px-[2em] md:py-5 mt-7 md:block hidden">
                <h3 className="text-center text-[15px] font-semibold md:text-[19px] tracking-wide">Daycation (24 HOURS OF BLISS)</h3>

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
                                dayCationPricingOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="w-1/4 flex flex-col items-center rounded-md  bg-[#F2F2F2] md:py-10">
                        <p className="font-bold text-[25px]">500K</p>
                        <p className="text-[#2301F3] cursor-pointer text-[16px] mt-8 font-bold border-b-2 border-[#2301F3] mb-12" onClick={() => navigate('/luxury-service/weekend-escape')}>Get Started</p>
                        <ul className="text-[12px] text-center">
                            {
                                dayCationSilverplanOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>

                        <MainButton width='100px' padding='12px' marginTop='7em' onClick={() => navigate('/luxury-service/weekend-escape')}>Get Started</MainButton>
                    </div>

                    <div className="w-1/4 flex flex-col items-center  bg-[#FFECEC] rounded-md md:py-10">
                        <p className="font-bold text-[25px]">700K</p>
                        <p className="text-[#2301F3] text-[16px] cursor-pointer mt-8 font-bold border-b-2 border-[#2301F3] mb-12" onClick={() => { dispatch(setPackagePlan('diamond')); navigate('/luxury-service/weekend-escape') }}>Get Started</p>
                        <ul className="text-[12px] text-center">
                            {
                                dayCationDaimondplanOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>

                        <MainButton width='100px' padding='12px' marginTop='7em' onClick={() => { dispatch(setPackagePlan('diamond')); navigate('/luxury-service/weekend-escape') }}>Get Started</MainButton>
                    </div>

                    <div className="w-1/4 flex flex-col items-center text-white bg-[#333433] rounded-md md:py-10">
                        <p className="font-bold text-[25px]">900K</p>
                        <p className="text-white text-[16px] mt-8 cursor-pointer font-bold border-b-2 border-white mb-12" onClick={() => { dispatch(setPackagePlan('platinum')); navigate('/luxury-service/weekend-escape') }}>Get Started</p>
                        <ul className="text-[12px] text-center">
                            {
                                dayCationPlatinimplanOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>

                        <MainButton width='100px' padding='12px' marginTop='7em' onClick={() => { dispatch(setPackagePlan('platinum')); navigate('/luxury-service/weekend-escape') }}>Get Started</MainButton>
                    </div>
                </div>
            </div>

            <div className="w-full h-[100%] md:px-[5em] md:py-5 mt-7 md:block hidden">
                <h3 className="text-center font-semibold text-[19px] tracking-wide">Chauffeur Rides (THE COMFORT ZONE)</h3>

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
                        <p className="font-bold text-[25px]">100K -300K</p>
                        <p className="text-[#2301F3] text-[16px] mt-8 cursor-pointer font-bold border-b-2 border-[#2301F3] mb-12" onClick={() => { dispatch(setPackagePlan('silver')); navigate('/luxury-service/chauffeur') }}>Get Started</p>
                        <ul className="text-[12px] text-center">
                            {
                                chauffeurRideSilverplanOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>

                        <MainButton width='100px' padding='12px' marginTop='7em' onClick={() => {dispatch(setPackagePlan('silver')); navigate('/luxury-service/chauffeur') }}>Get Started</MainButton>
                    </div>

                    <div className="w-1/4 flex flex-col items-center  bg-[#FFECEC] rounded-md md:py-10">
                        <p className="font-bold text-[25px]">300K-500K</p>
                        <p className="text-[#2301F3] cursor-pointer text-[16px] mt-8 font-bold border-b-2 border-[#2301F3] mb-12" onClick={() => { dispatch(setPackagePlan('diamond')); navigate('/luxury-service/chauffeur') }}>Get Started</p>
                        <ul className="text-[12px] text-center">
                            {
                                chauffeurRideDiamondplanOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>

                        <MainButton width='100px' padding='12px' marginTop='7em' onClick={() => { dispatch(setPackagePlan('diamond')); navigate('/luxury-service/chauffeur') }}>Get Started</MainButton>
                    </div>

                    <div className="w-1/4 flex flex-col items-center text-white bg-[#333433] rounded-md md:py-10">
                        <p className="font-bold text-[25px]">500K Upwards</p>
                        <p className="text-white text-[16px] mt-8 cursor-pointer font-bold border-b-2 border-white mb-12" onClick={() => {dispatch(setPackagePlan('platinum')); navigate('/luxury-service/chauffeur') }}>Get Started</p>
                        <ul className="text-[12px] text-center">
                            {
                                chauffeurRidePlatinumplanOption.map((p, i) => {
                                    return (
                                        <li key={i} className="md:mb-4 font-semibold">{p.name}</li>
                                    )
                                })
                            }
                        </ul>

                        <MainButton width='100px' padding='12px' marginTop='7em' onClick={() => {dispatch(setPackagePlan('platinum')); navigate('/luxury-service/chauffeur') }}>Get Started</MainButton>
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

                    <div className="w-1/4 flex flex-col items-center rounded-md md:px-3 bg-[#F2F2F2] md:py-10">
                        <p className="font-bold text-[25px]">500K</p>
                        <p className="text-[#2301F3] text-[16px] mt-8 cursor-pointer font-bold border-b-2 border-[#2301F3] mb-12" onClick={() => navigate('/luxury-service/boat-cruise')}>Get Started</p>
                        <ul className="text-[12px] text-center">
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

                    <div className="w-1/4 flex flex-col items-center  bg-[#FFECEC] md:px-3 rounded-md md:py-10">
                        <p className="font-bold text-[25px]">850K</p>
                        <p className="text-[#2301F3] text-[16px] mt-8 font-bold cursor-pointer border-b-2 border-[#2301F3] mb-12" onClick={() => navigate('/luxury-service/boat-cruise')}>Get Started</p>
                        <ul className="text-[12px] text-center">
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

                    <div className="w-1/4 flex flex-col items-center text-white bg-[#333433] md:px-3 rounded-md md:py-10">
                        <p className="font-bold text-[25px]">#1.2M</p>
                        <p className="text-white text-[16px] mt-8 font-bold border-b-2 border-white mb-12" onClick={() => navigate('/luxury-service/boat-cruise cursor-pointer')}>Get Started</p>
                        <ul className="text-[12px] text-center">
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