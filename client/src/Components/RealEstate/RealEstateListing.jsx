import { Search } from 'heroicons-react'
import React from 'react'
import {
  Background,
  HeroSection,
  SearchSection,
  SearchC,
  Input,
  Text,
  Body
} from '../../Components/Cars/Cars.Style'
import Navbar from '../Navbar/Navbar'
import realEstatePics from './Image/real-estate-pics.jpg'
import { EstateProperties, PropertyType } from './RealEstate.Style'
import MOCK_DATA from './MOCK_DATA'

const RealEstateListing = () => {
  return (
    <>
      <Navbar/>
      <Background imageUrl={realEstatePics} >
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
            MOCK_DATA.map((items) => {
              return (
                <RealEstate key={items.id} {...items} />
              )
            })
          }
        </EstateProperties>
      </Body>
    </>
  )
}

export default RealEstateListing

const RealEstate = ({ propertyName, image }) => {
  return (
    <>
      <PropertyType>
        <img src={image} alt="Image" />
      </PropertyType>
    </>
  )
}