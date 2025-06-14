"use client";
import React from 'react';
import toast from 'react-hot-toast';
import { BsKeyboard } from "react-icons/bs";
import { IoIosCopy } from 'react-icons/io';


function Usuage() {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                toast.success("Copied to clipboard!"); // You can replace this with a toast or custom message
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
            });
    };
  return (
      <div className='rounded-4xl bg-gradient-to-br from-[#1F1C2C] to-[#928DAB] p-5'>
          <div className='flex items-center gap-2'>
              <h1 id="usuage" className=" text-[30px] text-[#ffffff] manrope-font">Usuage</h1>
              <BsKeyboard color='white' size={30} />
             
              
          </div>
          <p className='text-white'>GitSage is designed to blend effortlessly into your existing Git workflow. Here’s how to use it:</p>
          <div>
              <p className=' text-white text-xl font-semibold mt-8 mb-2'>1️⃣ Stage Your Changes</p>
              <p className="text-gray-300 text-sm mb-2">
                  Run the usual Git command to stage your files:
              </p>
              <div className='flex gap-5 items-center'>
                  <div className='px-4 py-2 mt-5 rounded-md border border-gray-600 bg-gray-800 flex justify-between items-center w-[480px] h-[40px] mb-5'>
                      <p className='cascadia-code-font text-white'>$ git add .</p>
                      <button onClick={() => copyToClipboard("git add .")}>
                          <IoIosCopy className='text-white ' />
                      </button>
                  </div>
                  <p className='text-white'>OR</p>
                  <div className='px-4 py-2 mt-5 rounded-md border border-gray-600 bg-gray-800 flex justify-between items-center w-[480px] h-[40px] mb-5'>
                      <p className='cascadia-code-font text-white'>$ git add (filename) </p>
                      <button onClick={() => copyToClipboard("git add (your filename")}>
                          <IoIosCopy className='text-white ' />
                      </button>
                  </div>

                  
              </div>
              <p className=' text-white text-xl font-semibold mt-4 mb-2'>2️⃣ Generate an AI-Powered Commit</p>
              <p className="text-gray-300 text-sm mb-2">
                  Now run the magic command:
              </p>
              <div className='px-4 py-2 mt-5 rounded-md border border-gray-600 bg-gray-800 flex justify-between items-center w-[480px] h-[40px] mb-5'>
                  <p className='cascadia-code-font text-white'>$ ai-commit</p>
                  <button onClick={() => copyToClipboard("ai-commit")}>
                      <IoIosCopy className='text-white ' />
                  </button>
              </div>
              <p className="text-gray-300 text-sm mb-2 -mt-2">
                  This uses AI to analyze your code changes and generate a meaningful commit message.
              </p>
              <p className=' text-white text-xl font-semibold mt-4 mb-2'>3️⃣ Confirm the Commit</p>
              <p className="text-gray-300 text-sm mb-1">
                  The terminal will show you the generated commit message.
              </p>
              <br></br>
              <p className="text-gray-300 text-sm mb-2">Just Type:</p>
              <div className='px-4 py-2 mt-5 rounded-md border border-gray-600 bg-gray-800 flex justify-between items-center w-[480px] h-[40px] mb-5'>
                  <p className='cascadia-code-font text-white'>$ y</p>
                  <button onClick={() => copyToClipboard("y")}>
                      <IoIosCopy className='text-white ' />
                  </button>
              </div>
              <p className=' text-white text-xl font-semibold mt-4 mb-2'>4️⃣ Choose Your Branch</p>
              <p className="text-gray-300 text-sm mb-2">
                  GitSage will list available branches like this:
              </p>
              <div className='px-4 py-2 mt-5 rounded-md border border-gray-600 bg-gray-800 flex justify-between items-center w-[480px] h-[80px] mb-5'>
                  <p className='cascadia-code-font text-white'>
                      <div className='flex flex-col'>
                          <p>1.main</p>
                          <p>2.feature/login</p>
                         <p>3.fix/button-bug</p> 
                      </div>
                  </p>
                
              </div>
              <p className="text-gray-300 text-sm mb-2">
                  Simply type the number next to your desired branch, hit Enter, and boom — your code is pushed!
              </p>
              <p className='text-white font-semibold text-lg'>✅ No more typing git push origin branch-name manually.</p>



              


             

          </div>
          
    </div>
  )
}

export default Usuage