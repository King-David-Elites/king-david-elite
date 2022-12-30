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
import carpic from "./Image/carpic.jpg";
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

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const CarsListing = ({mainData}) => {
  const top = useRef(null);  
  useEffect(() => {
    scrollToRef(top);
  }, []);
  return (
    <>
      <Navbar active={1} />
      <Background imageUrl={carpic} ref={top}>
        <HeroSection>
          <Text fontSize="2rem">Luxury Cars</Text>
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
          Explore Luxury Cars
        </Text>
        <CarTypes>
          {mainData.listing
            .filter((i) => i.carCondition)
            .map((items) => {
              return <Car key={items._id} {...items} />;
            })}
        </CarTypes>
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
