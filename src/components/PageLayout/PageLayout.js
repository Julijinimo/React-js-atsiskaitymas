import { Outlet, Navigate } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

export const PageLayout = ({ user, onLogout }) => {
    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Navigation onLogout={onLogout} />
            Hello, {user.username}
            <Outlet />
        </div>
    );
};