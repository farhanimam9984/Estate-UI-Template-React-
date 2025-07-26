import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
// mobile scrolling  is on when we switch from mobile to large screen .
    useEffect(()=>{
if(showMobileMenu){
    document.body.style.overflow = 'hidden'
}
else{
    document.body.style.overflow = 'auto'
}
return ()=>{
    document.body.style.overflow = 'auto'
}
    },[showMobileMenu])
  return (
    <>
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="conatiner mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
          <img src="/images/logo.svg" alt="" />
          <ul className=" gap-7 hidden  md:flex text-white">
            <a href="#Header" className="cursor-pointer hover:text-gray-500">
              Home
            </a>
            <a href="#About" className="cursor-pointer hover:text-gray-500">
              About
            </a>
            <a href="#Projects" className="cursor-pointer hover:text-gray-500">
              Projects
            </a>
            <a href="#Testimonials" className="cursor-pointer hover:text-gray-500">
              Testimonials
            </a>
          </ul>
          {/* <button  className="hidden md:block bg-white px-8 py-2 rounded-full">
            Sing up
          </button> */}
          <Link  className=" text-md hover:duration-300 hidden md:block bg-gray-800 text-white px-8 py-2 rounded-full outline-[0.5px]" to="/singup"> SINGUP</Link>
          <img
          onClick={ () => setShowMobileMenu(true)} 
            src="/images/menu_icon.svg"
            className="md:hidden w- cursor-pointer"
            alt="menu icon"
          />
        </div>
        {/* Mobile menu for smartphones and tablets */}

        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full ' :'h-0 w-0' } fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
          <div className="flex justify-end p-6 cursor-pointer ">
            <img
            onClick={()=> setShowMobileMenu(false)}
              src="/images/cross_icon.svg"
              className="w-6"
              alt="cross icon"
            />
          </div>

          {/* We are using onclick in a.tags when we will link on the link home it will redirect to the home page  */}
          <ul className="flex flex-col items-center gap-2 mt-5 px-5  text-lg  bg-gray-200 font-semibold hover:text-blue-300">
            <a onClick={()=> setShowMobileMenu(false)} href="#Header" className="px-4 py-2 rounded-full inline-block">
              Home
            </a>
            <a onClick={()=> setShowMobileMenu(false)} href="#About" className="  px-4 py-2 rounded-full inline-block">
              About
            </a>
            <a onClick={()=> setShowMobileMenu(false)} href="#projects" className="px-4 py-2 rounded-full inline-block">
              Projects
            </a>
            <a onClick={()=> setShowMobileMenu(false)}
              href="#Testimonials"
              className="px-4 py-2 rounded-full inline-block"
            >
              Testimonials
            </a>
          </ul>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
