import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home/Home'
import Projetos from './Components/Pages/Projetos/Projetos'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Projetos" element={<Projetos/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
