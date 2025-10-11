// import Image from "next/image";

import Link from "next/link";
import Form from "../components/Form";
import EyesComp from "../components/EyesComp";

export default function Home() {
  

  
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-20 pb-20 gap-16 text-[#FF6B35] bg-gray-900 relative">
      <h1 className="font-bold text-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-8xl">Expenses Tracker</h1>
      
      <Form />

      <span className="absolute bottom-0 right-0 w-50 h-50 bg-yellow-100/55 rounded-t-full flex items-center justify-center">
        <Link href="#" className="font-bold text-yellow-200 hover:text-gray-900 transition-all">Old Results</Link>
      </span>
      <EyesComp />
      
    </div>
  );
}
