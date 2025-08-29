import Product from "../product"
import { SimplifiedProducts } from "app/[countryCode]/(main)/store/page"

const MadeForYou = ({products}:{products: SimplifiedProducts[]}) => {
  return (
    <div className="flex flex-col items-start w-full  justify-center text-lg font-medium font-degular text-primary py-8 ">
      <h1 className=" font-medium font-gardein text-6xl ml-1">Made For You</h1>
      <div className="mt-4 flex flex-row  w-full justify-between">
        <div
          className="w-[66%] min-h-[100px] rounded-2xl  bg-cover bg-center  bg-no-repeat flex flex-col items-start justify-center text-7xl font-gardein font-bold px-8"
          style={{
            backgroundImage: "url('/assets/Farm.jpg')",
          }}
        >
          <h1>Harnessing</h1>
          <h1>The Goodness </h1>
          <h1>of Millets</h1>
        </div>
        <div className="flex flex-col gap-4 items-center w-1/3 px-4">
          <Product product={products?.[0]} />
          <button className="bg-transparent text-primary border-primary border-2 py-4 rounded-full w-full font-gardein text-3xl font-semibold hover:bg-primary hover:text-white transition-colors">
            Shop Now
          </button>
        </div>
      </div>
      <div className="w-full h-80 mt-8 flex flex-col justify-center items-center bg-transparent border-primary border-2 rounded-2xl px-8 py-4 text-4xl font-normal font-gardein text-primary">
        <p>Milleyun is a premium drink</p>
        <p>company in providing high quality</p>
        <p>millet drinks</p>
      </div>
      <div className="overflow-hidden w-full my-10">
        <div className="flex whitespace-nowrap animate-scroll" style={{ width: 'max-content' }}>
          <div className="flex flex-row gap-0 text-6xl font-gardein font-normal text-primary whitespace-nowrap">
            <span className="px-8">No Added Sugar</span>
            <span className="px-8">Probiotic</span>
            <span className="px-8">Sustainable</span>
            <span className="px-8">High Protein</span>
            <span className="px-8">No Added Sugar</span>
            <span className="px-8">Probiotic</span>
            <span className="px-8">Sustainable</span>
            <span className="px-8">High Protein</span>
            <span className="px-8">No Added Sugar</span>
            <span className="px-8">Probiotic</span>
            <span className="px-8">Sustainable</span>
            <span className="px-8">High Protein</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MadeForYou
