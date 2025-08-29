import React from "react"

const Subscribe = () => {
  return (
    <div className="w-full flex flex-col items-start gap-2 mt-8">
      <h1 className="text-4xl font-bold font-gardein text-primary">
        Subscribe to get 10% off
      </h1>
      <div className="flex flex-row items-center justify-between w-full gap-2">
        <input
          type="text"
          className="w-3/4 border-2 font-gardein font-semibold text-xl text-primary  border-primary rounded-lg py-4 px-4 focus:outline-none
          placeholder:text-primary placeholder:font-gardein placeholder:text-2xl placeholder:font-medium"
          placeholder="Enter your email"
        />
        <button className="w-1/4 bg-transparent border-2 border-primary text-primary font-gardein rounded-full py-3 px-4 text-2xl font-medium hover:bg-primary hover:text-white">
          Subscribe
        </button>
      </div>
      <h2 className="text-sm text-primary flex font-degular font-medium items-start">
        By subscribing, you will receive emails from Milleyum, you agree to our
        Privacy Policy. We treat your data with respect.
      </h2>
    </div>
  )
}

export default Subscribe
