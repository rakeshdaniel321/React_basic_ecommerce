import React from 'react'
import Products from '../components/Products'
import Navbar from '../components/Navbar'

function Home() {
  return (
   <>
   <Navbar/>
   {/* <h1>Welcome to the Home Page</h1> */}
   <Products/>
   </>
  )
}

export default Home