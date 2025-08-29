import React from "react"

const FeatureCard = ({title , Icon , desc} :{
  title: string,
  Icon: React.FC<{ className?: string }>,
  desc: string
}) => {
  return (
    <div className="shadow-md rounded-md p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 text-primary h-full">
      <Icon className="text-xl sm:text-2xl md:text-3xl text-primary" />
      <h1 className="text-base sm:text-lg font-medium text-center">{title}</h1>
      <p className="text-xs sm:text-sm font-light text-center">{desc}</p>
    </div>
  )
}

export default FeatureCard
