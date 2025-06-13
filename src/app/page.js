import Image from "next/image";
import Button from "./(components)/Button";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#121714] flex items-center justify-center pt-30 ">
      <div className="w-[1200px] h-[500px] bg-[#121714]">
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
        <div>
          <h1 className=" text-[22px] mt-5 text-[#ffffff] manrope-font">Features</h1>
          <div className="grid grid-cols-3 grid-flow-row gap-4 mt-4">
            <div className="bg-[#A1B5AB]">
              sjfn

            </div>
            <div className="bg-[#A1B5AB]">
              smdbs

            </div>
            <div className="bg-[#A1B5AB]">
              sdhjbs

            </div>

          </div>
        </div>
        
     
       

      </div>
    </div>
  );
}