import React, { useState } from 'react'
import { Container} from './Waitlist.style'
import logo from "../Navbar/Image/kde_whiteBg.png"
import { useRef } from 'react'
import axios from 'axios'

export default function Waitlist() {

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
           await axios.post("https://kde-api.herokuapp.com/wait-list", {name, email})
        .then(resp => {
            setDisplayText('Thank you, Successfully Submitted!')
            setError(false)
            setDisplay(true)
            nameRef.current.value = ""
            emailRef.current.value = ""
        })
        .catch(err => {
            setDisplayText('An Error occured, Check your internet Connection')
            setError(false)
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
    <Container>
     
        <div className='logo-div'>
            <img src={logo} alt="KDE logo"/>
            <p>KING DAVID ELITES</p>
        </div>

        <h3>A Luxury Market And Networking Platform For All</h3>
        <p className='p'>Our platform is a luxury market and networking platform that seeks to provide a meeting place for luxury buyers and sellers to carry out their transactions. It is designed such that every verified user involved in the luxury transactions on the platform can earn a substantial amount of income either actively or passively ranging from the luxury realtors to the buyers or the investors.</p>

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
                <button onClick={(e)=> submit(e)}>Submit</button>
            </form>
        </div>
        
     
    </Container>
    
  )
}
