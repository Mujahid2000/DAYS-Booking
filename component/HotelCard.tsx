"use client"

import { Star, Bed, Bath, Maximize, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"

export default function YouMayAlsoLike() {
  const [isPaused, setIsPaused] = useState(false)

  const properties = [
    {
      id: 1,
      name: "Sofitel Algiers Hamma Garden",
      description:
        "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
      image: "https://res.cloudinary.com/diez3alve/image/upload/v1751312777/Rectangle_17650_qsl0n0.png",
      price: 699,
      rating: 4.5,
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
    },
    {
      id: 2,
      name: "Sofitel Algiers Hamma Garden",
      description:
        "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
      image: "https://res.cloudinary.com/diez3alve/image/upload/v1751312777/Rectangle_17650_qsl0n0.png",
      price: 699,
      rating: 4.5,
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
    },
    {
      id: 3,
      name: "Sofitel Algiers Hamma Garden",
      description:
        "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
      image: "https://res.cloudinary.com/diez3alve/image/upload/v1751312777/Rectangle_17650_qsl0n0.png",
      price: 699,
      rating: 4.5,
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
    },
    {
      id: 4,
      name: "Sofitel Algiers Hamma Garden",
      description:
        "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
      image: "https://res.cloudinary.com/diez3alve/image/upload/v1751312777/Rectangle_17650_qsl0n0.png",
      price: 699,
      rating: 4.5,
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
    },
    {
      id: 5,
      name: "Sofitel Algiers Hamma Garden",
      description:
        "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
      image: "https://res.cloudinary.com/diez3alve/image/upload/v1751312777/Rectangle_17650_qsl0n0.png",
      price: 699,
      rating: 4.5,
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
    },
    {
      id: 6,
      name: "Sofitel Algiers Hamma Garden",
      description:
        "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
      image: "https://res.cloudinary.com/diez3alve/image/upload/v1751312777/Rectangle_17650_qsl0n0.png",
      price: 699,
      rating: 4.5,
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
    },
  ]

  // Duplicate properties for infinite scroll effect
  const duplicatedProperties = [...properties, ...properties, ...properties]

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>,
      )
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />)
    }

    return stars
  }

  // Split properties into two rows
  const firstRowProperties = duplicatedProperties.slice(0, 9) // 3 original + 6 duplicates
  const secondRowProperties = duplicatedProperties.slice(9, 18) // 3 original + 6 duplicates

  return (
    <section className=" px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">You may also like</h2>
        </div>

        {/* Auto-scrolling Properties Container with Fixed Width */}
        <div className="overflow-hidden">
          <div className="space-y-6">
            {/* First Row - Right to Left */}
            <div className="relative overflow-hidden">
              <div
                className="flex space-x-6 animate-scroll-rtl"
                style={{
                  animationPlayState: isPaused ? "paused" : "running",
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {firstRowProperties.map((property, index) => (
                  <div key={`row1-${property.id}-${index}`} className="flex-shrink-0 w-[250px] md:w-[326px]">
                    <Card className="border-none shadow-none  transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full">
                      <CardContent className="p-0">
                        {/* Property Image */}
                        <div className="relative h-60 overflow-hidden">
                          <Image
                            src={property.image || "/placeholder.svg"}
                            alt={property.name}
                            fill
                            className="object-cover rounded-2xl  transition-transform duration-300 hover:scale-110"
                          />
                          {/* Star Rating Overlay */}
                          <div className="absolute top-3 left-3 flex items-center space-x-1 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                            {renderStars(property.rating)}
                            <span className="text-sm font-medium text-gray-700 ml-1">{property.rating}</span>
                          </div>
                        </div>

                        {/* Property Details */}
                        <div className=" space-y-3">
                          {/* Property Name */}
                          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{property.name}</h3>

                          {/* Description */}
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{property.description}</p>

                          {/* Price */}
                          <div className="flex items-baseline space-x-1">
                            <span className="text-2xl font-bold text-gray-900">{property.price}</span>
                            <span className="text-gray-500 text-sm">per Night</span>
                          </div>

                          {/* Property Features */}
                          <div className="flex items-center justify-between text-gray-600 text-sm">
                            <div className="flex items-center space-x-1">
                              <Bed className="w-4 h-4" />
                              <span>{property.bedrooms} Bedroom</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Bath className="w-4 h-4" />
                              <span>{property.bathrooms} Bathroom</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Maximize className="w-4 h-4" />
                              <span>{property.area} sq ft</span>
                            </div>
                          </div>
<div className="flex justify-between items-center gap-15">
 {/* Book Now Button */}
                          <div className="pt-2 flex-4/2">
                            <Button className="w-full bg-[#007DD0] hover:bg-[#006BB8] text-white py-2.7 px-6 text-[20px] rounded-full font-medium flex items-center justify-center space-x-2">
                              <span>Book Now</span>
                            </Button>
                          </div>

                          {/* Info Icon */}
                          <div className="flex justify-center">
                            <button className="w-8 h-8 bg-[#007DD01A] rounded-full  flex items-center justify-center hover:bg-gray-50 transition-colors">
                              <Info className="w-3 h-3 text-[#007DD0]" />
                            </button>
                          </div>
</div>
                         
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Right to Left */}
            <div className="relative overflow-hidden">
              <div
                className="flex space-x-6 animate-scroll-rtl-slow"
                style={{
                  animationPlayState: isPaused ? "paused" : "running",
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {secondRowProperties.map((property, index) => (
                   <div key={`row1-${property.id}-${index}`} className="flex-shrink-0  w-[250px] md:w-[326px]">
                    <Card className="border-none shadow-none  transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full">
                      <CardContent className="p-0">
                        {/* Property Image */}
                        <div className="relative h-60 overflow-hidden">
                          <Image
                            src={property.image || "/placeholder.svg"}
                            alt={property.name}
                            fill
                            className="object-cover rounded-2xl  transition-transform duration-300 hover:scale-110"
                          />
                          {/* Star Rating Overlay */}
                          <div className="absolute top-3 left-3 flex items-center space-x-1 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                            {renderStars(property.rating)}
                            <span className="text-sm font-medium text-gray-700 ml-1">{property.rating}</span>
                          </div>
                        </div>

                        {/* Property Details */}
                        <div className=" space-y-3">
                          {/* Property Name */}
                          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{property.name}</h3>

                          {/* Description */}
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{property.description}</p>

                          {/* Price */}
                          <div className="flex items-baseline space-x-1">
                            <span className="text-2xl font-bold text-gray-900">{property.price}</span>
                            <span className="text-gray-500 text-sm">per Night</span>
                          </div>

                          {/* Property Features */}
                          <div className="flex items-center justify-between text-gray-600 text-sm">
                            <div className="flex items-center space-x-1">
                              <Bed className="w-4 h-4" />
                              <span>{property.bedrooms} Bedroom</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Bath className="w-4 h-4" />
                              <span>{property.bathrooms} Bathroom</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Maximize className="w-4 h-4" />
                              <span>{property.area} sq ft</span>
                            </div>
                          </div>
<div className="flex justify-between items-center gap-15">
 {/* Book Now Button */}
                          <div className="pt-2 flex-4/2">
                            <Button className="w-full bg-[#007DD0] hover:bg-[#006BB8] text-white py-2.7 px-6 text-[20px] rounded-full font-medium flex items-center justify-center space-x-2">
                              <span>Book Now</span>
                            </Button>
                          </div>

                          {/* Info Icon */}
                          <div className="flex justify-center">
                            <button className="w-8 h-8 bg-[#007DD01A] rounded-full  flex items-center justify-center hover:bg-gray-50 transition-colors">
                              <Info className="w-3 h-3 text-[#007DD0]" />
                            </button>
                          </div>
</div>
                         
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-rtl-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-rtl {
          animation: scroll-rtl 25s linear infinite;
        }

        .animate-scroll-rtl-slow {
          animation: scroll-rtl-slow 35s linear infinite;
        }
      `}</style>
    </section>
  )
}
