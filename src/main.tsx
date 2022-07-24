import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PracticasApp } from './PracticasApp'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Aqui iria el provider del context API */}
    <BrowserRouter>
      <PracticasApp />
    </BrowserRouter>
  </React.StrictMode>
)
