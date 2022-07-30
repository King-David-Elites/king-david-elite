import React from 'react'
import {FooterSection,Section,List,Head} from './Footer.Style';
const Footer = () =>{
    return(
        <>
            <FooterSection>
                <Section>
                    <Head>King David Elites</Head>
                    <List>About</List>
                    <List>Team</List>
                    <List>Contact Us</List>
                    <List>Terms And Conditions</List>
                </Section>
                <Section>
                    <Head>Categories</Head>
                    <List>Real Estates</List>
                    <List>Cars</List>                                
                </Section>
                <Section>
                    <Head>Business</Head>
                    <List>Affiliate Marketing</List>
                    <List>List With Us</List>                    
                </Section>
                <Section>
                    <Head>Social Media</Head>
                    <List>Facebook</List>
                    <List>Instagram</List>
                    <List>Twitter</List>
                    <List>LinkedIn</List>
                </Section>
            </FooterSection>            
        </>
    )
}

export default Footer;