import Image from "next/image";
import Button from "./(components)/Button";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen bg-black flex flex-col items-center justify-center pt-30 ">
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
      <div>
        <h1 className=" text-[22px]  text-[#ffffff] manrope-font">Features</h1>
        <div className="grid grid-cols-3 grid-flow-row gap-4 mt-4">
          <div className="bg-[#404F47] flex flex-col justify-center p-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h1 className="text-xl font-bold mb-2 text-white">AI-Powered Commit Messages</h1>
            <p className="text-sm ">Generate intelligent commit messages tailored to your code changes using state-of-the-art AI. Say goodbye to generic messages forever</p>

          </div>
          <div className="bg-[#404F47] flex flex-col justify-center p-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h1 className="text-3xl mb-4">🪄</h1>
            <h1 className="text-xl font-bold mb-2 text-white">One-Key Commit Magic</h1>
            <p className="text-sm">Simply press "y" and GitSage auto-commits using the AI-generated message. No manual message typing. Just code and confirm.</p>

          </div>
          <div className="bg-[#404F47] flex flex-col justify-center p-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h1 className="text-xl font-bold mb-2 text-white">AI-Powered Commit Messages</h1>
            <p className="text-sm">Generate intelligent commit messages tailored to your code changes using state-of-the-art AI. Say goodbye to generic messages forever</p>

          </div>
          <div className="bg-[#404F47] flex flex-col justify-center p-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h1 className="text-xl font-bold mb-2 text-white">AI-Powered Commit Messages</h1>
            <p className="text-sm">Generate intelligent commit messages tailored to your code changes using state-of-the-art AI. Say goodbye to generic messages forever</p>

          </div>
          <div className="bg-[#404F47] flex flex-col justify-center p-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h1 className="text-xl font-bold mb-2 text-white">AI-Powered Commit Messages</h1>
            <p className="text-sm">Generate intelligent commit messages tailored to your code changes using state-of-the-art AI. Say goodbye to generic messages forever</p>

          </div>
          <div className="bg-[#404F47] flex flex-col justify-center p-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h1 className="text-xl font-bold mb-2 text-white">AI-Powered Commit Messages</h1>
            <p className="text-sm">Generate intelligent commit messages tailored to your code changes using state-of-the-art AI. Say goodbye to generic messages forever</p>

          </div>

        </div>
      </div>
    </div>
  );
}