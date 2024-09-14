import React from 'react'
import { MdArrowOutward } from "react-icons/md";
function LandingPage() {
  return (
    <>
    <div className='w-full h-screen pt-1  bg-zinc-900 text-white '>
      <div className="textstructure mt-40 px-20">
        <div className="masker font-['FoundersGrotesk']">
         {["We Create","Eye Openings","Presentations"].map((item,index)=>(
          <div className="w-fit flex"> {index==1&&<div className='w-[9vw] h-[4vw] mr-5 relative top-[2.5vw] bg-green-600'></div> } <h1  className='text-5xl mt-10 font-bold  uppercase -leading-[4vw]'>{item}</h1></div> 
         ))}
        </div>
      </div>
 
    <div className="border-zinc-800  flex items-center justify-between  border-t-[1px] mt-32   gap-10 py-5 ">
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=><p className='text-md px-20  font-light'>{item}</p>)}
  
    <div className="start mr-12 flex justify-between items-center gap-2 ">
        <div className="px-4 border-2 py-2  border-zinc-800 rounded-full "><h1 className='uppercase'>Start The Project</h1></div>
        <div className="border-zinc-500 border py-2 px-2   rounded-full "><MdArrowOutward/></div>

    </div>
    </div>
    </div>
    </>
  )
}

export default LandingPage
