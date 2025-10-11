import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import PrimaryButton from "@modules/common/components/primary-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import PackSelector from "@modules/common/components/pack-selector"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-6 lg:max-w-[500px]">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <h1
          className="lg:text-7xl font-gardein text-heading-5xl text-pretty tracking-[-1.12px] leading-[100%] text-primary"
          data-testid="product-title"
        >
          {product.title}
        </h1>

        <Text
          className="text-2xl  text-primary font-degular font-medium "
          data-testid="product-description"
        >
          $10.2
        </Text>

        <Text
          className=" text-xl font-medium  text-primary font-degular whitespace-pre-line"
          data-testid="product-description"
        >
          {product.description}
        </Text>
        <div className="mt-s flex flex-col gap-4">
          <PackSelector />
          <PrimaryButton>Add to Cart</PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
