import React from "react"
import AppRoutes from "./routes"
import { GlobalStyle } from "./Components/GlobalStyled/Global_styled"
import "./App.css"

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <AppRoutes/>
    </>
  )
}
