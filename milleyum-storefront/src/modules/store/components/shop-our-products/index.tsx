import React from "react"
import Product from "../product"
import { SimplifiedProducts } from "app/[countryCode]/(main)/store/page"

const ShopOurProducts = ({ products }: { products: SimplifiedProducts[] }) => {
  return (
    <div className="w-full flex flex-col items-start justify-center text-primary mt-6 sm:mt-7 md:mt-8">
      <h1 className="font-gardein text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">Shop Our Products</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-4 md:gap-4 w-full">
        {products.slice(0, 3).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ShopOurProducts
