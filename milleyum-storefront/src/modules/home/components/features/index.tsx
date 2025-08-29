import React from "react"
import { FaAward } from "react-icons/fa"
import { IoPeople } from "react-icons/io5"
import { FaLeaf } from "react-icons/fa"
import { FaClock } from "react-icons/fa"
import FeatureCard from "../feature_card"

const Features = () => {
  const features = [
    {
      title: "Protein",
      description:
        "Plant-based protein to fuel your day and support muscle health.",
      Icon: FaAward,
    },
    {
      title: "Probiotic",
      description:
        "Live cultures to support digestive health and overall wellness.",
      Icon: IoPeople,
    },
    {
      title: "Sustainable",
      description:
        "Millet is climate-smart, requiring less water and supporting biodiversity.",
      Icon: FaLeaf,
    },
    {
      title: "No Added Sugar",
      description:
        "Naturally sweetened with wholesome ingredients for guilt-free enjoyment.",
      Icon: FaClock,
    },
  ]

  return (
    <div className="text-primary bg-white px-0 sm:px-6 md:px-16 lg:px-32 xl:px-56 py-8 sm:py-10 md:py-12 lg:py-16 font-degular flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">Why Milleyum?</h2>
      <div className="flex flex-col items-center justify-center text-base sm:text-lg font-semibold px-4 text-center">
        <span>
          Because better choices should be easy, tasty, and
          habit-forming. Milleyum fits into your{" "}
        </span>
        <span>
          lifestyle with clean ingredients, honest labelling, and a bold
          flavour.
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full mt-4 sm:mt-6 md:mt-8 px-4 sm:px-0">
        {
            features.map((el,index)=>(
                <FeatureCard key={index} title={el.title} Icon={el.Icon} desc={el.description} />
            ))
        }
      </div>
    </div>
  )
}

export default Features
