import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ResultsPage from './pages/ResultsPage.jsx'
import ResultPage from './pages/ResultPage.jsx'

const router = createBrowserRouter([{
  path:'/',
  element: <HomePage />,
  errorElement: <NotFoundPage />
}, {
  path:`/search`,
  element: <SearchPage />
}, {
  path: '/results',
  element: <ResultsPage />
} , {
  path: '/result/:id',
  element: <ResultPage />
} ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />       
  </StrictMode>,
)
