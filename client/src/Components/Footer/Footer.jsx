import React from 'react'
import {FooterSection,Section,Text} from './Footer.Style';
const Footer = () =>{
    return(
        <>
            <FooterSection>
                <Section>
                    <Text fontSize="1rem" fontWeight="700">King David Elites</Text>
                    <Text>About</Text>
                    <Text>Team</Text>
                    <Text>Contact Us</Text>
                    <Text>Terms And Conditions</Text>
                </Section>
                <Section>
                    <Text fontSize="1rem" fontWeight="700">Categories</Text>
                    <Text>Real Estates</Text>
                    <Text>Cars</Text>                                
                </Section>
                <Section>
                    <Text fontSize="1rem" fontWeight="700">Business</Text>
                    <Text>Affiliate Marketing</Text>
                    <Text>List With Us</Text>                    
                </Section>
                <Section>
                    <Text fontSize="1rem" fontWeight="700">Social Media</Text>
                    <Text>Facebook</Text>
                    <Text>Instagram</Text>
                    <Text>Twitter</Text>
                    <Text>LinkedIn</Text>
                </Section>
            </FooterSection>            
        </>
    )
}

export default Footer;