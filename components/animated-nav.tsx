"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function AnimatedNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Schedule", path: "/schedule" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Client Resources", path: "/resources" },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" },
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Link href="/" className="font-accent font-bold text-xl flex items-center">
              <motion.img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jill-logo-png.PNG-fVdHOEI1YyjHpMDwUKHO2ywRaF0Kps.png"
                alt="NotariesBy Logo"
                className="h-8 w-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Link>
          </motion.div>

          {isMobile ? (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                className="p-2 rounded-full bg-coastal-blue/10"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>

              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={mobileMenuVariants}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 right-0 bg-white shadow-lg border-t overflow-hidden"
                  >
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={item.path}
                            className="block px-4 py-3 hover:bg-coastal-blue/10 rounded-md transition-colors"
                            onClick={toggleMenu}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: navItems.length * 0.1 }}
                      >
                        <Button
                          asChild
                          className="w-full mt-2 bg-deep-purple hover:bg-purple-700 text-white border border-black"
                        >
                          <Link href="/schedule">Book Now</Link>
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <motion.nav variants={navVariants} initial="hidden" animate="visible" className="flex items-center gap-6">
              {navItems.map((item) => (
                <motion.div key={item.path} variants={itemVariants} whileHover={{ scale: 1.05 }}>
                  <Link href={item.path} className="text-sm font-heading font-medium relative group">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coastal-blue transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <Button
                  asChild
                  size="sm"
                  className="bg-deep-purple hover:bg-purple-700 text-white border border-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/schedule">Book Now</Link>
                </Button>
              </motion.div>
            </motion.nav>
          )}
        </div>
      </div>
    </motion.header>
  )
}
