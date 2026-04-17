import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import Cart from './Cart'
import Card from './Card'
import Meals from './Meals'
import Form from './Form'
import Portal from './Portal'

function App() {

  return (
   <>
   <NavBar >
   <Cart />
  </NavBar>
  <Card />
   <Meals>
    <Form/>
   </Meals>
   <Portal />
   </>
  )
}

export default App
