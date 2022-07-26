import React from 'react'
import './index.css'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PracticasApp } from './PracticasApp'
import { InformeProvider } from './mainApp/context/InformeProvider';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Aqui iria el provider del context API */}
    <InformeProvider>
      <BrowserRouter>
        <PracticasApp />
      </BrowserRouter>
    </InformeProvider>
  </React.StrictMode>
)
