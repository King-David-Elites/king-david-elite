import { Adjustments, BadgeCheck, Heart, HeartOutline, Search } from "heroicons-react";
import React, { useRef, useEffect, useCallback } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import {
  Background,
  HeroSection,
  Input,
  Text,
  Body,
  Dealer,
  PicDealer,
  PicCar,
  Reaction,
  Position,
  FilterBox,
} from "../Cars/Cars.Style";
import { SearchSection, SearchC } from "./RealEstate.Style";
import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import '../../Navbar/Navbar.css'
import { SpinnerCircular } from 'spinners-react';
import { PropertyType } from "./RealEstate.Style";
import { useState } from "react";
import Banner from "../../Banner/Banner";
import MainButton from "../../buttons/MainButton";
import Footer from "../../Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import Listing from "../../Listing/Listing";
import { GridContainer } from "../../Listing/Listing.styled";
import { EstateAnimation, graduallyAppear, graduallyDisAppear } from "../Cars/AnimationOrder";
import useContextAPI from "../../ContextAPI/ContextAPI";
import { motion } from "framer-motion";
import { setConfig } from "../../../infrastructure/api/user/userRequest";
import globalApi from "../../../api";
import Loader from "../../Loader/Loader";
import theme from "../../../application/utils/Theme";
import { ImCross } from "react-icons/im";
import DropdownInput from "../../inputs/DropdownInput";
import { BiArrowBack } from "react-icons/bi";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const RealEstateListing = () => {
  const top = useRef(null);
  const { listing, setListing } = useContextAPI();

  useEffect(() => {
    scrollToRef(top);
  }, []);

  const [loader, setLoader] = useState(false);
  const [estateId, setEstateId] = useState(1);
  const [animation, setAnimation] = useState(graduallyAppear);
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);
  const [query, setQuery] = useState("title");
  const [activePage, setActivePage] = useState(false);
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const [view, setView] = useState('Porch');
  const [stage, setStage] = useState(0);
  const [activeNav, setActiveNav] = useState(false);

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const showPage = () => {
    if (window.innerWidth > 900) {
      setStage(0);
      setActiveNav(!activeNav);
    } else {
      setStage(1);
      setActivePage(!activePage);
      setActiveNav(activeNav);
    }

  }


  const views = [
    {
      Id: 0,
      title: "Garden"
    },
    {
      id: 1,
      title: "Porch"
    },
    {
      id: 2,
      title: "Swimming Pool"
    },
    {
      id: 3,
      title: "Balcony"
    },
    {
      id: 4,
      title: "Terrace"
    },
  ]

  const searchListing = () => {
    setQuery(query);
    setTitle(title);
    setLoader(true);
    axios.get(`${globalApi}/listings/search?${query}=${title}`, setConfig())
      .then(resp => {
        setList(resp.data)
        setLoader(false)
        setStage(0);
      })
      .catch(err => console.log(err))
  }

  const animate = useCallback(() => {
    var timer1;
    var timer2;
    timer1 = setTimeout(() => {
      if (estateId < EstateAnimation.length) {
        clearTimeout(timer2);
        clearTimeout(timer1);
        setAnimation(graduallyDisAppear);
        timer2 = setTimeout(() => {
          setAnimation(graduallyAppear);
          setEstateId(estateId + 1);
        }, [500]);
      } else if (estateId === EstateAnimation.length) {
        clearTimeout(timer2);
        clearTimeout(timer1);
        setAnimation(graduallyDisAppear);
        timer2 = setTimeout(() => {
          setAnimation(graduallyAppear);
          setEstateId(1);
        }, [500]);
      }
    }, [8000]);
  },[estateId])

  useEffect(() => {
    animate()
  }, [animate]);
  return (
    <>
      {
        stage == 1 && <div className='p-2 w-[100vw] md:hidden top-0 bottom-0 h-[100%] bg-white transition-[1s] z-20'>
          <div className='p-4'>
            <div className="relative w-full lg:max-w-sm flex flex-col gap-6">
              <div className="h-[40px] flex items-center gap-4">
                <BiArrowBack size={30} className="opacity-[0.5] cursor-pointer" onClick={() => setStage(0)} />
                <p className="font-bold text-[20px]">Filters</p>
              </div>
              {/* <select className="w-full p-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none focus:border-theme-color">
              <option>Location</option>
              <option>Laravel 9 with React</option>
              <option>React with Tailwind CSS</option>
              <option>React With Headless UI</option>
            </select> */}
              <h3 className="font-bold">Location</h3>
              <input type="text" className="w-full rounded-md p-2 text-gray-500 bg-white border outline-none focus:border-theme-color" onClick={() => setQuery("location")} onChange={(e) => setTitle(e.target.value)} />

              <h3 className="font-bold">Title</h3>
              <input type="text" className="w-full rounded-md p-2 text-gray-500 bg-white border outline-none focus:border-theme-color" onClick={() => setQuery("title")} onChange={(e) => setTitle(e.target.value)} />

              <h3 className="font-bold">Views</h3>
              <div className="flex gap-3 flex-wrap">
                {
                  views.map((v, i) => {
                    return (
                      <span className={`bg-gray-300 font-medium text-[15px] cursor-pointer whitespace-nowrap h-full flex justify-center rounded-3xl p-3 ${view == v.title ? `rounded-md h-[10%]  bg-theme-color hover:opacity-[100%] items-center` : ""}`} key={i} onChange={(e) => setTitle(e.target.value)} onClick={() => { setQuery("view"); setView(v.title) }}>{v.title}</span>
                    )
                  })
                }
              </div>

              <h3 className="font-bold">Bedrooms</h3>
              <div className="rounded-md"><input className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color" type="number" min={0} onChange={(e) => setTitle(e.target.value)} onClick={() => setQuery("noOfBed")} /></div>

              <h3 className="font-bold">Bathrooms</h3>
              <div className="rounded-md"><input className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color" type="number" min={0} onChange={(e) => setTitle(e.target.value)} onClick={() => setQuery("noOfBathroom")} /></div>


              <h3 className="font-bold">Price</h3>
              <MultiRangeSlider
                min={0}
                max={1000}
                step={5}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                  handleInput(e);
                }}
                // onChange={() => setTitle(maxValue - minValue)}
                label={false}
                ruler={false}
                style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
                barLeftColor={theme.backgroundColor}
                barInnerColor={theme.color}
                barRightColor={theme.backgroundColor}
                thumbLeftColor={theme.color}
                thumbRightColor={theme.color}
              />

              <div className="flex gap-5 w-full mb-5 items-center">
                <input type="number" className="border-2 p-2 w-[50%]" placeholder={minValue} onChange={(e) => setTitle(e.target.value)} onClick={() => setQuery("noOfBathroom")} />
                <span className="font-bold text-[15px]">-</span>
                <input type="number" className="border-2 p-2 w-[50%]" onChange={(e) => setTitle(e.target.value)} onClick={() => setQuery("noOfBathroom")} placeholder={maxValue} />
              </div>

              <MainButton width='100%' padding='24px 12px' onClick={() => { searchListing(); }}>Apply Filter {
                loader && <SpinnerCircular color="white" className="mr-4" secondaryColor={theme.color} size={50} thickness={150} />
              }</MainButton>
            </div>

          </div>
        </div >
      }

      {
        stage == 0 && <>
          <Navbar active={1} />
          <nav className={activeNav ? 'navigation active overflow-y-auto top-0' : 'navigation hidden'}>
            <ul>
              <div className='closed'>

                <div className='p-4'>
                  <div className="relative w-full lg:max-w-sm flex flex-col gap-6">
                    <div className="h-[40px] flex items-center gap-4">
                      <BiArrowBack size={30} className="opacity-[0.5]" onClick={() => setActiveNav(!activeNav)} />
                      <p className="font-bold text-[20px]">Filters</p>
                    </div>
                    {/* <select className="w-full p-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none focus:border-theme-color">
              <option>Location</option>
              <option>Laravel 9 with React</option>
              <option>React with Tailwind CSS</option>
              <option>React With Headless UI</option>
            </select> */}
                    <h3 className="font-bold">Location</h3>
                    <input type="text" className="w-full rounded-md p-2 text-gray-500 bg-white border outline-none focus:border-theme-color" onClick={() => setQuery("location")} onChange={(e) => setTitle(e.target.value)} />

                    <h3 className="font-bold">Title</h3>
                    <input type="text" className="w-full rounded-md p-2 text-gray-500 bg-white border outline-none focus:border-theme-color" onClick={() => setQuery("title")} onChange={(e) => setTitle(e.target.value)} />

                    <h3 className="font-bold">Views</h3>
                    <div className="flex gap-3 flex-wrap">
                      {
                        views.map((v, i) => {
                          return (
                            <span className={`bg-gray-300 font-medium text-[15px] cursor-pointer whitespace-nowrap h-full flex justify-center rounded-3xl p-3 ${view == v.title ? `rounded-md h-[10%]  bg-theme-color hover:opacity-[100%] items-center` : ""}`} key={i} onChange={(e) => setTitle(e.target.value)} onClick={() => { setQuery("view"); setView(v.title) }}>{v.title}</span>
                          )
                        })
                      }
                    </div>

                    <h3 className="font-bold">Bedrooms</h3>
                    <div className="rounded-md"><input className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color" type="number" min={0} onChange={(e) => setTitle(e.target.value)} onClick={() => setQuery("noOfBed")} /></div>

                    <h3 className="font-bold">Bathrooms</h3>
                    <div className="rounded-md"><input className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color" type="number" min={0} onChange={(e) => setTitle(e.target.value)} onClick={() => setQuery("noOfBathroom")} /></div>


                    <h3 className="font-bold">Price</h3>
                    <MultiRangeSlider
                      min={0}
                      max={1000}
                      step={5}
                      minValue={minValue}
                      maxValue={maxValue}
                      onInput={(e) => {
                        handleInput(e);
                      }}
                      // onChange={() => setTitle(maxValue - minValue)}
                      label={false}
                      ruler={false}
                      style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
                      barLeftColor={theme.backgroundColor}
                      barInnerColor={theme.color}
                      barRightColor={theme.backgroundColor}
                      thumbLeftColor={theme.color}
                      thumbRightColor={theme.color}
                    />

                    <div className="flex gap-5 w-full mb-5 items-center">
                      <input type="number" className="border-2 p-2 w-[50%]" placeholder={minValue} onChange={(e) => setTitle(e.target.value)} onClick={() => setQuery("noOfBathroom")} />
                      <span className="font-bold text-[15px]">-</span>
                      <input type="number" className="border-2 p-2 w-[50%]" onChange={(e) => setTitle(e.target.value)} onClick={() => setQuery("noOfBathroom")} placeholder={maxValue} />
                    </div>

                    <MainButton width='100%' padding='24px 12px' onClick={() => { searchListing(); }}>Apply Filter {
                      loader && <SpinnerCircular color="white" className="mr-4" secondaryColor={theme.color} size={50} thickness={150} />
                    }</MainButton>
                  </div>

                </div>
              </div>
            </ul>
          </nav>
          <Background ref={top}>
            {EstateAnimation.map((item) => {
              if (item.id === estateId) {
                return (
                  <motion.div
                    className="bgImage"
                    variants={animation}
                    initial="hidden"
                    animate="visible"
                  >
                    <img src={item.img} alt="real estates" />
                  </motion.div>
                );
              }
            })}
            <HeroSection>
              <Text fontSize="2rem">Luxury Real Estate</Text>
              <SearchSection>
                <SearchC>
                  <Input placeholder="search desired locations" onChange={(e) => setTitle(e.target.value)} />
                  <Search width="30px" onClick={(e) => searchListing(title)} className="cursor-pointer" />
                </SearchC>
                <FilterBox onClick={() => showPage()}>
                  <MainButton width="60px" >Filter</MainButton>
                  <Adjustments width="30px" />
                </FilterBox>
              </SearchSection>
              <Text>One search is all it takes</Text>
            </HeroSection>
          </Background>

          <Body>
            <Text fontSize="1rem" fontWeight="700" color="black">
              Luxury Properties For Sale
            </Text>
            {
              loader && <SpinnerCircular color="white" className="flex justify-center" secondaryColor={theme.color} size={50} thickness={150} />
            }
            <GridContainer>
              {
                (!loader && title && list.length > 0) && list.map((items) => {
                  return (
                    <Listing key={items._id} list={items} />
                  );
                })
              }
              {
                !loader && title && list.length == 0 && <p className="font-bold text-base md:text-xl">No list found</p>
              }
              {
                !loader && !title && listing.length > 0 && listing.map((items) => {
                  return (
                    <Listing key={items._id} list={items} />
                  );
                })
              }
            </GridContainer>
          </Body>
          <Banner category="Real Estate" />
          <Text color="black" fontSize="16px" margin="5%">
            Indulge in opulence with King David Elites. Our online marketplace boast a collection of exquiste, high-end properties that exude luxury living.From stunning homes to sprawling estates and opulent apartment,our offering cater to all your residential,investment and for-profit needs. Our secure payment system ensures hassle-free transactions, with the option to transfer funds directly to verifies vendors or through our 1% transaction fee escrow account which further secures your funds and grants you access to our team of experts who provide professional advisory services and arranges luxurious property inspection, setting a new standardof class and sophistication.

          </Text>
          <Footer />
        </>
      }

    </>
  );
};

export default RealEstateListing;