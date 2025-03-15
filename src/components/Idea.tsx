function Idea() {
    return (
      <div className="w-full bg-yellow-500 px-4 py-36 flex flex-col items-center justify-center text-center gap-4 rounded-lg">
        <h2 className="text-3xl font-semibold text-black mb-2">
          Let’s discuss <span className="font-bold">the idea</span>
        </h2>
        <p className="text-gray-800 max-w-lg mx-auto mb-4">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta
          porta feugiat scelerisque in elit.
        </p>
        
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 bg-transparent outline-none w-40 lg:w-64"
          />
          <button className="bg-[#000000b9] hover:bg-black text-white px-5 py-2 rounded-full cursor-pointer">
            SEND
          </button>
        </div>
      </div>
    );
  }
  
  export default Idea;