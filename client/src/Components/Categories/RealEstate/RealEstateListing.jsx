import {
  Adjustments,
  Search,
  ChevronLeft,
  ChevronDoubleLeft,
  ChevronRight,
  ChevronDoubleRight,
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
import { SearchSection, SearchC, PaginationButtons } from "./RealEstate.Style";
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
import { getListings } from "../../../infrastructure/api/user/userRequest";
import { motion } from "framer-motion";
import { setConfig } from "../../../infrastructure/api/user/userRequest";
import globalApi from "../../../api";
import theme from "../../../application/utils/Theme";
import { BiArrowBack } from "react-icons/bi";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const RealEstateListing = () => {
  const top = useRef(null);
  const [listing, setListing] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  let totalListing = 0;
  const [buttonRange, setButtonRange] = useState([1, 2, 3]);
  const PAGINATION = 3;
  const [flipRight, setFlipRight] = useState(false);
  const [flipLeft, setFlipLeft] = useState(false);
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
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [previous, setPrevious] = useState(false);
  const [next, setNext] = useState(false);

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
    resetPage(page);
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

  useEffect(() => {
    setButtonRange(resetButtonRange(buttonRange));
  }, [flipRight, flipLeft]);

  const resetButtonRange = (buttonRange) => {
    let mockButtonRange = buttonRange;
    for (var i = 0; i < buttonRange.length; i++) {
      if (flipRight) {
        mockButtonRange = [
          buttonRange[0] + 1,
          buttonRange[1] + 1,
          buttonRange[2] + 1,
        ];
        setFlipRight(false);
        break;
      } else if (flipLeft) {
        mockButtonRange = [
          buttonRange[0] - 1,
          buttonRange[1] - 1,
          buttonRange[2] - 1,
        ];
        setFlipLeft(false);
        break;
      }
    }
    return mockButtonRange;
  };

  const resetPage = async (page) => {
    setLoading(true);
    setPage(page);
    totalListing = await getListings(
      page,
      "real-estate",
      setListing,
      setLoading
    );
    let pageValue = 0;

    if (totalListing !== 0) {
      if (totalListing % PAGINATION > 0) {
        pageValue = Math.floor(totalListing / PAGINATION) + 1;
      } else if (totalListing % PAGINATION === 0) {
        pageValue = totalListing / PAGINATION;
      }
    } else {
      pageValue = totalListing;
    }
    setTotalPage(pageValue);
  };

  useEffect(() => {
    if (page > 1 && page < buttonRange.length) {
      console.log(totalPage);
      setPrevious(true);
    } else if (page === 1) {
      setPrevious(false);
    }
    if (page === 1 || page <= buttonRange.length) {
      setStart(false);
    } else if (page > buttonRange.length && page <= totalPage) {
      setStart(true);
      setPrevious(true);
    }
    if (totalPage > buttonRange.length) {
      setNext(true);
      setEnd(true);
    }
    if (page === totalPage) {
      setNext(false);
      setEnd(false);
    }
  }, [page, totalPage]);

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
      {stage == 1 && (
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
              {/* <select className="w-full p-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none focus:border-theme-color">
              <option>Location</option>
              <option>Laravel 9 with React</option>
              <option>React with Tailwind CSS</option>
              <option>React With Headless UI</option>
            </select> */}
              <h3 className="font-bold">Location</h3>
              <input
                type="text"
                className="w-full rounded-md p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                onClick={() => setQuery("location")}
                onChange={(e) => setTitle(e.target.value)}
              />

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
                      className={`bg-gray-300 font-medium text-[15px] cursor-pointer whitespace-nowrap h-full flex justify-center rounded-3xl p-3 ${
                        view == v.title
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

      {stage == 0 && (
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
                    <input
                      type="text"
                      className="w-full rounded-md p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                      onClick={() => setQuery("location")}
                      onChange={(e) => setTitle(e.target.value)}
                    />

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
                            className={`bg-gray-300 font-medium text-[15px] cursor-pointer whitespace-nowrap h-full flex justify-center rounded-3xl p-3 ${
                              view == v.title
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

          <Body>
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

            <PaginationButtons>
              {/* <div
                className={start ? "button" : "disable"}
                onClick={() => {
                  if (start) {
                    resetPage(1);
                    setButtonRange([1,2,3])
                  }
                }}
              >
                <ChevronDoubleLeft />
              </div> */}
              <div
                className={previous ? "button" : "disable"}
                onClick={() => {
                  if (page === buttonRange[0] && previous) {
                    setFlipLeft(true);
                  }
                  if (previous) {
                    resetPage(page - 1);
                  }
                }}
              >
                <ChevronLeft />
              </div>
              {buttonRange.map((item, i) => {
                return (
                  <>
                    <div
                      className={
                        page === buttonRange[i] ? "button" : "unselect"
                      }
                      onClick={() => {
                        resetPage(buttonRange[i]);
                      }}
                    >
                      {item}
                    </div>
                  </>
                );
              })}
              <div
                className={next ? "button" : "disable"}
                onClick={() => {
                  if (page === buttonRange[buttonRange.length - 1] && next) {
                    setFlipRight(true);
                  }
                  if (next) {
                    resetPage(page + 1);
                  }
                }}
              >
                <ChevronRight />
              </div>
              {/* <div
                className={end ? "button" : "disable"}
                onClick={() => {
                  if (end) {
                    resetPage(totalPage);
                    setButtonRange([totalPage-2,totalPage-1,totalPage])
                  }
                }}
              >
                <ChevronDoubleRight />
              </div> */}
            </PaginationButtons>
          </Body>
          <Banner category="Real Estate" />
          <Text color="black" fontSize="0.8rem" margin="2em" textAlign="center">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Indulge in opulence with King David Elites. Our online marketplace
            boast a collection of exquiste, high-end properties that exude
            luxury living.From stunning homes to sprawling estates and opulent
            apartment,our offering cater to all your residential,investment and
            for-profit needs. Our secure payment system ensures hassle-free
            transactions, with the option to transfer funds directly to verifies
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
