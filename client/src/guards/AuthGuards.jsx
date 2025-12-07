import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import { Navigate, Outlet } from "react-router";

export function PrivateRoute() {
    const { isAuthenticated } = useContext(UserContext);

    return isAuthenticated
        ? <Outlet />
        : <Navigate to="/login" />
}

export function GuestRoute() {
    const { isAuthenticated } = useContext(UserContext);

    return !isAuthenticated
        ? <Outlet />
        : <Navigate to='/' />
}