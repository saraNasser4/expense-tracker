// import Image from "next/image";

export default function Home() {
  const formObj = [
    { name: 'productName', type: 'text', text: 'Product: ' },
    { name: 'productPrice', type: 'number', text: 'Price: ' },
  ]
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-20 pb-20 gap-16">
      <h1 className="font-bold text-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-8xl">Expenses Tracker</h1>
      <form>
        {formObj.map((ele, id)=>
          <div className="flex gap-5" key={id}>
            <label htmlFor={ele.name} className="text-xl md:text-2xl font-semibold ">{ele.text}</label>
            <input id={ele.name} type={ele.type} className={`${ele.type === 'number' ? 'w-20 text-center' : ''} bg-transparent border-b outline-none p-1`} autoComplete="off" minLength={5} maxLength={20} />
          </div>
        )}
      </form>
    </div>
  );
}
