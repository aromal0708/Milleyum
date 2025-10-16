import { Text, clx } from "@medusajs/ui"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import React from "react"

type AccordionItemProps = AccordionPrimitive.AccordionItemProps & {
  title: string
  subtitle?: string
  description?: string
  required?: boolean
  tooltip?: string
  forceMountContent?: true
  headingSize?: "small" | "medium" | "large"
  customTrigger?: React.ReactNode
  complete?: boolean
  active?: boolean
  triggerable?: boolean
  children: React.ReactNode
}

type AccordionProps =
  | (AccordionPrimitive.AccordionSingleProps &
      React.RefAttributes<HTMLDivElement>)
  | (AccordionPrimitive.AccordionMultipleProps &
      React.RefAttributes<HTMLDivElement>)

const Accordion: React.FC<AccordionProps> & {
  Item: React.FC<AccordionItemProps>
} = ({ children, ...props }) => {
  return (
    <AccordionPrimitive.Root {...props}>{children}</AccordionPrimitive.Root>
  )
}

const Item: React.FC<AccordionItemProps> = ({
  title,
  subtitle,
  description,
  children,
  className,
  headingSize = "large",
  customTrigger = undefined,
  forceMountContent = undefined,
  triggerable,
  ...props
}) => {
  return (
    <AccordionPrimitive.Item
      {...props}
      className={clx(
        "border-primary/20 group border-t-2 last:mb-0 last:border-b-2",
        "py-6",
        className
      )}
    >
      <AccordionPrimitive.Header className="px-2">
        <div className="flex flex-col">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-4">
              <Text className="text-primary font-gardein text-2xl font-medium">{title}</Text>
            </div>
            <AccordionPrimitive.Trigger>
              {customTrigger || <MorphingTrigger />}
            </AccordionPrimitive.Trigger>
          </div>
          {subtitle && (
            <Text as="span" className="mt-2 text-primary/70 font-degular text-lg font-normal">
              {subtitle}
            </Text>
          )}
        </div>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content
        forceMount={forceMountContent}
        className={clx(
          "radix-state-closed:animate-accordion-close radix-state-open:animate-accordion-open radix-state-closed:pointer-events-none px-2"
        )}
      >
        <div className="font-degular text-lg font-normal text-primary/80 group-radix-state-closed:animate-accordion-close pt-4">
          {description && (
            <Text className="text-primary/70 font-degular text-lg leading-relaxed mb-4">
              {description}
            </Text>
          )}
          <div className="w-full text-primary font-degular text-lg leading-relaxed">{children}</div>
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  )
}

Accordion.Item = Item

const MorphingTrigger = () => {
  return (
    <div className="bg-white border-2 border-primary rounded-full relative p-3 transition-all duration-300 ease-in-out shadow-sm group/button hover:bg-primary hover:shadow-md">
      <div className="h-5 w-5">
        <span className="bg-primary group-hover/button:bg-white rounded-circle group-radix-state-open:rotate-90 absolute inset-y-[40%] left-[48%] right-1/2 w-[2px] duration-300 transition-colors" />
        <span className="bg-primary group-hover/button:bg-white rounded-circle group-radix-state-open:rotate-90 group-radix-state-open:left-1/2 group-radix-state-open:right-1/2 absolute inset-x-[40%] top-[48%] bottom-1/2 h-[2px] duration-300 transition-colors" />
      </div>
    </div>
  )
}

export default Accordion
