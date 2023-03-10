import { ErrorMessage, Field } from "formik";
import styled from "styled-components";
import InputLayout from "./InputLayout";
import { TextError } from "./MainInput";
import theme from "../../application/utils/Theme";

export const TextArea = styled.textarea`
    background-color: white;
    min-width: 300px;
    height: 80px;
    border-radius: 0.2em;
    font-size: 15px;
    font-weight: 400;
    outline: none;
    padding: 0.7em;
    letter-spacing: 0.1em;
    margin:${props => props.margin ? props.margin : "0em 0em 1em 0em`"};
    border: 2px solid gray;
    
    
    @media (min-width: ${theme.breakPoint['tablet']}) {
        width:${props => props.width ? props.width : "100%"}; 
        margin:${props => props.margin ? props.margin : "0em"}; 
        height: 5em;
        font-size: 14px;
        border-radius: 0.3em;
    }
    `;

const TextareaInput = (props) => {
    const { label, name, type, ...rest } = props;
    return (
        <InputLayout label={label} name={name} >
            <Field name={name} >
                {({ field }) => <TextArea type={type ? type : "text"} {...rest} {...field} />}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </InputLayout>
    );
}

export default TextareaInput;