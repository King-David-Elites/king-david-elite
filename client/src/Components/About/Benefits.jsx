import React from 'react'
import { Fragment } from 'react'
import { Background, HeroSection, Text } from '../Categories/Cars/Cars.Style'
import Generic from '../ContactUs/Generic';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar'
import { GlobalContainer } from './About.Styled';
import bg from "./assets/bg.jpg";

const Benefits = () => {
    const content = [
        `1. You become a member of the safest online marketplace

        2. KDE uses tech to ensure that listed items meet certain required standard before it is granted access to be listed on the KDE platform.
        
        3. Simplified User Interface: The ease of the KDE platform usage is top notch. You literally gain access to the best properties in the country within a few clicks from our homepage. 
        
        4. The KDE brand is such that interacts with buyers and vendors to ensure that transactions being made on our platform is favorable for all parties involved. 
        
        5. KDE helps genuine vendors reach their target market while also helping earnest buyers meet genuine and trustworthy vendors.`
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
                    content.map((_, i) => {
                        return (
                            <Text key={i} color="#252625"
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