import React from 'react'
import { Fragment } from 'react'
import { Background, HeroSection, Text } from '../Cars/Cars.Style';
import Generic from '../ContactUs/Generic';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { GlobalContainer } from './About.Styled';
import bg from "./assets/bg.jpg";

const Earning = () => {
    const content = [
        `1. The individual agents/realtors: This group benefits from the platform by listing properties
        independently sourced or the properties sourced by KDE (although, affiliate registration would be required
        ) and making sales of these properties to earn a commission from the developers. This package goes for a $20 monthly subscription fee.`,

        `2. The corporate bodies/registered companies (could be sole proprietorship or a real
        estate/automobile brokerage) : This group benefits from the platform in two ways. They can list andmake sales of their properties on the platform whether they happen to be a developer or realty firm. Secondly, they also have the privilege of forwarding their listings to KDE(if they happen to be
        developers) and these listings would be made available to our affiliate realtors who would in turn market these properties to their audience/customer base. They would in turn earn a commission
            from the developers who would also have accumulated profits from the marginal increase in sales. This package goes for a $100 monthly subscription fee`,

            `3. The buyers/investors : Since properties on the KDE platform are to be listed in dollar equivalents, this group benefits from the platform by buying properties listed on the platform at any point in time, holding the property till the value of the dollar or the value of the property is perceived to have
            increased and then selling off the property to make a sizeable profit margin or converting the
            property to such that generates passive income e.g renting out of real estate property or car rentals. This type of investment shields the buyer/investor from inflation/deflation, provides capital
            appreciation and is definitely much more secure than keeping huge sums of money in the bank whereseveral charges keep being deducted for inexplicable reasons. This package is only chargeable when buyers/investors request for KDE assistance with virtual tours, property inspection and evaluation or deal closing by our legal teams.`
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

export default Earning