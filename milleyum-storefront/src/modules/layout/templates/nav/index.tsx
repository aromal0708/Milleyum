import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import { BsHandbag } from "react-icons/bs"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <header className="flex flex-row items-center justify-between bg-background px-14 sticky top-0 inset-x-0 z-50 group">
      <aside>
        <div className="flex items-center justify-start gap-4">
          <Image
            src="/assets/Logo_std_filled_transp.png"
            alt="Logo"
            width={200}
            height={150}
          />
          <div className="text-base font-medium font-degular flex text-primary gap-4">
            <span className="cursor-pointer">Shop all</span>
            <span className="cursor-pointer">Milleyium Bundle</span>
            <span className="cursor-pointer">Making</span>
          </div>
        </div>
      </aside>
      <aside>
        <LocalizedClientLink href="/cart">
          <div className="flex items-center justify-end gap-4 font-extrabold text-lg">
            <BsHandbag className="text-primary" />
          </div>
        </LocalizedClientLink>
      </aside>
    </header>
  )
}
