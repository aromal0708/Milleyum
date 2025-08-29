import Image from "next/image"
import React from "react"

const About = () => {
  return (
    <div className="px-0 sm:px-6 md:px-16 lg:px-32 xl:px-56 py-8 sm:py-10 md:py-12 lg:py-16 text-primary flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 font-degular">
      {/* About text section - full width on mobile, 1/2 on desktop */}
      <aside className="flex flex-col gap-3 sm:gap-4 items-start justify-start w-full md:w-1/2 pr-0 md:pr-4 lg:pr-8 order-2 md:order-1 mt-6 md:mt-0">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold">About Us</h1>
        
        <p className="text-base sm:text-base md:text-lg font-semibold">
          Milleyum is a millet-based beverage brand that blends taste with nutrition, offering high-protein, no-added-sugar mixes with probiotic benefits.
        </p>
        
        <p className="text-sm sm:text-base">
          Designed for urban professionals, it fits into busy, health-conscious lifestyles without sacrificing flavour.
        </p>
        
        <p className="text-sm sm:text-base">
          The brand stands for clean ingredients, honest labelling, and a playful yet credible identity. Visually inspired by bold, minimal, and approachable brands, Milleyum aims to be seen as a lifestyle essential, not just a "health product."
        </p>
        
        <p className="text-sm sm:text-base">
          With aspirations to go mainstream and collaborate with both legacy and new-age brands, Milleyum is here to make better choices easy, tasty, and habit-forming to fit into their consumers' lives.
        </p>
      </aside>
      
      {/* Image section - full width on mobile, 1/2 on desktop */}
      <aside className="w-full md:w-1/2 order-1 md:order-2">
        <Image
          src="/assets/about.jpg"
          alt="About Us - Farmer in millet field"
          width={600}
          height={400}
          className="rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg object-cover w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
        />
      </aside>
    </div>
  )
}

export default About
