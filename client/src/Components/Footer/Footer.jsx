import React, { useEffect } from "react";
import {
  FooterSection,
  Section,
  List,
  Head,
  MobileFooter,
} from "./Footer.Style";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useContextAPI from "../ContextAPI/ContextAPI";

const Footer = () => {
  const navigate = useNavigate();
  const data = useContextAPI();  

  const redirectToTwitter = () => {
    window.location.replace("https://twitter.com/kingdavidelites");
  };

  const redirectToFaceebook = () => {
    window.location.replace("https://facebook.com/kingdavidelites");
  };

  const redirectToInstagram = () => {
    window.location.replace("https://www.instagram.com/kingdavidelites/");
  };

  const redirectToLinkedIn = () => {
    window.location.replace(
      "http://www.linkedin.com/in/king-david-elites-371804256"
    );
  };

  const token = localStorage.getItem("token");
  return (
    <>
      <FooterSection>
        <Section>
          <Head>King David Elites</Head>
          <List onClick={() => navigate("/about")}>About</List>
          <List>Team</List>
          <List onClick={() => navigate("/help")}>Contact Us</List>
          <List>Terms And Conditions</List>
          <div className="icon-bigScreen">
            <BsTwitter
              className="border-circle-bigScreen cursor-pointer"
              onClick={redirectToTwitter}
              size={40}
              color="white"
            />
            <FaInstagram
              onClick={redirectToInstagram}
              className="border-circle-bigScreen cursor-pointer"
              size={40}
              color="white"
            />
            <FaFacebookF
              className="border-circle-bigScreen cursor-pointer"
              onClick={redirectToFaceebook}
              size={40}
              color="white"
            />
            <FaLinkedinIn
              className="border-circle-bigScreen cursor-pointer"
              onClick={redirectToLinkedIn}
              size={40}
              color="white"
            />
          </div>
        </Section>
        <Section>
          <Head>Categories</Head>
          <List onClick={() => navigate("/real-estate")}>Real Estates</List>
          <List onClick={() => navigate("/cars")}>Cars</List>
          <List onClick={() => navigate("/luxury-service")}>
            Luxury Service
          </List>
          <List onClick={() => navigate("/collectible")}>Collectibles</List>
        </Section>
        <Section>
          <Head>Business</Head>
          <List>Affiliate Marketing</List>
          {token ? (
            <>
              {data.userData?.accountType === 0 && (
                <List onClick={() => navigate("/profile/upgrade")}>
                  List With Us
                </List>
              )}
            </>
          ) : (
            <>
              <List onClick={() => navigate("/login")}>List With Us</List>
            </>
          )}
        </Section>
        <Section>
          <Head>Social Media</Head>
          <List onClick={redirectToFaceebook}>Facebook</List>
          <List onClick={redirectToInstagram}>Instagram</List>
          <List onClick={redirectToTwitter}>Twitter</List>
          <List onClick={redirectToLinkedIn}>LinkedIn</List>
        </Section>
      </FooterSection>

      <MobileFooter>
        <div className="footer-wrapper">
          <h3>KING DAVID ELITES</h3>
          <p className="text-theme-color">Write your name in gold</p>
          <div className="icons">
            <BsTwitter
              onClick={redirectToTwitter}
              className="border-circle cursor-pointer"
              size={40}
              color="white"
            />
            <FaInstagram
              onClick={redirectToInstagram}
              className="border-circle cursor-pointer"
              size={40}
              color="white"
            />
            <FaFacebookF
              onClick={redirectToFaceebook}
              className="border-circle cursor-pointer"
              size={40}
              color="white"
            />
            <FaLinkedinIn
              className="border-circle cursor-pointer"
              onClick={redirectToLinkedIn}
              size={40}
              color="white"
            />
          </div>
        </div>

        <Section>
          <Head>CATEGORIES</Head>
          <List onClick={() => navigate("/real-estate")}>REAL ESTATES</List>
          <List onClick={() => navigate("/cars")}>CARS</List>
          <List onClick={() => navigate("/luxury-service")}>
            LUXURY SERVICES
          </List>
          <List onClick={() => navigate("/collectibles")}>COLLECTIBLES</List>
        </Section>
        <Section>
          <Head>BUSINESS</Head>
          <List>AFFILIATE MARKETING</List>
          {token ? (
            <>
              {data.userData?.accountType === 0 && (
                <List onClick={() => navigate("/profile/upgrade")}>
                  LIST WITH US
                </List>
              )}
            </>
          ) : (
            <>
              <List onClick={() => navigate("/login")}>LIST WITH US</List>
            </>
          )}          
        </Section>
        <Section>
          <Head>SOCIAL MEDIA</Head>
          <List onClick={redirectToFaceebook}>FACEBOOK</List>
          <List onClick={redirectToInstagram}>INSTAGRAM</List>
          <List onClick={redirectToTwitter}>TWITTER</List>
          <List onClick={redirectToLinkedIn}>LINKEDIN</List>
        </Section>

        <div className="copywrite">
          <p className="text-[15px]">
            &copy; {new Date().getFullYear()} King David Elite. All rights
            reserved
          </p>
        </div>
      </MobileFooter>
    </>
  );
};

export default Footer;
