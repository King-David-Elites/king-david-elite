import React from 'react'
import { FooterSection, Section, List, Head, MobileFooter } from './Footer.Style';
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const redirectToTwitter = () => {
        window.location.replace('https://twitter.com/kingdavidelites')
    }

    const redirectToFaceebook = () => {
        window.location.replace('https://facebook.com/kingdavidelites')
    }

    const redirectToInstagram = () => {
        window.location.replace('https://www.instagram.com/kingdavidelites/');
    }
    return (
        <>
            <FooterSection>
                <Section>
                    <Head>King David Elites</Head>
                    <List onClick={() => navigate('/about')}>About</List>
                    <List>Team</List>
                    <List onClick={() => navigate('/help')}>Contact Us</List>
                    <List>Terms And Conditions</List>
                    <div className='icon-bigScreen'>
                        <BsTwitter className='border-circle-bigScreen cursor-pointer' onClick={redirectToTwitter} size={40} color="white" />
                        <FaInstagram onClick={redirectToInstagram} className='border-circle-bigScreen cursor-pointer' size={40} color="white" />
                        <FaFacebookF className='border-circle-bigScreen cursor-pointer' onClick={redirectToFaceebook} size={40} color="white" />
                    </div>
                </Section>
                <Section>
                    <Head>Categories</Head>
                    <List onClick={() => navigate('/real-estate')}>Real Estates</List>
                    <List onClick={() => navigate('/cars')}>Cars</List>
                </Section>
                <Section>
                    <Head>Business</Head>
                    <List>Affiliate Marketing</List>
                    <List>List With Us</List>
                </Section>
                <Section>
                    <Head>Social Media</Head>
                    <List onClick={redirectToTwitter}>Facebook</List>
                    <List onClick={redirectToInstagram}>Instagram</List>
                    <List onClick={redirectToTwitter}>Twitter</List>
                    <List>LinkedIn</List>
                </Section>


            </FooterSection>

            <MobileFooter>
                <div className='footer-wrapper'>
                    <h3>KING DAVID ELITES</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <div className='icons'>
                        <BsTwitter onClick={redirectToTwitter} className='border-circle' size={40} color="white" />
                        <FaInstagram onClick={redirectToInstagram} className='border-circle' size={40} color="white" />
                        <FaFacebookF onClick={redirectToFaceebook} className='border-circle' size={40} color="white" />
                    </div>
                </div>

                <Section>
                    <Head>CATEGORIES</Head>
                    <List onClick={() => navigate('/real-estate')}>REAL ESTATES</List>
                    <List onClick={() => navigate('/cars')}>CARS</List>
                </Section>
                <Section>
                    <Head>BUSINESS</Head>
                    <List>AFFILIATE MARKETING</List>
                    <List>LIST WITH US</List>
                </Section>
                <Section>
                    <Head>SOCIAL MEDIA</Head>
                    <List onClick={redirectToTwitter}>FACEBOOK</List>
                    <List onClick={redirectToInstagram}>INSTAGRAM</List>
                    <List onClick={redirectToTwitter}>TWITTER</List>
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