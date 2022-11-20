import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";


export const PageLayout = ({ email, onLogout }) => {
    if (!email) {
        return <Navigate to="/login"/>;
    }

    return (
        <div>
            <Navigation onLogout={onLogout}/>
            <Outlet />
        </div>
    );
};
