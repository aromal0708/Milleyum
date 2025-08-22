import BrandCard from "@modules/common/components/brand-card"
import Image from "next/image"
import React from "react"

const StoreFeatures = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full gap-2 mt-8 ">
      <aside className="w-[50%] h-[600px]">
        <div className="w-full h-full flex flex-col justify-center items-center bg-transparent border-primary border-2 rounded-2xl text-4xl font-normal font-gardein text-primary py-8 px-0">
          <p>Milleyun is a premium drink</p>
          <p>company in providing high quality</p>
          <p>millet drinks</p>
        </div>
      </aside>
      <aside className="w-[50%] h-[600px] flex justify-end ">
        <div
          className="flex flex-col justify-between items-center gap-6 bg-center bg-no-repeat py-12 px-16 rounded-2xl h-full w-full"
          style={{
            backgroundImage: "url('/assets/Poster_1.jpg')",
            backgroundSize: "100% 100%",
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
          <div className="text-center flex-col flex items-center font-gardein font-bold text-5xl text-white">
            <div>No nasties.</div>
            <div>No nonsense.</div>
          </div>
          <div className=" mb-4 h-24 w-24">
            <Image
              src="/assets/logomark_transp.png"
              alt="Milleyum Logo"
              width={300}
              height={300}
            />
          </div>
        </div>
      </aside>
    </div>
  )
}

export default StoreFeatures
