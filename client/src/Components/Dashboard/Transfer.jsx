import './Transfer.css'
import { BiArrowBack } from 'react-icons/bi'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import MainButton from '../buttons/MainButton'
import theme from '../../application/utils/Theme'
import { useNavigate } from 'react-router-dom'

const Transfer = () => {

    const navigate = useNavigate()
    return (
        <div className="transfer-wrapper">
            <div className="top-navigation">
                <div className='flex-nav'>
                    <BiArrowBack size={25} onClick={() => navigate("/dashboard/wallet")}/>
                    <p>Back</p>
                </div>

                <BiDotsVerticalRounded size={25} />
            </div>

            <form className="transfer-body">
                <div>
                    <p>How much would you like to send?</p>
                    <input type="text" placeholder='0.00' />
                </div>

                <div>
                    <p>Enter Account ID</p>
                    <input type="text" placeholder='000  000  XY' />
                </div>

            <MainButton width="100%" marginTop="20px" padding="1.5em" color={theme.footerColor} onClick={() => navigate("/dashboard/wallet")}>Continue</MainButton>
            </form>
        </div>
    );
}

export default Transfer;