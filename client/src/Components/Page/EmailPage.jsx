import React from 'react'
import logo from "../Navbar/Image/kde_whiteBg.png"
import { Container } from './EmailPage.style'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default function EmailPage() {
    const [mails, setMails] = useState([])

    const email = async () => {
        await axios.get("https://kde-api.herokuapp.com/wait-list")
        .then(resp => {setMails(resp.data); console.log(resp.data)})  
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        email()
    }, [])

  return (
    <Container>
        <div>
            <img src={logo}/>
            <p>KING DAVID ELITES</p>
        </div>
        <table>
            <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            {
                [...new Set(mails)].map((mail, i)=>{
                    return(
                       <tr>
                    <td>{i+1}</td>
                    <td>{mail.name}</td>
                    <td>{mail.email}</td>
                </tr> 
                    )
                })
            }
        </table>

    </Container>
  )
}
