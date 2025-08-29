import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import { BsHandbag } from "react-icons/bs"
import { HiMenu } from "react-icons/hi"
import { IoClose } from "react-icons/io5"
import MobileMenu from "./mobile-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <header className="flex flex-row items-center justify-between bg-background px-4 sm:px-6 md:px-8 lg:px-14 sticky top-0 inset-x-0 z-50 group py-2">
      <aside className="flex items-center">
        <div className="flex items-center justify-start gap-2 sm:gap-4">
          <Image
            src="/assets/Logo_std_filled_transp.png"
            alt="Logo"
            width={200}
            height={150}
            className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
          />
          {/* Desktop menu - hidden on mobile */}
          <div className="hidden md:flex text-sm lg:text-base font-medium font-degular text-primary gap-4 lg:gap-6">
            <span className="cursor-pointer hover:text-primary/80 transition-colors">Shop all</span>
            <span className="cursor-pointer hover:text-primary/80 transition-colors">Milleyium Bundle</span>
            <span className="cursor-pointer hover:text-primary/80 transition-colors">Making</span>
          </div>
        </div>
      </aside>
      
      <aside className="flex items-center gap-4">
        <LocalizedClientLink href="/cart">
          <div className="flex items-center justify-end font-extrabold text-lg">
            <BsHandbag className="text-primary text-xl sm:text-2xl" />
          </div>
        </LocalizedClientLink>
        
        {/* Mobile menu button - visible only on mobile */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </aside>
    </header>
  )
}
