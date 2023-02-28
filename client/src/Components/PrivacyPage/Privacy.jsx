import React from 'react'
import { Container } from '../TermsPage/Terms.style'
import Link from 'react-router-dom' 
import kde from '../Navbar/Image/kde_whiteBg.png'


export default function Privacy(){
    return (
        <Container>
            <div className='nav'>

                <div className='mini'>
                    <img src={kde}/>
                    <h2>KING DAVID ELITES</h2>
                </div>

            </div>

             <div className='cont'>
                <h2>PRIVACY AND POLICY</h2>
                <p>
                    King David Elites respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose information about our users, including the types of information we collect, how we use that information, and how we protect it.
                </p>

                <p>
                    <b>INFORMATION WE COLLECT</b>
                    We collect information from you when you use our platform, including information about your device, location, and activity on our platform. We also collect information you provide to us, such as your name, contact information, and payment information.
                </p>

                <p>
                    <b>HOW WE USE YOUR INFORMATION</b>
                    We use your information to provide and improve our platform and services, to communicate with you, and to personalize your experience on our platform. We may also use your information to send you marketing communications about our platform and services.
                </p>

                <p>
                    <b>HOW WE PROTECT YOUR INFORMATION</b>
                    We take reasonable measures to protect your information from unauthorized access, use, or disclosure. We use industry-standard security measures to protect your information, including encryption, firewalls, and secure servers. However, no security system is perfect, and we cannot guarantee the security of your information.
                </p>

                <p>
                    <b>DISCLOSURE OF YOUR INFORMATION</b>
                    We may disclose your information to third-party service providers who assist us in providing our platform and services, such as payment processors and hosting providers. We may also disclose your information if required by law or if we believe that such disclosure is necessary to protect our rights or the rights of others, including the enforcement of our terms and conditions.
                </p>

                <p>
                    <b>YOUR CHOICES</b>
                    You can choose not to provide certain information to us, but this may limit your ability to use our platform and services. You can also opt-out of receiving marketing communications from us by following the instructions in the communication.
                </p>

                <p>
                    <b>CHANGES TO THIS PRIVACY POLICY</b>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or to comply with applicable law. We will post the updated Privacy Policy on our platform and indicate the date of the latest revision.
                </p>

                <p>
                    <b>CONTACT US</b>
                    If you have any questions or concerns about this Privacy Policy or our practices, please contact us at <i>contact information.</i>
                </p>

                <p>
                    By using our platform, you agree to this Privacy Policy and our terms and conditions.
                </p>

             </div>
        </Container>
    )
}