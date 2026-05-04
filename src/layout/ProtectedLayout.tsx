import { Navigate, Outlet } from "react-router-dom";

export function ProtectedLayout() {
    const isAthenticated = true;

    if (!isAthenticated) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}