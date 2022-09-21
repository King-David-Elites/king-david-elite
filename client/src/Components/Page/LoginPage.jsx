import React from 'react'
// import S from './images/.jpg'
import { Container } from './LoginPage.style'
import { Page } from './LoginPage.style'



const LoginPage = () => {
  return (
    <Container>
      <Page>
        <h1>King David Elite</h1>
        <p className='back'>welcome</p>
        <form>
          <p className='mail'>Email</p>
          <input type='text' placeholder='Enter your email here' />
          <p className='password'>Password</p>
          <input type='password' />
          <p className='password'>Confirm Password</p>
          <input type='password' />
        </form>
          <p className='forgot'>Forgot password? <span className='red'>Click here</span></p>
          
          <button className='login'>SignUp</button>
          <p className='or'>- OR -</p>
          <button className='google'>log in with Google</button>
          <p className='account'>Don't have an account? <span>Sign up</span></p>
      </Page>
        

    </Container>  
  )
}

export default LoginPage