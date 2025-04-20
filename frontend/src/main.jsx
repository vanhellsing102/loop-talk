import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import AuthContextProvider from './ContextProviders/AuthContextProvider.jsx'
import { Toaster } from 'react-hot-toast'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import SocketContextProvider from './ContextProviders/SocketContextProvider.jsx'

const queryClient  = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <SocketContextProvider>
          <div className='min-h-screen flex items-center justify-center'>
            <RouterProvider router={router}></RouterProvider>
            <Toaster />
          </div>
        </SocketContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)
