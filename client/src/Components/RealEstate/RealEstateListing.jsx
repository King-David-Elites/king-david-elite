import { BadgeCheck, Heart, HeartOutline, Search } from 'heroicons-react'
import React from 'react'
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

const RealEstateListing = () => {
  
  return (
    <>
      <Navbar active={0}/>
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
    DealerPic,
    DealerName,
    image,
    propertyName,    
    price,
    Loved,
    location
  } = props
  const [love, setLove] = useState(Loved)
  const navigate = useNavigate()
  
  return (
    <>
      <PropertyType>
        <Dealer>
          <PicDealer
            src={DealerPic}
            alt={DealerName}
          />
          <Text fontSize="0.8rem" color="black">{DealerName}</Text>
          <BadgeCheck color="blue" width="30px" />
        </Dealer>
        <PicCar imageUrl={image}>
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
              onClick={()=> navigate(`${propertyName}`)}
            >
              <Text fontSize="0.8em ">ViewMore</Text>
            </Reaction>
          </div>
        </PicCar>
        <Text color="black" fontWeight="900" fontSize="0.8rem">{price}</Text>
        <Text color="black" fontWeight="700">{propertyName}</Text>
        <Position>
          <Text color="black" fontSize="0.8rem">{location}</Text>
        </Position>
        <MainButton
          width="10em"
          height="3em"
          fontSize="0.8rem"
          marginTop="2em"
          onClick={()=> navigate(`${propertyName}`)}
        >
          Enquire Now
        </MainButton>
      </PropertyType>
    </>
  )
}