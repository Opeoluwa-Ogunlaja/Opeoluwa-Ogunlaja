import { useState } from 'react'
import './App.scss'
import Button from './components/Button'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { GradientPage } from './components/BgGrad/GradientPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GradientPage />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
