import React, { useContext } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'

const Home = () => {
    
  const [products] = useContext(ProductContext);
  console.log(products)

  return products ? ( 

    <>
    <Nav />
        <div className='w-[85%] h-screen p-5 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto  '>

            {products.map((p, i) => 

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