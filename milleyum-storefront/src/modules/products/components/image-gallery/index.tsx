"use client"

import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import { useState } from "react"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex gap-4 lg:gap-6">
        {/* Thumbnails */}
        <div className="flex flex-col gap-2 lg:gap-3">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImageIndex(index)}
              aria-label={`View image ${index + 1}`}
              className={`w-16 h-16 lg:w-20 lg:h-20 relative rounded-lg overflow-hidden transition-all duration-300 ease-out ${
                selectedImageIndex === index
                  ? "ring-2 ring-primary ring-offset-2 shadow-lg transform scale-105"
                  : "ring-1 ring-gray-200 hover:ring-gray-300 hover:shadow-md hover:transform hover:scale-102"
              }`}
            >
              <Image
                src={image.url}
                alt={`Product thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 64px, 80px"
              />
            </button>
          ))}
        </div>

        {/* Main Image Container */}
        <div className="flex-1 relative">
          <div className="relative w-full h-[400px] lg:h-[480px] rounded-xl overflow-hidden bg-gray-50">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${selectedImageIndex * 100}%)`,
                width: `${images.length * 100}%`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className="w-full h-full flex-shrink-0 relative flex items-center justify-center p-4"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.url}
                      alt={`Product Image ${index + 1}`}
                      fill
                      className="object-contain"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
