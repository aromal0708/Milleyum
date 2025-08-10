import Image from "next/image"
import React from "react"

const About = () => {
  return (
    <div className="px-56 py-16 text-primary flex flex-row items-center gap-12 font-degular">
      <aside className="flex flex-col gap-4 items-start justify-start w-1/2 pr-8">
        <h1 className="text-4xl font-bold">About Us</h1>
        
        <p className="text-lg font-semibold">
          Milleyum is a millet-based beverage brand that blends taste with nutrition, offering high-protein, no-added-sugar mixes with probiotic benefits.
        </p>
        
        <p className="text-base">
          Designed for urban professionals, it fits into busy, health-conscious lifestyles without sacrificing flavour.
        </p>
        
        <p className="text-base">
          The brand stands for clean ingredients, honest labelling, and a playful yet credible identity. Visually inspired by bold, minimal, and approachable brands, Milleyum aims to be seen as a lifestyle essential, not just a "health product."
        </p>
        
        <p className="text-base ">
          With aspirations to go mainstream and collaborate with both legacy and new-age brands, Milleyum is here to make better choices easy, tasty, and habit-forming to fit into their consumers' lives.
        </p>
      </aside>
      
      <aside className="w-1/2">
        <Image
          src="/assets/about.jpg"
          alt="About Us - Farmer in millet field"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg object-cover w-full h-[500px]"
        />
      </aside>
    </div>
  )
}

export default About
