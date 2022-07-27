import React from 'react'
import { 
  Background,
  HeroSection,
  SearchSection,
  Search,
  Input,
  Text
} from '../../Components/Cars/Cars.Style'
import Navbar from '../Navbar/Navbar'
import realEstatePics from './Image/real-estate-pics.jpg'


const RealEstateListing = () => {
  return (
    <>
      <Navbar/>
      <Background imageUrl={realEstatePics} >
        <HeroSection>
          <Text fontSize="2rem">Luxury Real Estate</Text>          
          <SearchSection>
            <Search>
              <Input placeholder='search desired locations'/>
            </Search>                  
          </SearchSection>
          <Text>One search is all it takes</Text>
        </HeroSection>          
      </Background>
    </>
  )
}

export default RealEstateListing