import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StyledGlobalReset } from './styles/globalReset'
import { StyledGlobalStyle } from './styles/globalStyles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledGlobalReset/>
    <StyledGlobalStyle/>
    <App />
  </React.StrictMode>,
)
