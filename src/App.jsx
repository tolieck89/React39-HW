import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SmileCards from "./stateful/SmileCards"
import Result from "./stateful/Result"
import Stateless from './Stateless'

function App() {


  return (
    <>

    <SmileCards />
    <Result />
    </>
  )
}

export default App
