import Image from "next/image";
import Button from "./(components)/Button";
import Installation from "./(components)/Installation";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen bg-black flex flex-col items-center justify-center pt-30 overflow-hidden ">
      <div className="w-[1200px] h-[500px] mt-40">
        <div className="relative w-[1200px] h-[500px] rounded-4xl overflow-hidden -mt-40">
          {/* Blurred background image */}
          <div className="absolute inset-0 bg-[url('/peakpx.jpg')] bg-cover bg-center filter blur-sm scale-110"></div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-opacity-60 flex flex-col items-center justify-center">
            <h1 className="text-white text-[48px] -mt-10 font-extrabold text-center px-8">
              GitSage : Commit Smarter, Not Harder
            </h1>

            <h3 className="text-[#ffffff] text-center">GitSage is a command-line tool that leverages AI to generate meaningful and descriptive Git commit messages, streamlining your development workflow.</h3>
          </div>
        
       
        </div>
       
      </div>
      <div className="w-[1200px] -mt-10">
        
        <h1 id="features" className=" text-[30px] text-[#ffffff] manrope-font">Features</h1>
        <div className="grid grid-cols-2 grid-flow-row gap-4 mt-4">
          <div className="bg-[url('/bg2.svg')] bg-cover bg-center flex flex-col justify-center p-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <img src="/bg6.png" alt="GitSage Logo" className="w-[50px] h-[50px] mb-4 rounded-full shadow-lg" />
            <h1 className="text-xl font-bold mb-2 text-white">AI-Powered Commit Messages</h1>
            <p className="text-sm text-white ">Generate intelligent commit messages tailored to your code changes using state-of-the-art AI. Say goodbye to generic messages forever</p>

          </div>
          <div className="bg-[url('/bg3.svg')] bg-cover bg-center flex flex-col justify-center p-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h1 className="text-3xl mb-4">🪄 </h1>
            <h1 className="text-xl font-bold mb-2 text-white">One-Key Commit Magic</h1>
            <p className="text-sm text-white" >Simply press "y" and GitSage auto-commits using the AI-generated message. No manual message typing. Just code and confirm.</p>

          </div>
          <div className="relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
            {/* Background image with blur */}
            <div className="absolute inset-7 bg-no-repeat bg-[url('/bg4.svg')] bg-cover bg-center backdrop-blur-md"></div>

            {/* Overlay for darkening + content */}
            <div className="relative z-10 flex flex-col justify-center p-4 bg-opacity-40 backdrop-blur-xs rounded-lg">
              <h1 className="text-3xl mb-4">🔢</h1>
              <h1 className="text-xl font-bold mb-2 text-white">Instant Branch Pushing</h1>
              <p className="text-sm text-white">
                GitSage auto-detects branches. Just type the number beside your desired branch,
                and your commit is pushed—lightning fast and hassle-free.
              </p>
            </div>
          </div>
          <div className="bg-[url('/bg5.jpg')] bg-cover bg-center flex flex-col justify-center p-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h1 className="text-3xl mb-4">⚡</h1>
            <h1 className="text-xl font-bold mb-2 text-white"> Blazing Fast Workflow</h1>
            <p className="text-sm text-white">Generate intelligent commit messages tailored to your code changes using state-of-the-art AI. Say goodbye to generic messages forever</p>

          </div>
          <div className="bg-[url('/brains.png')] bg-cover bg-center flex flex-col justify-center p-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h1 className="text-3xl mb-4">🧠</h1>
            <h1 className="text-xl font-bold mb-2 text-white"> Developer-Centric Design</h1>
            <p className="text-sm text-white">Every interaction is designed to minimize cognitive load. Simple prompts, keyboard-first UX, and clear outputs keep you in the flow.</p>

          </div>
          <div className="relative bg-[url('/terminal2.avif')] bg-cover bg-center rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden">
            {/* Apply blur on a semi-transparent overlay */}
            <div className="absolute inset-0 backdrop-blur-xxs bg-black/10 z-0"></div>

            {/* Content */}
            <div className="relative flex flex-col justify-center p-4 z-10">
              <h1 className="text-3xl mb-4">🔗</h1>
              <h1 className="text-xl font-bold mb-2 text-white">Effortless Integration</h1>
              <p className="text-sm text-white">
                Works with your existing Git workflow and terminal setup. No new habits—just a smart layer on top of what you already use
              </p>
            </div>
          </div>

        </div>
        <Installation></Installation>
      </div>
    </div>
  );
}