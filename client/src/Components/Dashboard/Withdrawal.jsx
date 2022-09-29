import React from 'react'
import styled from 'styled-components'
import Dashboard from './Dashboard'
import { GenericContainer } from './Dashboard.Styles'
import { Leftwallet } from './Withdrawal.style'
import { Rightwallet } from './Withdrawal.style'
import { Bottom } from './Withdrawal.style'
import Hotel from "./wallet-image/Hotel.jpg"







const WalletAsElement = ()=>{
    return(
        <GenericContainer>

          <Leftwallet>
            <h4>Account Balance</h4>
            <h2>$32,720.69</h2>
            <div>
              <button >Transfer</button>
            <button className='withdraw'>Withdraw</button>
            <button>Deposit</button>
            </div>
            <p> Account ID:123345AD</p>
            <img src={Hotel}/>
          </Leftwallet>

          <Rightwallet>
            <p>How much would you like to withdraw?</p>
           <input placeholder='$  0.00' />
            <h6>Account Number</h6>
                <input placeholder='1234567890 | LAMBO DEALER' />
            <button>Continue</button>

          </Rightwallet>

          <Bottom>
            <table>
              <tr>
                <th>Transaction</th>
              </tr>
              <tr>
                <td><span className='green'>$1,200.00</span></td>
                <td>112233HR</td>
                <td>Daniels Whales</td>
                <td>16 July,2022</td>
                <td>2:50pm</td>
              </tr>
              <tr>
                <td><span className='red'>$21,710.00</span></td>
                <td>5413691359</td>
                <td>Lambo Dealer</td>
                <td>02 July,2022</td>
                <td>5:00am</td>
              </tr>
              <tr>
                <td><span className='green'>$7,200.00</span></td>
                <td>223833AS</td>
                <td>Leonardo Caprisonne</td>
                <td>24 March,2022</td>
                <td>2:51am</td>
              </tr>
              <tr>
                <td><span className='green'>$1,200.00</span></td>
                <td>112233HR</td>
                <td>Daniel Whales</td>
                <td>16 July,2022</td>
                <td>7:09pm</td>
              </tr>
              <tr>
                <td><span className='red'>$9,450.00</span></td>
                <td>112233FT</td>
                <td>Daniel Whales</td>
                <td>19 July,2022</td>
                <td>2:50am</td>
              </tr>
            </table>

          </Bottom>
         

        </GenericContainer>
    )
}

const Withdrawal = () => {
  return (
    <Dashboard element={<WalletAsElement />} index="2" />
  )
}

export default Withdrawal