import React from 'react'
import { Header, UL, LI, ULI, LogoText, Brand } from './Navbar.Style'
import { MainOutlineButton } from '../buttons/MainButton'
import kde_whiteBg from './Image/kde_whiteBg.png'
import { Link, useNavigate } from 'react-router-dom'
import theme from '../../application/utils/Theme';
import { useState } from 'react'

const Navbar = ({bg, sticky, active}) => {

    const navigate = useNavigate()
    
    const navOptions = [
        {
            title: "REAL ESTATE",
            link: "/real-estate"
        },
        {
            title: "CARS",
            link: "/cars"
        },
        {
            title: "ABOUT",
            link: "/about",
        },
        {
            title: "AFFILIATE",
            link: "/affiliate"
        }
    ]

    

    return (
        <>
            <Header bg={bg} sticky={sticky}>
                <Brand onClick={()=> navigate("/")}>
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
                        {
                            navOptions.map((nav, i)=>{
                                return(
                                    <LI 
                                    key={i}
                                    onClick={()=> navigate(nav.link)}
                                    
                                    >
                                        <div className={active === i && "item-active"}>
                                           {nav.title} 
                                        </div>
                                        
                                    </LI>
                                )
                            })
                        }
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