import React from "react"
import Product from "../product"
import PrimaryButton from "@modules/common/components/primary-button"
import { SimplifiedProducts } from "types/global"

const BuyProducts = ({ products }: { products: SimplifiedProducts[] }) => {
  return (
    <div className="w-full flex flex-col items-start justify-center text-primary mt-4 sm:mt-6 md:mt-8">
      <h1 className="font-gardein text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium ml-1">
        Made Fresh
      </h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-4 md:gap-4 w-full">
        {products.slice(0, 3).map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center my-4 sm:my-6 md:my-8">
        <PrimaryButton>
          Where To Buy
        </PrimaryButton>
      </div>
    </div>
  )
}

export default BuyProducts
