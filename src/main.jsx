import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home'
import MyGlobalStyles from './styles/GlobalStyles'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyGlobalStyles></MyGlobalStyles>
    <Home />
  </StrictMode>,
)
