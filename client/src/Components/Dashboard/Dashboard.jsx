import React from 'react'
import { navigators } from './contents'
import { DashboardContainer, LeftContainer, RightContainer } from './Dashboard.Styles'

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

                </div>

                <div className="profile">

                </div>
            </div>

        </RightContainer>
    </DashboardContainer>
  )
}

export default Dashboard