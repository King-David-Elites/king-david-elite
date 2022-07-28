import React from 'react'
import { 
  Background,
  HeroSection,
  SearchSection,
  SearchC,
  Input,
  Text,
  FilterBox,
  Body,CarTypes,CarType
} from './Cars.Style'
import Navbar from '../Navbar/Navbar'
import carpic from './Image/carpic.jpg'
import MainButton from "../buttons/MainButton"
import {Search,Adjustments} from "heroicons-react"
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

const Car = ({car}) =>{
  return(
    <>
      <CarType>
        <h2>{car}</h2>
      </CarType>
    </>
  )
}