import Image from "next/image"
import React from "react"

const ProductCard = ({ title, price }: { title?: string; price?: number }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full rounded-lg">
      <div 
        className="aspect-square w-full max-w-[180px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] rounded-lg flex items-center justify-between relative overflow-hidden px-1"
        style={{
          backgroundImage: "url('/assets/poster_3.jpg')",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="text-white ml-2 sm:ml-3 md:ml-4 absolute bottom-4 sm:bottom-6 md:bottom-10 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-gardein leading-tight">
          Prime <br /> Juice
        </div>

        <Image
          src="/assets/prime_black.webp"
          alt="Prime Juice"
          width={220}
          height={220}
          className="absolute object-contain w-[60%] h-[60%] left-[40%] top-[30%]"
        />
      </div>
      <div className="flex flex-col items-center justify-between w-full font-degular text-primary mt-1 sm:mt-1 md:mt-2">
        <h2 className="text-sm sm:text-base md:text-md font-normal">{title}</h2>
        <p className="mt-0 text-sm sm:text-base">${price?.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ProductCard
