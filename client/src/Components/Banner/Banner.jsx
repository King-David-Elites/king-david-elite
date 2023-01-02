import React from "react"
import transverse from '../Cars/Image/transverse.jfif'
import {    
    Text,
    LuxuryLabel,
    LuxuryBody
} from '../Cars/Cars.Style';

const Banner = ({category}) =>{
    return(
        <>
            <LuxuryLabel imageUrl={transverse}>
                <LuxuryBody>
                    <Text>
                        Luxury {category}
                    </Text>
                    <Text
                        margin="0em auto auto 6em"
                    >
                        King David Elites
                    </Text>
                </LuxuryBody>
            </LuxuryLabel>
        </>
    )
}

export default Banner;
