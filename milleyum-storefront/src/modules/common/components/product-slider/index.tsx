"use client"
import React, { useState, useEffect } from "react"
import Product from "@modules/store/components/product"
import { SimplifiedProducts } from "types/global"

const ProductSlider = ({ 
  products, 
  title = "You may also like" 
}: { 
  products: SimplifiedProducts[]
  title?: string 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 768) {
        setItemsPerView(3) // md and up
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2) // sm
      } else {
        setItemsPerView(1) // mobile
      }
    }
    
    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])
  
  const maxIndex = Math.max(0, products.length - itemsPerView)

  const slideLeft = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1))
  }

  const slideRight = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1))
  }

  return (
    <div className="w-screen max-w-full flex flex-col items-start justify-center text-primary mt-6 sm:mt-7 md:mt-8 overflow-x-hidden">
      <div className="w-full flex items-center justify-between mb-4 px-4 sm:px-6 md:px-8">
        <h1 className="font-gardein text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-primary flex-1 min-w-0 pr-4 truncate">
          {title}
        </h1>
        
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={slideLeft}
            disabled={currentIndex === 0}
            className={`w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center transition-all duration-300 ${
              currentIndex === 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-primary hover:text-white'
            }`}
          >
            <svg 
              className="w-5 h-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={slideRight}
            disabled={currentIndex >= maxIndex}
            className={`w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center transition-all duration-300 ${
              currentIndex >= maxIndex 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-primary hover:text-white'
            }`}
          >
            <svg 
              className="w-5 h-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div className="px-4 sm:px-6 md:px-8">
          <div 
            className="flex gap-2 sm:gap-3 md:gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className={`flex-shrink-0 ${
                  itemsPerView === 1 ? 'w-full' : 
                  itemsPerView === 2 ? 'w-1/2' : 'w-1/3'
                }`}
              >
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSlider