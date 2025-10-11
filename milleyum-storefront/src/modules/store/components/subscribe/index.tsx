import React from "react"
import PrimaryButton from "@modules/common/components/primary-button"

const Subscribe = () => {
  return (
    <div className="w-full flex flex-col items-start gap-1 sm:gap-2 mt-6 sm:mt-7 md:mt-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-gardein text-primary">
        Subscribe to get 10% off
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2 mt-2">
        <input
          type="text"
          className="w-full sm:w-3/4 border-2 font-gardein font-semibold text-base sm:text-lg md:text-xl text-primary border-primary rounded-lg py-3 sm:py-3 md:py-4 px-3 sm:px-4 focus:outline-none
          placeholder:text-primary placeholder:font-gardein placeholder:text-lg sm:placeholder:text-xl md:placeholder:text-2xl placeholder:font-medium"
          placeholder="Enter your email"
        />
        <div className="w-full sm:w-1/4 mt-2 sm:mt-0">
          <PrimaryButton className="py-2 sm:py-2 md:py-3">
            Subscribe
          </PrimaryButton>
        </div>
      </div>
      <h2 className="text-xs sm:text-sm text-primary flex font-degular font-medium items-start mt-1 sm:mt-0">
        By subscribing, you will receive emails from Milleyum, you agree to our
        Privacy Policy. We treat your data with respect.
      </h2>
    </div>
  )
}

export default Subscribe
