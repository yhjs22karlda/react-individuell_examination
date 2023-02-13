import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/Home'
import AddCard from './views/AddCard'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <p style={{fontSize:"4rem"}}>Error</p>
    },{
        path: "/addcard",
        element: <AddCard />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
