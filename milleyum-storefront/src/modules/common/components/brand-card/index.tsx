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
      className="flex flex-col justify-between items-center gap-6 bg-center bg-no-repeat py-12 px-16 rounded-2xl"
      style={{
        backgroundImage: "url('/assets/Poster_1.jpg')",
        backgroundSize: "100% 100%",
        height: `${height}px`,
        minWidth: `${width}px`,
      }}
    >
      <div className="text-center mt-4">
        <Image
          src="/assets/wordmark_transp.png"
          alt="Milleyum Wordmark"
          width={200}
          height={100}
        />
      </div>
      <div
        className="text-center flex-col flex items-center font-gardein font-bold  text-white"
        style={{
          fontSize: `${textSize}px`,
        }}
      >
        <div>No nasties.</div>
        <div>No nonsense.</div>
      </div>
      <div
        className=" mb-4"
        style={{
          width: logoWidth,
          height: logoHeight,
        }}
      >
        <Image
          src="/assets/logomark_transp.png"
          alt="Milleyum Logo"
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}

export default BrandCard
