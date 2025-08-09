import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BackgroundProvider } from './context/BackgroundContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackgroundProvider>
    <App />
    </BackgroundProvider>
  </StrictMode>,
)
