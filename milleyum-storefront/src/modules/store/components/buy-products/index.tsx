import React from "react"
import Product from "../product"

const BuyProducts = () => {
  const products = [
    {
      id: 1,
      title: "Milleyum Flavour one",
      price: 19.99,
    },
    {
      id: 2,
      title: "Milleyum Flavour two",
      price: 29.99,
    },
    {
      id: 3,
      title: "Milleyum Flavour three",
      price: 39.99,
    },
  ]
  return (
    <div className="w-full flex flex-col items-start justify-center text-primary mt-8">
      <h1 className="font-gardein text-6xl font-medium ml-1">Made Fresh</h1>
      <div className="mt-4 grid grid-cols-3 gap-4 w-full">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center my-8">
        <button className="flex items-center justify-center bg-transparent text-3xl text-primary font-gardein outline-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-colors w-full py-2">
          Where To Buy
        </button>
      </div>
    </div>
  )
}

export default BuyProducts
