import Image from "next/image"
import React from "react"

const ShopFooter = () => {
  return (
    <div
      className="w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] py-6 sm:py-7 md:py-8 mt-6 sm:mt-7 md:mt-8 flex flex-col items-center sm:items-start"
      style={{
        backgroundImage: "url('/assets/hero_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[40%] flex flex-col items-start justify-between px-4 sm:px-0">
        <div className="ml-0 sm:ml-8 md:ml-14 flex flex-col sm:flex-row w-full justify-between text-xl sm:text-xl md:text-2xl font-gardein font-bold text-white gap-6 sm:gap-0">
          {/* Address section */}
          <aside className="font-degular text-xl sm:text-xl md:text-2xl font-semibold">
            <h1>123</h1>
            <h1>Ernakulam, India</h1>
            <h1 className="mt-2 sm:mt-3">+91-88991-88991</h1>
          </aside>
          
          {/* Navigation section */}
          <aside className="font-degular text-xl sm:text-xl md:text-2xl font-semibold">
            <h1>Shop All</h1>
            <h1>Milleyum</h1>
            <h1>About</h1>
          </aside>
        </div>
        
        {/* Logo */}
        <div className="w-full flex justify-center sm:justify-start">
          <Image
            src="/assets/Logo_b&w_inverse_filled_transp.png"
            alt="Logo"
            width={800}
            height={800}
            className="items-start ml-0 sm:ml-2 w-48 sm:w-56 md:w-64 lg:w-72 h-auto mt-6 sm:mt-4 md:mt-0"
          />
        </div>
        
        {/* Footer links */}
        <div className="w-full ml-0 sm:ml-8 md:ml-14 flex flex-col sm:flex-row items-center justify-between font-semibold text-base sm:text-lg md:text-xl font-gardein text-white mt-6 sm:mt-4 gap-4 sm:gap-0">
          <h1>2025</h1>
          <h1 className="text-center">SHOPPING & DELIVERY</h1>
          <h1>Privacy Policy</h1>
        </div>
      </div>
    </div>
  )
}

export default ShopFooter
