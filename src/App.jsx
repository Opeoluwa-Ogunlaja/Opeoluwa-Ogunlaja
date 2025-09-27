import './App.scss'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import ModalProvider from './contexts/ModalProvider'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function App() {
  return (
    <>
      <ModalProvider>
        <RouterProvider router={routes} />
      </ModalProvider>
    </>
  )
}

export default App
