import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import {Outlet} from "react-router-dom"

export default function RootLayout() {
  return (
    <div>
        <div>
        <NavBar />
    </div>
    <div>
        <Outlet />
    </div>
    </div>
  )
}
