import React from 'react'
import { Background,HeroSection,SearchSection,Text } from './Cars.Style'
import Navbar from '../Navbar/Navbar'
import carpic from './Image/carpic.jpg'

const CarsListing = () => {
  return (
    <>
      <Navbar/>
      <Background imageUrl={carpic}>
        <HeroSection>
          <Text>Luxury Cars</Text>
          <SearchSection></SearchSection>
        </HeroSection>          
      </Background>
    </>
  )
}

export default CarsListing