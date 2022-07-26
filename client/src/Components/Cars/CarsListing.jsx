import React from 'react'
import { 
  Background,
  HeroSection,
  SearchSection,
  Search,
  Input,
  Text,
  FilterBox
} from './Cars.Style'
import Navbar from '../Navbar/Navbar'
import carpic from './Image/carpic.jpg'
import MainButton from "../buttons/MainButton"

const CarsListing = () => {
  return (
    <>
      <Navbar/>
      <Background imageUrl={carpic}>
        <HeroSection>
          <Text fontSize="2rem">Luxury Cars</Text>          
          <SearchSection>
            <Search>
              <Input placeholder='search makes or model'/>
            </Search>   
            <FilterBox>
              <MainButton>filter</MainButton>     
            </FilterBox>               
          </SearchSection>
          <Text>find new and preowned cars for sale</Text>
        </HeroSection>          
      </Background>
    </>
  )
}

export default CarsListing