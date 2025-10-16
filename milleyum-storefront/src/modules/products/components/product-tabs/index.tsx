"use client"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"
import { HttpTypes } from "@medusajs/types"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Product Information",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Shipping & Returns",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-6">
          <div>
            <span className="font-gardein text-lg font-semibold text-primary">Material</span>
            <p className="text-base font-degular text-primary/80 mt-1">{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-gardein text-lg font-semibold text-primary">Country of origin</span>
            <p className="text-base font-degular text-primary/80 mt-1">{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-gardein text-lg font-semibold text-primary">Type</span>
            <p className="text-base font-degular text-primary/80 mt-1">{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <div>
            <span className="font-gardein text-lg font-semibold text-primary">Weight</span>
            <p className="text-base font-degular text-primary/80 mt-1">{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-gardein text-lg font-semibold text-primary">Dimensions</span>
            <p className="text-base font-degular text-primary/80 mt-1">
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-4">
          <FastDelivery size="20" className="text-primary mt-1 flex-shrink-0" />
          <div>
            <span className="font-gardein text-xl font-semibold text-primary">Fast delivery</span>
            <p className="max-w-sm text-base font-degular text-primary/80 leading-relaxed mt-2">
              Your package will arrive in 3-5 business days at your pick up
              location or in the comfort of your home.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-4">
          <Refresh size="20" className="text-primary mt-1 flex-shrink-0" />
          <div>
            <span className="font-gardein text-xl font-semibold text-primary">Simple exchanges</span>
            <p className="max-w-sm text-base font-degular text-primary/80 leading-relaxed mt-2">
              Is the fit not quite right? No worries - we&apos;ll exchange your
              product for a new one.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-4">
          <Back size="20" className="text-primary mt-1 flex-shrink-0" />
          <div>
            <span className="font-gardein text-xl font-semibold text-primary">Easy returns</span>
            <p className="max-w-sm text-base font-degular text-primary/80 leading-relaxed mt-2">
              Just return your product and we&apos;ll refund your money. No
              questions asked – we&apos;ll do our best to make sure your return
              is hassle-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
