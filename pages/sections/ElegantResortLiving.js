import Link from 'next/link'
import Navbar from '../../components/Navbar'
const ElegantResortLiving = () => {
    const bg={
        backgroundImage: 'url("/improved.jpg")',
       
        backgroundSize:'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
       
      

    }
    return (
        <section className="elegant-resort-living ">
             <Navbar/>
             <div className="h-full lg:h-screen relative" style={bg}>
             <div className="absolute bg-black h-full  lg:h-screen w-full opacity-60 flex flex-col items-center"></div>
             <div className=" relative ">
                 <div className="">
              <div className=" sm:mx-6   2xl:mx-44">
                  <Link href="/"><a><h1 className="text-transparent bg-clip-text bg-gradient-to-br from-red-300 to-yellow-700 lg:text-xl text-base font-bold ml-4 p-2">Life in ONE -</h1></a></Link>
         
              <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-yellow-700 lg:text-base text-sm  mt-2 font-bold ml-6 ">Elegant Resort Living</h2>

              <div className="grid xl:grid-cols-3 grid-cols-2 p-4 gap-4 justify-center ">
          <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-5xl relative z-2  border-opacity-30  backdrop-filter backdrop-blur-2xl"><h2 className="text-sm text-center lg:text-xl">100%Solar Energy</h2></div>
          <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-5xl relative z-2  border-opacity-30  backdrop-filter backdrop-blur-2xl"><h2 className="text-sm text-center lg:text-xl">No monthly Maintenance</h2></div>
          <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-5xl relative z-2  border-opacity-30  backdrop-filter backdrop-blur-2xl"><h2 className="text-sm text-center lg:text-xl">70% water recycling</h2></div>
          <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-5xl relative z-2  border-opacity-30  backdrop-filter backdrop-blur-2xl"><h2 className="text-sm text-center lg:text-xl">Electric Vehicle Fast charging stations</h2></div>
          <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-5xl relative z-2  border-opacity-30  backdrop-filter backdrop-blur-2xl"><h2 className="text-sm text-center lg:text-xl">Energy Management System</h2></div>
          <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-5xl relative z-2  border-opacity-30  backdrop-filter backdrop-blur-2xl"><h2 className="text-sm text-center lg:text-xl">Water Management system</h2></div>
        </div>
        </div>
          </div>
        </div>
        </div>
                        </section>
    )
}

export default ElegantResortLiving
