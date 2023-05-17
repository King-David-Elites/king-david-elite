import React, { useRef, useEffect, useState, useCallback } from "react";
import { Fragment } from "react";
import MainButton from "../buttons/MainButton";
import { Background, HeroSection, Text } from "../Categories/Cars/Cars.Style";
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
} from "../Categories/Cars/AnimationOrder";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const About = () => {
  const top = useRef(null);

  useEffect(() => {
    scrollToRef(top);
  }, []);

  const [aboutId, setAboutId] = useState(1);
  const [animation, setAnimation] = useState(graduallyAppear);

  const animate = useCallback(() => {
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
    }, [8000])
  }, [aboutId])

  useEffect(() => {
    animate()
  }, [animate]);


  return (
    <Fragment>
      <Navbar active={5} />
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
          <div className="md:font-extrabold font-normal md:text-[6em] text-[48px] text-[#FFFF]">ABOUT</div>
          <Text color="#F2BE5C" fontSize="16px">Discover a world of unrivaled luxury where every offer and purchase is an experience to savor.</Text>
        </HeroSection>
      </Background>

      <Flex padding="5em">
        <GlobalContainer>
          <Text color="black" padding="5px 0" fontSize='24px' font-weight='500'>
            About KDE Platform
          </Text>

          <Text color="black" padding="0px 0" fontSize="40px" className="w-[359.7px] md:w-[540px] font-semibold">
            A Luxury Market And Networking Platform For All
          </Text>

          <Text color="rgb(145,145,145)" padding="20px 0">
            The King David Elites marketplace is where you find only the most exclusive and highest quality real estate, automobiles, luxury services, and collectibles. Our mission is to provide an unparalleled shopping experience for discerning customers seeking the very best in life.
            Our curated selection of offerings is carefully chosen by our team of experts, ensuring that only the most luxurious and desirable items are made available to our valued customers. From stunning properties and rare collectibles, to lavish experiences and the finest automobiles, we have something for every discerning taste. Thank you for choosing us as your go-to destination for all things luxury.
          </Text>

          <div className="flex justify-center md:justify-start">
            <MainButton width="180px" height='50px' padding='24px 12px' color="black">Get Started<HiOutlineArrowNarrowRight className="ml-3" size={20} /></MainButton>
          </div>

        </GlobalContainer>

        <GlobalContainer padding='0em 2em'>
          <StackedImage width="32em" height="27.5em">
            <img src={frame} alt="" />
            <div className="bg-theme-color top-[-2em] md:top-[-2.5em] right-[-2em] md:right-[-3em] w-[15em] md:w-[21em] h-[30em] absolute rounded-md  mt-[-0.6em] z-[-1] md:mt-0">
            </div>
          </StackedImage>
        </GlobalContainer>
      </Flex>

      <Flex padding="5em">
        <GlobalContainer>
          <div className="md:flex w-[100px] h-[180px] hidden md:left-[4em] md:w-[35em] md:h-[30.5em] relative ">
            <img src={frame2} alt="" className="w-full h-full" />
            <div className="bg-[#252625] top-[2em] md:top-[2em] left-[-2em] md:left-[-5em] w-[15em] md:w-[21em] h-[27em] absolute rounded-md z-[-1]">
            </div>
          </div>
        </GlobalContainer>

        <GlobalContainer width="70%">
          <Text color="black" padding="0px 0" fontSize="40px" className="w-[359.7px] md:w-[540px] font-semibold">
            Reasons For Our Establishment
          </Text>

          <Text color="rgb(145,145,145)"  padding="10px 3px" >
            We established our luxury multivendor online marketplace with the belief that life's most precious moments deserve only the very best. Whether it's finding the perfect home to create lasting memories, indulging in the finer things in life, or treating yourself to a once-in-a-lifetime experience, we are dedicated to helping you elevate your every day.
            Thank you for entrusting us with your luxury needs and allowing us to be a part of your journey.
          </Text>

          <div className="flex justify-center md:justify-start">
            <MainButton background="black" width="180px" height='50px' padding='24px 12px' border="black">
              Read More
              <HiOutlineArrowNarrowRight className="ml-3" size={20} color='#F2BE5C' />
            </MainButton>
          </div>
        </GlobalContainer>

        <GlobalContainer>
          <div className="md:hidden w-[17em] h-[27.5em] flex left-[3em]  relative ">
            <img src={frame2} alt="" className="w-full h-full rounded " />
            <div className="bg-[#252625] top-[2em]  left-[-2em] w-[15em] h-[24em] absolute z-[-1]">
            </div>
          </div>
        </GlobalContainer>
      </Flex>

      <GlobalContainer>

      </GlobalContainer>
      <Generic />
      <Footer />
    </Fragment>
  );
};

export default About;
