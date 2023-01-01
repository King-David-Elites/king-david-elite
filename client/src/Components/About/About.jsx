import React, { useRef, useEffect } from "react";
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
import { graduallyAppear } from "../Cars/AnimationOrder";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const About = () => {
  const top = useRef(null);

  useEffect(() => {
    scrollToRef(top);
  }, []);
  return (
    <Fragment>
      <Navbar active={3} />
      <Background ref={top}>
        <motion.div
          className="bgImage"
          variants={graduallyAppear}
          initial="hidden"
          animate="visible"
        >
          <img src={bg} alt="luxury homes" />
        </motion.div>
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
            Our platform is a luxury market and networking platform that seeks
            to provide a meeting place for luxury buyers and sellers to carry
            out their transactions. It is designed such that every verified user
            involved in the luxury transactions on the platform can earn a
            substantial amount of income either actively or passively ranging
            from the luxury realtors to the buyers or the investors.
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
            For a very long time, there has not been a platform that has been
            specially dedicated to the luxury market as most of the earlier
            created platforms have been generalized. This has hindered smooth
            networking and ease of transactions between the luxury buyers and
            their sellers. Hence, this platform was created to provide solutions
            to the aforementioned.
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
