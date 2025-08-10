import Image from "next/image"
import React from "react"
import ProductCard from "../product_card"

const Products = () => {
  return (
    <div className="px-56 py-16 bg-background w-full">
      <div className="grid grid-cols-4 gap-4 w-full">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default Products
