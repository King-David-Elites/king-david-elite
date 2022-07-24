import React from 'react'
import {Header,UL,LI,ULI,LogoText,Brand} from './Navbar.Style'
import kde_whiteBg from './Image/kde_whiteBg.png'
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
                        <LI>HOME</LI>
                        <LI>
                            CATEGORIES
                            <ULI>
                                <LI>Real Estate</LI>
                                <LI>Yachts</LI>
                                <LI>Hotels</LI>
                                <LI>Cars</LI>
                                <LI>Jets</LI>
                                <LI>Airplanes</LI>
                                <LI>Watches & Jelwelry</LI>                                
                            </ULI>
                        </LI>
                        <LI>ABOUT</LI>
                        <LI>AFFILIATE</LI>
                    </UL>
                </div>   
                               
            </Header>            
        </>
    )
}

export default Navbar