"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-accent font-bold text-xl flex items-center">
            <img src="/images/notariesby-logo-new.png" alt="NotariesBy Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 flex flex-col gap-2">
                <Link href="/" className="px-4 py-2 hover:bg-accent hover:text-white rounded-md" onClick={toggleMenu}>
                  Home
                </Link>
                <Link
                  href="/services"
                  className="px-4 py-2 hover:bg-accent hover:text-white rounded-md"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
                <Link
                  href="/schedule"
                  className="px-4 py-2 hover:bg-accent hover:text-white rounded-md"
                  onClick={toggleMenu}
                >
                  Schedule
                </Link>
                <Link
                  href="/about"
                  className="px-4 py-2 hover:bg-accent hover:text-white rounded-md"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 hover:bg-accent hover:text-white rounded-md"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
                <Link
                  href="/resources"
                  className="px-4 py-2 hover:bg-accent hover:text-white rounded-md"
                  onClick={toggleMenu}
                >
                  Client Resources
                </Link>
                <Button asChild className="mt-2 w-full bg-coastal-blue hover:bg-blue-700 !text-black">
                  <Link href="/schedule">Book Now</Link>
                </Button>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-heading font-medium hover:text-coastal-blue hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-heading font-medium hover:text-coastal-blue hover:underline underline-offset-4"
            >
              Services
            </Link>
            <Link
              href="/schedule"
              className="text-sm font-heading font-medium hover:text-coastal-blue hover:underline underline-offset-4"
            >
              Schedule
            </Link>
            <Link
              href="/about"
              className="text-sm font-heading font-medium hover:text-coastal-blue hover:underline underline-offset-4"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-heading font-medium hover:text-coastal-blue hover:underline underline-offset-4"
            >
              Contact
            </Link>
            <Link
              href="/resources"
              className="text-sm font-heading font-medium hover:text-coastal-blue hover:underline underline-offset-4"
            >
              Client Resources
            </Link>
            <Button asChild size="sm" className="bg-coastal-blue hover:bg-blue-700 !text-black">
              <Link href="/schedule">Book Now</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
