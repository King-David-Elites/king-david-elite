import { FaCheck } from 'react-icons/fa'

const SuccessPage = () => {
    return (
        <div className='successPage-wrapper'>
            <div>
                <FaCheck size={30} className='check-icon' color='white' />
                <h3>Success!</h3>
            </div>

            <a href="/dashboard/wallet">Return to Homepage</a>
        </div>


    );
}

export default SuccessPage;