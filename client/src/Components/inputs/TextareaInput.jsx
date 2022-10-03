import { ErrorMessage, Field } from "formik";
import styled from "styled-components";
import InputLayout from "./InputLayout";
import { TextError } from "./MainInput";
import theme from "../../application/utils/Theme";

const TextareaInput = (props) => {

    const TextArea = styled.textarea`
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
        width:${props => props.width ? props.width : "100%"}; 
        margin:${props => props.margin ? props.margin : "0em"}; 
        height: 5em;
        font-size: 17px;
        border-radius: 0.3em;
    }
    `;

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