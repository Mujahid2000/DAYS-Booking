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
      image: "https://res.cloudinary.com/diez3alve/image/upload/v1751447186/5862cc377f46c72a73eb2c7202d5c8d2da1c15da111111111111111111111111111111111_wmglpg.jpg",
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
      image: "https://res.cloudinary.com/diez3alve/image/upload/v1751447186/5862cc377f46c72a73eb2c7202d5c8d2da1c15da111111111111111111111111111111111_wmglpg.jpg",
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
      image: "https://res.cloudinary.com/diez3alve/image/upload/v1751447186/5862cc377f46c72a73eb2c7202d5c8d2da1c15da111111111111111111111111111111111_wmglpg.jpg",
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
      image: "https://res.cloudinary.com/diez3alve/image/upload/v1751447186/5862cc377f46c72a73eb2c7202d5c8d2da1c15da111111111111111111111111111111111_wmglpg.jpg",
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
      image: "https://res.cloudinary.com/diez3alve/image/upload/v1751447186/5862cc377f46c72a73eb2c7202d5c8d2da1c15da111111111111111111111111111111111_wmglpg.jpg",
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
      image: "https://res.cloudinary.com/diez3alve/image/upload/v1751447186/5862cc377f46c72a73eb2c7202d5c8d2da1c15da111111111111111111111111111111111_wmglpg.jpg",
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
                          <div className="absolute bottom-3  flex items-center  left-1 bg-opacity-90 py-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
  <path d="M10.7002 0.0629883L13.2148 7.802L21.3521 7.802L14.7689 12.585L17.2834 20.324L10.7002 15.541L4.11705 20.324L6.63161 12.585L0.0484114 7.802L8.18569 7.802L10.7002 0.0629883Z" fill="#FFDA9E"/>
</svg>
                            <span className="text-sm font-medium text-white ml-1">{property.rating}</span>
                          </div>
                        </div>

                        {/* Property Details */}
                        <div className=" space-y-3">
                          {/* Property Name */}
                          <h3 className="text-lg py-2 font-semibold text-[#000] line-clamp-1">{property.name}</h3>

                          {/* Description */}
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{property.description}</p>

                          {/* Price */}
                          <div className="flex items-baseline space-x-1">
                            <span className="text-2xl font-bold text-[#000]">{property.price}</span>
                            <span className="text-[#000] text-sm">per Night</span>
                          </div>

                          {/* Property Features */}
                          <div className="flex flex-row items-center justify-between text-gray-600 text-sm">
                            <div className="flex flex-col md:flex-row items-center space-x-1 border-r pr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
  <path d="M2.7709 18.1546V6.19629C2.7709 3.78034 2.7709 2.57237 3.52144 1.82183C4.27197 1.07129 5.47995 1.07129 7.8959 1.07129H9.60423C12.0202 1.07129 13.2282 1.07129 13.9787 1.82183C14.7292 2.57237 14.7292 3.78034 14.7292 6.19629V18.1546H2.7709Z" stroke="#626262" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.3334 8.75879V5.34212C5.3334 3.92876 5.62837 3.63379 7.04173 3.63379H10.4584C11.8718 3.63379 12.1667 3.92876 12.1667 5.34212V8.75879C12.1667 10.1721 11.8718 10.4671 10.4584 10.4671H7.04173C5.62837 10.4671 5.3334 10.1721 5.3334 8.75879Z" stroke="#626262" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.06256 18.1543H16.4376" stroke="#626262" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.75006 3.63379V10.4671M12.1667 7.05046L5.3334 7.05046" stroke="#626262" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.34023 13.8838L5.33256 13.8838" stroke="#626262" strokeWidth="1.70833" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                              <span>{property.bedrooms} Bedroom</span>
                            </div>
                            <div className="flex flex-col md:flex-row items-center space-x-1 border-r pr-2">
                             <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
  <path d="M4.25007 15.2798L3.41673 16.1131M14.2501 15.2798L15.0834 16.1131" stroke="#626262" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M1.75006 8.61279V9.44613C1.75006 12.196 1.75006 13.5709 2.60433 14.4252C3.4586 15.2795 4.83353 15.2795 7.58339 15.2795H10.9167C13.6666 15.2795 15.0415 15.2795 15.8958 14.4252C16.7501 13.5709 16.7501 12.196 16.7501 9.44613V8.61279" stroke="#626262" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M0.916733 8.61279H17.5834" stroke="#626262" strokeLinecap="round"/>
  <path d="M2.58339 8.61279V3.21563C2.58339 2.05426 3.52486 1.11279 4.68623 1.11279C5.6181 1.11279 6.43884 1.72611 6.70288 2.6198L6.75006 2.77946" stroke="#626262" strokeLinecap="round"/>
  <path d="M5.91673 3.61296L8.00007 1.94629" stroke="#626262" strokeWidth="1.5" strokeLinecap="round"/>
