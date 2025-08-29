const Hero = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] bg-background py-4 sm:py-6 md:py-8 lg:py-10 px-0 sm:px-6 md:px-16 lg:px-32 xl:px-56 font-gardein">
      <div
        className="bg-cover bg-center bg-no-repeat w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl flex flex-col items-start justify-center p-4 sm:p-6 md:p-8"
        style={{
          backgroundImage: "url('/assets/hero_bg.jpg')",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="flex flex-col text-white min-w-[60%] sm:min-w-[50%] md:min-w-[40%] gap-1 sm:gap-2">
          <div className="font-bold text-3xl sm:text-4xl md:text-5xl">
            <div>Better Choices,</div>
            <div>Made Easy</div>
          </div>
          <div className="text-base sm:text-lg font-semibold mt-2 sm:mt-3 md:mt-4">
            <div>
              High-protein, No added sugar, probiotic-rich millet drinks for 
              <br className="hidden sm:block" />
              your everyday lifestyle
            </div>
          </div>
          <div>
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-primary bg-white font-semibold mt-3 sm:mt-4 hover:bg-gray-200 transition-colors text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
