"use client";
import React from 'react'
import { MdInstallDesktop } from "react-icons/md";

function Button() {
  return (
      <div>
          <a href='#install'>
              <div className='flex justify-center items-center w-[300px] border border-black rounded-xl gap-5 mt-10 h-[40px] hover:scale-115 duration-200 ease-in-out hover:shadow-lg shadow-black'>

                  <button className='cascadia-code-font font-extrabold text-2xl'>
                      Installation
                  </button>
                  <MdInstallDesktop size={25}></MdInstallDesktop>



              </div>

          </a>
         
         

    </div>
  )
}

export default Button