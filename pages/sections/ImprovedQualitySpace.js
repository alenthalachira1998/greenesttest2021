import Link from 'next/link'
import Navbar from '../../components/Navbar';

const ImprovedQualitySpace = () => {
    const bg={
        backgroundImage: 'url("/eco.jpg")',
       
        backgroundSize:'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
       
      

    }
    return (
       
        <section className="improved-quality-space" >
            <Navbar/>
            <div className="h-full lg:h-screen relative" style={bg}>
             <div className="absolute bg-black h-full  lg:h-screen w-full opacity-60 flex flex-col  items-center"></div>
             <div className=" relative ">
                 <div className=" ">
              <div className=" sm:mx-6  2xl:mx-44">
                  <Link href="/"><a><h1 className="text-transparent bg-clip-text bg-gradient-to-br from-red-300 to-yellow-700 lg:text-xl text-base font-bold ml-4 p-2">Life in ONE -</h1></a></Link>
         
              <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-yellow-700 lg:text-base text-sm  mt-2 font-bold ml-6 ">Improved Quality Space</h2>
            
              <div className="grid xl:grid-cols-3 grid-cols-2 p-4 lg:gap-8 gap-4 justify-center ">
          <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-5xl relative z-2  border-opacity-30  backdrop-filter backdrop-blur-2xl " ><h2 className="text-sm text-center lg:text-xl">Excellent day Lighting</h2></div>
          <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-5xl relative z-2  border-opacity-30  backdrop-filter backdrop-blur-2xl " ><h2 className="text-sm text-center lg:text-xl">Excellent Air Quality</h2></div>
          <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-5xl relative z-2  border-opacity-30  backdrop-filter backdrop-blur-2xl " ><h2 className="text-sm text-center lg:text-xl">Biopilic Design For Life</h2></div>
          <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-5xl relative z-2  border-opacity-30  backdrop-filter backdrop-blur-2xl " ><h2 className="text-sm text-center lg:text-xl">Sensory Eco System</h2></div>
          <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-5xl relative z-2  border-opacity-30  backdrop-filter backdrop-blur-2xl " ><h2 className="text-sm text-center lg:text-xl">Smart Security System</h2></div>
          <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-5xl relative z-2  border-opacity-30  backdrop-filter backdrop-blur-2xl " ><h2 className="text-sm text-center lg:text-xl">Underground Service lines</h2></div>
            </div>
          
       
        </div>
                        </div>
                        </div>
                </div>
                        </section>
    )
}

export default ImprovedQualitySpace;
