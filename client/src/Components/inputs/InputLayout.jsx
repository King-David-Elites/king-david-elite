import styled from "styled-components";
import {InputLabel} from "./MainInput";

const InputLayoutComp = styled.div`
    display: flex;
    flex-direction: column;

`

const InputLayout = ({label, name, children}) => {
    return(
        <InputLayoutComp>
             {
                label &&
                <div>
                    <InputLabel htmlFor={name}>{label}</InputLabel>
                </div>
            }
            {children}
        </InputLayoutComp>
    )
}

export default InputLayout;