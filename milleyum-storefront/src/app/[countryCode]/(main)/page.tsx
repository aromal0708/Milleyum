import { Metadata } from "next"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import About from "@modules/home/components/about"
import Products from "@modules/home/components/products"
import Features from "@modules/home/components/features"

export const metadata: Metadata = {
  title: "Melliyum",
  description:
    "Milleyum offers high-protein, no-added-sugar millet-based beverages with probiotic benefits. Perfect for health-conscious urban professionals.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <div className="container">
      <Hero />
      <About />
      <Products />
      <Features />
    </div>
  )
}
