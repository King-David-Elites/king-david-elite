import './Transfer.css'
import { BiDotsVerticalRounded, BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import MainButton from '../buttons/MainButton'
import theme from '../../application/utils/Theme'

const Transfer2 = () => {
    const navigate = useNavigate()

    return (
        <div className="transfer-wrapper">
            <div className="top-navigation">
                <div className='flex-nav'>
                    <BiArrowBack size={25} onClick={() => navigate("/dashboard/wallet/transfer")} />
                    <p>Back</p>
                </div>

                <BiDotsVerticalRounded size={25} />
            </div>

            <div className='transfer-body'>
                <h4>Confirm Transfer</h4>
                <p className='center-text'>We have sent an OTP to your email and mobile number inorder to validate transfer</p>

                <form>
                    <div>
                        <p>Enter OTP</p>
                        <input type="text" placeholder='000  00' />
                    </div>

                    <MainButton width="100%" marginTop="20px" padding="1.5em" color={theme.footerColor} onClick={() => navigate("/success")}>Confirm</MainButton>
                </form>

            </div>
        </div>
    );
}

export default Transfer2;