import React from 'react'
import Footer from '../Components/Footer/Footer'
import { Container } from './Contact.style'
import contact from "./images/contact.jpg"
import Navbar from '../Components/Navbar/Navbar'

export default function Contact() {

  return (
    <Container>
        <Navbar />
        <div 
            className='bg_contact'
            style={{
                backgroundImage:`url(${contact})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                height:'100vh',
                backgroundRepeat:'no-repeat'
            }}
            >
            <h1>Contact Us</h1>

            <p>All you need to know about King David Elite</p>

        </div>

        <div className='cont'>

            <div className='LCont'>
                <h1>
                    Have Anything In Mind? Let's talk.
                </h1>              
            </div>

            <div className='RCont'>
                <h1>Send A Message</h1>

                <div className='minCont'>
                    <div>
                        <p>Name</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>Email</p>
                        <input type="text"/>
                    </div>

                </div>

                <div className='minCont'>
                    <div>
                        <p>Your Website</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>Phone Number</p>
                        <input type="text"/>
                    </div>

                </div>

                <div className='comment'>
                    <p>Comments</p>
                    <textarea type="text"/>
                </div>

                <button>Send Message</button>

            </div>

        </div>
        <Footer />
    </Container>
  )
}
