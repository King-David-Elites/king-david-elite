import styled from "styled-components";
import theme from "../../application/utils/Theme.jsx";
import { Field, ErrorMessage } from "formik";
import { TextError } from "./MainInput"
import InputLayout from "./InputLayout";
import { useState } from "react";

export const Dropdown = styled.select`
        min-width: 300px;
        height: 40px;
        outline: none;
        font-size: 15px;
        font-weight: 500;
        padding: 0 0.5em;
        background-color: white;
        letter-spacing: 0.05em;
        margin-top: 1em;
        border: 2px solid gray;
        border-radius: 0.2em;
        
        @media (min-width: ${theme.breakPoint['tablet']}) {
            margin:${props => props.margin ? props.margin : "0em"};
            width:${props => props.width ? props.width : "300px"}; 
            height: 40px;
            font-size:17px;
        }
    
`

export const Option = styled.option`
  padding: 1rem;
  color: #00000096;
`

const DropdownInput = (props) => {
    const { label, name, type, options, ...rest } = props;

    return (
        <InputLayout label={label} name={name} >
            <Field name={name} >
                {({ field }) =>
                    <Dropdown {...field} {...rest} >
                        {options.map((option) => (
                            <Option key={option.value} value={[option?.price, option.value]}> {option.key}</Option>
                        ))}
                    </Dropdown>
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </InputLayout>
    );
}

export default DropdownInput;