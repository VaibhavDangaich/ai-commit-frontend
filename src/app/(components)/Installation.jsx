"use client";
import React from 'react'
import { MdInstallDesktop } from "react-icons/md";
import { IoIosCopy } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';

function Installation() {
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
        <div >
            <div className='flex gap-2 items-center mt-10'>
                <h1 id="install" className=" text-[30px] text-[#ffffff] manrope-font relative scroll-mt-32">Installation</h1>
                <MdInstallDesktop color='white' size={30} />

            </div>
            <div>
                <h1 className=' text-white'> Install PushMuse globally using npm to get started instantly with AI-powered commits.</h1>
            </div>
            <div className='px-4 py-2 mt-5 rounded-md border border-gray-600 bg-gray-800 flex justify-between items-center w-[480px] h-[40px] mb-5'>
                <p className='cascadia-code-font text-white'>$ npm install -g ai-commit-cli-vd</p>
                <button onClick={() => copyToClipboard("npm install -g ai-commit-cli-vd")} className='cursor-pointer'>
                    <IoIosCopy className='text-white ' />
                </button>
            </div>
            
            
            
        </div>
    )
     
}

export default Installation