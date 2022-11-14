import React, { useState } from 'react'
import { Container} from './Waitlist.style'
import logo from "../Navbar/Image/kde_whiteBg.png"
import building from "../RealEstate/Image/real-estate-pics.jpg"
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
    <Container style={{background:`url(${building})`,
                       backgroundSize:'cover',
                       backgroundPosition:'center',
                       height:'660px',
                       backgroundRepeat:'no-repeat'}}>
     
        <div className='logo-div'>
            <img src={logo} alt="KDE logo"/>
            <p>KING DAVID ELITES</p>
        </div>

        <h3>LAUNCHING SOON...  </h3>
        <p className='p'>An elite community where enourmous transactions take place.</p>
        <p className='p'>Come showcase your listing on the platform where it counts.</p>

        <h4>REAL ESTATE  AUTOMOBILE  LUXURY SERVICE.</h4>
        <p className='j'>Join the 1000 people that would recieve exclusive updates and gain free access to the platform <span>after we launch.</span></p>


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
