import React, { Fragment, useRef, useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Background, HeroSection, Text } from "../Categories/Cars/Cars.Style";
import { useNavigate } from "react-router-dom";
import { ImArrowUpRight2 } from "react-icons/im";
import c1 from "./images/zac-gudakov-ztWpwTEx728-unsplash.jpg";
import c2 from "./images/colletibles.jpg";
import c3 from "./images/luxury.jpg";
import c4 from "./images/c4.jpg";
import {
  BorderText,
  Categories,
  CategoriesContainer,
  Category,
  Information,
  InformationContainer,
  SubFooter,
  BlogContainer,
  Blog,
} from "./Home.Style";
import business from "./images/business.jpg";
import coffee from "./images/coffee.jpg";
import blur from "./images/blur.jpg";
import {
  graduallyAppear,
  graduallyDisAppear,
  HomeAnimation,
} from "../Categories/Cars/AnimationOrder";
import { motion } from "framer-motion";
import { BlogContent } from "./BlogContent";
import Scroller from "./Scroller";
import MainButton from "../buttons/MainButton";
import globalApi from "../../api";
import axios from "axios";
import { setConfig } from "../../infrastructure/api/user/userRequest";
import services from "../../ioc/services";
import Loader from "../Loader/Loader";

const HomePage = () => {
  const navigate = useNavigate();
  const position = useRef(null);
  const [homeId, setHomeId] = useState(1);
  const [animation, setAnimation] = useState(graduallyAppear);
  const [loader, setLoader] = useState(false);
  const [value, setValue] = useState({
    email: "",
  });

  const categories = [
    {
      bg: c1,
      title: "Real Estate",
      link: "/real-estate",
    },
    {
      bg: c4,
      title: "Automobiles",
      link: "/cars",
    },
    {
      bg: c3,
      title: "Luxury Services",
      link: "/luxury-service",
    },
    {
      bg: c2,
      title: "Collectibles",
      link: "/collectible",
    },
  ];

  const exploreAnimation = {
    opacity: [0, 1],
    y: [-50, 0],
    transition: {
      duration: 0.5,
    },
  };

  const handleExploreButtonClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const subscribe = () => {
    setLoader(true);
    const subscribeURL = `${globalApi}/wait-list`;
    axios
      .post(subscribeURL, value, setConfig())
      .then((resp) => {
        services.toast.success(resp.data.message);
        setLoader(loader);
      })
      .catch((err) => services.toast.error(err));
  };

  useEffect(() => {
    var timer1;
    var timer2;
    timer1 = setTimeout(() => {
      if (homeId < HomeAnimation.length) {
        clearTimeout(timer2);
        clearTimeout(timer1);
        setAnimation(graduallyDisAppear);
        timer2 = setTimeout(() => {
          setHomeId(homeId + 1);
          setAnimation(graduallyAppear);
        }, [400]);
      } else if (homeId === HomeAnimation.length) {
        clearTimeout(timer2);
        clearTimeout(timer1);
        setAnimation(graduallyDisAppear);
        timer2 = setTimeout(() => {
          setHomeId(1);
          setAnimation(graduallyAppear);
        }, [500]);
      }
    }, [6000]);
  }, [homeId]);

  return (
    <Fragment>
      {loader && <Loader />}
      <Navbar active={0} />
      
      <Background>
        {HomeAnimation.map((item) => {
          if (item.id === homeId) {
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
          <Text fontSize="75px">
            <h3 className="font-bold">
              LUXURY <span className="text-[#F2BE5C] font-bold">REDEFINED</span>
            </h3>
          </Text>
          <Text>Luxury is a mindset, KDE is all you need.</Text>
          <div className="btn">
            <motion.button
              onClick={handleExploreButtonClick}
              animate={exploreAnimation}
            >
              Explore
            </motion.button>
            <button className="btn_app">Download App</button>
          </div>
        </HeroSection>
      </Background>

      <CategoriesContainer>
        <div className="mt-16 mx-11 text-base font-medium md:mx-24 md:text-lg">
          Categories
        </div>

        <Categories ref={position}>
          {categories.map((category, index) => {
            return (
              <Category
                onClick={() => {
                  navigate(category?.link);
                }}
                bg={category.bg}
                key={index}
              >
                <div className="text-white flex flex-col h-full ml-5 justify-end md:ml-7 font-semibold md:text-lg text-sm">
                  {category.title.toUpperCase()}{" "}
                  {category.isComingSoon === true && (
                    <p className="italic text-sm text-[#A6A6A6]">Coming Soon</p>
                  )}
                </div>
              </Category>
            );
          })}
        </Categories>
      </CategoriesContainer>

      <InformationContainer>
        <Information>
          <div className="image">
            <img src={business} alt="" />
            <div className="displace" />
          </div>

          <div className="textContent">
            <h3 className="md:font-bold md:text-lg font-semibold text-base">
              Get To Know Us
            </h3>
            <p className="p">Every Brand have an interesting story to tell.</p>
            <p className="p mt-[-0.7em]">Find out more about us.</p>

            <MainButton
              onClick={() => navigate("/about")}
              color="black"
              width="120px"
              padding="24px 12px"
            >
              READ MORE
            </MainButton>
          </div>

          <div className="coffee image md:hidden block">
            <img className="img_coffee" src={coffee} alt="" />
          </div>
        </Information>

        <Information>
          <div className="Elite">
            <h3 className="md:font-bold md:text-lg font-semibold text-center text-base">
              The Elite NewsLetter
            </h3>
            <p>Let’s keep you updated with what’s trending inLuxury.</p>

            <div className="flex">
              <input
                type="email"
                placeholder="E-mail"
                className="mr-4 focus:outline-theme-color"
                onChange={(e) => setValue({ ...value, email: e.target.value })}
              />

              {value["email"] === "" && (
                <MainButton
                  width="132px"
                  color="black"
                  className=" cursor-not-allowed"
                  padding="24px 12px"
                >
                  SUBSCRIBE
                </MainButton>
              )}
              {value["email"].length > 0 && (
                <MainButton
                  width="132px"
                  color="black"
                  padding="24px 12px"
                  onClick={() => subscribe()}
                >
                  SUBSCRIBE
                </MainButton>
              )}
            </div>
          </div>

          <div className="coffee image md:block hidden">
            <img className="img_coffee" src={coffee} alt="" />
          </div>
        </Information>
      </InformationContainer>

      <BlogContainer>
        <div className="lt">Latest Blogs</div>
        <div className="blogrw">
          <Scroller id="blog">
            {BlogContent.map((blog, i) => {
              return (
                <>
                  <Blog key={i}>
                    <div className="image">
                      <img src={blog.img} alt="blog" />
                    </div>
                    <div className="topic">
                      <p>{blog.topic}</p>
                    </div>
                    <div className="more">
                      <p>Learn more</p>
                      <ImArrowUpRight2 size="15px" color="#F2BE5C" />
                    </div>
                  </Blog>
                </>
              );
            })}
          </Scroller>
        </div>
      </BlogContainer>

      <SubFooter bg={blur}>
        <Text fontSize="24px">
          <p className="sub-p1">
            Take your brand to the next level as a{" "}
            <span className="text-[#F2BE5C] font-bold">
              Luxury Affiliate Marketer
            </span>
          </p>
        </Text>
        <Text fontSize="14px">
          <p className="sub-p2">
            Make extra earnings today by gaining access to the most exclusive
            list of real estate properties and automobiles within the country
            and beyond sourced by the King David Elites team.
          </p>
        </Text>
        <BorderText>COMING SOON....</BorderText>
      </SubFooter>

      <Footer />
    </Fragment>
  );
};

export default HomePage;
