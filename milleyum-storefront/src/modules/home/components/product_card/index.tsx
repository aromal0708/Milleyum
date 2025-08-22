import Image from "next/image"
import React from "react"

const ProductCard = ({ title, price }: { title?: string; price?: number }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full  rounded-lg">
      <div
        className="w-64 h-64 rounded-lg flex items-center justify-between relative overflow-hidden px-1"
        style={{
          backgroundImage: "url('/assets/poster_3.jpg')",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="text-white ml-4 absolute bottom-10 font-bold text-5xl font-gardein">
          Prime <br /> Juice
        </div>

        <Image
          src="/assets/prime_black.webp"
          alt="Prime Juice"
          width={220}
          height={220}
          className="absolute  object-contain left-24 top-16 "
        />
      </div>
      <div className="flex flex-col items-center justify-between w-full font-degular text-primary mt-1">
        <h2 className="text-md font-normal">{title}</h2>
        <p className="mt-0">${price?.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ProductCard
