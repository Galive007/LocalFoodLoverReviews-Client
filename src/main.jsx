import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { ToastContainer } from 'react-toastify'
import { router } from './Router/Routes.jsx';
import AuthProvider from './context/AuthProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
