import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import Image from "next/image"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <header>
      <div className="sticky top-0 inset-x-0 z-50 group  px-1 py-2 flex items-center justify-center bg-background">
        <Image
          src="/assets/Logo_std_filled_transp.png"
          alt="Logo"
          width={200}
          height={150}
        />
      </div>
    </header>
  )
}
