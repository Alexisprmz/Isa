import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import ListaSeries from './components/ListaSeries.jsx'
import Formulario from './components/Formulario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ListaSeries/>
    <Formulario />
  </StrictMode>,
)
