import React from "react"

const StoreHero = () => {
  return (
    <div
      className="w-full h-[80vh] bg-cover bg-center rounded-2xl mt-8 flex flex-col items-center  text-center"
      style={{ backgroundImage: "url('/assets/violetBG.jpg')" }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-opacity-50 ">
        <div className="text-9xl text-white font-medium font-gardein">
          <h1>Better Choices,</h1>
          <h1>Made Easy</h1>
        </div>
        <button className="px-6 py-3 rounded-full text-primary bg-white  mt-8 hover:bg-gray-200 transition-colors font-gardein text-2xl font-medium">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default StoreHero
