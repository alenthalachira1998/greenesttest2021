import Iframe from "react-iframe";

import Link from 'next/link';

export default function About() {
  const wrapper= {
    position: 'relative',
    overflow: 'hidden',
    paddingTop:'56.25%'
  }
  const iiframe={
    position: 'absolute',
    top:'0',
    left:'0',
    width:'100%',
    height:'100%'
  }
  const bg={
    backgroundColor:"#40B5AD",
  }
  const mapresponsive={
    overflow:'hidden',
    paddingBottom:'56.25%',
    position:'relative',
    height:'0'
}
const mapresponsiveiframe={
    left:0,
    top:0,
    height:'100%',
    width:'100%',
    position:'absolute'
}

  return (
    <>
    
      <section id="about"  >
      
   
        <div className="lg:h-screen h-screen mt-10  sm:mx-6 xl:mx- 2xl:mx-52 flex justify-center items-start lg:items-center">
  
        <div>
          <div className=" p-4 lg:mb-10 text-white  col-span-2  rounded-lg " style={bg}>
          <h1 className="text-center lg:text-xl text-base  font-bold text-yellow-300  my-2  lg:mr-4 lg:pt-2 pb-4 " >About</h1>
            GREENEST ONE is an iconic villa project at
            Njandoorkonam-Thiruvananthapuram, 8 km from Techno Park conveniently
            placed between NH – 66 & MC Road. The project consist of 29 high-end
            technical villa community in 2.2 Acres of land, which performs to
            the highest efficiency in functional & operational sectors. Through
            deeply involved design, proper planning & study at the design stage;
            the construction cost is reduced to a considerable figure resulted
            in maintaining the current market rate. <br/>
            <Link href="/sections/MaterialSpecifications"><a className="text-yellow-300 hover:text-white border-yellow-300 hover:border-white border-b-2">Click for Material Specification</a></Link>
          </div>
          <div className="grid grid-col-s1 lg:grid-cols-2   gap-10 " >
            <div className=" rounded-lg mt-10 lg:mt-0" style={bg}><h2 className="text-center font-bold text-yellow-400 my-2 p-4"> Walk Through Video </h2>
            <div style={wrapper}>
            
            <iframe
             
              src="https://www.youtube.com/embed/tgbNymZ7vqY"  style={iiframe} 

            ></iframe>
            </div>
            </div>
            <div>
            <div className="rounded-lg" style={bg}><h2 className="text-center font-bold text-yellow-400 my-2 p-4"> Project Location </h2>
            <div style={mapresponsive}>
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.9202803206713!2d76.95393381478293!3d8.507121493883881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzAnMjUuNiJOIDc2wrA1NycyMi4wIkU!5e0!3m2!1sen!2sin!4v1630850939086!5m2!1sen!2sin"  width='100%' style={mapresponsiveiframe}
        
            ></Iframe>
           <div className='m-2 text-white lg:m-10 tex-white font-semibold'> Greenest buildings<br/> and business pvt ltd,
Tc14/733, nandavanam, Thiruvananthapuram</div>
            </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
