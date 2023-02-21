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
import { EstateProperties, PropertyType } from "./RealEstate.Style";
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

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const RealEstateListing = () => {
  const top = useRef(null);
  const { listing, setListing } = useContextAPI();

  useEffect(() => {
    scrollToRef(top);
  }, []);

  const [estateId, setEstateId] = useState(1);
  const [animation, setAnimation] = useState(graduallyAppear);
  const [filter, setFilter] = useState(false);
  const [title, setTitle] = useState('');

  const searchListingByTitle = () => {
    axios.get(`${globalApi}/listings/user-listing?id=${title}`, setConfig())
      .then(resp => { console.log(resp) })
      .catch(err => console.log(err))
  }

  // useEffect(()=>{
  //   searchListingByTitle()
  // }, [globalApi])

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
              <Search width="30px" onClick={(e) => searchListingByTitle(title)} />
            </SearchC>
            <div className="flex flex-col justify-center items-center">
              <FilterBox onClick={() => setFilter(!filter)}>
                <MainButton width="60px">Filter</MainButton>
                <Adjustments width="30px" />
              </FilterBox>
              {
                filter == true &&
                <ul className='mt-[2px] shadow-md shadow-gray-300 rounded-md p-1 md:p-2 overflow-hidden bg-white cursor-pointer max-h-[180px] overflow-y-auto w-[100%]'>
                  <p>No of Bathroom</p>
                  <hr />
                  <p>No of toilets</p>
                  <hr />
                  <p>Most recent</p>
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
        <GridContainer>
          {listing.length > 0 ? listing.map((items) => {
            return (
              // <RealEstate key={items._id} {...items} />
              <Listing key={items._id} list={items} />
            );
          }) : <p>No Real Estate Listing available</p>
          }
        </GridContainer>
      </Body>
      <Banner category="Real Estate" />
      <Text color="black" fontSize="16px" margin="5%">
        King David Elite Luxury Real Estate Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Adipiscing ornare mattis non pellentesque
        justo dolor, nunc, pharetra. Nulla arcu dignissim ut sem laoreet eget
        arcu rhoncus bibendum. Ac, hendrerit purus libero, pretium.
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
