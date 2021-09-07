import React from "react";
import {AiOutlineMenu} from 'react-icons/ai'
import Image from 'next/image'
import { Link } from 'react-scroll';
import {useState,useEffect} from 'react'
import LinkS from 'next/link'


export default function Navbar({ fixed }) {
  
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="sticky top-0 w-full z-10 bg-white   py-2 justify-around navbar ">
        <div className="relative flex flex-wrap items-center justify-between px-2   ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
           
          
               
         
           <LinkS href="/">
                <a>
          <Image
        src="/logo.png"
        alt="Picture of the author"
        width={120}
        height={40}
      />  
      </a>
        </LinkS>
       
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
             <i className="text-black"><AiOutlineMenu/></i> 
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item ml-2 text-gray-600">
              <Link to='about'
               spy={true}
                smooth={true}
                offset={0}
                duration={500}
                activeClass="text-green-500 active " className="px-3 py-2 flex items-center text-xs uppercase font-semibold leading-snug text-gray-600 hover:text-green-500 cursor-pointer"
                
                >
          
                About
                 
              
            </Link>
            </li>
              
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-semibold leading-snug text-gray-600 hover:text-green-500"
                  href="#pablo"
                >
                  <span className="ml-2">Project</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-semibold leading-snug text-gray-600  hover:text-green-500"
                  href="#pablo"
                >
                <span className="ml-2">Blog</span>
                </a>
                
              </li>
              <li className="nav-item">
              <Link to='contact'
               spy={true}
                smooth={true}
                offset={0}
                duration={500}
                activeClass="text-green-500 active " className="pl-2 pr-2 py-2  lg:ml-8 flex items-center text-xs uppercase font-semibold leading-snug text-gray-600 bg-white  border-2 border-green-500 hover:bg-green-500 ml-2 hover:text-white  cursor-pointer"
                
                
              >Contact</Link>
              

              
                
              </li>
             
            </ul>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
}
