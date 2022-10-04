import styled from "styled-components";
import theme from "../../application/utils/Theme";
import { Field, ErrorMessage } from "formik";
import InputLayout from "./InputLayout";

const InputField = styled.input`
        background-color: white;
        min-width: 300px;
        height: 40px;
        border-radius: 0.2em;
        font-size: 15px;
        font-weight: 400;
        outline: none;
        padding: 0 0.5em;
        letter-spacing: 0.1em;
        @media (min-width: ${theme.breakPoint['tablet']}) {
            width: ${props => props.width ? props.width : "100%"};
            height: 2.5em;
            font-size: 17px;
            border-radius: 0.3em;
            margin-bottom: 2em;
        }
    `;


const InputLabel = styled.label`
        color: black;
        font-size: 10px;
        font-weight: 500;
        letter-spacing: 0.05em;
        white-space: nowrap;

        @media (min-width: ${theme.breakPoint['tablet']}) {
           font-size: 15px;
        }
    `;

const TextError = styled.span`
        color: red;
        font-weight: 500;
        opacity: 40%;
        font-size: 10px;
        @media (min-width: ${theme.breakPoint['tablet']}) {
            font-weight: 600;
           font-size: 15px;
        }
        

    `

const MainInput = (props) => {

    const { label, name, type, ...rest } = props;
    return (
        <InputLayout label={label} name={name} >
            <Field name={name} >
                {({ field }) => <InputField type={type ? type : "text"} {...rest} {...field} />}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </InputLayout>
    );
}


export { InputLabel, InputField, TextError };
export default MainInput;