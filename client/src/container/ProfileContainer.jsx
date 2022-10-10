import { useLocation, useNavigate } from "react-router-dom";
import ProfileLayout from "../layout/ProfileLayout";
import Stat from "../Components/Stat/Stat";
import TopNavigationComponent from '../Components/topnav/TopNavigationComponent'

const ProfileContainer = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const activeOption = location.pathname.split("/")[2] ?? "stats";
    console.log(activeOption);

    // const navigateOptions = (activeOpt) => {
    //     if (activeOpt === "stats") {
    //         navigate(`/profile/stats`);
    //     }
    //     else if (activeOpt === "list") {
    //         navigate(`/profile/list`);
    //     }
    //     else if (activeOpt === "account") {
    //         navigate(`/profile/account`);
    //     }
    //     else {
    //         navigate(`/profile/verification`);
    //     }
    // }

    // const navOptions = [
    //     {
    //         state: "stats",
    //         displayText: "Stats"
    //     },
    //     {
    //         state: "list",
    //         displayText: "List"
    //     },
    //     {
    //         state: "account",
    //         displayText: "Account"
    //     },
    //     {
    //         state: "verification",
    //         displayText: "Verification"
    //     },
    // ]


    return (
        <ProfileLayout>
            <div className="w-full h-full py-5 md:h-[90%] overflow-y-auto">
                {
                    (activeOption === "stats") && <Stat />
                }
            </div>
        </ProfileLayout>
    );
}

export default ProfileContainer;