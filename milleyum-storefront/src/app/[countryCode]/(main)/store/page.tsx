import { Metadata } from "next"

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"
import StoreHero from "@modules/home/components/store-hero"
import Products from "@modules/home/components/products"
import BuyProducts from "@modules/store/components/buy-products"
import MadeForYou from "@modules/store/components/made-for-you"
import ShopOurProducts from "@modules/store/components/shop-our-products"
import StoreFeatures from "@modules/store/components/store-features"
import Subscribe from "@modules/store/components/subscribe"
import ShopFooter from "@modules/store/components/shop-footer"
import { notFound } from "next/navigation"
import { getRegion } from "@lib/data/regions"
import { listProducts } from "@lib/data/products"
import { Product } from "@medusajs/js-sdk/dist/admin/product"
import { StoreProduct } from "@medusajs/types"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

type Params = {
  searchParams: Promise<{
    sortBy?: SortOptions
    page?: string
  }>
  params: Promise<{
    countryCode: string
  }>
}

export type SimplifiedProducts = {
  id: string
  title: string
  description?: string
  price: number
  thumbnail: string | null
}

export default async function StorePage(props: Params) {
  const params = await props.params
  const region = await getRegion(params.countryCode)

  if (!region) {
    notFound()
  }

  const response = await listProducts({
    countryCode: params.countryCode,
    queryParams: {
      limit: 12,
    } as any,
  })

  const products: StoreProduct[] = response?.response.products || []

  const simplifiedProducts: SimplifiedProducts[] = products.map((product) => ({
    id: product.id,
    title: product.title,
    description: product.description ?? "",
    price: product.variants?.[0]?.calculated_price?.calculated_amount ?? 0,
    thumbnail: product.thumbnail,
  }))

  console.log(simplifiedProducts)

  if (!response || !products || products.length === 0) {
    notFound()
  }

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center w-full px-14">
        <StoreHero />
        <BuyProducts products={simplifiedProducts} />
        <MadeForYou products={simplifiedProducts} />
        <ShopOurProducts products={simplifiedProducts} />
        <StoreFeatures />
        <Subscribe />
      </div>
      <ShopFooter />
    </div>
  )
}
