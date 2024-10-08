import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CondicionalRender from './Components/conditionalrende.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CondicionalRender />
  </StrictMode>,
)
