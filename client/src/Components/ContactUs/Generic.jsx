import React from 'react'
import MainButton from '../buttons/MainButton'
import { Text } from '../Categories/Cars/Cars.Style'
import { GenericContactUsContainer } from '../Globals/Styled'

const Generic = () => {
  return (
    <GenericContactUsContainer>
        <Text >
            HAVE ANY <span>QUESTIONS</span>?
        </Text>
        <Text>
            PLEASE REACH OUT TO US SO WE CAN HELP YOU BETTER.
        </Text>
        <MainButton width="180px" height='50px' padding='24px 12px' marginTop="20px">
            Contact Us
        </MainButton>
    </GenericContactUsContainer>
  )
}

export default Generic