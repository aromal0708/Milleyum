"use client"
import { useState } from "react"

const PackSelector = ({
  options = ["4-Pack", "8-Pack", "12-Pack", "24-Pack"],
  defaultValue = "8-Pack",
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(defaultValue)

  const handleSelect = (value: string) => {
    setSelectedValue(value)
    setIsOpen(false)
  }

  return (
    <div className="relative w-fit">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="min-w-[200px] flex items-center justify-between gap-6 truncate bg-background px-6 py-4 outline-none rounded-lg border-[1.5px] font-medium border-primary"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="font-degular font-medium leading-[150%] text-body-xl">
          <span className="pointer-events-none">{selectedValue}</span>
        </div>
        <span aria-hidden="true" className="flex-shrink-0">
          <svg 
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="absolute top-full mt-2 w-full bg-background rounded-lg border-[1.5px] border-primary shadow-lg z-20 overflow-hidden"
            role="listbox"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full px-6 py-4 text-left font-degular font-normal leading-[150%] text-body-xl hover:bg-secondary transition-colors ${
                  selectedValue === option
                    ? "bg-secondary text-primary"
                    : "text-primary"
                }`}
                role="option"
                aria-selected={selectedValue === option}
              >
                {option}
                {selectedValue === option && (
                  <span className="float-right text-primary"></span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
export default PackSelector;
