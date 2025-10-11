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
    <div className="mx-auto flex w-full gap-2 lg:sticky lg:top-[calc(var(--header-height)+24px)] lg:mx-0 lg:max-w-[684px]">
      <div className="hidden w-[85px] flex-col gap-2 lg:flex">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedImageIndex(index)}
            className="w-[85px] overflow-hidden rounded-lg"
          >
            <Image
              src={image.url}
              alt={`carousel-item-${index}`}
              width={85}
              height={85}
              className="aspect-square h-[85px] w-[85px] object-cover object-center"
              sizes="85px"
            />
          </button>
        ))}
      </div>
      
      <div className="overflow-hidden scrollbar-hide  h-fit w-full gap-xs px-m lg:px-0">
        <div 
          className="flex snap-x snap-mandatory gap-xs transition-transform duration-500 ease-in-out"
          style={{
            transform: `translate3d(-${selectedImageIndex * 100}%, 0px, 0px)`,
            willChange: 'transform'
          }}
        >
          {images.map((image, index) => (
            <div key={image.id} className="flex-1 relative flex w-[86vw] min-w-full snap-center justify-center lg:w-full">
              <Image
                src={image.url}
                alt="Dark Chocolate Peanut Butter Chip"
                width={591}
                height={591}
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
                className="aspect-thin aspect-square w-full rounded-2xl object-cover object-bottom"
                sizes="(min-width: 1360px) 600px, (min-width: 1040px) calc(92vw - 633px), 100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
