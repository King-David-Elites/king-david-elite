import React, { Fragment } from 'react'
import theme from '../../application/utils/Theme'
import PhotoButton from '../buttons/PhotoButton'
import MainButton, { MainOutlineButton } from '../buttons/MainButton'
import VideoButton from '../buttons/VideoButton'
import Navbar from '../Navbar/Navbar'
import Dashboard from '../Dashboard/Dashboard'
import Subfooter from './subfooter'
import Footer from '../Footer/Footer'
import { Background, HeroSection, Text } from '../Cars/Cars.Style'
// import './style.css' 
import bg from "./images/k1.jpg"
import c1 from "./images/c1.jpg"
import c2 from "./images/c2.jpg"
import c3 from "./images/c3.jpg"
import c4 from "./images/c4.jpg"
import c5 from "./images/c5.jpg"
import { BorderText, Categories, CategoriesContainer, Category, Information, InformationContainer, SubFooter } from './Home.Style'
import business from "./images/business.jpg"
import coffee from "./images/coffee.jpg"
import blur from "./images/blur.jpg"


const HomePage = () => {

  const categories = [
    {
      bg: c1,
      title: "Real Estate",
    },
    {
      bg: c2,
      title: "Yatch",
    },
    {
      bg: c3,
      title: "Hotels",
    },
    {
      bg: c4,
      title: "Cars",
    },
    
  ]
  return (
    <Fragment>
      <Navbar/>
      <Background imageUrl={bg}>
        <HeroSection>
          <Text fontSize="96px">
            Luxury Hub
          </Text>
          <Text>
            Elegance is a state of mind.
          </Text>
        </HeroSection>
      </Background>

      <CategoriesContainer>
        <Text>Categories</Text>

        <Categories>
          {
            categories.map((category, index)=> {
              return(
                <Category bg={category.bg} key={index}>
                  <Text fontSize="20px" fontWeight="600">{category.title}</Text>
                </Category>
              )
            })
          }
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
          <p>Every Brand have an interesting story to tell.
          Find out more about us.</p>

          <div className="action">
            Read More
          </div>
        </div>
      </Information>

      <Information>
        <div className="textContent">
          <h3>Elite Luxury NewsLetter</h3>
          <p>Let’s keep you updated with what’s trending inLuxury.</p>

          <form action="">
            <input type="email" placeholder='E-mail'/>
            <div className="btn">Subscribe</div>
          </form>
        </div>

        <div className="image">
          <img src={coffee} alt="" />
        </div>

      </Information>
      </InformationContainer>
   
      <SubFooter bg={blur}>
        <Text fontSize="24px">
          Let's help you make more money by becoming an Affiliate
        </Text>
        <Text fontSize="14px">
          King David Elite work closely with Affiliate Marketer that are compatible in terms of values and synergy.
        </Text>
        <BorderText>
          SIGN UP FOR AN INVITE
        </BorderText>
      </SubFooter>

      <Footer/>
    </Fragment>
    
  )
}

export default HomePage