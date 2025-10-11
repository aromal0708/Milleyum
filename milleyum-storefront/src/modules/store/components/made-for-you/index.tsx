import { SimplifiedProducts } from "types/global"
import Product from "../product"
import PrimaryButton from "@modules/common/components/primary-button"

const MadeForYou = ({ products }: { products: SimplifiedProducts[] }) => {
  return (
    <div className="flex flex-col items-start w-full justify-center text-base sm:text-md md:text-lg font-medium font-degular text-primary py-4 sm:py-6 md:py-8">
      <div
        className="mt-4 relative min-h-[500px] w-full rounded-xl overflow-hidden"
        style={{
          backgroundImage: "url('/assets/Farm.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h1 className="font-medium font-gardein text-2xl sm:text-lg md:text-xl lg:text-2xl ml-4 mt-4">
          Made For You
        </h1>
        <div className="w-full md:w-[60%] min-h-[200px] sm:min-h-[250px] md:min-h-[300px] flex flex-col items-start justify-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-gardein font-bold px-8 sm:px-10 md:px-12">
          <h1>Harnessing</h1>
          <h1>The Goodness </h1>
          <h1>of Millets</h1>
        </div>
        <div className="absolute top-1/2 right-12 -translate-y-1/2 w-full md:w-1/3 max-w-[320px] flex flex-col gap-4 items-center bg-white rounded-2xl shadow-lg p-6 mx-auto md:mx-0">
          <div className="w-full">
            {products?.[0] && <Product product={products[0]} />}
          </div>
          <PrimaryButton>
            Shop Now
          </PrimaryButton>
        </div>
      </div>

      {/* <div className="w-full h-auto sm:h-60 md:h-80 mt-6 sm:mt-6 md:mt-8 flex flex-col justify-center items-center bg-transparent border-primary border-2 rounded-lg sm:rounded-xl md:rounded-2xl px-4 sm:px-6 md:px-8 py-6 sm:py-4 md:py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal font-gardein text-primary text-center">
        <p>Milleyun is a premium drink</p>
        <p>company in providing high quality</p>
        <p>millet drinks</p>
      </div> */}

      <div className="overflow-hidden w-full my-6 sm:my-8 md:my-10">
        <div
          className="flex whitespace-nowrap animate-scroll"
          style={{ width: "max-content" }}
        >
          <div className="flex flex-row gap-0 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-gardein font-normal text-primary whitespace-nowrap">
            <span className="px-4 sm:px-6 md:px-8">No Added Sugar</span>
            <span className="px-4 sm:px-6 md:px-8">Probiotic</span>
            <span className="px-4 sm:px-6 md:px-8">Sustainable</span>
            <span className="px-4 sm:px-6 md:px-8">High Protein</span>
            <span className="px-4 sm:px-6 md:px-8">No Added Sugar</span>
            <span className="px-4 sm:px-6 md:px-8">Probiotic</span>
            <span className="px-4 sm:px-6 md:px-8">Sustainable</span>
            <span className="px-4 sm:px-6 md:px-8">High Protein</span>
            <span className="px-4 sm:px-6 md:px-8">No Added Sugar</span>
            <span className="px-4 sm:px-6 md:px-8">Probiotic</span>
            <span className="px-4 sm:px-6 md:px-8">Sustainable</span>
            <span className="px-4 sm:px-6 md:px-8">High Protein</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MadeForYou
