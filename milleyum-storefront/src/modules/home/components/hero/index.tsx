const Hero = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-[75vh] bg-background py-10 px-56 font-gardein">
      <div
        className="bg-cover bg-center bg-no-repeat w-full h-full rounded-2xl flex flex-col items-start justify-center p-8"
        style={{
          backgroundImage: "url('/assets/hero_bg.jpg')",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="flex flex-col text-white min-w-[40%] gap-2 ">
          <div className=" font-bold text-5xl ">
            <div>Better Choices,</div>
            <div>Made Easy</div>
          </div>
          <div className="text-lg font-semibold mt-4">
            <div>
              High-protein, No added sugar, probiotic-rich millet drinks for <br />
              your everyday lifestyle
            </div>
          </div>
          <div>
            <button className="px-4 py-2 rounded-full text-primary bg-white font-semibold mt-4 hover:bg-gray-200 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
