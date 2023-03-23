import React, { useCallback } from "react";
import { useState } from "react";
import {
  Background,
  HeroSection,
  SearchSection,
  SearchC,
  Input,
  Text,
  FilterBox,
  Body,
  CarTypes,
  CarType,
  Dealer,
  PicDealer,
  PicCar,
  Position,
  Reaction,
} from "./Cars.Style";
import Navbar from "../../Navbar/Navbar";
import MainButton from "../../buttons/MainButton";
import Banner from "../../Banner/Banner";
import {
  Search,
  Adjustments,
  BadgeCheck,
  LocationMarkerOutline,
  HeartOutline,
  Heart,
} from "heroicons-react";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import useContextAPI from "../../ContextAPI/ContextAPI";
import { GridContainer } from "../../Listing/Listing.styled";
import Listing from "../../Listing/Listing";
import { CarAnimation, graduallyAppear, graduallyDisAppear } from "./AnimationOrder";
import { motion } from "framer-motion";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const CarsListing = ({ mainData }) => {
  const top = useRef(null);
  useEffect(() => {
    scrollToRef(top);
  }, []);

  const { setCars, cars } = useContextAPI();
  const [carId, setCarId] = useState(1);
  const [animation, setAnimation] = useState(graduallyAppear)

  const animate = useCallback(()=>{
    var timer1
    var timer2
    timer1 = setTimeout(() => {
      if (carId < CarAnimation.length) {
        clearTimeout(timer2)
        clearTimeout(timer1)
        setAnimation(graduallyDisAppear)
        timer2 = setTimeout(() => {
          setAnimation(graduallyAppear)
          setCarId(carId + 1)
        }, [500])
      }
      else if (carId === CarAnimation.length) {
        clearTimeout(timer2)
        clearTimeout(timer1)
        setAnimation(graduallyDisAppear)
        timer2 = setTimeout(() => {
          setAnimation(graduallyAppear)
          setCarId(1)
        }, [500])
      }
    },[8000])
  },[carId])

  useEffect(() => {
    animate()
  },[animate])  

  return (
    <>
      <Navbar active={2} />
      <Background ref={top}>
        {CarAnimation.map((item) => {
          if (item.id === carId) {
            return (
              <motion.div
                className="bgImage"
                variants={animation}
                initial="hidden"
                animate="visible"
              >
                <img src={item.img} alt="cars" />
              </motion.div>
            );
          }
        })}
        <HeroSection>
          <Text fontSize="2rem">Luxury Automobiles</Text>
          <SearchSection>
            <SearchC>
              <Input placeholder="search makes or model" />
              <Search width="30px" />
            </SearchC>
            <FilterBox>
              <MainButton width="60px">Filter</MainButton>
              <Adjustments width="30px" />
            </FilterBox>
          </SearchSection>
          <Text fontSize="0.8em">find new and preowned cars for sale</Text>
        </HeroSection>
      </Background>

      <Body>
        <Text fontSize="1rem" fontWeight="700" color="black">
          Explore Luxury Automobiles
        </Text>

        <GridContainer>
          {
            cars.length > 0 ?
              cars.map((items) => {
                return (
                  // <RealEstate key={items._id} {...items} />
                  <Listing key={items._id} list={items} />
                );
              })
              : <h4 className="md:text-lg text-sm font-semibold italic">No Automobile listing available</h4>
          }

        </GridContainer>
      </Body>
      <Banner category="Cars" />
      <Text color="black" fontSize="0.8rem" margin="2em">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Discover the epitome of luxury automobile with King David Elites. Our Platform offers a collection of exclusive high-end vehicles, including sleek sport cars and powerful SUVs, taliored to the society's elite. Our easy and secure payment system allows for direct transfer to verified vendors or though our 1% transaction fee escrow account, which comes with professional check-ups and luxurious inspection services by our expert technicians. Make a lasting statement whereveryou go with our unparalleled selection. At King David Elites, our standard of class is unmatched, and our dedication to luxury is unparalleled. 
      </Text>
      <Footer />
    </>
  );
};

export default CarsListing;

const Car = (props) => {
  var {
    _id,
    title,
    location,
    description,
    images,
    price,
    year,
    price,
    year,
    carCondition,
    engineType,
    colour,
    features,
    model,
    postedBy,
  } = props;
  const [love, setLove] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <CarType>
        <Dealer>
          <PicDealer src={postedBy?.profilePicture} alt={postedBy?.firstName} />
          <Text fontSize="0.8rem" color="black">
            {postedBy?.firstName + " " + postedBy?.lastName}
          </Text>
          <BadgeCheck color="blue" width="30px" />
        </Dealer>
        <PicCar imageUrl={images[0]}>
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
        <Text color="black" fontWeight="700">
          {title}
        </Text>
        <Text color="black" fontWeight="700" fontSize="0.8rem">
          {price}
        </Text>
        <Position>
          <LocationMarkerOutline width="20px" />
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
      </CarType>
    </>
  );
};
