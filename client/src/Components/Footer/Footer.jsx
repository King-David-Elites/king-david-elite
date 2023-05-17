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
          <List onClick={() => navigate("/about")}>Team</List>
          <List onClick={() => navigate("/contact")}>Contact Us</List>
          <List onClick={() => navigate("/terms")}>Terms And Conditions</List>
          <div className="icon-bigScreen">
            <a
              className="border-circle-bigScreen cursor-pointer"
              href="https://twitter.com/kingdavidelites"
              target="_blank"
            >
              <BsTwitter size={26} color="white" />
            </a>

            <a
              className="border-circle-bigScreen cursor-pointer"
              href="https://www.instagram.com/kingdavidelites/"
              target="_blank"
            >
              <FaInstagram size={26} color="white" />
            </a>

            <a
              className="border-circle-bigScreen cursor-pointer"
              href="https://facebook.com/kingdavidelites"
              target="_blank"
            >
              <FaFacebookF size={26} color="white" />
            </a>

            <a
              className="border-circle-bigScreen cursor-pointer"
              href="http://www.linkedin.com/in/king-david-elites-371804256"
              target="_blank"
            >
              <FaLinkedinIn size={26} color="white" />
            </a>
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
              {data.userData?.accountType === 1 && (
                <List onClick={() => navigate("/profile/create-listings")}>
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
          <a href="https://www.instagram.com/kingdavidelites/" target="_blank">
            <List>Instagram</List>
          </a>
          <a href="https://facebook.com/kingdavidelites" target="_blank">
            <List>Facebook</List>
          </a>

          <a href="https://twitter.com/kingdavidelites" target="_blank">
            <List>Twitter</List>
          </a>
          <a
            href="http://www.linkedin.com/in/king-david-elites-371804256"
            target="_blank"
          >
            <List>LinkedIn</List>
          </a>
        </Section>
      </FooterSection>

      <MobileFooter>
        <div className="footer-wrapper">
          <h3>KING DAVID ELITES</h3>
          <p className="text-theme-color">Write your name in gold</p>
          <div className="icons">
            <a href="https://twitter.com/kingdavidelites" target="_blank">
              <BsTwitter
                className="border-circle-bigScreen cursor-pointer"
                size={26}
                color="white"
              />
            </a>

            <a
              href="https://www.instagram.com/kingdavidelites/"
              target="_blank"
            >
              <FaInstagram
                className="border-circle-bigScreen cursor-pointer"
                size={26}
                color="white"
              />
            </a>

            <a href="https://facebook.com/kingdavidelites" target="_blank">
              <FaFacebookF
                className="border-circle-bigScreen cursor-pointer"
                size={26}
                color="white"
              />
            </a>

            <a
              href="http://www.linkedin.com/in/king-david-elites-371804256"
              target="_blank"
            >
              <FaLinkedinIn
                className="border-circle-bigScreen cursor-pointer"
                size={26}
                color="white"
              />
            </a>
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
