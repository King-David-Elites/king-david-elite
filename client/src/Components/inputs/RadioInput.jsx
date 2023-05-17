import styled from "styled-components";
import theme from "../../application/utils/Theme.jsx";
import { Field, ErrorMessage } from "formik";
import InputLayout from "./InputLayout";
import { useState } from "react";
import { InputField } from "./MainInput.jsx";

const RadioField = styled.input`
    appearance: none;
    background-color: #fff;
    color: ${theme.color};
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid #F2BE5C;
    border-radius: 50%;
    display: grid;
    place-content: center;
    cursor: pointer;

    &::before {
    content: "";
     height: 0.65em;
     border-radius: 50%;
     transform: scale(0);
     transition: 120ms ease-in-out;
     background-color: #F2BE5C;
    }

    &:checked::before{
        transform: scale(1);
    }
    `;


const TextError = styled.span`
        color: red;
        font-weight: 500;
        opacity: 60%;
        font-size: 9px;

        @media (min-width: ${theme.breakPoint['tablet']}) {
            font-weight: 600;
           font-size: 15px;
        }
    `

const RadioInput = (props) => {
    const { label, name, options, onChange, ...rest } = props;
    const [selectedOption, setSelectedOption] = useState(options[0]?.value);

    const handleOptionChange = (event) => {
        const value = event.target.name;
        setSelectedOption(value);
        onChange(value);
    };
    return (
        <InputLayout label={label} name={name} >
            <Field name={name} >
                {({ field }) =>
                    options.map((option) => (
                        <RadioField type='radio' id={option.value}
                            name={option.value}
                            value={option.value}
                            checked={selectedOption === option.value}
                            onChange={(e) => handleOptionChange(e.target.name)} {...rest} {...field} />
                    ))

                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </InputLayout>
        // <InputLayout label={label} name={name} >
        //     <Field name={name} >
        //         {({ field }) =>
        //             options.map((option) => (
        //                 <RadioField type='radio' id={options.map(i => i.value)}
        //                     name={option.value}
        //                     value={option.value}
        //                     checked={selectedOption === option.value}
        //                     onChange={(e) => handleOptionChange(e.target.name)} {...rest} {...field} />
        //             ))
        //         }
        //     </Field>
        //     <ErrorMessage name={name} component={TextError} />
        // </InputLayout>
    );
}

export default RadioInput;
export { RadioField }