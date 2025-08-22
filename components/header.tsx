"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Schedule", href: "/schedule" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-all duration-300",
        scrolled ? "shadow-sm" : "",
      )}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/notariesby-logo-new.png"
              alt="NotariesBy Logo"
              className="h-6 md:h-8 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <nav className="flex items-center space-x-4 lg:space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <Button asChild className="bg-deep-purple text-white border border-black whitespace-nowrap">
              <Link href="/schedule">Book Now</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium py-2 text-neutral-700 hover:text-primary transition-colors border-b border-neutral-100 last:border-b-0"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-deep-purple text-white border border-black">
                <Link href="/schedule" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
