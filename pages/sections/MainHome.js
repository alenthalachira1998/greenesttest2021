import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {BsArrowDown} from 'react-icons/bs'
import MyDropdown from '../../components/MyDropdown'
import MyModalTwo from '../../components/MyModalTwo'
import MyModalThree from '../../components/MyModalThree'
import MyModalOne from '../../components/MyModalOne'

const bg ={
    backgroundImage: 'url("/mainp.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
   
}

const MainHome = () => {
    return (
        <section id="main-home">
             <div className="text-dark lg:h-screen  flex flex-col items-center  relative" style={bg} >
               <div className="absolute bg-black h-full  lg:h-screen w-full opacity-60 flex flex-col items-center"></div>
               <div className="container flex flex-col items-center justify-center relative">
               <h1 className="text-green-500 font-bold lg:text-xl mt-36"> GREENNEST</h1>
             <div className="text-white text-bold lg:text-xl text-sm mt-10 max-w-screen-lg mx-4">
             Greenest ONE offers our customers a functionally designed home with enhanced quality of
space and life. Project is located in a calm, clean, well connected and lush green location
within Thiruvananthapuram Corporation, at Njandoorkonam. Project consist of 30 high-
performance individual villa units, club house and lots of recreational and easy go common
amenities

</div>
<Link href="/">
          <a className="text-center text-white mx-10  hover:bg-green-500 lg:mt-8 mb-4 bg-green-400 bg-opacity-10  shadow-5xl relative z-2  border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm px-3 py-3   mt-8   ">View Project</a>
        </Link> 
<div className="flex flex-col items-center">
<h1 className="font-bold text-green-500 text-xl mt-4">Features and specialities</h1>
</div>
      <div className="flex  flex-col lg:flex-row  mt-4 ">
          {/* <Link href="/" >
          <a className="text-center text-white mx-10 px-3 py-3 hover:transition duration-500 ease-in-out hover:bg-green-400 lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-5xl relative z-2  border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm rounded-md ">Design Features</a>
        </Link> 
     
        <Link href="/" >
          <a className="text-center text-white mx-10 px-3 py-3  hover:bg-green-400 lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-5xl relative z-2  border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm rounded-md">Build Quality</a>
        </Link> 
        
       
       
        <Link href="/" >
          <a className="text-center text-white mx-10 px-3 py-3 hover:bg-green-400 lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-5xl relative z-2  border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm rounded-md">Green Policy</a>
     </Link>
    */}
      <MyModalOne/>
      <MyModalTwo/>
      <MyModalThree/>
     <MyDropdown/>
      
     
       
        </div>
        <span className="text-white text-5xl lg:mt-36 mt-24 animate-bounce"><BsArrowDown/></span>
        
</div>

             </div>
            
             
            {/* <div className=" grid lg:grid-cols-2 h-screen grid-cols-1 lg:mx-20" >
          <div className="flex  text-3xl text-green-500 bg-gray-800  font-bold  " style={bg}>
              <div className="p-10">
          Greenest ONE offers our customers a functionally designed home with enhanced quality of
space and life. Project is located in a calm, clean, well connected and lush green location
within Thiruvananthapuram Corporation, at Njandoorkonam. Project consist of 30 high-
performance individual villa units, club house and lots of recreational and easy go common
amenities
</div>
          </div>
          <div className="flex text-4xl  flex-col items-center">
            <h1 className="font-bold text-green-500 ">Features and specialities</h1>
          <Link href="/">
          <a className="bg- text-white px-3 py-3 font-bold rounded-md mt-8 mb-24">Green Policy</a>
        </Link> 
        <Link href="/">
          <a className="bg-gradient-to-r from-green-400 via-green-500 to-green-500 text-white px-3 py-3 font-bold rounded-md mb-24">BuildQuality</a>
        </Link> 
        <Link href="/">
          <a className="bg-gradient-to-r from-green-400 via-green-500 to-green-500 text-white px-3 py-3 font-bold rounded-md mb-24">Life in One</a>
        </Link> 
        <Link href="/">
          <a className="bg-gradient-to-r from-green-400 via-green-500 to-red-500 text-white px-3 py-3 font-bold rounded-md mb-24">Design features</a>
        </Link> 

            </div>
            </div> */}
         
           
        </section>
    )
}

export default MainHome;
