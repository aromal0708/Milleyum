import React from "react"

const FeatureCard = ({title , Icon , desc} :{
  title: string,
  Icon: React.FC<{ className?: string }>,
  desc: string
}) => {
  return (
    <div className=" shadow-md rounded-md p-4 flex flex-col items-center justify-center gap-2 text-primary">
      <Icon className="text-2xl text-primary" />
      <h1 className="text-lg font-medium">{title}</h1>
      <p className="text-sm font-light text-center">{desc}</p>
    </div>
  )
}

export default FeatureCard
