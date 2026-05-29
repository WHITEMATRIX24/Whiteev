import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AwwwardsApp from './AwwwardsApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AwwwardsApp />
  </StrictMode>,
)
