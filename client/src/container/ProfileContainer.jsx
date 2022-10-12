import { useLocation, useNavigate } from "react-router-dom";
import ProfileLayout from "../layout/ProfileLayout";

const ProfileContainer = () => {
    const location = useLocation();
    const activeOption = location.pathname.split("/")[2] ?? "verification";

    return (

        <ProfileLayout>
<<<<<<< HEAD
            
=======
            <div className="w-full h-full py-5 md:h-[90%] overflow-y-auto">
                {
                    (activeOption === "stats") && <Stat />
                }
            </div>
>>>>>>> 93a082efe7881b73e3314273370016f6794d017d
        </ProfileLayout>

    );
}

export default ProfileContainer;