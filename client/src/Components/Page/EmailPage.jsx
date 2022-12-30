import React from 'react'
import logo from "../Navbar/Image/kde_whiteBg.png"
import { Container } from './EmailPage.style'

export default function EmailPage({mainData}) {    
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
                [...new Set(mainData.mails)].map((mail, i)=>{
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
