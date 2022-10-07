import { useLocation, useNavigate } from "react-router-dom";
import ProfileLayout from "../layout/ProfileLayout";
import TopNavigationComponent from "../Components/topnav/TopNavigationComponent"
import Stat from "../Components/Stat/Stat";

const ProfileContainer = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const activeOption = location.pathname.split("/")[2] ?? "stats";
    console.log(activeOption);

    const navigateOptions = (activeOpt) => {
        if (activeOpt === "stats") {
            navigate(`/${activeOpt}`);
        }
        else if(activeOpt === "list"){
            navigate(`/${activeOpt}`);
        }
        else if(activeOpt === "account"){
            navigate(`/${activeOpt}`);
        }
        else{
            navigate(`/${activeOpt}`);
        }
    }

    const navOptions = [
        {
            state: "stats",
            displayText: "Stats"
        },
        {
            state: "list",
            displayText: "List"
        },
        {
            state: "account",
            displayText: "Account"
        },
        {
            state: "verification",
            displayText: "Verification"
        },
    ]



    return (
        <ProfileLayout>
            <TopNavigationComponent navOptions={navOptions} activeOption={activeOption} setActiveOption={navigateOptions} />
            <div className="w-full h-full py-5 md:h-[90%] overflow-y-auto">
                {
                    (activeOption == "stats") && <Stat/>
                }
                {/* {
                    activeOption === "list" && <List/>
                }
                {
                    (activeOption === "account") && <Account/>
                }
                {
                    activeOption === "verification" && <Verification/>
                } */}
            </div>
        </ProfileLayout>
    );
}

export default ProfileContainer;