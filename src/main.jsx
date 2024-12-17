import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SearchProvider } from './contexts/searchFlightContext';
import { AuthProvider } from "./contexts/AuthContext";
import { RegisterProvider } from './contexts/RegisterContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SearchProvider>
        <RegisterProvider>
          <App />
        </RegisterProvider>
      </SearchProvider>
    </AuthProvider>
  </StrictMode>,
)
