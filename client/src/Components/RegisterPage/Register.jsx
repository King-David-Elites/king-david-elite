import React from 'react'
import { Container } from './Register.style'
import cart from './images/Cart.png'
import deal from './images/Deal.png'

export default function Register() {
  return (
    <Container>
        <div className='cont'>
            <h1>Register With Us</h1>
            <p className='acct'>Choose your type of account</p>

            <div className='seller'>
                <div>
                    <h2>Seller</h2>

                    <p>
                        You are required to pass our verification process and convince us thta you deserve to be part of this elite community.  
                    </p>


                    <p>
                        Your profile would be automatically generated for you to monitor your listings and track your growth with us    
                            
                    </p> 
                </div>
                <img src={deal}/>

            </div>
            <div className='buyer'>
                <div>
                    <h3>Buyer</h3>
                    <p>
                        Your dashboard would be automatically generated so you can monitor your transaction as you purchase the finest things in life
                    </p>

                </div>
                <img src= {cart} />
            </div>

            <button>Proceed</button>
        </div>
    </Container>
  )
}
