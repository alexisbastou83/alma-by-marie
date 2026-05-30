import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CardList from './components/CardList.jsx'
import './index.css'
import 'tachyons'
import { creations } from './creations.js'

createRoot(document.getElementById('creations_app')).render(
  <StrictMode>
    <CardList data={creations}/>
  </StrictMode>
)