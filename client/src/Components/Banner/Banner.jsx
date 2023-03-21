import React from "react"
import transverse from '../Categories/Cars/Image/transverse.jfif'
import {    
    Text,
    LuxuryLabel,
    LuxuryBody
} from '../Categories/Cars/Cars.Style';

const Banner = ({category}) =>{
    return(
        <>
            <LuxuryLabel imageUrl={transverse}>
                <LuxuryBody>
                    <Text>
                        Luxury {category}
                    </Text>
                    <Text
                    >
                        King David Elites
                    </Text>
                </LuxuryBody>
            </LuxuryLabel>
        </>
    )
}

export default Banner;
