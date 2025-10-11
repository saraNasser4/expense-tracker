export default function Form() {
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const formData = {
    //         productName: e.target.productName.value,
    //         productPrice: e.target.productPrice.value,
    //     };

    //     await fetch("http://localhost:4000/add", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(formData),
    //     });
    // };
    return (
        <form  className="md:max-w-1/2 xl:max-w-1/4 w-full">
          <div className="flex gap-5 justify-between mb-4">
            <label htmlFor='productName' className="text-xl md:text-2xl font-semibold ">Product: </label>
            <input id='productName' type='text' className={`bg-transparent border-b outline-none p-1`} autoComplete="off" minLength={5} maxLength={20} required />
          </div>
          <div className="flex gap-5 justify-between mb-4">
            <label htmlFor='productPrice' className="text-xl md:text-2xl font-semibold ">Price: </label>
            <input id='productPrice' type='number' className={`w-20 text-center bg-transparent border-b outline-none p-1`} autoComplete="off" required />
          </div>
          <button type="submit" className="bg-yellow-500 w-full py-3 px-1.5 rounded-full font-bold capitalize text-[#2A3B5F] text-xl sm:text-2xl cursor-pointer transition-all hover:bg-yellow-600 mt-10">Add</button>
      </form>
    )
}