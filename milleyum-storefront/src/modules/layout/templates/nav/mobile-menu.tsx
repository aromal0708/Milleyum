"use client"

import React, { useState } from "react"
import { HiMenu } from "react-icons/hi"
import { IoClose } from "react-icons/io5"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {/* Menu button */}
      <button 
        className="text-primary text-2xl focus:outline-none"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <IoClose /> : <HiMenu />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/95 z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <button 
              className="text-primary text-2xl"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <IoClose />
            </button>
          </div>
          
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            <LocalizedClientLink 
              href="/store" 
              className="text-primary text-2xl font-gardein hover:text-primary/80 transition-colors"
              onClick={toggleMenu}
            >
              Shop all
            </LocalizedClientLink>
            
            <LocalizedClientLink 
              href="/collections" 
              className="text-primary text-2xl font-gardein hover:text-primary/80 transition-colors"
              onClick={toggleMenu}
            >
              Milleyium Bundle
            </LocalizedClientLink>
            
            <LocalizedClientLink 
              href="/about" 
              className="text-primary text-2xl font-gardein hover:text-primary/80 transition-colors"
              onClick={toggleMenu}
            >
              Making
            </LocalizedClientLink>
            
            <LocalizedClientLink 
              href="/cart" 
              className="text-primary text-2xl font-gardein hover:text-primary/80 transition-colors"
              onClick={toggleMenu}
            >
              Cart
            </LocalizedClientLink>
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileMenu
