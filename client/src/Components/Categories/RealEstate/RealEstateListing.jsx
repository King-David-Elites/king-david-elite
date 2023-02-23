import { Adjustments, BadgeCheck, Heart, HeartOutline, Search } from "heroicons-react";
import React, { useRef, useEffect } from "react";
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
  const [filter, setFilter] = useState(false);
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);
  const [query, setQuery] = useState("title");

  const options = [
    {
      Id: 0,
      title: "title"
    },
    {
      id: 1,
      title: "noOfBed"
    },
    {
      id: 2,
      title: "price"
    },
    {
      id: 3,
      title: "location"
    }
  ]

  const searchListingByLocation = () => {
    setQuery(query);
    setTitle(title);
    setLoader(true);
    axios.get(`${globalApi}/listings/search?${query}=${title}`, setConfig())
      .then(resp => {
        setList(resp.data)
        setLoader(false)
        console.log(resp)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
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
  return (
    <>
      <Navbar active={1} />
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
              <Search width="30px" onClick={(e) => searchListingByLocation(title)} className="cursor-pointer" />
            </SearchC>
            <div className="flex flex-col justify-center items-center">
              <FilterBox onClick={() => setFilter(!filter)}>
                <MainButton width="60px">Filter</MainButton>
                <Adjustments width="30px" />
              </FilterBox>
              {
                filter == true &&
                <ul className='mt-[2px] shadow-md shadow-gray-300 rounded-md p-1 md:p-2 overflow-hidden bg-white cursor-pointer max-h-[180px] overflow-y-auto w-[100%]'>
                  {
                    options.map((o) => {
                      return (
                        <>
                          <p onClick={() => { setQuery(o.title); setFilter(!filter) }}>{o.title.toUpperCase()}</p>
                          <hr />
                        </>
                      )
                    })
                  }
                </ul>
              }
            </div>

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
            !loader && title && list.length > 0 && list.map((items) => {
              return (
                // <RealEstate key={items._id} {...items} />
                <Listing key={items._id} list={items} />
              );
            })
          }

          {
            !loader &&  !title && listing.length > 0 && listing.map((items) => {
              return (
                // <RealEstate key={items._id} {...items} />
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
  );
};

export default RealEstateListing;

const RealEstate = (props) => {
  var {
    _id,
    title,
    location,
    features,
    description,
    images,
    videos,
    available,
    price,
    year,
    noOfBed,
    noOfBathroom,
    postedBy,
  } = props;
  const [love, setLove] = useState("Loved");
  const navigate = useNavigate();

  return (
    <>
      <PropertyType>
        <Dealer>
          <PicDealer src={postedBy.profilePicture} alt={postedBy.firstName} />
          <Text fontSize="0.8rem" color="black">
            {postedBy.firstName + " " + postedBy.lastName}
          </Text>
          <BadgeCheck color="blue" width="30px" />
        </Dealer>
        <PicCar imageUrl={images && images[0]}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Reaction
              onClick={() => {
                setLove(!love);
              }}
            >
              {love ? (
                <Heart color="#FFDF00" />
              ) : (
                <HeartOutline color="yellow" />
              )}
            </Reaction>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Reaction
              radius="0em"
              padding="1em 3em"
              onClick={() => navigate(`${_id}`)}
            >
              <Text fontSize="0.8em ">ViewMore</Text>
            </Reaction>
          </div>
        </PicCar>
        <Text color="black" fontWeight="900" fontSize="0.8rem">
          {price}
        </Text>
        <Text color="black" fontWeight="700">
          {title}
        </Text>
        <Position>
          <Text color="black" fontSize="0.8rem">
            {location}
          </Text>
        </Position>
        <MainButton
          width="10em"
          height="3em"
          fontSize="0.8rem"
          marginTop="2em"
          onClick={() => navigate("/dashboard/messages")}
        >
          Enquire Now
        </MainButton>
      </PropertyType>
    </>
  );
};
