"use client";
import React, { useState } from 'react'
import CardSwap, { Card } from './CardSwap'

function Why() {

   
  return (
      <div className='mt-3 overflow-x-hidden overflow-y-hidden'>
          <div className='flex justify-between items-center gap-10 ' >
              
                  <h1 className='text-white text-7xl font-bold scroll-mt-32 ' id='why'>Why PushMuse ?</h1>

              
              <div style={{ height: '600px', position: 'relative' }} className='mb-30 mr-20'>

                  <CardSwap
                      cardDistance={60}
                      verticalDistance={70}
                      delay={200}
                      pauseOnHover={true}
                  >
                      <Card className=" bg-[url('/c1.gif')] ease-in-out z-20 ">
                          <div>
                              <div>

                                  <h3 className='text-white text-center font-semibold text-2xl mt-4 manrope-font'> ✅ Pro-Level Git Descriptions</h3>
                                  <p className='leading-relaxed cascadia-code-font text-sm text-gray-100/90 mt-5 text-center mt-4'>💬 GitHub-Ready Extended Messages</p>
                                  <p className='text-white text-center font-semibold text-md mt-4'>PushMuse doesn’t stop at a one-liner. </p>
                                  <div className='backdrop-blur-sm bg-gray-700/40 rounded-lg mx-5 h-[90px] mt-4'>
                                      <p className='text-white ml-4 mt-3 text-xl font-semibold '>
                                          Each commit includes an optional extended description that tells the full story behind your changes.
                                      </p>
                                  </div>

                              </div>

                          </div>
                         
                             
                              
                          
                          
                          
                         
                      </Card>
                      <Card className="bg-[url('/c2.gif')]" >
                          <div>
                              <div >

                                  <h3 className='text-white text-center font-semibold text-2xl mt-4 manrope-font'> ✅ Zero Learning Curve</h3>
                                  <p className='leading-relaxed cascadia-code-font text-sm text-gray-100/90 mt-5 text-center mt-4'>🧘 Use Your Existing Workflow</p>
                                  <p className='leading-relaxed cascadia-code-font text-sm text-gray-100/90 mt-5 text-center mt-4'>No commands to learn, no context-switching.</p>
                                  <div className='backdrop-blur-sm bg-gray-700/40 rounded-lg mx-5 h-[100px] mt-4'>
                                      <p className='text-white ml-4 mt-3 text-xl font-semibold '>
                                          PushMuse integrates seamlessly into how you already work — it’s the productivity upgrade your terminal didn’t know it needed.
                                      </p>
                                  </div>

                              </div>

                          </div>
                      </Card>
                      
                      <Card className="bg-[url('/c3.gif')]">
                          <div>
                              <div>

                                  <h3 className='text-white text-center font-semibold text-2xl mt-4 manrope-font'> 👨‍💻 Developer-Built, Developer-First</h3>
                                  <p className='leading-relaxed cascadia-code-font text-sm text-gray-100/90 mt-5 text-center mt-4'>→ Designed From Real Frustrations</p>
                                  <div className='backdrop-blur-sm bg-gray-700/40 rounded-lg mx-5 h-[100px] mt-4'>
                                      <p className='text-white ml-4 mt-3 text-xl font-semibold '>
                                          No fluff. Just speed, clarity, and better collaboration—exactly what devs actually need.
                                      </p>
                                  </div>

                              </div>

                          </div>
                      </Card>
                      
                  </CardSwap>
              </div>
              
          </div>
         
    </div>
  )
}

export default Why