import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Timer from './Components/Timer'
import './Components/Timer.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Timer />
  </StrictMode>,
)
