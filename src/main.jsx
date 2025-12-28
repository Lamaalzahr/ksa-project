import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RegionPage from "./RegionPage.jsx";
import './index.css'
import App from './App.jsx'
<RegionPage/>
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
