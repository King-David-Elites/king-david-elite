import { BadgeCheck, Heart, HeartOutline, Search } from 'heroicons-react'
import React, {useRef, useEffect} from 'react'
import {
  Background,
  HeroSection,
  Input,
  Text,
  Body,    
  Dealer,
  PicDealer,
  PicCar,
  Reaction,
  Position
} from '../Cars/Cars.Style'
import { SearchSection, SearchC  } from './RealEstate.Style';
import Navbar from '../Navbar/Navbar'
import realEstatePics from './Image/real-estate-pics.jpg'
import { EstateProperties, PropertyType } from './RealEstate.Style'
import { useState } from 'react'
import Banner from "../Banner/Banner"
import { MOCK_DATA } from './MOCK_DATA'
import MainButton from '../buttons/MainButton'
import Footer from "../Footer/Footer"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import globalApi from '../../api';
import Listing from '../Listing/Listing';
import { GridContainer } from '../Listing/Listing.styled';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const RealEstateListing = () => {

  const [listing, setListing] = useState([])

  const getListings = ()=>{
    axios.get(`${globalApi}/listings/all?page=1`)
    .then(resp => setListing(resp.data.listings))
    .catch(err => console.error(err))
  }

  useEffect(()=>{
    getListings()
  }, [])
  
  const top = useRef(null)

  useEffect(() => {
    scrollToRef(top)
  }, [])
  return (
    <>
      <Navbar active={0}/>
      <Background imageUrl={realEstatePics} ref={top} >
        <HeroSection>
          <Text fontSize="2rem">Luxury Real Estate</Text>
          <SearchSection>
            <SearchC>
              <Input placeholder='search desired locations' />
              <Search width="30px" />
            </SearchC>
          </SearchSection>
          <Text>One search is all it takes</Text>
        </HeroSection>
      </Background>

      <Body>
        <Text fontSize="1rem" fontWeight="700" color="black">Luxury Properties For Sale</Text>
        <GridContainer>
          {
            listing.filter(i => !i.carCondition).map((items) => {
              return (
                // <RealEstate key={items._id} {...items} />
                <Listing key={items._id} list={items}/>
              )
            })
          }
  
        </GridContainer>        
      </Body>
      <Banner category="Real Estate"/>        
      <Text color="black" fontSize="16px" margin="5%">
        King David Elite Luxury Real Estate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing ornare mattis non pellentesque justo dolor, nunc, pharetra. Nulla arcu dignissim ut sem laoreet eget arcu rhoncus bibendum. Ac, hendrerit purus libero, pretium. 
      </Text>
      <Footer />
    </>
  )
}

export default RealEstateListing

const RealEstate = (props) => {
  var {
    _id,
    title,
    location,
    features,
    description,
    images,
    videos,
    available,
    price,
    year,
    noOfBed,
    noOfBathroom,
    postedBy
  } = props
  const [love, setLove] = useState("Loved")
  const navigate = useNavigate()
  
  return (
    <>
      <PropertyType>
        <Dealer>
          <PicDealer
            src={postedBy.profilePicture}
            alt={postedBy.firstName}
          />
          <Text fontSize="0.8rem" color="black">{postedBy.firstName + " " + postedBy.lastName}</Text>
          <BadgeCheck color="blue" width="30px" />
        </Dealer>
        <PicCar imageUrl={images && images[0]}>
          <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start"
          }}>
            <Reaction
              onClick={() => {
                setLove(!love)
              }}
            >
              {
                love ?
                  <Heart color="#FFDF00" />
                  :
                  <HeartOutline color="yellow" />
              }
            </Reaction>
          </div>
          <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end"
          }}>
            <Reaction
              radius="0em"
              padding="1em 3em"
              onClick={()=> navigate(`${_id}`)}
            >
              <Text fontSize="0.8em ">ViewMore</Text>
            </Reaction>
          </div>
        </PicCar>
        <Text color="black" fontWeight="900" fontSize="0.8rem">{price}</Text>
        <Text color="black" fontWeight="700">{title}</Text>
        <Position>
          <Text color="black" fontSize="0.8rem">{location}</Text>
        </Position>
        <MainButton
          width="10em"
          height="3em"
          fontSize="0.8rem"
          marginTop="2em"
          onClick={()=> navigate("/dashboard/messages")}
        >
          Enquire Now
        </MainButton>
      </PropertyType>
    </>
  )
}