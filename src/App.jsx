import './App.scss'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { GradientPage } from './components/BgGrad/GradientPage'
import ModalProvider from './contexts/ModalProvider'

function App() {
  return (
    <>
      <GradientPage />
      <ModalProvider>
        <RouterProvider router={routes} />
      </ModalProvider>
    </>
  )
}

export default App
