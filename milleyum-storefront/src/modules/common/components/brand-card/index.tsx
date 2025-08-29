import Image from "next/image"
import React from "react"

const BrandCard = ({
  width,
  height,
  textSize,
  logoHeight,
  logoWidth,
}: {
  width: number
  height: number
  textSize: number
  logoHeight?: number
  logoWidth?: number
}) => {
  return (
    <div
      className="flex flex-col justify-between items-center gap-4 sm:gap-6 bg-center bg-no-repeat py-6 sm:py-8 md:py-12 px-8 sm:px-12 md:px-16 rounded-lg sm:rounded-xl md:rounded-2xl w-full h-auto sm:h-[350px] md:h-[380px] lg:h-[420px]"
      style={{
        backgroundImage: "url('/assets/Poster_1.jpg')",
        backgroundSize: "100% 100%",
        maxWidth: '100%',
      }}
    >
      <div className="text-center mt-2 sm:mt-4">
        <Image
          src="/assets/wordmark_transp.png"
          alt="Milleyum Wordmark"
          width={200}
          height={100}
          className="w-36 sm:w-40 md:w-48 lg:w-[200px] h-auto"
        />
      </div>
      <div
        className="text-center flex-col flex items-center font-gardein font-bold text-white text-2xl sm:text-3xl md:text-4xl"
      >
        <div>No nasties.</div>
        <div>No nonsense.</div>
      </div>
      <div className="mb-2 sm:mb-4">
        <Image
          src="/assets/logomark_transp.png"
          alt="Milleyum Logo"
          width={300}
          height={300}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-[48px] md:h-[48px]"
        />
      </div>
    </div>
  )
}

export default BrandCard
