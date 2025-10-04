// import Image from "next/image";

import Link from "next/link";

export default function Home() {
  const formObj = [
    { name: 'productName', type: 'text', text: 'Product: ' },
    { name: 'productPrice', type: 'number', text: 'Price: ' },
  ]
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-20 pb-20 gap-16 text-[#FF6B35] bg-[#2A3B5F] relative">
      <h1 className="font-bold text-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-8xl">Expenses Tracker</h1>
      <form className="md:max-w-1/2 xl:max-w-1/4 w-full">
        {formObj.map((ele, id)=>
          <div className="flex gap-5 justify-between mb-4" key={id}>
            <label htmlFor={ele.name} className="text-xl md:text-2xl font-semibold ">{ele.text}</label>
            <input id={ele.name} type={ele.type} className={`${ele.type === 'number' ? 'w-20 text-center' : ''} bg-transparent border-b outline-none p-1`} autoComplete="off" minLength={5} maxLength={20} />
          </div>
        )}
        <button type="submit" className="bg-yellow-500 w-full py-3 px-1.5 rounded-full font-bold capitalize text-[#2A3B5F] text-xl sm:text-2xl cursor-pointer transition-all hover:bg-yellow-600 mt-10">Add</button>
      </form>

      <span className="absolute bottom-0 right-0 w-50 h-50 bg-yellow-100/55 rounded-t-full flex items-center justify-center">
        <Link href="#" className="font-bold text-yellow-200 hover:text-blue-400 transition-all">Old Results</Link>
      </span>
    </div>
  );
}
