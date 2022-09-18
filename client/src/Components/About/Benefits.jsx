import React from 'react'
import { Fragment } from 'react'
import { Background, HeroSection, Text } from '../Cars/Cars.Style'
import Generic from '../ContactUs/Generic';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar'
import { GlobalContainer } from './About.Styled';
import bg from "./assets/bg.jpg";

const Benefits = () => {
    const content = [
        `1. KDE aims to help luxury buyers and sellers connect easily to ease their transaction process instead of being lost in a generalized market. `,

        `2. KDE helps all agents on the platform to earn active income as they earn commissions fromthe
        developers for every property that is sold by them.`,

        `3. KDE helps investors and buyers earn passive income as properties on the platform would be listedand sold in dollar equivalents. This would speed up the rate of capital appreciation as these properties
        are no longer “just properties” but would be regarded as investment properties and a shield against
        inflation or deflation. `,

        `4. KDE seeks to bring about luxury networking i.e newbies in the luxury market have the opportunity
        to meet with the experts and high net worth individuals on the platform through the general chat
        option on the platform. `,

        `5. KDE serves as a leverage opportunity for newbies in the luxury market to tap into the already
        established system KDE has built by becoming KDE affiliates and selling properties sourced by KDE andearning commissions from the developers of these properties.`
    ]
  return (
    <Fragment>
    <Navbar />
    <Background imageUrl={bg}>
        <HeroSection>
            <Text fontSize="96px" >
                Help
            </Text>
            <Text>
            All you need to know about King David Elite
            </Text>
        </HeroSection>
    </Background>

    <GlobalContainer width="70%" margin="70px auto">
        <Text color="black" fontSize="24px"
        textAlign="center">
        How does KDE operate and what does it require to earn from this platform
        </Text>
        <Text color="#000000" textAlign="center" padding="20px 0">This platform is open to three kinds of users:</Text>
            {
            content.map((_, i)=>{
                return(
                        <Text key={i}color="#252625"
                        padding="10px">
                            {_}
                        </Text>
                )
            })
        }
        
    </GlobalContainer>

    <Generic />
    <Footer />
</Fragment>
  )
}

export default Benefits