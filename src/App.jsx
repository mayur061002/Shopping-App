import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/components/home'
import Details from './assets/components/Details'
import "../src/App.css"

const App = () => {
  
  return (
    <div className='h-screen w-screen flex'>

     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/details/:id' element={<Details />} />
      


     </Routes>

    </div>
  )
}

export default App;