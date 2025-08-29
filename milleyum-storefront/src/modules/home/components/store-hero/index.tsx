import React from "react"

const StoreHero = () => {
  return (
    <div
      className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center rounded-lg sm:rounded-xl md:rounded-2xl mt-4 sm:mt-6 md:mt-8 flex flex-col items-center text-center"
      style={{ backgroundImage: "url('/assets/violetBG.jpg')" }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-opacity-50 px-4">
        <div className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-white font-medium font-gardein">
          <h1>Better Choices,</h1>
          <h1>Made Easy</h1>
        </div>
        <button className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-primary bg-white mt-4 sm:mt-6 md:mt-8 hover:bg-gray-200 transition-colors font-gardein text-lg sm:text-xl md:text-2xl font-medium">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default StoreHero
