"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, useTexture } from "@react-three/drei"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import type * as THREE from "three"

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  // Load texture
  const texture = useTexture("/placeholder.svg?height=1024&width=2048")

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <Sphere
      ref={meshRef}
      args={[1, 64, 64]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.05 : 1}
    >
      <meshStandardMaterial map={texture} metalness={0.1} roughness={0.7} />
    </Sphere>
  )
}

function LocationMarker({ lat, lng, name }: { lat: number; lng: number; name: string }) {
  // Convert lat/lng to 3D coordinates on sphere
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)

  const x = -Math.sin(phi) * Math.cos(theta) * 1.02
  const y = Math.cos(phi) * 1.02
  const z = Math.sin(phi) * Math.sin(theta) * 1.02

  const [hovered, setHovered] = useState(false)

  return (
    <group position={[x, y, z]}>
      <mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} scale={hovered ? 1.5 : 1}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshStandardMaterial color="#FFB703" emissive="#FFB703" emissiveIntensity={0.5} />
      </mesh>
      {hovered && (
        <mesh position={[0, 0.1, 0]}>
          <textGeometry args={[name, { size: 0.05, height: 0.01 }]} />
          <meshStandardMaterial color="white" />
        </mesh>
      )}
    </group>
  )
}

export function ServiceAreaGlobe() {
  const locations = [
    { name: "Tampa", lat: 27.9506, lng: -82.4572 },
    { name: "St. Petersburg", lat: 27.7676, lng: -82.6403 },
    { name: "Clearwater", lat: 27.9659, lng: -82.8001 },
    { name: "Largo", lat: 27.9094, lng: -82.7873 },
    { name: "Pinellas Park", lat: 27.8428, lng: -82.6995 },
    { name: "Wesley Chapel", lat: 28.1786, lng: -82.3452 },
  ]

  const [activeLocation, setActiveLocation] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sand">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-coastal-blue">
            Our <span className="text-sunrise-gold">Service Area</span>
          </h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto">
            We provide mobile notary services throughout all 67 Florida counties, with a focus on the Tampa Bay area.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[400px] md:h-[500px] relative"
          >
            <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <Globe />
              {locations.map((loc) => (
                <LocationMarker key={loc.name} lat={loc.lat} lng={loc.lng} name={loc.name} />
              ))}
              <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} autoRotate autoRotateSpeed={0.5} />
            </Canvas>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-center text-charcoal/60">
              Click and drag to rotate the globe
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold font-heading text-coastal-blue">Serving All of Florida</h3>

            <p className="text-charcoal/80">
              Our mobile notary services are available throughout all 67 Florida counties. We come to you, making the
              notarization process convenient and stress-free.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {locations.map((location) => (
                <Card
                  key={location.name}
                  className={`cursor-pointer transition-all ${
                    activeLocation === location.name ? "border-coastal-blue bg-coastal-blue/5" : ""
                  }`}
                  onMouseEnter={() => setActiveLocation(location.name)}
                  onMouseLeave={() => setActiveLocation(null)}
                >
                  <CardContent className="p-3 text-center">
                    <p className="font-medium">{location.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-coastal-blue/5 rounded-lg p-4 border border-coastal-blue/20">
              <h4 className="font-bold text-coastal-blue mb-2">Mobile Service</h4>
              <p className="text-sm text-charcoal/80">
                We come to your location, whether it's your home, office, coffee shop, or any other convenient place.
                Our goal is to make the notarization process as easy as possible for you.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-sunrise-gold/10">
                <svg className="w-6 h-6 text-sunrise-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium">Available 7 days a week</p>
                <p className="text-sm text-charcoal/70">Evening and weekend appointments available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
