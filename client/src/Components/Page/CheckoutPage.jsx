import { useSelector } from "react-redux";

const CheckoutPage = () => {
    const luxuryServiceType = useSelector(state => state.user.luxuryServiceType);
    const exclusiveEvent = useSelector(state => state.user.exclusiveEvent);
    
    console.log(luxuryServiceType);

    return ( 
        <div className="border-2 border-[red] w-full h-[100vh]">

        </div>
     );
}

export default CheckoutPage;