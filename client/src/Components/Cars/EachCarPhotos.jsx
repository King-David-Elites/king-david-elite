import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { EachBuildingContainer } from '../RealEstate/RealEstate.Style'
import { CarAPI } from './DemoAPI/api'
import Banner from "../Banner/Banner";

const EachCars = () => {
    const {Id} = useParams()
    console.log(Id)
    const selectedCar = CarAPI.find((items)=> items.id === parseInt(Id));
    console.log(selectedCar)
  return (
    <Fragment>
        <Navbar bg="black" sticky="sticky"/>

        <EachBuildingContainer>
            <div className="upper">
                <p>Back</p>
            </div>            

            <div className="imageGallery">
                {
                    selectedCar.images.map((image)=>{
                        return(             
                            <>
                               <div id={image.id} {...image}>                                                                                                                
                                    <div className="image">                          
                                        <img 
                                            src={image.carListed} 
                                            alt="car"
                                        />
                                    </div>                                                                      
                               </div> 
                            </>                                               
                        )                        
                    })
                }                                
            </div>           

            <Banner category="Cars" />
            <br/>
            <br/>
            <Footer />
        </EachBuildingContainer>
    </Fragment>
  )
}

export default EachCars