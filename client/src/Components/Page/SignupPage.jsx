import React from 'react'
// import S from './images/.jpg'
import { Container } from './SignupPage.style'
import { Page } from './SignupPage.style'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import axios from "axios"


const SignPage = () => {

  const emailRef = useRef();
  const fnameRef = useRef();
  const lnameRef = useRef();
  const passwordRef = useRef();

  const signUp = async (e) =>{
    e.preventDefault();

    const userDetails ={
      email: emailRef.current.value,
      firstName: fnameRef.current.value,
      lastName: lnameRef.current.value,
      password:passwordRef.current.value,
      } 
    
      await axios.post("https://kde-api.herokuapp.com/users/sign-up", userDetails)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
  } 

  return (
    <Container>
      <Page>
        <h1>King David Elite</h1>
        <p className='back'>welcome</p>
        <form onSubmit={(e)=> signUp(e)}>
          <input type='text' ref={emailRef} placeholder='Enter your email here' />
          <input type='text' ref={fnameRef} placeholder='First name'/>
          <input type='text'ref={lnameRef} placeholder='Last name'/>
          <input type='password' ref={passwordRef} placeholder='Password'/>
        </form>
          <p className='forgot'>Forgot password? <span className='red'>Click here</span></p>
          
          <button className='login' onClick={signUp}>SignUp</button>
          <p className='or'>- OR -</p>
          <button className='google'>log in with Google</button>
          <p className='account'>Already have an account? <Link to="/login"><span>Login</span></Link> </p>
      </Page>
        

    </Container>  
  )
}

export default SignPage