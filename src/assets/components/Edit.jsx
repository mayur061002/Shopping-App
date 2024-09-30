import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';

const Edit = () => {
    

    const [products, setproducts] = useContext(ProductContext);
    const navigate = useNavigate()
    const {id} = useParams()
    const [product, setproduct] = useState({
        title: "",
        image: "",
        category: "",
        price: "",
        description: ""
    })

    const ChangeHandler = (e) =>{
        // console.log(e.target.name , e.target.value);
        
        setproduct({ ...product, [e.target.name]: e.target.value })
    }


    // const [title, settitle] = useState("")
    // const [image, setimage] = useState("")
    // const [category, setcategory] = useState("")
    // const [price, setprice] = useState("")
    // const [description, setdescription] = useState("")


    useEffect(() => {
        setproduct(products.filter((product) => product.id == id)[0])
    }, [id])


    const AddProductHandler = (e) => {
        e.preventDefault();

        if( 
            product.title.trim().length < 5 ||
            product.image.trim().length < 5 || 
            product.category.trim().length < 3 || 
            product.price.trim().length < 1 || 
            product.description.trim().length < 5 )
            
            {
            alert("Each field must have atleast 4 character");
            return;
            }

        // const product = {
        //     id : nanoid(),
        //     image,
        //     title,
        //     category,
        //     price,
        //     description
        // };

        const pi = products.findIndex((product) => product.id == id);
        const copydata = [...products]
        copydata[pi] = {...products[pi], ...product} 

        setproducts(copydata);
        localStorage.setItem(
            "products",
            JSON.stringify(copydata))
        navigate(-1)
    }


  return (
    <form onSubmit={AddProductHandler} className='p-[5%] w-screen h-screen flex flex-col items-center '>
        <h1 className='text-2xl mb-5 w-1/2 '>Edit Products</h1>

        <input
            type="url"
            placeholder='Image Link' 
            className='text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3 ' 
            name='image'
            onChange={ChangeHandler}
            value={product && product.image}

        />

        <input
            type="text"
            placeholder='Title' 
            className='text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3 ' 
            name='title'
            onChange={ChangeHandler}
            value={product && product.title}

        />

        <div className='w-1/2 flex justify-between '>
             <input
                type="text"
                placeholder='Category' 
                className='text-1xl bg-zinc-200 rounded p-3 w-[49%] mb-3 ' 
                name='category'
                onChange={ChangeHandler}
                value={product && product.category}

            />

            <input
                type="number"
                placeholder='Price' 
                className='text-1xl bg-zinc-200 rounded p-3 w-[49%] mb-3 ' 
                name='price'
                onChange={ChangeHandler}
                value={product && product.price}

            />

        </div>

        <textarea
            rows="10" 
            placeholder='Description' 
            className='text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3 '
            name='description' 
            onChange={ChangeHandler}
            value={product && product.description}

        ></textarea>

        <button
            className="py-2 px-5  border rounded border-blue-500 text-blue-700 "
        >
            Edit Product
        </button>

    </form>
  )
}

export default Edit