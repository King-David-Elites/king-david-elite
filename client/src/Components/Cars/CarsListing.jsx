import React from "react";
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
import Navbar from "../Navbar/Navbar";
import MainButton from "../buttons/MainButton";
import Banner from "../Banner/Banner";
import {
  Search,
  Adjustments,
  BadgeCheck,
  LocationMarkerOutline,
  HeartOutline,
  Heart,
} from "heroicons-react";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import useContextAPI from "../ContextAPI/ContextAPI";
import { GridContainer } from "../Listing/Listing.styled";
import Listing from "../Listing/Listing";
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

  useEffect(() => {
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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;King
        David Elites Luxury Cars Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Ratione recusandae numquam, nam cum repudiandae hic
        omnis, nostrum, quae eius provident reiciendis cumque nemo veritatis
        quidem accusamus molestiae doloribus? Nulla, error! Quis similique
        corrupti porro reiciendis dolore ipsa nobis mollitia explicabo,
        voluptatibus quibusdam illum perferendis libero est iusto ab, maxime
        quam natus nihil qui itaque harum? Magni harum itaque labore! Optio.
        Quasi molestias consequatur earum enim dolorem rem excepturi illo eius
        ut sint laborum quibusdam, accusamus ullam, voluptatum totam tempora
        eum! Optio ipsum maiores saepe officiis delectus minus. Alias, voluptas
        fuga? Doloremque quos eum libero deleniti ducimus suscipit mollitia
        consequatur neque perspiciatis, autem ipsa deserunt facilis numquam
        veritatis nulla quidem esse officiis inventore rerum adipisci, velit
        ipsam dolorum saepe? Exercitationem, esse!
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
