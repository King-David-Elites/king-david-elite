import { useNavigate } from "react-router-dom";
import theme from "../../application/utils/Theme";
import MainButton from "../buttons/MainButton";

const OTPPage = () => {
    const navigate = useNavigate();

    return ( 
        <div className='transfer-body bg-white'>
        <h4>Confirm Email</h4>
        <p className='center-text'>We have sent an OTP to your email in order to validate account</p>

        <form>
            <div>
                <p>Enter Verification code</p>
                <input type="text" placeholder='000  00' />
            </div>
        </form>

    </div> 
     );
}
 
export default OTPPage;