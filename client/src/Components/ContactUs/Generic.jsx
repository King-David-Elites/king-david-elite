import React from 'react'
import MainButton from '../buttons/MainButton'
import { Text } from '../Cars/Cars.Style'
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
        <MainButton width="30%" marginTop="20px">
            Contact Us
        </MainButton>
    </GenericContactUsContainer>
  )
}

export default Generic