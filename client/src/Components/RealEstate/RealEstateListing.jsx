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
} from '..//Cars/Cars.Style'
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

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const RealEstateListing = () => {

  const [listing, setListing] = useState([])

  const getListings = ()=>{
    axios.get("https://kde.cyclic.app/listings/all")
    .then(resp => setListing(resp.data))
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
        <EstateProperties>
          {
            listing.filter(i => !i.carCondition).map((items) => {
              return (
                <RealEstate key={items._id} {...items} />
              )
            })
          }
  
        </EstateProperties>        
      </Body>
      <Banner category="Real Estate"/>        
      <Text color="black" fontSize="0.8rem" margin="2em">
        King David Elite Luxury Real Estate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing ornare mattis non pellentesque justo dolor, nunc, pharetra. Nulla arcu dignissim ut sem laoreet eget arcu rhoncus bibendum. Ac, hendrerit purus libero, pretium. Non nulla turpis ligula a nibh. Consectetur mattis lectus eget neque, massa convallis posuere ultrices netus. Sapien imperdiet turpis eget quisque consequat ut id nec, ultrices. Hac sed vitae aenean feugiat etiam aliquam pretium laoreet. Et scelerisque fames aliquam eu volutpat nisl, mi nulla integer. Nec ac ut mauris arcu nunc augue. Malesuada enim, vitae libero pulvinar viverra nulla elementum eros urna. Volutpat pharetra mattis blandit ipsum etiam. Sit tellus ultricies tortor in elementum lectus sed a. Amet nulla risus non gravida faucibus. Commodo venenatis odio at ultrices est feugiat. Pellentesque habitasse velit lectus sociis fames neque. Massa purus ultricies blandit eget hendrerit non viverra blandit ullamcorper. Sem facilisi neque faucibus accumsan hendrerit tempus, dui. Vitae quisque non, ut consectetur risus. Non amet proin ornare egestas commodo purus vitae. Ligula natoque arcu amet, sed facilisis eget id nisl in. Aliquam eu tincidunt blandit tempus turpis urna. Suspendisse elementum egestas sodales vitae morbi sapien molestie. Massa vel morbi sit ullamcorper nam. Ut mi neque ut diam. Amet congue tristique non imperdiet accumsan lectus vitae at. Ultrices neque, nunc ultrices eleifend at nibh id eget tortor. Sit auctor adipiscing ut pellentesque quam est magna tristique mauris. Ut augue nisl vel senectus accumsan velit lacinia orci, ac. Quis feugiat amet, donec sollicitudin fames ultricies etiam odio.
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
        <PicCar imageUrl={images[0]}>
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