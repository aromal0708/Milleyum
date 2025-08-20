import { Metadata } from "next"

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"
import StoreHero from "@modules/home/components/store-hero"

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
  ]

  return (
    <div className="flex flex-col items-center justify-center w-full px-14">
      <StoreHero />
      <div className="w-full flex flex-col items-start justify-center text-primary mt-4">
        <h1 className="font-gardein text-2xl font-medium ml-1" >Made Fresh</h1>
      </div>
    </div>
  )
}
