import { useEffect } from 'react'
import React, { useState } from 'react'
import { Container} from './Waitlist.style'
import logo from "../Navbar/Image/kde_whiteBg.png"
import building from "../Page/images/w1.jpg"
import { useRef } from 'react'
import axios, { Axios } from 'axios'

export default function Waitlist() {

    useEffect(() => {
        Axios.get('/waitList')
    },[])

    const [display, setDisplay] = useState(false);
    const [error, setError] = useState(false);
    const [displayText, setDisplayText] = useState(null)

    const nameRef = useRef()
    const emailRef = useRef()

    const submit = async(e) => {
        e.preventDefault()
        let name = nameRef.current.value;
        let email = emailRef.current.value;
        if(name !== "" && email !== ""){
           await axios.post("https://kde.cyclic.app//wait-list", {name, email})
        .then(resp => {
            setDisplayText('Thank you, Successfully Submitted!')
            setError(false)
            setDisplay(true)
            nameRef.current.value = ""
            emailRef.current.value = ""
        })
        .catch(err => {
            setDisplayText('An Error occured, Check your internet Connection')
            setError(true)
            setDisplay(true)
        })
        }
        else{
            console.log("empty")
            setDisplayText('Please Fill All Input Field')
            setError(true)
            setDisplay(true)
        }
    }



  return (
    <Container style={
                      {
                    //    background:'rgba(0,0,0,.4)',
                       backgroundImage:`linear-gradient(to bottom, rgb(0,0,0,0.4), rgb(0,0,0,0.4)),url(${building})`,
                       backgroundSize:'cover',
                       backgroundPosition:'center',
                    //    height:'660px',
                       backgroundRepeat:'no-repeat'}}>
     
        <div className='logo-div'>
            <img src={logo} alt="KDE logo"/>
            <p>KING DAVID ELITES</p>
        </div>

        <h3>ANTICIPATE</h3>
        <p className='p'>An elite community where enormous transactions take place.</p>
        <p className='p'>Come showcase your listing on the platform where it counts.</p>

        <h4>REAL ESTATE  <span>AUTOMOBILES </span> LUXURY SERVICES.</h4>
        <p className='j'>Join the 1000 people that would recieve exclusive updates and gain free access to the platform after we launch.</p>


        <div className='btn'>
            <form>
                {
                    display && 
                    <div className={ error ? "message error" : "message success"}>
                        {
                            displayText
                        }
                    </div>
                }
                
                <input type='text' required={true} ref={nameRef} placeholder='Please Input Your name'/>
                <input type='email' required={true} ref={emailRef} placeholder='Please Input Your Email '/>
                <button onClick={(e)=> submit(e)}>Request Access</button>
            </form>
        </div>
        
     
    </Container>
    
  )
}
