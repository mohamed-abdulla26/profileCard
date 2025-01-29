import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { ProfilCard } from './ProfileCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ProfilCard />
  </StrictMode>,
)
