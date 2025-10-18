"use client"

import React from "react"
import { HttpTypes } from "@medusajs/types"
import ImageGallery from "@modules/products/components/image-gallery"
import ProductInfo from "@modules/products/templates/product-info"
import ProductTabs from "@modules/products/components/product-tabs"

type ProductLayoutProps = {
  product: HttpTypes.StoreProduct
}

const ProductLayout = ({ product }: ProductLayoutProps) => {
  return (
    <section
      className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-x-8 gap-y-8 px-4 py-6 lg:grid-cols-[1fr,1fr] lg:px-12"
      data-testid="product-container"
    >
      <div 
        className="relative lg:sticky lg:top-[var(--header-height)] lg:h-[calc(100vh-var(--header-height))]"
        style={{ marginTop: 'calc(-1 * var(--header-height))' }}
        onWheel={(e) => {
          // Prevent default scrolling on the image gallery
          e.preventDefault();
          // When scrolling on image section, scroll the content section
          const contentSection = e.currentTarget.nextElementSibling;
          if (contentSection) {
            contentSection.scrollTop += e.deltaY;
          }
        }}
      >
        <div className="sticky top-[var(--header-height)] h-fit pt-6">
          <ImageGallery images={product?.images || []} />
        </div>
      </div>

      <div className="relative flex flex-col">
        <div className="lg:min-h-[calc(100vh-var(--header-height))] lg:py-6">
          <ProductInfo product={product} />
          <div className="mt-8 border-t border-primary/10">
            <ProductTabs product={product} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductLayout