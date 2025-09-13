import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { SimplifiedProducts } from "types/global" 
import React from "react"

const Product = ({ product }: { product: SimplifiedProducts }) => {
  return (
    <LocalizedClientLink href={`/products/${product.handle}`} key={product.id}>
      <div className="flex flex-col items-center justify-center text-base sm:text-md md:text-lg font-medium font-degular text-primary w-full">
        <div
          className="w-full aspect-square bg-center bg-cover bg-no-repeat rounded-lg sm:rounded-xl md:rounded-2xl"
          style={{
            backgroundImage: `url(${product?.thumbnail})`,
            backgroundSize: "cover",
          }}
        ></div>
        <span className="mt-2 text-center">{product?.title}</span>
        <span className="mt-1">${product?.price?.toFixed(2)}</span>
      </div>
    </LocalizedClientLink>
  )
}

export default Product
