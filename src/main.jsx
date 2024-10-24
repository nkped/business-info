import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'


const router = createBrowserRouter([{
  path:'/',
  element: <Home />,
  errorElement: <NotFoundPage />
}, {
  path:'/search',
  element: <Search />
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />       
  </StrictMode>,
)
