import React from 'react'
import kde from './images/kde.png'
import car from './images/car.jpg'
import H1 from './images/H1.jpg'
import  profile from '../Home/images/c3.jpg'
import block from '../Home/images/block.png'
import { LeftContainer, TopContainer, Cont, RightContainer,ReportedAcct, PendingList, Grid, TopRightCont, ButtomRight} from './Admin.style'
import { FaArrowDown, FaArrowRight, FaBlog, FaFacebookMessenger, FaFolder, FaHeart, FaPersonBooth, FaPlus, FaSearch, FaSearchLocation } from 'react-icons/fa'

export default function Admin() {
  return (
    <Cont>
        <TopContainer>
            <div className='kde'>
                <img className='kd' src={kde}/>
                <h1>KING DAVID ELITE</h1>
            </div>


            <div className='search' >
                <FaSearch color='#E9ECEF'/>
                <p>search</p>

            </div>

            <div className='pCont'>
                <img className='profile' src={profile} alt="" />
                <div className='pBlock'>
                    <h5>Austin Robertson</h5>
                    <p>Marketing Administrator</p>
                </div>
               
            </div>
        </TopContainer>


        <Grid>
        <LeftContainer>
            <div className='list'><p>Account & Listings</p></div>
            <div>Verification <FaArrowRight color='#8A92A6;'/></div>
            <div>Transaction<FaArrowRight color='#8A92A6;'/></div>

        </LeftContainer>

        <RightContainer>

            <TopRightCont>

               <PendingList>
                <h1>Pending Listings</h1>

                <div className='posts'>

            
                <div className='post'>

                    <div className='min_post'>
                        <img src={H1}/>
                        <h5>Lawal Estate</h5>
                    </div>

                    <div className='Bg' style={{ backgroundImage: `url(${car})` }}>
                        <div className='love'>
                            <FaHeart color='rgba(255, 255, 255, 0.7)' />
                        </div>
                        <button>View More</button>
                    </div>
                    <h2>2020 Mercedes Benz E49</h2>
                    <h4>$129,000</h4>
                    <p><FaSearchLocation/> Surulere Califonia</p>

                    <div className='btn'>
                        <button>Approve</button>
                        <button>Delete</button>
                    </div>
                </div>


                <div className='post'>

                    <div className='min_post'>
                        <img src={H1}/>
                        <h5>Lawal Estate</h5>
                    </div>

                    <div className='Bg' style={{ backgroundImage: `url(${car})` }}>
                        <div className='love'>
                            <FaHeart color='rgba(255, 255, 255, 0.7)' />
                        </div>
                        <button>View More</button>
                    </div>
                    <h2>2020 Mercedes Benz E49</h2>
                    <h4>$129,000</h4>
                    <p><FaSearchLocation/> Surulere Califonia</p>

                    <div className='btn'>
                        <button>Approve</button>
                        <button>Delete</button>
                    </div>
                </div>
                </div>

              </PendingList>

            <ReportedAcct>
                <h1>Reported Account</h1>
                <div>
                    <li>
                        <img className='profile' src={profile} alt="" />
                        <h5>Oriogbade Kessington</h5>
                    </li>

                    <p>View Profile | <span>Block Account</span> </p>
                </div>
                <div>
                    <li>
                        <img className='profile' src={profile} alt="" />
                        <h5>Oriogbade Kessington</h5>
                    </li>

                    <p>View Profile | <span>Block Account</span> </p>
                </div>
                <div>
                    <li>
                        <img className='profile' src={profile} alt="" />
                        <h5>Oriogbade Kessington</h5>
                    </li>

                    <p>View Profile | <span>Block Account</span> </p>
                </div>
                    <div>
                        <li>
                            <img className='profile' src={profile} alt="" />
                            <h5>Oriogbade Kessington</h5>
                        </li>

                        <p>View Profile | <span>Block Account</span> </p>
                    </div>
            </ReportedAcct>

            </TopRightCont>

            <ButtomRight>
                <div className='buttom_left'>
                    <div className='account'>
                        <h1>General Account</h1>
                        <div className='min_acct'>
                            <h3>Account Balance</h3>
                            <h2>$10,250.56</h2>
                            <p>King David Elites</p>
                        </div>
                    </div>
                    <div className='footer'>
                        <div className='list'>
                            <FaPlus/>
                            Make A New Listing
                        </div>
                    </div>
                </div>

                <div className='buttom_right'>

                    <div className='header'>
                        <h1>Account Activity</h1>
                        <p>Last 3 months <FaArrowDown/></p>
                    </div>

                    <div className='min_head'>
                        <p className='name'>Names</p>
                        <p>Account</p>
                        <p>Recipient ID</p>
                        <p>Date / Time</p>
                    </div>

                    <div className='cont'>
                        <div className='transfer'>
                            <img src={H1} alt="" />
                            <p>
                                <b>
                                    Lawal Olamide
                                </b>
                                Transfer
                             </p>
                        </div>
                        <h3>$2,500.00</h3>
                        <p>12345AD</p>
                        <p>12th July / 3:05pm </p>


                    </div>


                    
                </div>

            </ButtomRight>


        </RightContainer>

        </Grid>

    </Cont>

  )
}
