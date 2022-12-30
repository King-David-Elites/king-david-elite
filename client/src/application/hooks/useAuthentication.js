import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../store/actions/ui";

const useAuthentication = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const userId = useSelector(state=> state.user.userId);


    useEffect(() => {
        if (userId == null) {
            dispatch(setLoading(false))
             navigate("/login");
             return;
        }
    }, [])

    return null;
};

export default useAuthentication;