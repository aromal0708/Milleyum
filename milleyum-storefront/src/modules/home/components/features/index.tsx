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
    <div className="text-primary bg-white px-56 py-16 font-degular flex flex-col items-center gap-8">
      <h2 className="text-5xl font-bold ">Why Milleyum?</h2>
      <div className="flex flex-col items-center justify-center text-lg font-semibold">
        <span>
          Because better choices should be easy, tasty, and
          habit-forming.Milleyum fits into your{" "}
        </span>
        <span>
          lifestyle with clean ingredients, honest labelling, and a bold
          flavour.
        </span>
      </div>
      <div className="grid grid-cols-4 gap-8 w-full mt-8">
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
