import React from 'react'
import Dashboard from './Dashboard'
import './Dashboard.Styles'
import { GenericContainer, MobileDashboardContainer, MobileGenericContainer } from './Dashboard.Styles'
import { Leftwallet } from './Dashboard.Styles'
import { Rightwallet } from './Dashboard.Styles'
import { Bottom } from './Dashboard.Styles'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import walletImage from "../Dashboard/wallet-image/blackBg.jpeg"
import { BsFillFileArrowUpFill } from 'react-icons/bs'
import { useState , useRef} from 'react'
import { useNavigate } from 'react-router-dom'


const WalletAsElement = () => {

  return (
    <GenericContainer>
      <Leftwallet>
        <h4>Account Balance</h4>
        <h2>$32,720.69</h2>
        <div>
          <button className='transfer'>Transfer</button>
          <button>Withdraw</button>
          <button>Deposit</button>
        </div>
        <p> Account ID:123345AD</p>
      </Leftwallet>

      <Rightwallet>

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

const MobileWallet = () => {
  const navigate = useNavigate()

  return (
    <MobileGenericContainer>
      <MobileDashboardContainer>
        <div className='upper-sect'>
          <div className='top-items'>
            <p>Account</p>
            <BiDotsVerticalRounded size={25} />
          </div>

          <div className='walletImage-div'>
            <img src={walletImage} alt="walletImage" />
            <div>
              <p className='gold-text'>Balance:</p>
              <h4 className='white-text'>$32,720.69</h4>
              <p className='align-bottom'>Account ID: 123345AD</p>
            </div>
          </div>

          <div className='menu-list'>
            <div className='grey-bar'>
              <BsFillFileArrowUpFill size={30} color="#F2BE5C" onClick={() => navigate("/dashboard/wallet/transfer")} />
              <p>Transfer</p>
            </div>

            <div className='grey-bar'>
              <BsFillFileArrowUpFill size={30} color="#F2BE5C" />
              <p>Withdrawal</p>
            </div>

            <div className='grey-bar'>
              <BsFillFileArrowUpFill size={30} color="#F2BE5C" />
              <p>Deposit</p>
            </div>
          </div>

          <div className='transaction'>
            <h3>Transactions</h3>
            <div className='transaction-content-wrapper'> 
              <div className='content1'>
                <h5>Daniel Whales</h5>
                <p className='neutral-text'>112233AB</p>
              </div>
              <div className='content1'>
                <p className='green-text'>$1,200.00</p>
                <p className='neutral-text'>16 July  2:50pm</p>
              </div>
            </div>
            <div className='border-line'></div>

            <div className='transaction-content-wrapper'>
              <div className='content1'>
                <h5>Daniel Whales</h5>
                <p className='neutral-text'>112233AB</p>
              </div>
              <div className='content1'>
                <p>$1,200.00</p>
                <p className='neutral-text'>16 July  2:50pm</p>
              </div>
            </div>
            <div className='border-line'></div>

            <div className='transaction-content-wrapper'>
              <div className='content1'>
                <h5>Daniel Whales</h5>
                <p className='neutral-text'>112233AB</p>
              </div>
              <div className='content1'>
                <p>$1,200.00</p>
                <p className='neutral-text'>16 July  2:50pm</p>
              </div>
            </div>
            <div className='border-line'></div>

            <div className='transaction-content-wrapper'>
              <div className='content1'>
                <h5>Daniel Whales</h5>
                <p className='neutral-text'>112233AB</p>
              </div>
              <div className='content1'>
                <p className='orange-text'>$1,200.00</p>
                <p className='neutral-text'>16 July  2:50pm</p>
              </div>
            </div>
            <div className='border-line'></div>

            <div className='transaction-content-wrapper'>
              <div className='content1'>
                <h5>Daniel Whales</h5>
                <p className='neutral-text'>112233AB</p>
              </div>
              <div className='content1'>
                <p className='green-text'>$1,200.00</p>
                <p className='neutral-text'>16 July  2:50pm</p>
              </div>
            </div>
            <div className='border-line'></div>
          </div>
        </div>
      </MobileDashboardContainer>
    </MobileGenericContainer>
  )
}


const Wallet = () => {
  return (
    <Dashboard element={<WalletAsElement />} index="2" mobileElement={<MobileWallet />} />
  )
}

export default Wallet