import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Home = () => {
    
  return (
    <>
    <Nav />
        <div className='w-[85%] h-screen p-5 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto  '>

            <Link to="/details/1"  className='card p-3 border shadow rounded w-[18%] h-[30vh] flex justify-center items-center flex-col hover:scale-110 mr-3 mb-3'>
              <div className='w-full h-[80%] bg-contain bg-no-repeat bg-center  '
                style={{backgroundImage: "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"}}>

              </div>

              <h1 className='hover:text-blue-400 mt-[10px] '>Lorem ipsum dolor amet.</h1>
            </Link>

        </div>
    </>  
  )
}

export default Home