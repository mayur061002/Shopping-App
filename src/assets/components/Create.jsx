import React, { useState } from 'react'

const Create = () => {

    const [title, settitle] = useState("")
    const [image, setimage] = useState("")
    const [category, setcategory] = useState("")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")

  return (

    <form className='p-[5%] w-screen h-screen flex flex-col items-center '>
        <h1 className='text-2xl mb-5 w-1/2 '>Add New Products</h1>

        <input
            type="url"
            placeholder='Image Link' 
            className='text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3 ' 
            onChange={(e) => setimage(e.target.value)}
            value={image}

        />

        <input
            type="text"
            placeholder='Title' 
            className='text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3 ' 
            onChange={(e) => settitle(e.target.value)}
            value={title}

        />

        <div className='w-1/2 flex justify-between '>
             <input
                type="text"
                placeholder='Category' 
                className='text-1xl bg-zinc-200 rounded p-3 w-[49%] mb-3 ' 
                onChange={(e) => setcategory(e.target.value)}
                value={category}

            />

            <input
                type="number"
                placeholder='Price' 
                className='text-1xl bg-zinc-200 rounded p-3 w-[49%] mb-3 ' 
                onChange={(e) => setprice(e.target.value)}
                value={price}

            />

        </div>

        <textarea
            rows="10" 
            placeholder='Description' 
            className='text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3 ' 
            onChange={(e) => setdescription(e.target.value)}
            value={description}

        ></textarea>

        <button
            className="py-2 px-5  border rounded border-blue-500 text-blue-700 "
        >
            Add New Product
        </button>

    </form>
  )
}

export default Create