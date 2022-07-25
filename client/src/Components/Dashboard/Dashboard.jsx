import React from 'react'
import { navigators } from './contents'
import { DashboardContainer, LeftContainer, RightContainer } from './Dashboard.Styles'
import { FaSearch } from "react-icons/fa"
import Messages from './Messages'

const Dashboard = () => {
  return (
    <DashboardContainer>
        <LeftContainer>
            <div className="top_logo">
                King David Elites
            </div>

            <div className="nav_items">
                {
                navigators.map((nav, i)=>{
                    return(
                        <div key={i} className="item">
                            <p>{nav.icon }</p>
                            <p>{nav.title}</p>
                        </div>
                    )
                })
            }
            </div>
            
        </LeftContainer>

        <RightContainer>
            <div className="top">
                <div className="search">
                    <FaSearch color='#737373' />
                    <input type="text" placeholder='search '/>
                </div>

                <div className="profile">
                    <img src="https://th.bing.com/th/id/R.b304c7b0e1751794c05ca44d94cea47a?rik=s5ONNlybUyekZg&pid=ImgRaw&r=0" alt="" />

                    <div className="textContent">
                        <h6>Lambo Dealer</h6>
                        <p>dealerlambo@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="mainContent">
                <Messages />
            </div>

        </RightContainer>
    </DashboardContainer>
  )
}

export default Dashboard