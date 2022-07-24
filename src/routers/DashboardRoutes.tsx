import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../dashboardApp/pages'

export const DashboardRouter = () => {
    return (
        <Routes>

            {/* Login */}
            <Route path='/' element={<LoginPage />} />

            {/* Otras rutas del dashboard (VERIFICAR ESTADO DE LA SESION ternario con la ruta de arriba)  */}

            {/* Ruta de proteccion */}
            <Route path='/*' element={<Navigate to='/login' />} />
        </Routes>
    )
}
