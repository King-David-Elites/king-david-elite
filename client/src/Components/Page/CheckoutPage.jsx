import { useSelector } from "react-redux";
import MainButton from "../buttons/MainButton";
import Return from "../Navbar/Return";

const CheckoutPage = () => {
    const luxuryServiceType = useSelector(state => state.user.luxuryServiceType);
    const exclusiveEvent = useSelector(state => state.user.exclusiveEvent);
    const daycation = useSelector(state => state.user.daycation);
    const chauffeurRide = useSelector(state => state.user.chauffeurRide);
    const boatCruise = useSelector(state => state.user.boatCruise);
    const helicopterRide = useSelector(state => state.user.helicopterRide);
    const conciergeVacation = useSelector(state => state.user.conciergeVacation);
    const plan = useSelector(state => state.user.status);
    
    return (
        <>
            <Return/>
            <div className="w-full h-[100vh]  p-5 flex flex-col md:items-center md:bg-[#EEF0F2] bg-white">
                <div className="p-5 bg-white md:shadow-md md:rounded-md md:w-[500px]">
                    <div className="text-center mb-7">
                        <h3 className="font-bold text-[24px]">Almost Done....</h3>
                        <p className="font-semibold text-[15px]">Please confirm your selection before proceeding</p>
                    </div>
                    {
                        luxuryServiceType === 'daycation' &&
                        <>
                            <div className="border-b-2 mb-4">
                                <p className="font-bold text-[18px]">&#8358;{daycation.data.price.toLocaleString()}</p>
                                <p className=" font-semibold">{luxuryServiceType.toUpperCase()} ({plan.charAt(0).toUpperCase() + plan.slice(1).toLowerCase()} Plan)</p>
                            </div>

                            <div className="border-b-2 mb-4">
                                <h3 className="font-medium text-[18px]">User Details</h3>
                                <p>User: <span>{daycation.data.guestsName} | {daycation.data.guestsEmail}</span></p>
                                <p>Emergency Contact: <span>{daycation.data.emergencyContactName} | {daycation.data.emergencyNumber}</span></p>
                            </div>

                            <div className="border-b-2 mb-4">
                                <h3>Guests Information</h3>
                                <p>Number of Guest(s): <span>{daycation.data.numberOfGuest}</span></p>
                                <p>{daycation.data.guestsName} | {daycation.data.guestsEmail}</p>
                            </div>

                            <div className="border-b-2 mb-4">
                                <h3>Details</h3>
                                <p>Arrival Date: {daycation.data.arrivalDate}</p>
                                <p>Departure Date Date: {daycation.data.departureDate}</p>
                                <p>Meal Preference: {daycation.data.mealPreference}</p>
                                <p>Drink Preference: {daycation.data.drinkingPreference}</p>
                                <p>Spa: <span>{daycation.data.spa.toUpperCase()}</span></p>
                            </div>
                            {
                                daycation.data.message !== '' && <div className="border-b-2 mb-4">
                                    <h3>Personalized Info</h3>
                                    <p>{daycation.data.message}</p>
                                </div>
                            }
                            <div className="flex justify-center">
                                <MainButton width='280px' padding='24px 12px' marginTop='1.5em'>Proceed to Checkout (&#8358;{daycation.data.price.toLocaleString()})</MainButton>
                            </div>
                        </>
                    }
                    {
                        luxuryServiceType === 'chauffeur-ride' &&
                        <>
                            <div className="border-b-2 mb-4">
                                <p className="font-bold text-[18px]">&#8358;{chauffeurRide.data.price.toLocaleString()}</p>
                                <p className=" font-semibold">{luxuryServiceType.toUpperCase()} ({plan.charAt(0).toUpperCase() + plan.slice(1).toLowerCase()} Plan)</p>
                            </div>

                            <div className="border-b-2 mb-4">
                                <h3 className="font-medium text-[18px]">User Details</h3>
                                <p>User: <span>{chauffeurRide.data.guestsName} | {chauffeurRide.data.guestsEmail}</span></p>
                                <p>Emergency Contact: <span>{chauffeurRide.data.emergencyContactName} | {chauffeurRide.data.emergencyNumber}</span></p>
                            </div>

                            <div className="border-b-2 mb-4">
                                <h3>Guests Information</h3>
                                <p>Number of Guest(s): <span>{chauffeurRide.data.numberOfGuest}</span></p>
                                <p>{chauffeurRide.data.guestsName} | {chauffeurRide.data.guestsEmail}</p>
                            </div>

                            <div className="border-b-2 mb-4">
                                <h3>Details</h3>
                                <p>Dropoff Location: {chauffeurRide.data.DropOffLocation}</p>
                                <p>Pickup Location: {chauffeurRide.data.pickUpAddress}</p>
                                <p>Meal Preference: {chauffeurRide.data.mealPreference}</p>
                                <p>Drink Preference: {chauffeurRide.data.drinkingPreference}</p>
                                <p>Security: <span>{chauffeurRide.data.security.toUpperCase()}</span></p>
                                <p>Exort: <span>{chauffeurRide.data.exort.toUpperCase()}</span></p>
                            </div>
                            {
                                chauffeurRide.data.message !== '' && <div className="border-b-2 mb-4">
                                    <h3>Personalized Info</h3>
                                    <p>{chauffeurRide.data.message}</p>
                                </div>
                            }
                            <div className="flex justify-center">
                                <MainButton width='280px' padding='24px 12px' marginTop='1.5em'>Proceed to Checkout (&#8358;{chauffeurRide.data.price.toLocaleString()})</MainButton>
                            </div>
                        </>
                    }
                    {
                        luxuryServiceType === 'boat-cruise' &&
                        <>
                            <div className="border-b-2 mb-4">
                                <p className="font-bold text-[18px]">&#8358;{boatCruise.data.price.toLocaleString()}</p>
                                <p className=" font-semibold">{luxuryServiceType.toUpperCase()} ({plan.charAt(0).toUpperCase() + plan.slice(1).toLowerCase()} Plan)</p>
                            </div>

                            <div className="border-b-2 mb-4">
                                <h3 className="font-medium text-[18px]">User Details</h3>
                                <p>User: <span>{boatCruise.data.guestsName} | {boatCruise.data.guestsEmail}</span></p>
                                <p>Emergency Contact: <span>{boatCruise.data.emergencyContactName} | {boatCruise.data.emergencyNumber}</span></p>
                            </div>

                            <div className="border-b-2 mb-4">
                                <h3>Guests Information</h3>
                                <p>Number of Guest(s): <span>{boatCruise.data.numberOfGuest}</span></p>
                                <p>{boatCruise.data.guestsName} | {boatCruise.data.guestsEmail}</p>
                            </div>

                            <div className="border-b-2 mb-4">
                                <h3>Details</h3>
                                <p>Pickup Date: {boatCruise.data.date}</p>
                                <p>Pickup Time: {boatCruise.data.time}</p>
                                <p>Meal Preference: {boatCruise.data.mealPreference}</p>
                                <p>Drink Preference: {boatCruise.data.drinkingPreference}</p>
                            </div>
                            {
                                boatCruise.data.message !== '' && <div className="border-b-2 mb-4">
                                    <h3>Personalized Info</h3>
                                    <p>{boatCruise.data.message}</p>
                                </div>
                            }
                            <div className="flex justify-center">
                                <MainButton width='280px' padding='24px 12px' marginTop='1.5em'>Proceed to Checkout (&#8358;{boatCruise.data.price.toLocaleString()})</MainButton>
                            </div>
                        </>
                    }
                    {
                        luxuryServiceType === 'exclusive-event' &&
                        <>
                            <div className="border-b-2 mb-4">
                                <p className="font-bold text-[18px]">&#8358;{exclusiveEvent.data.price.toLocaleString()}</p>
                                <p className=" font-semibold">{luxuryServiceType.toUpperCase()}</p>
                            </div>

                            <div className="border-b-2 mb-4">
                                <h3 className="font-medium text-[18px]">User Details</h3>
                                <p>FullName: <span>{exclusiveEvent.data.fullName} | {exclusiveEvent.data.email}</span></p>
                                <p>Emergency Contact Information: <span>{exclusiveEvent.data.emergencyNumber}</span></p>
                                <p>Phone Number: <span>{exclusiveEvent.data.phoneNumber}</span></p>
                            </div>

                            {
                                exclusiveEvent.data.message !== '' && <div className="border-b-2 mb-4">
                                    <h3>Personalized Info</h3>
                                    <p>{exclusiveEvent.data.message}</p>
                                </div>
                            }
                            <div className="flex justify-center">
                                <MainButton width='280px' padding='24px 12px' marginTop='1.5em'>Proceed to Checkout (&#8358;{exclusiveEvent.data.price.toLocaleString()})</MainButton>
                            </div>
                        </>
                    }
                    {
                        luxuryServiceType === 'helicopter-ride' &&
                        <>
                            <div className="border-b-2 mb-4">
                                <p className="font-bold text-[18px]">&#8358;{helicopterRide.data.price.toLocaleString()}</p>
                                <p className=" font-semibold">{luxuryServiceType.toUpperCase()}</p>
                            </div>

                            <div className="border-b-2 mb-4">
                                <h3 className="font-medium text-[18px]">User Details</h3>
                                <p>FullName: <span>{helicopterRide.data.fullName}</span></p>
                                <p>Emergency Contact Information: <span>{helicopterRide.data.emergencyContactName} | {helicopterRide.data.emergencyContactNumber} | {helicopterRide.data.guestsNationality} </span></p>
                                <p>Phone Number: <span>{helicopterRide.data.contact}</span></p>
                                <p>Number Of Guest: <span>{helicopterRide.data.numberOfGuest}</span></p>
                            </div>

                            <div className="border-b-2 mb-4">
                                <h3>Details: </h3>
                                <p>Flight Date: {helicopterRide.data.flightDate}</p>
                                <p>Dropoff Location: {helicopterRide.data.dropOffLocation}</p>
                                <p>Pickup Location: {helicopterRide.data.pickUpLocation}</p>
                                <p>Pickup Time: {helicopterRide.data.time}</p>
                            </div>

                            {
                                helicopterRide.data.message !== '' && <div className="border-b-2 mb-4">
                                    <h3>Personalized Info</h3>
                                    <p>{helicopterRide.data.message}</p>
                                </div>
                            }
                            <div className="flex justify-center">
                                <MainButton width='280px' padding='24px 12px' marginTop='1.5em'>Proceed to Checkout (&#8358;{helicopterRide.data.price.toLocaleString()})</MainButton>
                            </div>
                        </>
                    }
                    {
                        luxuryServiceType === 'conceige-vacation' &&
                        <>
                            <div className="border-b-2 mb-4">
                                <p className="font-bold text-[18px]">&#8358;{conciergeVacation.data.price.toLocaleString()}</p>
                                <p className=" font-semibold">{luxuryServiceType.toUpperCase()}</p>
                            </div>

                            <div className="border-b-2 mb-4">
                                <h3 className="font-medium text-[18px]">User Details</h3>
                                <p>FullName: <span>{conciergeVacation.data.fullName}</span></p>
                                <p>Emergency Contact Information: <span>{conciergeVacation.data.emergencyContactName} | {conciergeVacation.data.emergencyContactNumber}  </span></p>
                                <p>Phone Number: <span>{conciergeVacation.data.mobileNumber}</span></p>
                                <p>Number Of Guest: {conciergeVacation.data.numberOfGuest}</p>
                            </div>
                            {
                                conciergeVacation.data.message !== '' && <div className="border-b-2 mb-4">
                                    <h3>Personalized Info</h3>
                                    <p>{conciergeVacation.data.message}</p>
                                </div>
                            }
                            <div className="flex justify-center">
                                <MainButton width='280px' padding='24px 12px' marginTop='1.5em'>Proceed to Checkout (&#8358;{conciergeVacation.data.price.toLocaleString()})</MainButton>
                            </div>
                        </>
                    }
                </div>
            </div >
        </>
    );
}

export default CheckoutPage;