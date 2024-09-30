import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../utils/Context';
import axios from '../utils/Axios';
import Loading from './Loading';

const Details = () => {

    const navigate = useNavigate()

    const [products, setproducts] = useContext(ProductContext);

    const [product, setproduct] = useState(null)
    const {id} = useParams();
    console.log(id);

    // const getsingleproduct = async () => {
    //     try {
    //         const { data } = await axios.get(`/products/${id}`)
    //         setproduct( data )
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }  
    
    useEffect(() => {
        if(!product) {
            setproduct(products.filter((product) => product.id == id)[0]); 
        }
        // getsingleproduct()
    }, []);


    const ProductDeleteHandler = () => {
        const FilteredProducts = products.filter((product) => product.id !== id)
        setproducts(FilteredProducts);
        localStorage.setItem("products", JSON.stringify(FilteredProducts));
        navigate("/")
    }
    
    return product ? ( 
      <div className='w-[75%] h-full m-auto p-[10%] items-center flex justify-between max-md:flex-col max-md:w-full  '>

         <img className='h-[100%] w-[50%] object-contain ' 
              src={`${product.image}`}
              alt="" />

         <div className='contant w-[50%] max-md:w-full  '>
              <h1 className='text-3xl '>{product.title}</h1>
              <h2 className='text-xl text-zinc-500 my-5 '>{product.category}</h2>
              <h3 className='text-red-400 mb-3'>${product.price}</h3>
              <p className='mb-[5%] '>{product.description}</p>
              <Link to={`/edit/${product.id}`} className="py-2 px-5 mr-5 border rounded border-blue-300 text-blue-400 ">Edit</Link>
              <button onClick={() =>  ProductDeleteHandler(product.id)} className="py-2 px-5  border rounded border-red-300 text-red-400 ">Delete</button>
          </div>

     </div>
    ) : (
        <Loading/>
    )
}

export default Details