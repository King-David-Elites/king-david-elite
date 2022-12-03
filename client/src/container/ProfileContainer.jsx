import { useLocation, useNavigate } from "react-router-dom";
import ProfileLayout from "../layout/ProfileLayout";

const ProfileContainer = () => {
    const location = useLocation();
    const activeOption = location.pathname.split("/")[2] ?? "verification";

    return (
        <ProfileLayout/>
    );
}

export default ProfileContainer;