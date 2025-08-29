import React from "react"
import Product from "../product"
import { SimplifiedProducts } from "app/[countryCode]/(main)/store/page"

const ShopOurProducts = ({ products }: { products: SimplifiedProducts[] }) => {
  return (
    <div className="w-full flex flex-col items-start justify-center text-primary mt-8">
      <h1 className="font-gardein text-6xl font-medium ">Shop Our Products</h1>
      <div className="mt-4 grid grid-cols-3 gap-4 w-full">
        {products.slice(0, 3).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ShopOurProducts
