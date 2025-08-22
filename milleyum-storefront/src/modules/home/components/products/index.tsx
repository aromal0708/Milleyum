import React from "react"
import ProductCard from "../product_card"

const Products = () => {
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
    {
      id: 4,
      title: "Milleyum Flavour four",
      price: 49.99,
    },
  ]
  return (
    <div className="px-56 py-8 bg-background w-full">
      <div className="grid grid-cols-4 gap-4 w-full">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Products
