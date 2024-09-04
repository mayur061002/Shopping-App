import React from "react";

const Nav = () => {
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
      <ul className=" w-[80%] ">
        <li className="mb-3  flex items-center">
          <span className="w-[10px] h-[10px] mr-2 rounded-full bg-red-500 "></span>
          cat 1
        </li>
        <li className="mb-3  flex items-center">
          <span className="w-[10px] h-[10px] mr-2 rounded-full bg-blue-500 "></span>
          cat 1
        </li>
        <li className="mb-3  flex items-center">
          <span className="w-[10px] h-[10px] mr-2 rounded-full bg-green-500 "></span>
          cat 1
        </li>
        <li className="mb-3  flex items-center">
          <span className="w-[10px] h-[10px] mr-2 rounded-full bg-yellow-500 "></span>
          cat 1
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