</svg>
                              <span>{property.bathrooms} Bathroom</span>
                            </div>
                            <div className="flex flex-col md:flex-row items-center space-x-1 border-r pr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M3.8334 17.2793H3.3334V17.7793H3.8334V17.2793ZM8.35362 13.4662C8.54889 13.2709 8.54889 12.9543 8.35362 12.7591C8.15836 12.5638 7.84178 12.5638 7.64652 12.7591L8.35362 13.4662ZM3.8334 12.2793H3.3334V17.2793H3.8334H4.3334V12.2793H3.8334ZM3.8334 17.2793V17.7793H8.8334V17.2793V16.7793H3.8334V17.2793ZM3.8334 17.2793L4.18696 17.6329L8.35362 13.4662L8.00007 13.1126L7.64652 12.7591L3.47985 16.9257L3.8334 17.2793Z" fill="#626262"/>
  <path d="M17.1667 3.94629H17.6667V3.44629H17.1667V3.94629ZM12.6465 7.7594C12.4512 7.95466 12.4512 8.27125 12.6465 8.46651C12.8418 8.66177 13.1583 8.66177 13.3536 8.46651L12.6465 7.7594ZM17.1667 8.94629H17.6667V3.94629H17.1667H16.6667V8.94629H17.1667ZM17.1667 3.94629V3.44629H12.1667V3.94629V4.44629H17.1667V3.94629ZM17.1667 3.94629L16.8132 3.59274L12.6465 7.7594L13.0001 8.11296L13.3536 8.46651L17.5203 4.29984L17.1667 3.94629Z" fill="#626262"/>
</svg>
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
                          <div className="absolute bottom-3  flex items-center  left-1 bg-opacity-90 py-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
  <path d="M10.7002 0.0629883L13.2148 7.802L21.3521 7.802L14.7689 12.585L17.2834 20.324L10.7002 15.541L4.11705 20.324L6.63161 12.585L0.0484114 7.802L8.18569 7.802L10.7002 0.0629883Z" fill="#FFDA9E"/>
