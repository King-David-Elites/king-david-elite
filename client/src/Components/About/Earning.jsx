import React from 'react'
import { Fragment } from 'react'
import { Background, HeroSection, Text } from '../Categories/Cars/Cars.Style';
import Generic from '../ContactUs/Generic';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { GlobalContainer } from './About.Styled';
import bg from "./assets/bg.jpg";

const Earning = () => {
    const content = [
        `1. It is important to know that earning from the KDE platform is easy after you attain membership 

        2. To become a vendor, you are required to provide necessary details about yourself with valid documents to authenticate your identity on the KDE platform. As a corporate entity, you are required to provide valid documents pertaining to your business registration (certificates and operational licenses) as may be required by your line of practice. 
        
        3. You are required to pay a subscription fee only after successfully completing the verification process. You thereafter proceed to submit your listings for proper scrutiny. At KDE, we ensure that all listed items meet certain standard. 
        
        4. Vendors should endeavor to make themselves available after receiving message notifications from the KDE platform. 
        
        5. KDE employs escrow mode of payment. This implies that we serve as middleman on all transactions on our pnatform as a means to foster efficient delivery of services and security of funds between parties involved. This mode of payment also helps us identify earnest buyers and set them apart from window shoppers. Intending buyers can be required to make an intoual deposit of 10% of the property cost into the KDE account as commitment fee to indicate readiness for transaction. This payment is refundable if the transaction does not eventually fall through. 
        
        6. KDE reserves the right to negotiate and deduct inspection fees from intending buyers for vendors on certain occasions.`
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