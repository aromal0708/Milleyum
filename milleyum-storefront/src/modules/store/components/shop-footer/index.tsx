import Image from "next/image"
import React from "react"

const ShopFooter = () => {
  return (
    <div
      className="w-full min-h-[400px] py-8  mt-8 flex flex-col items-start  "
      style={{
        backgroundImage: "url('/assets/hero_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[40%] flex flex-col items-start justify-between">
        <div className="ml-14 flex flex-row w-full justify-between text-2xl font-gardein font-bold text-white">
          <aside className="font-degular text-2xl font-semibold">
            <h1>123</h1>
            <h1>Ernakulam, India</h1>
            <h1 className="mt-3">+91-88991-88991</h1>
          </aside>
          <aside className="font-degular text-2xl font-semibold">
            <h1>Shop All</h1>
            <h1>Milleyum</h1>
            <h1>About</h1>
          </aside>
        </div>
        <Image
          src="/assets/Logo_b&w_inverse_filled_transp.png"
          alt="Logo"
          width={800}
          height={800}
          className="items-start ml-2"
        />
      <div className="w-full ml-14 flex flex-row items-center justify-between font-semibold text-xl font-gardein text-white ">
        <h1>2025</h1>
        <h1>SHOPPING & DELIVERY</h1>
        <h1>Privacy Policy</h1>
      </div>
      </div>
    </div>
  )
}

export default ShopFooter
