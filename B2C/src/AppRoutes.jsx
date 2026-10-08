import React from 'react'
import {  Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './components/Cart'


function AppRoutes() {
  return (
 
  <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/Product' element={<Products/>}/>
     <Route path='/cart' element={<Cart/>}/>
  </Routes>
 
  )
}

export default AppRoutes