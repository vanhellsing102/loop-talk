import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import AuthContextProvider from './ContextProviders/AuthContextProvider.jsx'
import { Toaster } from 'react-hot-toast'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const queryClient  = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='min-h-screen flex items-center justify-center'>
      <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </AuthContextProvider>
      </QueryClientProvider>
    </div>
  </StrictMode>,
)
