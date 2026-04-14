import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import Cart from './Cart'
import Card from './Card'

function App() {

  return (
   <>
   <NavBar >
   <Cart />
  </NavBar>
  <Card />
   </>
  )
}

export default App
