"use client"

import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import { useState, useRef, useEffect, useCallback } from "react"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState(0)
  const [currentTranslate, setCurrentTranslate] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const getPositionX = (event: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent) => {
    if ('touches' in event) {
      return event.touches[0].clientX
    }
    return event.clientX
  }

  const handleStart = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    setStartPos(getPositionX(event))
    setCurrentTranslate(0)
  }, [])

  const handleEnd = useCallback(() => {
    if (!isDragging) return
    
    setIsDragging(false)
    const threshold = 50

    if (currentTranslate < -threshold && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1)
    } else if (currentTranslate > threshold && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1)
    }
    
    setCurrentTranslate(0)
  }, [isDragging, currentTranslate, selectedImageIndex, images.length])

  useEffect(() => {
    const handleMove = (event: MouseEvent | TouchEvent) => {
      if (!isDragging) return
      
      event.preventDefault()
      const currentPosition = getPositionX(event)
      const diff = currentPosition - startPos
      setCurrentTranslate(diff)
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMove)
      window.addEventListener('touchmove', handleMove, { passive: false })
      window.addEventListener('mouseup', handleEnd)
      window.addEventListener('touchend', handleEnd)
    }

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('touchmove', handleMove)
      window.removeEventListener('mouseup', handleEnd)
      window.removeEventListener('touchend', handleEnd)
    }
  }, [isDragging, startPos, handleEnd])

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
      
      <div 
        ref={containerRef}
        className="overflow-hidden scrollbar-hide h-fit w-full gap-xs px-m lg:px-0 select-none cursor-grab active:cursor-grabbing"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        <div 
          className="flex snap-x snap-mandatory gap-xs"
          style={{
            transform: `translate3d(calc(-${selectedImageIndex * 100}% + ${currentTranslate}px), 0px, 0px)`,
            transition: isDragging ? 'none' : 'transform 700ms ease-in-out',
            willChange: 'transform',
            userSelect: 'none'
          }}
        >
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="flex-1 relative flex w-[86vw] min-w-full snap-center justify-center lg:w-full"
              onDragStart={(e) => e.preventDefault()}
            >
              <Image
                src={image.url}
                alt="Dark Chocolate Peanut Butter Chip"
                width={591}
                height={591}
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
                className="aspect-thin aspect-square w-full rounded-2xl object-cover object-bottom pointer-events-none"
                sizes="(min-width: 1360px) 600px, (min-width: 1040px) calc(92vw - 633px), 100vw"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
