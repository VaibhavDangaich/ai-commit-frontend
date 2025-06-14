import React from 'react'
import CardSwap, { Card } from './CardSwap'

function Why() {
  return (
      <div className='mt-3'>
          <div className='flex justify-between items-center gap-10'>
              
                  <h1 className='text-white text-4xl font-bold '>Why GitSage ?</h1>

              
              <div style={{ height: '600px', position: 'relative' }} className='mb-30'>

                  <CardSwap
                      cardDistance={60}
                      verticalDistance={70}
                      delay={5000}
                      pauseOnHover={false}
                  >
                      <Card className="">
                          <h3 className='text-white text-center font-semibold text-2xl mt-4 manrope-font'> AI-Powered Simplicity</h3>
                          <p className='leading-relaxed cascadia-code-font text-sm text-gray-100/90 mt-5 text-center'>🧠 AI-Powered Simplicity
                          Generate meaningful commit messages using a single command. Skip the message writing—just confirm with "y" and done.</p>
                      </Card>
                      <Card>
                          <h3>Card 2</h3>
                          <p>Your content here</p>
                      </Card>
                      <Card>
                          <h3>Card 3</h3>
                          <p>Your content here</p>
                      </Card>
                  </CardSwap>
              </div>
              
          </div>
         
    </div>
  )
}

export default Why