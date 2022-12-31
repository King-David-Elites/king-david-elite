import React, { Fragment, useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Background, HeroSection, Text } from '../Cars/Cars.Style'
import { useNavigate } from 'react-router-dom'
import bg from "./images/k1.jpg"
import c1 from "./images/c1.jpg"
import c2 from "./images/c2.jpg"
import c3 from "./images/c3.jpg"
import c4 from "./images/c4.jpg"
import { BorderText, Categories, CategoriesContainer, Category, Information, InformationContainer, SubFooter } from './Home.Style'
import business from "./images/business.jpg"
import coffee from "./images/coffee.jpg"
import blur from "./images/blur.jpg"


const scrollToRef = (ref) => {
  window.scrollTo(0, ref.current.offsetTop)
}

const HomePage = () => {
  const navigate = useNavigate()
  const position = useRef(null)

  const categories = [
    {
      bg: c1,
      title: "Real Estate",
      link: "/real-estate"
    },
    {
      bg: c4,
      title: "Automobiles",
      link: "/cars"
    },
    {
      bg: c3,
      title: "Luxury Services",
      isComingSoon: true
    },
    {
      bg: c2,
      title: "Collectibles",
      isComingSoon: true
    },
  ]
  return (
    <Fragment>
      <Navbar active={0} />
      <Background imageUrl={bg}>
        <HeroSection>
          <Text fontSize="96px">
            <h3 className='font-bold'>LUXURY <span className='text-[#F2BE5C] font-bold'>REDEFINED</span></h3>

          </Text>
          <Text>
            The Greatest Luxury Is Freedom Of All Forms.
          </Text>
          <div className='btn'>
            <button onClick={() => {
              setTimeout(() => {
                scrollToRef(position)
              }, 1000);
            }}>Explore</button>
            <button className='btn_app'>Download App</button>
          </div>


        </HeroSection>
      </Background>

      <CategoriesContainer>
        <div className='mt-16 mx-11 text-md font-semibold md:mx-24 md:text-lg'>Categories</div>
        <Categories ref={position}>
          {
            categories.map((category, index) => {
              return (
                <Category onClick={() => {
                  navigate(category?.link)
                }} bg={category.bg} key={index}>
                  <div className='text-white flex flex-col mt-60 ml-5 md:mt-[18em] md:ml-7 font-semibold md:text-lg text-sm'>{category.title.toUpperCase()}  {
                    category.isComingSoon == true && <p className='italic text-sm text-[#A6A6A6]'>Coming Soon</p>
                  }</div>

                </Category>
              )
            })
          }
        </Categories>
      </CategoriesContainer>

      {/* <div className='h-[auto] w-[20%] overflow-hidden'>
        <img className='w-[100%] block duration-150	hover:scale-125' src={c3} alt="not found" />
      </div> */}

      <InformationContainer>
        <Information>
          <div className="image">
            <img src={business} alt="" />
            <div className="displace" />
          </div>

          <div className="textContent">
            <h3>Get To Know Us</h3>
            <p className='p'>Every Brand have an interesting story to tell.
              Find out more about us.</p>

            <div className="action">
              Read More
            </div>
          </div>
        </Information>

        <Information>

          <div className="Elite">
            <h4 className='md:font-bold md:text-lg font-semibold text-base'>The Elite NewsLetter</h4>
            <p>Let’s keep you updated with what’s trending inLuxury.</p>

            <form action="">
              <input type="email" placeholder='E-mail' />
              <div className="btn">Subscribe</div>
            </form>
          </div>

          <div className="coffee image">
            <img className='img_coffee' src={coffee} alt="" />
          </div>

        </Information>
      </InformationContainer>

      <SubFooter bg={blur}>
        <Text fontSize="24px">
          <p className='sub-p1'>
            Take your brand to the next level as a <span className='text-[#F2BE5C] font-bold'>Luxury Affiliate Vendor</span></p>
        </Text>
        <Text fontSize="14px">
          <p className='sub-p2'>
            Make extra earnings today by gaining access to the most exclusive list of real estate properties and automobiles within the country and beyond sourced by the King David Elites team.</p>
        </Text>
        <BorderText>
          COMING SOON....
        </BorderText>
      </SubFooter>

      <Footer />
    </Fragment>

  )
}

export default HomePage