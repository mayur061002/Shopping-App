import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './assets/components/Home'
import Details from './assets/components/Details'
import "../src/App.css"
import Create from './assets/components/Create'
import Edit from './assets/components/Edit'

const App = () => {

  const { search, pathname} = useLocation();
  // console.log(search, pathname)

  
  
  return (
    <div className='h-screen w-screen flex'>

      {
      (pathname != '/' || search.length > 0) 
      && 
      (<Link to="/" className="text-red-300 absolute left-[16%] top-[3.5%] " >Home</Link>)
      }

     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Create' element={<Create/>} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/edit/:id' element={<Edit />} />
      


     </Routes>

    </div>
  )
}

export default App;

