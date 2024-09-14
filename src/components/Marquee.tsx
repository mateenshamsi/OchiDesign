import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-10 rounded-tr-3xl bg-green-900 '>
      <div className="border-t-2 my-4 flex gap-4  whitespace-nowrap border-b-2 border-zinc-300 ">
      <h1 className='text-[10vw] uppercase  text-white leading-none font-["FoundersGrotesk-Semibold"]'>We are Ochi</h1>
      <h1 className='text-[10vw] leading-none  uppercase  text-white font-["FoundersGrotesk-Semibold"]'>We are Ochi</h1>
      </div>

    </div>
  )
}

export default Marquee
