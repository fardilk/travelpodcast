import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { HelmetProvider } from 'react-helmet-async'
import AppRouter from './components/layout/Router'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App>
        <AppRouter />
      </App>
    </HelmetProvider>
  </React.StrictMode>,
)
