import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {

  const [products] = useContext(ProductContext);

  let distinct_category = products && products.reduce((acc, cv)=> [...acc, cv.category], [])
  distinct_category = [...new Set(distinct_category)];
  
  // console.log(distinct_category);

  const color = () => {
    return`rgba(
      ${(Math.random()* 255).toFixed()},
      ${(Math.random()* 255).toFixed()},
      ${(Math.random()* 255).toFixed()},
    0.4)`
    
  };
  // console.log(color())

  return (
    
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5 ">
      <a
        className="py-2 px-5  border rounded border-blue-500 text-blue-700 "
        href="/create"
      >
        Add New Product
      </a>
      <hr className="my-3 w-[80%] " />
      <h1 className="text-2xl mb-3 w-[80%] bg-red-50  ">Category</h1>
      <div className=" w-[80%] ">
        {distinct_category.map((cat, ind)=> (

          <Link
            key={ind} 
            to={`/?category=${cat}`} className="mb-3  flex items-center">
            <span style={{backgroundColor: color()}} className="w-[10px] h-[10px] mr-2 rounded-full bg-red-500 "></span>
            {cat}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;


