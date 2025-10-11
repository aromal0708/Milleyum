import React from "react"

type PrimaryButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

const PrimaryButton = ({ 
  children, 
  onClick, 
  className = "", 
  disabled = false, 
  type = "button" 
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center bg-transparent text-xl sm:text-2xl md:text-3xl text-primary font-gardein outline-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300 w-full py-3 sm:py-4 md:py-5 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton