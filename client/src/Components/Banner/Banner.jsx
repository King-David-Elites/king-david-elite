import React from "react"
import {    
    Text,
    LuxuryLabel,
    LuxuryBody
} from '../Categories/Cars/Cars.Style';

const Banner = ({category, img}) =>{
    return(
        <>
            <LuxuryLabel imageUrl={img}>
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
