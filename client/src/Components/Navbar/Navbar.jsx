import React from 'react'
import { Header, UL, LI, ULI, LogoText, Brand } from './Navbar.Style'
import { MainOutlineButton } from '../buttons/MainButton'
import kde_whiteBg from './Image/kde_whiteBg.png'
import { Link } from 'react-router-dom'
import theme from '../../application/utils/Theme';

const Navbar = ({bg, sticky}) => {
    
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
            <Header bg={bg} sticky={sticky}>
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
                        <Link to="/real-estate" style={{
                            color: "inherit",
                            textDecoration: "None"
                        }}>                                                            
                            <LI>                            
                                REAL ESTATE                            
                            </LI>
                        </Link>
                        {
                            
                        }
                        <Link to="/cars" style={{
                            color: "inherit",
                            textDecoration: "None"
                        }}>                                                            
                            <LI color={theme.color}>                            
                                CARS                            
                            </LI>
                        </Link>
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