import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/Axios'

const Home = () => {
  
    
  const [products] = useContext(ProductContext);
  const {search} = useLocation();
  const category = decodeURIComponent(search.split("=")[1])
  // console.log(category);

  const [filteredproducts, setfilteredproducts] = useState(null)

  const getproductcategory = async ()=> {
    try {
      const { data } = await axios.get(`/products/category/${category}`)
      setfilteredproducts(data)
    } catch (error) {
      console.log(error)
      
    }
  };

  useEffect(() => {
    console.log(category)
    if (!filteredproducts  || category == 'undefined'  ) setfilteredproducts(products)
    if (category != "undefined"){

      //  getproductcategory();
      setfilteredproducts(products.filter((product) => product.category == category));
    }

  }, [category, products])

  return products ? ( 

    <>
    <Nav />
        <div className='w-[85%] h-screen p-5 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto  '>

            {filteredproducts && filteredproducts.map((p, i) => 

              <Link 
                key={p.id}
                to={`/details/${p.id}`} 
                className='card p-3 border shadow rounded w-[18%] h-[30vh] flex justify-center items-center flex-col hover:scale-110 mr-3 mb-3'>
                <div className='w-full h-[80%] bg-contain bg-no-repeat bg-center  '
                  style={{backgroundImage: `url(${p.image})`}}>

                </div>

                <h1 className='hover:text-blue-400 mt-[10px] '>{p.title}</h1>
              </Link>

            )}


        </div>
    </>  
  ) : (
    <Loading />
  );
};

export default Home