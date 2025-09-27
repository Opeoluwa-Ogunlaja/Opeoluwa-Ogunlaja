import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GradientPage } from './components/BgGrad/GradientPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GradientPage />
    <App />
  </>
)
