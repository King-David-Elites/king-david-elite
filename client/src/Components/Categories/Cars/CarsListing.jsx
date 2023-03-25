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
} from "./Cars.Style";
import Navbar from "../../Navbar/Navbar";
import MainButton from "../../buttons/MainButton";
import Banner from "../../Banner/Banner";
import {
  Search,
  Adjustments,  
} from "heroicons-react";
import Footer from "../../Footer/Footer";
import { useRef } from "react";
import { useEffect } from "react";
import { getListings } from "../../../infrastructure/api/user/userRequest";
import { GridContainer } from "../../Listing/Listing.styled";
import Listing from "../../Listing/Listing";
import { CarAnimation, graduallyAppear, graduallyDisAppear } from "./AnimationOrder";
import { motion } from "framer-motion";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const CarsListing = ( ) => {
  const top = useRef(null)  
  const [carId, setCarId] = useState(1);
  const [animation, setAnimation] = useState(graduallyAppear)
  const [listing, setListing] = useState([])
  const [page, setPage] = useState(1);

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
    scrollToRef(top);
    getListings(page,"cars",setListing)
  }, []);

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
            listing.length > 0 ?
              listing.map((items) => {
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