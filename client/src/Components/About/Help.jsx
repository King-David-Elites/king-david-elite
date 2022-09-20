import { ChevronRight } from 'heroicons-react'
import React from 'react'
import { Fragment } from 'react'
import { Background, HeroSection, Text } from '../Cars/Cars.Style'
import Generic from '../ContactUs/Generic'
import Footer from '../Footer/Footer'
import { HelpNavigator } from '../Globals/Styled'
import Navbar from '../Navbar/Navbar'
import { Flex, GlobalContainer } from './About.Styled'
import bg from "./assets/bg.jpg"
import { useNavigate } from 'react-router-dom'

const Help = () => {
    const navigate = useNavigate()
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

        <Flex>
            <GlobalContainer width="70%">
                <Text color="#252625" fontSize="30px">
                    Frequently Asked Questions
                </Text>
                <Text color="#252625" padding="20px 0">
                Can’t find the answer you are looking for?Reach out to our Customer Support team
                </Text>
            </GlobalContainer>

            <GlobalContainer width="100%">
 
                <HelpNavigator onClick={()=> navigate("benefits")}>
                    <GlobalContainer>
                        <Text 
                        fontSize="16px"color="#252625">KDE BENEFITS</Text>
                        <Text color="#252625"
                        fontSize="12px">What are the benefits the KDE platform provides?</Text>
                    </GlobalContainer>
                    <ChevronRight />
                </HelpNavigator>

                <HelpNavigator onClick={()=> navigate("earning")}>
                    <GlobalContainer>
                        <Text color="#252625"
                        fontSize="16px">EARNING</Text>
                        <Text color="#252625"
                        fontSize="12px">How does KDE operate and what does it require to earn from this platform?</Text>
                    </GlobalContainer>
                    <ChevronRight />
                </HelpNavigator>
            </GlobalContainer>
        </Flex>
        <Generic />
        <Footer />
    </Fragment>
  )
}

export default Help