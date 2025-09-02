import React from "react"

const StoreHero = () => {
  return (
    <div>
      <div
        className="relative mx-[calc(-1*((100vw-100%)/2))] px-14 bg-cover bg-center h-[50vh] sm:h-[60vh] md:h-[70vh] flex flex-col items-start"
        style={{
          backgroundImage: "url('/assets/hero_bg.jpg')",
        }}
      >
        <div className="flex flex-col items-start justify-center h-full bg-opacity-50 px-4 ">
          <div className="text-xl sm:text-xl md:text-xl lg:text-7xl text-white font-medium font-gardein">
            <h1>No Nasties</h1>
            <h1>No Nonsense</h1>
          </div>
          <button className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-primary bg-white mt-4 sm:mt-6 md:mt-8 hover:bg-gray-200 transition-colors font-gardein text-lg sm:text-xl md:text-2xl font-medium">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default StoreHero
