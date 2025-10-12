import React from "react"
import ProductSlider from "@modules/common/components/product-slider"
import PrimaryButton from "@modules/common/components/primary-button"
import { SimplifiedProducts } from "types/global"

const ShopOurProducts = ({ products }: { products: SimplifiedProducts[] }) => {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <ProductSlider products={products} title="Shop Our Products" />
      <div className="w-full flex items-center justify-center my-4 sm:my-6 md:my-8">
        <PrimaryButton>
          View All Products
        </PrimaryButton>
      </div>
    </div>
  )
}

export default ShopOurProducts
