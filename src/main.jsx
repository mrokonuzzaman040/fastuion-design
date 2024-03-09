import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

import {
  RouterProvider,
} from "react-router-dom";
import router from './routers/router.jsx';
import AuthProvider from './Auth/AuthProvide.jsx';

// @ts-ignore
ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={ queryClient }>
        <div className="bg-white text-gray-700 h-full">
          <div className="">
            <RouterProvider router={ router } />
          </div>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
