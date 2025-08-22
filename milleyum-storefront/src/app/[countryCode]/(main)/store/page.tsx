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

export default async function StorePage(props: Params) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center w-full px-14">
        <StoreHero />
        <BuyProducts />
        <MadeForYou />
        <ShopOurProducts />
        <StoreFeatures />
        <Subscribe />
      </div>
      <ShopFooter />
    </div>
  )
}
