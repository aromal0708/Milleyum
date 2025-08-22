import React from "react"

const Product = ({
  product,
}: {
  product: { title: string; price: number }
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-lg font-medium font-degular text-primary">
      <div className="min-w-[440px] min-h-[440px] bg-center bg-no-repeat rounded-2xl bg-[#276E5A]"></div>
      <span className="mt-2">{product.title}</span>
      <span className="mt-1">${product.price.toFixed(2)}</span>
    </div>
  )
}

export default Product
