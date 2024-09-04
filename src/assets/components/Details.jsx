import React from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
    
  return (
    <div className='w-[75%] h-full m-auto p-[10%] items-center flex justify-between max-md:flex-col max-md:w-full  '>

        <img className='h-[100%] w-[50%] object-contain ' 
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="" />

        <div className='contant w-[50%] max-md:w-full  '>
            <h1 className='text-3xl '>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
            <h2 className='text-xl text-zinc-500 my-5 '>men's clothing</h2>
            <h3 className='text-red-400 mb-3'> $ 109.95</h3>
            <p className='mb-[5%] '>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
            <Link className="py-2 px-5 mr-5 border rounded border-blue-300 text-blue-400 ">Edit</Link>
            <Link className="py-2 px-5  border rounded border-red-300 text-red-400 ">Delete</Link>
        </div>

    </div>
  )
}

export default Details