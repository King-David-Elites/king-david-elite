import React from 'react'
import { Header, UL, LI, ULI, LogoText, Brand } from './Navbar.Style'
import { MainOutlineButton } from '../buttons/MainButton'
import kde_whiteBg from './Image/kde_whiteBg.png'
import { Link } from 'react-router-dom'
import theme from '../../application/utils/Theme';

const Navbar = (element, index) => {
    
    const navOptions = [
        {
            title: "Real Estate",
            link: "/real-estate"
        },
        {
            title: "Cars",
            link: "/cars"
        },
    ]

    return (
        <>
            <Header>
                <Brand>
                    <div style={{ width: "4em", height: "auto" }}>
                        <img src={kde_whiteBg}
                            width="100%"
                            heigth="100%"
                            alt="brandlogo" />
                    </div>
                    <LogoText>KING DAVID ELITES</LogoText>
                </Brand>
                <div>
                    <UL>
                        <LI>
                            <Link to="/real-estate" style={{
                                color: "inherit",
                                textDecoration: "None"
                            }}>
                                REAL ESTATE
                            </Link>
                        </LI>
                        {
                            
                        }
                        <LI color={theme.color}>
                            <Link to="/cars" style={{
                                color: "inherit",
                                textDecoration: "None"
                            }}>
                                CARS
                            </Link>
                        </LI>
                        <LI>ABOUT</LI>
                        <LI>AFFILIATE</LI>
                        
                    </UL>
                </div>
                <Brand>
                    SELL
                    <MainOutlineButton>SIGN UP</MainOutlineButton>
                </Brand>
            </Header>
        </>
    )
}

export default Navbar