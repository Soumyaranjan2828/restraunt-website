import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import Cart from './Cart'
import Card from './Card'
import Meals from './Meals'

function App() {

  return (
   <>
   <NavBar >
   <Cart />
  </NavBar>
  <Card />
   <Meals />
   </>
  )
}

export default App
