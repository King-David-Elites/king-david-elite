import React from 'react'
import { 
  Background,
  HeroSection,
  SearchSection,
  SearchC,
  Input,
  Text,
  FilterBox,
  Body,CarTypes,
  CarType,
  Dealer,
  PicDealer,
  PicCar,
  Position,
  Reaction
} from './Cars.Style'
import Navbar from '../Navbar/Navbar'
import carpic from './Image/carpic.jpg'
import MainButton from "../buttons/MainButton"
import {
  Search,
  Adjustments,
  BadgeCheck,
  LocationMarkerOutline,
  Heart
} from "heroicons-react"
import {CarAPI} from "./DemoAPI/api"

const CarsListing = () => {
  return (
    <>
      <Navbar/>

      <Background imageUrl={carpic}>
        <HeroSection>
          <Text fontSize="2rem">Luxury Cars</Text>          
          <SearchSection>
            <SearchC>
              <Input placeholder='search makes or model'/>
              <Search width="30px"/>
            </SearchC>   
            <FilterBox>
              <MainButton width="60px">Filter</MainButton>               
              <Adjustments width ="30px"/>
            </FilterBox>               
          </SearchSection>
          <Text>find new and preowned cars for sale</Text>
        </HeroSection>          
      </Background>

      <Body>        
        <Text fontSize="1rem" fontWeight="700" color="black">Explore Luxury Cars</Text>
        <CarTypes>
          {
            CarAPI.map((items)=>{
              return (
                <Car key={items.id} {...items}/> 
              )
            })            
          }          
        </CarTypes>
      </Body>
    </>
  )
}

export default CarsListing

const Car = (props) =>{
 var {
    DealerPic, 
    DealerName, 
    CarPic, 
    Loved, 
    Description,
    price,
    location
  } = props

  return(
    <>
      <CarType>
        <Dealer>
          <PicDealer 
          src={DealerPic} 
          alt={DealerName}                    
          />
          <Text fontSize="0.8rem"color="black">{DealerName}</Text>
          <BadgeCheck color="blue" width="30px"/>
        </Dealer>      
        <PicCar imageUrl={CarPic}>
          <div style={{
            width:"100%",
            display:"flex", 
            justifyContent:"flex-start"
          }}>
            <Reaction>
              {
                Loved ? 
                <Heart color="#FFDF00"/>
                :
                <Heart color="white"/>
              }
            </Reaction>
          </div>
          <div style={{
            width:"100%",
            display:"flex", 
            justifyContent:"flex-end"
          }}>
            <Reaction                             
              radius="0em" 
              padding="1em 3em"
            >
              <Text fontSize="0.8em ">ViewMore</Text>
            </Reaction>
          </div>
        </PicCar>  
        <Text color="black" fontWeight="700">{Description}</Text>        
        <Text color="black" fontWeight="700" fontSize="0.8rem">{price}</Text>
        <Position>
          <LocationMarkerOutline width="20px"/>
          <Text color="black" fontSize="0.8rem">{location}</Text>
        </Position>
        <MainButton 
          width="10em" 
          height="3em" 
          fontSize="0.8rem"
          marginTop="2em"
        >
          Enquire Now
        </MainButton>
      </CarType>
    </>
  )
}