import './App.scss'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { GradientPage } from './components/BgGrad/GradientPage'

function App() {
  return (
    <>
      <GradientPage />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
