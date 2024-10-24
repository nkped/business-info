import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import SearchResultsPage from './pages/SearchResultsPage.jsx'


const router = createBrowserRouter([{
  path:'/',
  element: <HomePage />,
  errorElement: <NotFoundPage />
}, {
  path: '/results',
  element: <SearchResultsPage />
}, {
  path:`/search`,
  element: <SearchPage />
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />       
  </StrictMode>,
)
