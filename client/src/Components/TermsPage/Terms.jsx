import React, { useEffect, useRef } from "react";
import { Container } from "./Terms.style";
import kde from "../Navbar/Image/kde_whiteBg.png";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export default function Terms() {
  const top = useRef(null);

  useEffect(() => {
    scrollToRef(top);
  }, []);

  return ( 
    <Container ref={top}>
      <div className="nav">
        <div className="mini">
          <img src={kde} />
          <h2>KING DAVID ELITES</h2>
        </div>
      </div>

      <div className="cont">
        <h2>TERMS AND CONDITIONS</h2>

        <p>
          Welcome to King David Elites, the first luxury multivendor online
          marketplace that offers exclusive access to high-end real estate,
          automobiles and luxury services across the world. These terms and
          conditions govern your use of our marketplace, so we advice that you
          read them carefully before proceding. By accessing or using our
          platform, you agree you agree to be bound by these terms and
          conditions, including any future revisions as well as our privacy
          policy, which is incorporated by reference herein.
        </p>

        <p>
          <b>GENERAL INFORMATION</b>
          Our platform is a marketplace that connects buyers and sellers of
          luxury goods and services. We do not endorse or guarantee the quality,
          safety, or legality of any product or service offered by our
          sellers.We have strict verification processes in place to screen every
          vendor that lists their merchandise on our platform and facilitate
          transactions between users but it is the duty of every buyer to carry
          out their due diligence t ensure that the merchandise being purchased
          suits their taste. The only exception to this condition is for buyers
          using the KDE escrow services for payments which costs only 1% of the
          total transaction costs and comes with fully covered costs for
          inspection logistic for the buyer and vendor alongside professional
          advisory services where our specialized professionals give fis hand
          advice on the quality, legality and safety of the inspected
          merchandise to our esteemed buyers.
        </p>

        <p>
          <b>USER REGISTRATION</b>
          To access and use our platform, you must create an account and provide
          accurate and complete information about yourself. You are responsible
          for maintaining the confidentiality of your account information and
          for all activities that occur under your account.
        </p>

        <p>
          <b>PROHIBITED ACTIVITIES</b>
          You may not use our platform to engage in any of the following
          activities:
          <i>Violate any applicable law or regulation.</i>
          <i>Infringe on the intellectual property rights of others.</i>
          <i>
            {" "}
            Post or transmit any content that is harmful, offensive, or illegal.
          </i>
          <i> Use our platform to facilitate fraudulent activities.</i>
          <i>
            {" "}
            Interfere with the operation of our platform or the services
            provided by our vendors.
          </i>
          <i>
            Engage in any activity that could damage our reputation or that of
            other users whether vendors or buyers.
          </i>
        </p>

        <p>
          <b>TRANSACTIONS AND PAYMENT</b>
          Buyers have the opportunity to either use our direct means of payment
          by transferring from their wallet to the wallet of a vendor. King
          David Elites facilitates but is not responsible for the outcome of
          such direct transactions. We are only responsible for buyers using the
          KDE escrow mode of payment which involves securing the funds of the
          buyer in a private account and only releasing it to the vendor after
          the completion of the inspection and professional advisory process
          which King David Elites personally facilitates. This service attracts
          a payment of 1% of the total transaction fee.
        </p>

        <p>
          <b>DISPUTE RESOLUTION</b>
          We encourage buyers and sellers to resolve any disputes through direct
          communication. However, if a dispute cannot be resolved, we may offer
          our dispute resolution services. You agree to abide by the decision of
          our dispute resolution team and should both parties choose to settle
          in court, King David Elites is indemnified of such cases except in
          situations that may have directly involved malfunctioning or an error
          on our platform.
        </p>

        <p>
          <b>INTELLECTUAL PROPERTY</b>
          All content on our platform, including text, images, logos, and
          trademarks, is owned by us or our partners and is protected by
          applicable copyright and trademark laws. You may not use or reproduce
          any content on our platform without our express written and signed
          consent.
        </p>

        <p>
          <b>LIMITATION OF LIABILITY</b>
          All content on our platform, including text, images, logos, and
          trademarks, is owned by us or our partners and is protected by
          applicable copyright and trademark laws. You may not use or reproduce
          any content on our platform without our express written and signed
          consent.
        </p>

        <p>
          <b>INDEMNIFICATION</b>
          You agree to indemnify and hold us and our partners harmless from any
          claims, damages, or expenses that may arise from your use of our
          platform or your violation of these terms and conditions.
        </p>

        <p>
          <b>TERMINATION</b>
          In a bid to keep our platform safe, we reserve the right to terminate
          your access to our platform at any time, for any reason, without prior
          notice once we discover any suspicious activities on your account.
        </p>

        <p>
          <b>GOVERNING LAW</b>
          These terms and conditions are governed by the laws of the
          jurisdiction in which we are based. Any disputes arising from these
          terms and conditions shall be resolved in accordance with the laws of
          that jurisdiction.
        </p>

        <p>
          By using our platform, you agree to these terms and conditions, as
          well as our privacy policy.
        </p>
      </div>
    </Container>
  );
}
