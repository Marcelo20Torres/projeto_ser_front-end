import { Routes, Route, Navigate } from 'react-router-dom';

import { Toaster } from "sonner";

import AthletesPage from '../pages/AthletesPage';
import FinancePage from '../pages/FinancePage';
import DashboardPage from '../pages/DashboardPage'
import { ProtectedLayout } from '../layout/ProtectedLayout';
import { LoginPage } from '../pages/auth/loginPage';
import { RegisterPage } from '../pages/auth/registerPage';
import { AppLayout } from '../layout/AppLayout';
import { ConfirmCode } from '../pages/auth/confirmCode';

export function AppRoutes() {
    return (
        <>
            <Toaster position='top-right' richColors />
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path='/login' element={<LoginPage />}/>
                <Route path='/register' element={<RegisterPage />}/>
                <Route path='/confirm-code' element={<ConfirmCode />}/>
                
                <Route element={<ProtectedLayout />}>
                    <Route element={<AppLayout />}>
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/athletes" element={<AthletesPage />} />
                        <Route path="/finance" element={<FinancePage />}/>
                    </Route>
                </Route>
            </Routes>
        </>
    )
}