import React from 'react'
import { FooterSection, Section, List, Head, MobileFooter } from './Footer.Style';
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <FooterSection>
                <Section>
                    <Head>King David Elites</Head>
                    <List>About</List>
                    <List>Team</List>
                    <List>Contact Us</List>
                    <List>Terms And Conditions</List>
                    <div className='icon-bigScreen'>
                        <BsTwitter className='border-circle-bigScreen' size={40} color="white" />
                        <FaLinkedinIn className='border-circle-bigScreen' size={40} color="white" />
                        <FaFacebookF className='border-circle-bigScreen' size={40} color="white" />
                    </div>
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

            <MobileFooter>
                <div className='footer-wrapper'>
                    <h3>KING DAVID ELITES</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <div className='icons'>
                        <BsTwitter className='border-circle' size={40} color="white" />
                        <FaLinkedinIn className='border-circle' size={40} color="white" />
                        <FaFacebookF className='border-circle' size={40} color="white" />
                    </div>
                </div>

                <Section>
                    <Head>CATEGORIES</Head>
                    <List>REAL ESTATES</List>
                    <List>CARS</List>
                </Section>
                <Section>
                    <Head>BUSINESS</Head>
                    <List>AFFILIATE MARKETING</List>
                    <List>LIST WITH US</List>
                </Section>
                <Section>
                    <Head>SOCIAL MEDIA</Head>
                    <List>FACEBOOK</List>
                    <List>INSTAGRAM</List>
                    <List>TWITTER</List>
                    <List>LINKEDIN</List>
                </Section>

                <div className='copywrite'>
                    <p>&copy; 2022 King David Elite. All rights reserved</p>
                </div>
            </MobileFooter>
        </>
    )
}

export default Footer;