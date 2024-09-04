import React from 'react'
import Home from './assets/components/home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='h-screen w-screen flex'>

     <Routes>
      <Route path='/' element={<Home/>} />
     </Routes>

    </div>
  )
}

export default App;