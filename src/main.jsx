import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './routers/router.jsx';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <div className="bg-slate-900 h-full">
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
        <RouterProvider router={ router } />
      </div>
    </div>
  </React.StrictMode>,
)
