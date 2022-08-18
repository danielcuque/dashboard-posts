import React from 'react'
import './index.css'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PracticasApp } from './PracticasApp'
import { InformeProvider } from './mainApp/context/InformeProvider';
import { AuthProvider } from './dashboardApp/auth/context/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Aqui iria el provider del context API */}
    <InformeProvider>
      <AuthProvider>
        <BrowserRouter>
          <PracticasApp />
        </BrowserRouter>
      </AuthProvider>
    </InformeProvider>
  </React.StrictMode>
)
