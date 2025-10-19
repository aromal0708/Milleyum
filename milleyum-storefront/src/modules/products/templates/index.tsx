import React, { Suspense } from "react"

import ProductLayout from "@modules/products/components/product-layout"
import RelatedProducts from "@modules/products/components/related-products"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"
import ProductInfo from "./product-info"
import ProductTabs from "../components/product-tabs"
import ImageGallery from "../components/image-gallery"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }else{
    console.log({product});
  }

  return (
    <>
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
      <div
        className="content-container my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
