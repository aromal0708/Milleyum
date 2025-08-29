import BrandCard from "@modules/common/components/brand-card"
import Image from "next/image"
import React from "react"

const StoreFeatures = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-2 mt-6 sm:mt-7 md:mt-8">
      {/* Left side text box - full width on mobile, 50% on desktop */}
      <aside className="w-full md:w-[50%] h-auto md:h-[400px] lg:h-[500px] xl:h-[600px]">
        <div className="w-full h-full flex flex-col justify-center items-center bg-transparent border-primary border-2 rounded-lg sm:rounded-xl md:rounded-2xl text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal font-gardein text-primary py-6 sm:py-7 md:py-8 px-0 text-center">
          <p>Milleyun is a premium drink</p>
          <p>company in providing high quality</p>
          <p>millet drinks</p>
        </div>
      </aside>
      
      {/* Right side image box - full width on mobile, 50% on desktop */}
      <aside className="w-full md:w-[50%] h-auto md:h-[400px] lg:h-[500px] xl:h-[600px] flex justify-end mt-4 md:mt-0">
        <div
          className="flex flex-col justify-between items-center gap-4 sm:gap-5 md:gap-6 bg-center bg-no-repeat py-6 sm:py-8 md:py-10 lg:py-12 px-8 sm:px-10 md:px-12 lg:px-16 rounded-lg sm:rounded-xl md:rounded-2xl h-full w-full"
          style={{
            backgroundImage: "url('/assets/Poster_1.jpg')",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="text-center mt-2 sm:mt-3 md:mt-4">
            <Image
              src="/assets/wordmark_transp.png"
              alt="Milleyum Wordmark"
              width={200}
              height={100}
              className="w-32 sm:w-40 md:w-48 lg:w-[200px] h-auto"
            />
          </div>
          <div className="text-center flex-col flex items-center font-gardein font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white">
            <div>No nasties.</div>
            <div>No nonsense.</div>
          </div>
          <div className="mb-2 sm:mb-3 md:mb-4 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24">
            <Image
              src="/assets/logomark_transp.png"
              alt="Milleyum Logo"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>
      </aside>
    </div>
  )
}

export default StoreFeatures
