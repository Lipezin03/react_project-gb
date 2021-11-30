import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { selectAuth } from "../../store/profileReducer/selectors";

// export const PublicRoute = ({ children }) => {
//     const authed = useSelector(selectAuth);

//     return !authed ? children : <Navigate to="/chats" replace />;
// };

export const PublicRoute = () => {
    const authed = useSelector(selectAuth);

    return !authed ? <Outlet /> : <Navigate to="/profile" replace />;
};