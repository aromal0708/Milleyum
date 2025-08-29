import Product from "../product"
import { SimplifiedProducts } from "app/[countryCode]/(main)/store/page"

const MadeForYou = ({products}:{products: SimplifiedProducts[]}) => {
  return (
    <div className="flex flex-col items-start w-full justify-center text-base sm:text-md md:text-lg font-medium font-degular text-primary py-4 sm:py-6 md:py-8">
      <h1 className="font-medium font-gardein text-3xl sm:text-4xl md:text-5xl lg:text-6xl ml-1">Made For You</h1>
      
      {/* Main content - changes to column layout on mobile */}
      <div className="mt-4 flex flex-col md:flex-row w-full justify-between gap-4 md:gap-0">
        <div
          className="w-full md:w-[66%] min-h-[200px] sm:min-h-[250px] md:min-h-[300px] rounded-lg sm:rounded-xl md:rounded-2xl bg-cover bg-center bg-no-repeat flex flex-col items-start justify-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-gardein font-bold px-4 sm:px-6 md:px-8"
          style={{
            backgroundImage: "url('/assets/Farm.jpg')",
          }}
        >
          <h1>Harnessing</h1>
          <h1>The Goodness </h1>
          <h1>of Millets</h1>
        </div>
        <div className="flex flex-col gap-4 items-center w-full md:w-1/3 px-0 sm:px-2 md:px-4 mt-4 md:mt-0">
          {products?.[0] && <Product product={products[0]} />}
          <button className="bg-transparent text-primary border-primary border-2 py-2 sm:py-3 md:py-4 rounded-full w-full font-gardein text-xl sm:text-2xl md:text-3xl font-semibold hover:bg-primary hover:text-white transition-colors">
            Shop Now
          </button>
        </div>
      </div>
      
      {/* Message box */}
      <div className="w-full h-auto sm:h-60 md:h-80 mt-6 sm:mt-6 md:mt-8 flex flex-col justify-center items-center bg-transparent border-primary border-2 rounded-lg sm:rounded-xl md:rounded-2xl px-4 sm:px-6 md:px-8 py-6 sm:py-4 md:py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal font-gardein text-primary text-center">
        <p>Milleyun is a premium drink</p>
        <p>company in providing high quality</p>
        <p>millet drinks</p>
      </div>
      
      {/* Scrolling text */}
      <div className="overflow-hidden w-full my-6 sm:my-8 md:my-10">
        <div className="flex whitespace-nowrap animate-scroll" style={{ width: 'max-content' }}>
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
