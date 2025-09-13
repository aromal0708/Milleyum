import { listRegions } from "@lib/data/regions"
import { retrieveCart } from "@lib/data/cart"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import { BsHandbag } from "react-icons/bs"
import { HiMenu } from "react-icons/hi"
import { IoClose } from "react-icons/io5"
import MobileMenu from "./mobile-menu"

async function CartItemCount() {
  const cart = await retrieveCart()
  
  // Calculate total quantity across all items
  const totalItems = cart?.items?.reduce((sum, item) => sum + (item.quantity || 0), 0) || 0

  if (totalItems === 0) return null

  return (
    <div className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
      {totalItems > 99 ? "99+" : totalItems}
    </div>
  )
}

export default async function Nav() {
  // Force dynamic rendering for the cart count
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)
  
  // Fetch cart here to ensure it's available
  await retrieveCart()

  return (
    <header className="flex flex-row items-center justify-between bg-background px-4 sm:px-6 md:px-8 lg:px-14 sticky top-0 inset-x-0 z-50 group py-2">
      <aside className="flex items-center">
        <div className="flex items-center justify-start gap-2 sm:gap-4">
          <LocalizedClientLink href="/">
            <Image
              src="/assets/Logo_std_filled_transp.png"
              alt="Logo"
              width={200}
              height={150}
              className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
            />
          </LocalizedClientLink>

          <div className="hidden md:flex text-sm lg:text-base font-medium font-degular text-primary gap-4 lg:gap-6">
            <span className="cursor-pointer hover:text-primary/80 transition-colors">
              Shop all
            </span>
            <span className="cursor-pointer hover:text-primary/80 transition-colors">
              Milleyium Bundle
            </span>
            <span className="cursor-pointer hover:text-primary/80 transition-colors">
              Making
            </span>
          </div>
        </div>
      </aside>

      <aside className="flex items-center gap-4">
        <LocalizedClientLink href="/cart">
          <div className="flex items-center justify-end font-extrabold text-lg relative">
            <BsHandbag className="text-primary text-xl sm:text-2xl" />
            <CartItemCount />
          </div>
        </LocalizedClientLink>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </aside>
    </header>
  )
}
