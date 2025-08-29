import { SimplifiedProducts } from "app/[countryCode]/(main)/store/page"
import React from "react"

const Product = ({ product }: { product: SimplifiedProducts }) => {
  return (
    <div className="flex flex-col items-center justify-center text-lg font-medium font-degular text-primary">
      <div
        className="min-w-[440px] min-h-[440px] bg-center bg-cover bg-no-repeat rounded-2xl"
        style={{
          backgroundImage: `url(${product?.thumbnail})`,
        }}
      ></div>
      <span className="mt-2">{product?.title}</span>
      <span className="mt-1">${product?.price?.toFixed(2)}</span>
    </div>
  )
}

export default Product
