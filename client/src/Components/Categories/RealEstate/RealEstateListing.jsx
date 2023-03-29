import {
  Adjustments,
  Search,
} from "heroicons-react";
import React, { useRef, useEffect, useCallback } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import {
  Background,
  HeroSection,
  Input,
  Text,
  Body,
  FilterBox,
} from "../Cars/Cars.Style";
import { SearchSection, SearchC } from "./RealEstate.Style";
import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import "../../Navbar/Navbar.css";
import { SpinnerCircular } from "spinners-react";
import { useState } from "react";
import Banner from "../../Banner/Banner";
import MainButton from "../../buttons/MainButton";
import Footer from "../../Footer/Footer";
import Listing from "../../Listing/Listing";
import { GridContainer } from "../../Listing/Listing.styled";
import {
  EstateAnimation,
  graduallyAppear,
  graduallyDisAppear,
} from "../Cars/AnimationOrder";
import { getCities, getListings, getStates } from "../../../infrastructure/api/user/userRequest";
import { motion } from "framer-motion";
import { setConfig } from "../../../infrastructure/api/user/userRequest";
import globalApi from "../../../api";
import theme from "../../../application/utils/Theme";
import { BiArrowBack } from "react-icons/bi";
import PaginationButtons from "../../PaginationButtons/PaginationButtons";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const RealEstateListing = ({ mainData }) => {
  const top = useRef(null);
  const up = useRef(null);
  const [listing, setListing] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [estateId, setEstateId] = useState(1);
  const [animation, setAnimation] = useState(graduallyAppear);
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);
  const [query, setQuery] = useState("title");
  const [activePage, setActivePage] = useState(false);
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const [view, setView] = useState("Swimming Pool");
  const [stage, setStage] = useState(0);
  const [activeNav, setActiveNav] = useState(false);
  const [changing, setChanging] = useState(false);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [isos, setIsos] = useState({
    countryIso: "",
    stateIso: "",
    cityId: ""
  })

  useEffect(() => {
    setStateData(stateData)
    setCityData(cityData)
  }, [changing])

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
  };

  useEffect(() => {
    scrollToRef(top);
  }, []);


  const views = [
    {
      Id: 0,
      title: "Garden",
    },
    {
      id: 1,
      title: "Porch",
    },
    {
      id: 2,
      title: "Swimming Pool",
    },
    {
      id: 3,
      title: "Balcony",
    },
    {
      id: 4,
      title: "Terrace",
    },
  ];


  const getStateIso = (name) => {
    var stateObject = stateData.find((state) => state.name === name);
    setCityData([]);
    setIsos({ ...isos, stateIso: stateObject["iso2"] });
    getCities(isos["countryIso"], stateObject["iso2"], setCityData);
    setChanging(!changing);
  };

  const getCityId = (name) => {
    var cityObject = cityData.find((city) => city.name === name);
    setIsos({ ...isos, cityId: cityObject["id"] });
    setChanging(!changing);
  };


  const searchListing = () => {
    setQuery(query);
    setTitle(title);
    setLoader(true);
    axios
      .get(`${globalApi}/listings/search?${query}=${title}`, setConfig())
      .then((resp) => {
        setList(resp.data);
        setLoader(false);
        setStage(0);
      })
      .catch((err) => console.log(err));
  };

  const getCountryIso = (name) => {
    var countryObject = mainData.countryData.find(
      (country) => country.name === name
    );
    setStateData([])
    setCityData([])
    setIsos({ ...isos, countryIso: countryObject["iso2"] });
    getStates(countryObject["iso2"], setStateData);
    setChanging(!changing)
  };

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setUserInfo({ ...userInfo, [name]: value });
  //   setChanging(!changing);
  // };

  const getTotalData = async (page) => {
    let totalListing = await getListings(
      page,
      "real-estate",
      setListing,
      setLoading
    );

    return totalListing;
  };

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
  }, [estateId]);

  useEffect(() => {
    animate();
  }, [animate]);
  return (
    <>
      {stage === 1 && (
        <div className="p-2 w-[100vw] md:hidden top-0 bottom-0 h-[100%] bg-white transition-[1s] z-20">
          <div className="p-4">
            <div className="relative w-full lg:max-w-sm flex flex-col gap-6">
              <div className="h-[40px] flex items-center gap-4">
                <BiArrowBack
                  size={30}
                  className="opacity-[0.5] cursor-pointer"
                  onClick={() => setStage(0)}
                />
                <p className="font-bold text-[20px]">Filters</p>
              </div>
              <h3 className="font-bold">Location</h3>
              <select
                className="w-full p-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none focus:border-theme-color"
                name="Country"
                onChange={(e) => {
                  setCountry(e.target.value);
                  getCountryIso(e.target.value);
                }}
              >
                <option value="Country">None</option>
                {mainData.countryData.map((country) => {
                  return (
                    <>
                      <option key={country.id} value={country.name}>
                        {country.name}
                      </option>
                    </>
                  );
                })}
              </select>

              <div className="input">
                {stateData.length > 0 && (
                  <>
                    <label htmlFor="state">State</label>
                    <select
                      name="state"
                      onChange={(e) => {
                        setState(e.target.value)
                        getStateIso(e.target.value);
                      }}
                    >
                      <option value="State">None</option>
                      {stateData?.map((state) => {
                        return (
                          <>
                            <option key={state.id} value={state.name}>
                              {state.name}
                            </option>
                          </>
                        );
                      })}
                    </select>
                  </>
                )}
              </div>

              <div className="input">
                {cityData.length > 0 && (
                  <>
                    <label htmlFor="city">City</label>
                    <select
                      name="city"
                      onChange={(e) => {
                        setCity(e.target.value);
                        getCityId(e.target.value);
                      }}
                    >
                      <option value="City">None</option>
                      {cityData?.map((city) => {
                        return (
                          <>
                            <option key={city.id} value={city.name}>
                              {city.name}
                            </option>
                          </>
                        );
                      })}
                    </select>
                  </>
                )}
              </div>

              <h3 className="font-bold">Title</h3>
              <input
                type="text"
                className="w-full rounded-md p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                onClick={() => setQuery("title")}
                onChange={(e) => setTitle(e.target.value)}
              />

              <h3 className="font-bold">Views</h3>
              <div className="flex gap-3 flex-wrap">
                {views.map((v, i) => {
                  return (
                    <span
                      className={`bg-gray-300 font-medium text-[15px] cursor-pointer whitespace-nowrap h-full flex justify-center rounded-3xl p-3 ${view == v.title
                        ? `rounded-md h-[8%]  bg-theme-color hover:opacity-[100%] items-center`
                        : ""
                        }`}
                      key={i}
                      onChange={(e) => setTitle(e.target.value)}
                      onClick={() => {
                        setQuery("view");
                        setView(v.title);
                      }}
                    >
                      {v.title}
                    </span>
                  );
                })}
              </div>

              <h3 className="font-bold">Bedrooms</h3>
              <div className="rounded-md">
                <input
                  className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                  type="number"
                  min={0}
                  onChange={(e) => setTitle(e.target.value)}
                  onClick={() => setQuery("noOfBed")}
                />
              </div>

              <h3 className="font-bold">Bathrooms</h3>
              <div className="rounded-md">
                <input
                  className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                  type="number"
                  min={0}
                  onChange={(e) => setTitle(e.target.value)}
                  onClick={() => setQuery("noOfBathroom")}
                />
              </div>

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
                style={{
                  border: "none",
                  boxShadow: "none",
                  padding: "15px 10px",
                }}
                barLeftColor={theme.backgroundColor}
                barInnerColor={theme.color}
                barRightColor={theme.backgroundColor}
                thumbLeftColor={theme.color}
                thumbRightColor={theme.color}
              />

              <div className="flex gap-5 w-full mb-5 items-center">
                <input
                  type="number"
                  className="border-2 p-2 w-[50%]"
                  placeholder={minValue}
                  onChange={(e) => setTitle(e.target.value)}
                  onClick={() => setQuery("noOfBathroom")}
                />
                <span className="font-bold text-[15px]">-</span>
                <input
                  type="number"
                  className="border-2 p-2 w-[50%]"
                  onChange={(e) => setTitle(e.target.value)}
                  onClick={() => setQuery("noOfBathroom")}
                  placeholder={maxValue}
                />
              </div>

              <MainButton
                width="100%"
                padding="24px 12px"
                onClick={() => {
                  searchListing();
                }}
              >
                Apply Filter{" "}
                {loader && (
                  <SpinnerCircular
                    color="white"
                    className="mr-4"
                    secondaryColor={theme.color}
                    size={50}
                    thickness={150}
                  />
                )}
              </MainButton>
            </div>
          </div>
        </div>
      )}

      {stage === 0 && (
        <>
          <Navbar active={1} />
          <nav
            className={
              activeNav
                ? "navigation active overflow-y-auto top-0"
                : "navigation hidden"
            }
          >
            <ul>
              <div className="closed">
                <div className="p-4">
                  <div className="relative w-full lg:max-w-sm flex flex-col gap-6">
                    <div className="h-[40px] flex items-center gap-4">
                      <BiArrowBack
                        size={30}
                        className="opacity-[0.5]"
                        onClick={() => setActiveNav(!activeNav)}
                      />
                      <p className="font-bold text-[20px]">Filters</p>
                    </div>
                    <h3 className="font-bold">Location</h3>
                    <select
                      className="w-full p-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none focus:border-theme-color"
                      name="Country"
                      onChange={(e) => {
                        setCountry(e.target.value);
                        getCountryIso(e.target.value);
                      }}
                    >
                      <option value="Country">None</option>
                      {mainData.countryData.map((country) => {
                        return (
                          <>
                            <option key={country.id} value={country.name}>
                              {country.name}
                            </option>
                          </>
                        );
                      })}
                    </select>
                    
                    <div className="input">
                      {stateData.length > 0 && (
                        <>
                          <label htmlFor="state">State</label>
                          <select
                            name="state"
                            onChange={(e) => {
                              setState(e.target.value)
                              getStateIso(e.target.value);
                            }}
                          >
                            <option value="State">None</option>
                            {stateData?.map((state) => {
                              return (
                                <>
                                  <option key={state.id} value={state.name}>
                                    {state.name}
                                  </option>
                                </>
                              );
                            })}
                          </select>
                        </>
                      )}
                    </div>

                    <div className="input">
                      {cityData.length > 0 && (
                        <>
                          <label htmlFor="city">City</label>
                          <select
                            name="city"
                            onChange={(e) => {
                              setCity(e.target.value);
                              getCityId(e.target.value);
                            }}
                          >
                            <option value="City">None</option>
                            {cityData?.map((city) => {
                              return (
                                <>
                                  <option key={city.id} value={city.name}>
                                    {city.name}
                                  </option>
                                </>
                              );
                            })}
                          </select>
                        </>
                      )}
                    </div>
                    {/* <input
                      type="text"
                      className="w-full rounded-md p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                      onClick={() => setQuery("location")}
                      onChange={(e) => setTitle(e.target.value)}
                    /> */}

                    <h3 className="font-bold">Title</h3>
                    <input
                      type="text"
                      className="w-full rounded-md p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                      onClick={() => setQuery("title")}
                      onChange={(e) => setTitle(e.target.value)}
                    />

                    <h3 className="font-bold">Views</h3>
                    <div className="flex gap-3 flex-wrap">
                      {views.map((v, i) => {
                        return (
                          <span
                            className={`bg-gray-300 font-medium text-[15px] cursor-pointer whitespace-nowrap h-full flex justify-center rounded-3xl p-3 ${view == v.title
                              ? `rounded-md h-[8%]  bg-theme-color hover:opacity-[100%] items-center`
                              : ""
                              }`}
                            key={i}
                            onChange={(e) => setTitle(e.target.value)}
                            onClick={() => {
                              setQuery("view");
                              setView(v.title);
                            }}
                          >
                            {v.title}
                          </span>
                        );
                      })}
                    </div>

                    <h3 className="font-bold">Bedrooms</h3>
                    <div className="rounded-md">
                      <input
                        className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                        type="number"
                        min={0}
                        onChange={(e) => setTitle(e.target.value)}
                        onClick={() => setQuery("noOfBed")}
                      />
                    </div>

                    <h3 className="font-bold">Bathrooms</h3>
                    <div className="rounded-md">
                      <input
                        className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                        type="number"
                        min={0}
                        onChange={(e) => setTitle(e.target.value)}
                        onClick={() => setQuery("noOfBathroom")}
                      />
                    </div>

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
                      style={{
                        border: "none",
                        boxShadow: "none",
                        padding: "15px 10px",
                      }}
                      barLeftColor={theme.backgroundColor}
                      barInnerColor={theme.color}
                      barRightColor={theme.backgroundColor}
                      thumbLeftColor={theme.color}
                      thumbRightColor={theme.color}
                    />

                    <div className="flex gap-5 w-full mb-5 items-center">
                      <input
                        type="number"
                        className="border-2 p-2 w-[50%]"
                        placeholder={minValue}
                        onChange={(e) => setTitle(e.target.value)}
                        onClick={() => setQuery("noOfBathroom")}
                      />
                      <span className="font-bold text-[15px]">-</span>
                      <input
                        type="number"
                        className="border-2 p-2 w-[50%]"
                        onChange={(e) => setTitle(e.target.value)}
                        onClick={() => setQuery("noOfBathroom")}
                        placeholder={maxValue}
                      />
                    </div>

                    <MainButton
                      width="100%"
                      padding="24px 12px"
                      onClick={() => {
                        searchListing();
                      }}
                    >
                      Apply Filter{" "}
                      {loader && (
                        <SpinnerCircular
                          color="white"
                          className="mr-4"
                          secondaryColor={theme.color}
                          size={50}
                          thickness={150}
                        />
                      )}
                    </MainButton>
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
                  <Input
                    placeholder="search desired locations"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Search
                    width="30px"
                    onClick={(e) => searchListing(title)}
                    className="cursor-pointer"
                  />
                </SearchC>
                <FilterBox onClick={() => showPage()}>
                  <MainButton width="60px">Filter</MainButton>
                  <Adjustments width="30px" />
                </FilterBox>
              </SearchSection>
              <Text>One search is all it takes</Text>
            </HeroSection>
          </Background>

          <Body ref={up}>
            <Text fontSize="1rem" fontWeight="700" color="black">
              Luxury Properties For Sale
            </Text>
            {loader && (
              <SpinnerCircular
                color="white"
                className="flex justify-center"
                secondaryColor={theme.color}
                size={50}
                thickness={150}
              />
            )}
            {loading ? (
              <>
                <SpinnerCircular
                  color="white"
                  className="flex justify-center"
                  secondaryColor={theme.color}
                  size={50}
                  thickness={150}
                />
              </>
            ) : (
              <GridContainer>
                {!loader &&
                  title &&
                  list.length > 0 &&
                  list.map((items) => {
                    return (
                      <>
                        <Listing key={items._id} list={items} />
                      </>
                    );
                  })}
                {!loader && title && list.length == 0 && (
                  <p className="font-bold text-base md:text-xl">
                    No list found
                  </p>
                )}
                {!loader &&
                  !title &&
                  listing.length > 0 &&
                  listing.map((items) => {
                    return (
                      <>
                        <Listing key={items._id} list={items} />
                      </>
                    );
                  })}
              </GridContainer>
            )}
            <PaginationButtons
              range={[1, 2, 3]}
              pagination={3}
              page={page}
              setPage={setPage}
              loading={loading}
              setLoading={setLoading}
              getTotalData={getTotalData}
              background={theme.color}
            />
          </Body>
          <Banner category="Real Estate" />
          <Text color="black" fontSize="0.8rem" margin="2em">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Indulge in opulence with King David Elites. Our online marketplace
            boast a collection of exquiste, high-end properties that exude
            luxury living.From stunning homes to sprawling estates and opulent
            apartment, our offering cater to all your residential,investment and
            for-profit needs. Our secure payment system ensures hassle-free
            transactions, with the option to transfer funds directly to verified
            vendors or through our 1% transaction fee escrow account which
            further secures your funds and grants you access to our team of
            experts who provide professional advisory services and arranges
            luxurious property inspection, setting a new standardof class and
            sophistication.
          </Text>
          <Footer />
        </>
      )}
    </>
  );
};

export default RealEstateListing;
