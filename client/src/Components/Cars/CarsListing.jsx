import React from 'react'
import { 
  Background,
  HeroSection,
  SearchSection,
  Search,
  Input,
  Text 
} from './Cars.Style'
import Navbar from '../Navbar/Navbar'
import carpic from './Image/carpic.jpg'

const CarsListing = () => {
  return (
    <>
      <Navbar/>
      <Background imageUrl={carpic}>
        <HeroSection>
          <Text>Luxury Cars</Text>          
          <SearchSection>
            <Search>
              <Input placeholder='search makes or model'/>
            </Search>            
          </SearchSection>
        </HeroSection>          
      </Background>
    </>
  )
}

export default CarsListing