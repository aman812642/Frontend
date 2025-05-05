import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router , RouterProvider } from 'react-router-dom'
import Signup from '../components/Signup.jsx'
import Profile from '../components/Profile.jsx'
import Login from '../components/Login.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<App />} />
  <Route path='/signup' element={<Signup />} />
  <Route path='/profile' element={<Profile/>} />
  <Route path='/login' element={<Login/>} />
  </>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
