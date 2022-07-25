import React from 'react'
import {Header,UL,LI,ULI,LogoText,Brand} from './Navbar.Style'
import {MainOutlineButton} from '../buttons/MainButton'
import kde_whiteBg from './Image/kde_whiteBg.png'
import {Link} from 'react-router-dom'
const Navbar = () =>{

    return(
        <>
            <Header>  
                <Brand>
                    <div style={{width:"3em", height:"auto"}}>
                        <img src={kde_whiteBg} 
                        width="100%"  
                        heigth="100%"
                        alt="brandlogo"/>
                    </div>                    
                    <LogoText>KING DAVID ELITES</LogoText>
                </Brand>            
                <div>
                    <UL>
                        <Link to="/" style={{   
                            color:"inherit",                         
                            textDecoration:"None"
                        }}>
                            <LI>HOME</LI>
                        </Link>                        
                        <LI>
                            CATEGORIES
                            <ULI>
                                <LI>Real Estate</LI>
                                <LI>Yachts</LI>
                                <LI>Hotels</LI>
                                <LI>
                                   <Link to="/cars" style={{
                                       color:"inherit",
                                        textDecoration:"None"
                                       }}>
                                        Cars
                                   </Link> 
                                </LI>
                                <LI>Jets</LI>
                                <LI>Airplanes</LI>
                                <LI>Watches & Jelwelry</LI>                                
                            </ULI>
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