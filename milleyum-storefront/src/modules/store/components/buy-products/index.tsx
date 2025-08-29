import React from "react"
import Product from "../product"
import { StoreProduct } from "@medusajs/types"
import { SimplifiedProducts } from "app/[countryCode]/(main)/store/page"

const BuyProducts = ({ products }: { products: SimplifiedProducts[] }) => {
  // const products = [
  //   {
  //     id: 1,
  //     title: "Milleyum Flavour one",
  //     price: 19.99,
  //   },
  //   {
  //     id: 2,
  //     title: "Milleyum Flavour two",
  //     price: 29.99,
  //   },
  //   {
  //     id: 3,
  //     title: "Milleyum Flavour three",
  //     price: 39.99,
  //   },
  // ]
  return (
    <div className="w-full flex flex-col items-start justify-center text-primary mt-4 sm:mt-6 md:mt-8">
      <h1 className="font-gardein text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium ml-1">Made Fresh</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-4 md:gap-4 w-full">
        {products.slice(0, 3).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center my-4 sm:my-6 md:my-8">
        <button className="flex items-center justify-center bg-transparent text-xl sm:text-2xl md:text-3xl text-primary font-gardein outline-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-colors w-full py-1 sm:py-1.5 md:py-2">
          Where To Buy
        </button>
      </div>
    </div>
  )
}

export default BuyProducts
