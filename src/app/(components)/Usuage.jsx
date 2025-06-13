import React from 'react'
import { BsKeyboard } from "react-icons/bs";

function Usuage() {
  return (
      <div>
          <div className='flex items-center gap-2'>
              <h1 id="usuage" className=" text-[30px] text-[#ffffff] manrope-font">Usuage</h1>
              <BsKeyboard color='white' size={30} />
             
              
          </div>
          <p className='text-white'>GitSage is designed to blend effortlessly into your existing Git workflow. Here’s how to use it:</p>
          
    </div>
  )
}

export default Usuage