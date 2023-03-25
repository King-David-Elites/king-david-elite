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
        Welcome to King David Elites (“KDE”), the first luxury multivendor online marketplace that offers exclusive access to high-end real estate, automobiles, and luxury platforms across the world. 
        This Agreement contains the terms and conditions applicable to the use of King David Elites Luxury Marketplace Platform. By using this Platform or creating and activating an account with KDE, you irrevocably agree to comply with and be bound by the terms and conditions of use stated below.  
        Kindly read the entire terms carefully before using the KDE Online Marketplace Platform. If you do not agree with any of these terms and conditions, you must immediately discontinue your access to and/or use of the Online Marketplace.

        </p>

        <p>
          <b>1.  INTERPRETATION</b>
          Unless the context otherwise requires,the following definitions shall apply:
          <p className="inline" >
             Agreement
              means this Terms of Use between you and KDE;
          </p>

          <p className="inline">
             Application or Platform
             means the King David Elites Luxury Marketplace Platform; 
          </p>

          <p className="inline">
           Authorized User
            refers to any person who has fufilled all the requirements of creating and activating an account on this Application.
          </p>

          <p className="inline">
            Commencement Date 
            means the date you signed up and/or obtained permission to be an Authorized User of this Application;
          </p>

          <p className="inline">
          Goods refers to any luxury platform offered for sale by any of our partners, and platform providers on our Platform;  

          </p>

          <p className="inline">
          Intellectual Property Rights or IPR means any and all intellectual property rights including trademarks, copyright, moral rights, database rights, know-how and all other intellectual and proprietary information rights as may exist now or hereafter come into existence; all modifications, renewals, rights to apply for, renewals and extension of any of the foregoing arising under the laws of any country, state or jurisdiction in the world;  
          </p>
          
          <p className="inline">
          Our website refers to the website under the domain kingdavidelites.com and any subdomain;  
          </p>

          <p className="inline">
          Our Partners refers to all sellers and vendors who are authorized to put their goods up for sale on Our Website 

          </p>

          <p className="inline">
          Platform refers to all or any of the benefits offered by KDE to each user of the Application, which includes: digital extension platforms, digital loan platforms, input marketplace and aggregation platforms;

          </p>

          <p className="inline">
          Platform Providers include all persons, both under KDE employment and partnered with KDE to provide or improve platforms on the Luxury Marketplace 

          </p>

          <p className="inline">
          You means the individual user of the Platform; Yours and Your shall be construed accordingly.
          </p>

        </p>

        <p>
          <b>2.  YOUR STATUS </b>
          <p className="inline">
           2.1 By creating and activating an account to use this Application, you warrant and represent that:  
          </p>

          <p className="inline">
            2.2 You are at least 18 years old; 
          </p>

          <p className="inline">
            2.3  You are fully authorized to enter into this Agreement as a beneficiary or an aspiring beneficiary of The Platform.              
          </p>

          <p className="inline">
            2.4 You will only use The Platform in accordance with the terms and conditions set out in this Agreement.
          </p>

        </p>

        <p>
          <b>3. USE OF THE PLATFORM  </b>

          <p className="inline">
           3.1  You acknowledge that creating and activating an account will entitle You to a royalty free, non-exclusive, non-transferable, non-sublicensable licence to use The Platform. However, authorisation to use the Platform, and the grant of this licence does not constitute a transfer of ownership by KDE to You.  
          </p>

          <p className="inline">
            3.2  You may only use the Platform for Your internal purposes in the course of your own business, unless otherwise agreed in writing with KDE.  
          </p>

          <p className="inline">
           3.3  It is your responsibility to ensure that you can access KDE’s website and to have and maintain licences to use any software required to access any Platform.              
          </p>

          <p className="inline">
           3.4  You may not, unless otherwise expressly permitted:  

          <p> 3.4.1  sell, sub-licence, distribute, display, copy, disassemble, decompile, reverse engineer, translate, transfer, or otherwise make available the Platform and/or its content to any other person;   </p>
          <p>3.4.2
          use the Platform or its content to create any derivative works or platforms that could be considered competitive platforms; 
          </p>

          <p>
            3.4.3
          allow any third party to access, benefit from or use the Platform or its content in any way;
          </p>

          <p> 3.4.4
             or share any password, username or other access information that
          </p>

          </p>

          <p className="inline">
           3.5 You shall maintain all security measures as may reasonably be required to prevent any unauthorized access to or use of the Platform.  
          </p>

          <p className="inline">
            3.6  Your rights under this Agreement may be revoked if You fail to comply with any of the terms of this Agreement, and upon notice of revocation You shall, and shall procure that anyone whom you have provided access to the Platform shall, immediately:  

              <p> 3.6.1
              cease to use or access the Platform and its content; and              
              </p>

              <p> 3.6.2
              destroy all copies of the Platform, its contents and any information or derivative works which have been created or acquired by You as a result of or in connection with this Agreement.  
              </p>

          </p>

          <p className="inline">
           3.7  You agree to indemnify KDE, its members, employees, officers, supply partners and licensors against any and all liability arising from Your or any third party’s unauthorized use of any Platform or its contents provided to You and any use by You or any third party of any derivative works made by you.
          </p>


        </p>

        <p>
          <b>4. OUR PLATFORMS </b>
            <p className="inline">
            4.1 At King David Elites, we connect buyers and sellers of luxury goods and platforms. While we do not guarantee the quality or legality of any platform offered by our sellers, we have strict verification processes in place to ensure the credibility of every vendor on our platform. We encourage buyers to carry out their due diligence before making any purchase. 
            However, we offer a reliable and secure payment solution through our KDE escrow platforms. By using our escrow platforms, buyers can enjoy full coverage for inspection logistics and professional advisory platforms from our specialized professionals, giving them first-hand advice on the quality, legality, and safety of the inspected merchandise. Our escrow platform costs only 1% of the total transaction cost. If you have any questions or concerns, please contact our customer support team
            </p>

        </p>

        <p>
          <b>5. RELIANCE  </b>
          <p className="inline">
          5.1  The Platform is provided on an ‘as is’ basis for general information purposes only and do not constitute professional advice, and you should not rely on them as such. KDE makes no representations or warranties of any kind, either statutory, express or implied in respect of the suitability of the Platforms for Your purposes.  
          </p>

          <p className="inline">
            5.2 KDE does not warrant that the use of the Platforms will ensure Your compliance with any applicable legal or regulatory requirements.  
          </p>

          <p className="inline">
            5.3 All warranties, representations and obligations not set out in this Agreement (whether expressly or as implied by law) are hereby excluded to the maximum extent permitted by law.
          </p>

        </p>

        <p>
          <b>6. KDE’S OBLIGATIONS  </b>
          <p className="inline">
          6.1  KDE is not under any obligation to provide maintenance or support for any Platform or its content.  
          </p>

        </p>

        <p>
          <b>7. INTELLECTUAL PROPERTY  </b>
          <p className="inline">
          7.1 Any Intellectual Property Right subsisting in the Platforms is and shall remain the sole property of KDE or, where applicable, its licensors. You acknowledge that all present and future rights in and title to the Platforms, including the right to grant access to and use of the same, shall vest in KDE and, where applicable, its licensors.  
          </p>

          <p className="inline">
          7.2 You shall indemnify KDE from and against all costs and expenses (including reasonable legal expenses) arising from any claim that any derivative work that you create based on any Produce infringes any third party’s IPR. You agree to cooperate with KDE in the defence of any such claim at Your expense.  
          </p>

        </p>

        <p>
          <b>8. DATA PROTECTION  </b>

          <p className="inline">
          8.1 To the extent that KDE processes any personal data provided by you in connection with this Agreement, KDE will do so in accordance with KDE’s privacy statement as set out at https://wwwkde.com/ and in accordance with any applicable data protection laws of KDE’s current countries of operations, being Nigeria.
          </p>

        </p>

        <p>
          <b>9. LIABILITY  </b>

          <p className="inline">
          9.1 KDE shall not be liable to You for any indirect, special, incidental and/or consequential loss and/or damage incurred by You in connection with your use of the Platform.  
          </p>

          <p className="inline">
          9.2 KDE shall not be responsible for any loss, damage or other cost whatsoever resulting from any decisions that are made in reliance on the Platform including, without limitation, compliance and/or risk management decisions, and You acknowledge that any use of the Platform or any of its contents are at your own risk.  
          </p>

          <p className="inline">
          9.3  KDE shall not be liable for non-performance, error, interruption or delay in the provision of the Platforms under these Terms (or any part thereof) or for any inaccuracy, unreliability or unsuitability of the contents of the Platform if this is due, in whole or in part, directly or indirectly to an event or failure which is beyond our reasonable control. 
          </p>

          <p className="inline">
          9.4 KDE excludes to the fullest extent permitted by law any liability whatsoever for any:  
            <p>
            9.4.1 loss of profit, business, revenue, goodwill and/or anticipated savings; and/or  
            </p>

            <p>
            9.4.2 sanctions imposed upon You arising out of or in connection with Your non-compliance with any legal or regulatory requirements. 
            </p>
          </p>

          <p className="inline">
          9.5 KDE’s total aggregate liability to You in connection with this Agreement, if any, shall be limited to the fee paid by You in accessing the Platform.  
          </p>
        </p>


        <p>
          <b>10. NOTICE  </b>
          <p className="inline">
          10.1 If You wish to provide notice under this Agreement, such notice must be sent to kingdavidelites@gmail.com.  
          </p>

          <p className="inline">
          10.2 If KDE needs to provide You with notice under this Agreement, it shall be sent to You using the email address You provided when creating an account. It is Your responsibility to ensure that Your details are up to date and correct.
          </p>

        </p>

        <p>
          <b>11. ASSIGNMENT  </b>
          <p className="inline">
          11.1 KDE reserves the right to assign, transfer delegate or sub-contract the performance of any of our functions in connection with The Platform and reserves the right to use any platform provider, subcontractor and/or agent on such terms as it deems appropriate. However, You may not assign, transfer, sub-licence or deal with any of Your rights or obligations under this Agreement without KDE’s express written consent.  
          </p>
        </p>


        <p>
          <b>12. VARIATION  </b>
          <p className="inline">
          12.1 KDE may at its sole discretion update the terms of this Agreement from time to time on the Website. It is your responsibility to check the KDE Website from time to time to ensure your compliance with any updated terms.  
          </p>
        </p>


        <p>
          <b>13. TERM AND TERMINATION  </b>

          <p className="inline">
          13.1 This Term of Use is effective and becomes binding on you from the Commencement Date until further notice or termination.  
          </p>

          <p className="inline">
          13.2 KDE may terminate this Agreement at any time where:  
              <p>
                 13.2.1 You breach any material term of it, or  
              </p>
              <p>
                13.2.2 it has reasonable grounds to believe that the performance of it may be unlawful or cause KDE and/or You to breach any legal, regulatory or professional requirement.
              </p>
          </p>
        </p>


        <p>
          <b>14. GOVERNING LAW AND JURISDICTION  </b>

          <p className="inline">
          14.1 This Agreement and any dispute arising out of or in connection with it (whether contractual or non-contractual) shall be governed by the laws of the Federal Republic of Nigeria and subject to the exclusive jurisdiction of the High Court. 
          </p>
        </p>

        <p>
          <b>15. GENERAL  </b>
          <p className="inline">
          15.1 This Agreement constitutes the entire agreement between You and KDE in relation to The Platform. This Agreement supersedes all previous discussions, correspondence, negotiations, understandings or agreements entered into by us in relation to any Platforms.  
          </p>
          <p className="inline">
          15.2 Subject to clause 8.1, You agree that You have not relied upon, nor will you have any claim in respect of any representation, warranty or condition that is not set out in this Agreement.  
          </p>
          <p className="inline">15.3 This Agreement does not grant any rights to any third party to enforce any term of this Agreement.  </p>
          <p className="inline">
            15.4 In the event that any provision of this Agreement is deemed to be invalid or unenforceable, it shall be severed from the Agreement and shall not affect the validity and enforceability of any other term in this Agreement.  
          </p>
          <p className="inline">
          15.5 No failure by KDE to exercise any right under this Agreement or to take action against You in the event of a breach of this Agreement shall constitute a waiver of such right or any other rights under this Agreement. 
          </p>
        </p>

        <p>
          <b>16. CONTACT US</b>

          <p className="inline">
          16.1  If You have any questions relating to these Terms of Use, your rights and obligations arising from these Terms of Use and/or your use of the Platform, please contact us via email at kingdavidelites@gmail.com
          </p>

        </p>
      </div>
    </Container>
  );
}
