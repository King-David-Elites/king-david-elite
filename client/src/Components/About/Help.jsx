import { ChevronRight } from 'heroicons-react'
import React from 'react'
import { Fragment } from 'react'
import { HeroSection , Text} from '../Categories/Cars/Cars.Style'
import { Background} from './Help.style'
import Generic from '../ContactUs/Generic'
import Footer from '../Footer/Footer'
import { HelpNavigator } from '../Globals/Styled'
import Navbar from '../Navbar/Navbar'
import { Flex, GlobalContainer } from './About.Styled'
import bg from "./assets/help.jpg"
import {Link,useNavigate } from 'react-router-dom'

const Help = () => {
    const navigate = useNavigate()
  return (
    <Fragment>
        <Navbar />
        <Background
            className='bg_help'
            style={{
                backgroundImage:`url(${bg})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                width:'100vw',
                height:'100vh',
                backgroundRepeat:'no-repeat'
            }}>
            <HeroSection>
                    <h1>
                        Help Centre
                    </h1>
                    <p>
                        All you need to know about King David ELites
                    </p>
            </HeroSection>
        </Background>

        <Flex>
            <GlobalContainer width="70%">

                <div>
                    <h1>Frequently Asked Questions</h1>
                    <p>  
                      Can’t find the answer you are looking for ? Reach out to our
                      <Link to="/" >
                        <span> Customer Support </span>
                      </Link>
                      team</p>
                </div>

            </GlobalContainer>

            <GlobalContainer width="100%">
 
                <HelpNavigator onClick={()=> navigate("benefits")}>
                    <GlobalContainer>
                        <div>
                            <h5>
                                KDE BENEFITS
                            </h5>

                            <p>
                                What are the benefits the KDE platform provides ?
                            </p>

                        </div>
                    </GlobalContainer>
                    <ChevronRight />
                </HelpNavigator>

                <HelpNavigator onClick={()=> navigate("earning")}>
                    <GlobalContainer>
                        <div>
                            <h5>
                                EARNINGS
                            </h5>

                            <p>
                                How does KDE operate and what does it require to earn from this platform
                            </p>
                        </div>
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