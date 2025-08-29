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
    <div className="px-0 sm:px-6 md:px-16 lg:px-32 xl:px-56 py-6 sm:py-7 md:py-8 bg-background w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-gardein font-medium text-primary mb-4 sm:mb-6">Our Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 w-full">
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