</svg>
                            <span className="text-sm font-medium text-white ml-1">{property.rating}</span>
                          </div>
                        </div>

                        {/* Property Details */}
                        <div className=" space-y-3">
                          {/* Property Name */}
                          <h3 className="text-lg font-semibold text-[#000] py-2 line-clamp-1">{property.name}</h3>

                          {/* Description */}
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{property.description}</p>

                          {/* Price */}
                          <div className="flex items-baseline space-x-1">
                            <span className="text-2xl font-bold text-[#000]">{property.price}</span>
                            <span className="text-gray-500 text-sm">per Night</span>
                          </div>

                          
                          {/* Property Features */}
                          <div className="flex flex-row items-center justify-between text-gray-600 text-sm">
                            <div className="flex flex-col md:flex-row items-center space-x-1 border-r pr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
  <path d="M2.7709 18.1546V6.19629C2.7709 3.78034 2.7709 2.57237 3.52144 1.82183C4.27197 1.07129 5.47995 1.07129 7.8959 1.07129H9.60423C12.0202 1.07129 13.2282 1.07129 13.9787 1.82183C14.7292 2.57237 14.7292 3.78034 14.7292 6.19629V18.1546H2.7709Z" stroke="#626262" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.3334 8.75879V5.34212C5.3334 3.92876 5.62837 3.63379 7.04173 3.63379H10.4584C11.8718 3.63379 12.1667 3.92876 12.1667 5.34212V8.75879C12.1667 10.1721 11.8718 10.4671 10.4584 10.4671H7.04173C5.62837 10.4671 5.3334 10.1721 5.3334 8.75879Z" stroke="#626262" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.06256 18.1543H16.4376" stroke="#626262" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.75006 3.63379V10.4671M12.1667 7.05046L5.3334 7.05046" stroke="#626262" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.34023 13.8838L5.33256 13.8838" stroke="#626262" strokeWidth="1.70833" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                              <span>{property.bedrooms} Bedroom</span>
                            </div>
                            <div className="flex flex-col md:flex-row items-center space-x-1 border-r pr-2">
                             <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
  <path d="M4.25007 15.2798L3.41673 16.1131M14.2501 15.2798L15.0834 16.1131" stroke="#626262" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M1.75006 8.61279V9.44613C1.75006 12.196 1.75006 13.5709 2.60433 14.4252C3.4586 15.2795 4.83353 15.2795 7.58339 15.2795H10.9167C13.6666 15.2795 15.0415 15.2795 15.8958 14.4252C16.7501 13.5709 16.7501 12.196 16.7501 9.44613V8.61279" stroke="#626262" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M0.916733 8.61279H17.5834" stroke="#626262" strokeLinecap="round"/>
  <path d="M2.58339 8.61279V3.21563C2.58339 2.05426 3.52486 1.11279 4.68623 1.11279C5.6181 1.11279 6.43884 1.72611 6.70288 2.6198L6.75006 2.77946" stroke="#626262" strokeLinecap="round"/>
  <path d="M5.91673 3.61296L8.00007 1.94629" stroke="#626262" strokeWidth="1.5" strokeLinecap="round"/>
</svg>
                              <span>{property.bathrooms} Bathroom</span>
                            </div>
                            <div className="flex flex-col md:flex-row items-center space-x-1 border-r pr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M3.8334 17.2793H3.3334V17.7793H3.8334V17.2793ZM8.35362 13.4662C8.54889 13.2709 8.54889 12.9543 8.35362 12.7591C8.15836 12.5638 7.84178 12.5638 7.64652 12.7591L8.35362 13.4662ZM3.8334 12.2793H3.3334V17.2793H3.8334H4.3334V12.2793H3.8334ZM3.8334 17.2793V17.7793H8.8334V17.2793V16.7793H3.8334V17.2793ZM3.8334 17.2793L4.18696 17.6329L8.35362 13.4662L8.00007 13.1126L7.64652 12.7591L3.47985 16.9257L3.8334 17.2793Z" fill="#626262"/>
  <path d="M17.1667 3.94629H17.6667V3.44629H17.1667V3.94629ZM12.6465 7.7594C12.4512 7.95466 12.4512 8.27125 12.6465 8.46651C12.8418 8.66177 13.1583 8.66177 13.3536 8.46651L12.6465 7.7594ZM17.1667 8.94629H17.6667V3.94629H17.1667H16.6667V8.94629H17.1667ZM17.1667 3.94629V3.44629H12.1667V3.94629V4.44629H17.1667V3.94629ZM17.1667 3.94629L16.8132 3.59274L12.6465 7.7594L13.0001 8.11296L13.3536 8.46651L17.5203 4.29984L17.1667 3.94629Z" fill="#626262"/>
</svg>
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
