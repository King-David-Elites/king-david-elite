import React, { useRef, useEffect, useState } from "react";
import { Fragment } from "react";
import MainButton from "../buttons/MainButton";
import { Background, HeroSection, Text } from "../Cars/Cars.Style";
import Generic from "../ContactUs/Generic";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import {
  AbsoluteImage,
  Flex,
  GlobalContainer,
  StackedImage,
} from "./About.Styled";
import bg from "./assets/bg.jpg";
import frame from "./assets/frame.jpg";
import frame2 from "./assets/frame2.jpg";
import { motion } from "framer-motion";
import {
  graduallyAppear,
  graduallyDisAppear,
  AboutAnimation,
} from "../Cars/AnimationOrder";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const About = () => {
  const top = useRef(null);

  useEffect(() => {
    scrollToRef(top);
  }, []);

  const [aboutId, setAboutId] = useState(1);
  const [animation, setAnimation] = useState(graduallyAppear);

  useEffect(() => {
    var timer1;
    var timer2;
    timer1 = setTimeout(() => {
      if (aboutId < AboutAnimation.length) {
        clearTimeout(timer2);
        clearTimeout(timer1);
        setAnimation(graduallyDisAppear);
        timer2 = setTimeout(() => {
          setAnimation(graduallyAppear);
          setAboutId(aboutId + 1);
        }, [500]);
      } else if (aboutId === AboutAnimation.length) {
        clearTimeout(timer2);
        clearTimeout(timer1);
        setAnimation(graduallyDisAppear);
        timer2 = setTimeout(() => {
          setAnimation(graduallyAppear);
          setAboutId(1);
        }, [500]);
      }
    }, [12000]);
  }, [aboutId]);
  return (
    <Fragment>
      <Navbar active={3} />
      <Background ref={top}>
        {AboutAnimation.map((item) => {
          if (item.id === aboutId) {
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
          <Text fontSize="96px">About</Text>
          <Text>Home/About</Text>
        </HeroSection>
      </Background>

      <Flex padding="100px 47px">
        <GlobalContainer>
          <Text color="black" padding="5px 0">
            About KDE Platform
          </Text>

          <Text color="black" padding="0px 0" fontSize="40px">
            A Luxury Market And Networking Platform For All
          </Text>

          <Text color="rgb(145,145,145)" padding="20px 0">
            The King David Elites marketplace is where you find only the most exclusive and highest quality real estate, automobiles, luxury services, and collectibles. Our mission is to provide an unparalleled shopping experience for discerning customers seeking the very best in life.
            Our curated selection of offerings is carefully chosen by our team of experts, ensuring that only the most luxurious and desirable items are made available to our valued customers. From stunning properties and rare collectibles, to lavish experiences and the finest automobiles, we have something for every discerning taste. Thank you for choosing us as your go-to destination for all things luxury.
          </Text>

          <MainButton width="282px">Get Started</MainButton>
        </GlobalContainer>

        <GlobalContainer>
          <StackedImage width="192px" height="282px">
            <img src={frame} alt="" />
            <AbsoluteImage
              color="yellow"
              top="-20px"
              right="20px"
              width="192px"
              height="282px"
            />
          </StackedImage>
        </GlobalContainer>
      </Flex>

      <Flex padding="100px 47px">
        <GlobalContainer>
          <StackedImage width="192px" height="282px">
            <img src={frame2} alt="" />
            <AbsoluteImage
              color="rgb(100,100,100)"
              top="20px"
              bottom="20px"
              right="-20px"
              width="192px"
              height="202px"
            />
          </StackedImage>
        </GlobalContainer>

        <GlobalContainer width="70%">
          <Text color="black" padding="5px 0">
            Reasons For Our Establishment
          </Text>

          <Text color="rgb(145,145,145)" padding="10px 0">
            We established our luxury multivendor online marketplace with the belief that life's most precious moments deserve only the very best. Whether it's finding the perfect home to create lasting memories, indulging in the finer things in life, or treating yourself to a once-in-a-lifetime experience, we are dedicated to helping you elevate your every day.
            Thank you for entrusting us with your luxury needs and allowing us to be a part of your journey.
          </Text>

          <MainButton background="black" width="50%" border="black">
            Read More
          </MainButton>
        </GlobalContainer>
      </Flex>

      <Generic />

      <Footer />
    </Fragment>
  );
};

export default About;
