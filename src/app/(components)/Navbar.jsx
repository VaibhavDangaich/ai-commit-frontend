import React from 'react'

function Navbar() {
  return (
      <div className='absolute w-full p-2 mt-2 '>
          <div className='flex justify-between'>
              <div className=''>
                  <h1 className='text-[#ffffff] font-bold text-[18px] manrope-font'>GitSage</h1>
                  
              </div>
              <div>
                    <ul className='flex gap-4 ml-4'>
                      <li className='text-[#ffffff] font-semibold text-[16px] manrope-font '>
                          <a href='#features'>Features</a></li>
            <li className='text-[#ffffff] font-semibold text-[16px] manrope-font'><a href='#usuage'>Usuage</a></li>
                        
                    </ul>
                  
              </div>
           

          </div>
          <hr className=' text-white mt-2'></hr>

    </div>
  )
}

export default Navbar