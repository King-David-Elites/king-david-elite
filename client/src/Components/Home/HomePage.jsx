import React, { Fragment, useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Background, HeroSection, Text } from '../Cars/Cars.Style'
import { useNavigate } from 'react-router-dom'
// import './style.css' 
import bg from "./images/k1.jpg"
import c1 from "./images/c1.jpg"
import c2 from "./images/c2.jpg"
import c3 from "./images/c3.jpg"
import c4 from "./images/c4.jpg"
import { BorderText, Categories, CategoriesContainer, Category, Information, InformationContainer, SubFooter } from './Home.Style'
import business from "./images/business.jpg"
import coffee from "./images/coffee.jpg"
import blur from "./images/blur.jpg"
import CategoryScroller from './CategoryScroller'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
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
      bg: c2,
      title: "Yatch",
      link: "/yatch"
    },
    {
      bg: c3,
      title: "Hotels",
      link: "/hotels"
    },
    {
      bg: c4,
      title: "Cars",
      link: "/cars"
    },
  ]
  return (
    <Fragment>
      <Navbar active={0} />
      <Background imageUrl={bg}>
        <HeroSection>
          <Text fontSize="96px">
            <h3>Luxury <span>Hub</span></h3>

          </Text>
          <Text>
            The Greatest Luxury Is Freedom Of All Forms.
          </Text>
          <div className='btn'>
            <button onClick={() => {
              scrollToRef(position)
            }}>Explore</button>
            <button className='btn_app'>Download App</button>
          </div>


        </HeroSection>
      </Background>

      <CategoriesContainer>
        <Text>Categories</Text>
        <Categories ref={position}>
          <CategoryScroller id="category">
            {
              categories.map((category, index) => {
                return (
                  <Category onClick={() => {
                    navigate(category?.link)
                  }} bg={category.bg} key={index}>
                    <Text fontSize="20px" fontWeight="600">{category.title}</Text>
                  </Category>
                )
              })
            }
          </CategoryScroller>
        </Categories>
      </CategoriesContainer>

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
              <h4>Elite Luxury NewsLetter</h4>
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
            Let's help you make more money by becoming an <span>Affiliate</span></p>
        </Text>
        <Text fontSize="14px">
          <p className='sub-p2'>
            King David Elite work closely with Affiliate Marketer that are compatible in terms of values and synergy.</p>
        </Text>
        <BorderText>
          SIGN UP FOR AN INVITE
        </BorderText>
      </SubFooter>

      <Footer />
    </Fragment>

  )
}

export default HomePage