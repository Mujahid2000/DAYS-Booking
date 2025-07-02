"use client"

import {  Star, ArrowRight, MoveRight, MoveLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slidesToShow, setSlidesToShow] = useState(2)

  const testimonials = [
    {
      id: 1,
      title: "Breathtaking Views and Luxury Comfort!",
      content:
        "The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home.",
      author: "Sofia B., France",
      date: "23.10.2024",
      rating: 5,
    },
    {
      id: 2,
      title: "Exceptional Stay with Excellent Amenities",
      content:
        "The Executive Suite provided an exceptional experience. The room was spotless, equipped with everything you could need. The marble bathroom with its bathtub was pure luxury.",
      author: "Youssef R., Morocco",
      date: "22.10.2024",
      rating: 5,
    },
    {
      id: 3,
      title: "Outstanding Service and Beautiful Location",
      content:
        "From check-in to check-out, everything was perfect. The hotel staff went above and beyond to ensure our comfort. The room was beautifully decorated with modern amenities.",
      author: "Maria L., Spain",
      date: "20.10.2024",
      rating: 5,
    },
    {
      id: 4,
      title: "Perfect Weekend Getaway",
      content:
        "We had an amazing weekend at this hotel. The suite was spacious and comfortable, with incredible views. The hotel facilities were excellent, and the staff was very friendly.",
      author: "Ahmed K., Algeria",
      date: "18.10.2024",
      rating: 5,
    },
    {
      id: 5,
      title: "Luxury at Its Finest",
      content:
        "This hotel truly defines luxury. Every detail was perfect, from the elegant room design to the exceptional service. The Mediterranean views from our suite were breathtaking.",
      author: "Emma T., UK",
      date: "15.10.2024",
      rating: 5,
    },
    {
      id: 6,
      title: "Unforgettable Experience",
      content:
        "Our stay was absolutely unforgettable. The attention to detail, the comfort of the suite, and the stunning location made this the perfect vacation. Highly recommended!",
      author: "Jean-Pierre M., France",
      date: "12.10.2024",
      rating: 5,
    },
  ]

  // Responsive slides calculation
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(2) // Desktop: 2 slides
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(1.5) // Tablet: 1.5 slides
      } else {
        setSlidesToShow(1) // Mobile: 1 slide
      }
    }

    updateSlidesToShow()
    window.addEventListener("resize", updateSlidesToShow)
    return () => window.removeEventListener("resize", updateSlidesToShow)
  }, [])

  const maxSlide = Math.max(0, testimonials.length - Math.floor(slidesToShow))

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
    setTimeout(() => setIsAnimating(false), 500)
  }



  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-col gap-3 items-center space-x-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">What Our Guests Say</h2>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                disabled={isAnimating || currentSlide === 0}
                className="w-10 h-10 rounded-full border-gray-300 hover:border-[#007DD0] hover:text-[#007DD0] bg-transparent transition-all duration-200 disabled:opacity-50"
              >
                <MoveLeft />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                disabled={isAnimating || currentSlide >= maxSlide}
                className="w-10 h-10 rounded-full border-[#007DD0] text-[#007DD0] hover:bg-[#007DD0] hover:text-white bg-transparent transition-all duration-200 disabled:opacity-50"
              >
                <MoveRight />
              </Button>
            </div>
          </div>

          {/* See All Link */}
          <button className="flex border-b border-[#007DD0] text-[20px] p-3 items-center space-x-2 text-[#007DD0]  font-medium transition-all duration-200 hover:text-[#006BB8]">
            <span>See All..</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 hover:translate-x-1" />
          </button>
        </div>

        {/* Testimonials Swiper Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform gap-[20px] duration-500 ease-out"
            style={{
              transform: `translateX(-${(currentSlide * 100) / slidesToShow}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 px-[10px]"
                style={{
                  width: `${100 / slidesToShow}%`,
                }}
              >
                <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] h-full">
                  <CardContent className="p-4 h-full flex flex-col">
                    <div className="space-y-4 flex-grow">
                      {/* Title */}
                      <h3 className="text-[20px] font-semibold text-gray-900 line-clamp-2">&quot;{testimonial.title}&quot;</h3>

                      {/* Content */}
                      <p className="text-gray-600 leading-relaxed text-xs flex-grow  line-clamp-4">
                        {testimonial.content}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="w-6 h-6 fill-yellow-400 text-yellow-400 transition-all duration-200"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Author and Date */}
                    <div className="flex items-center justify-between pt-4 mt-auto ">
                      <span className="text-gray-700 font-medium text-sm">— {testimonial.author}</span>
                      {testimonial.date && <span className="text-gray-500 text-xs">{testimonial.date}</span>}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

       

      </div>
    </section>
  )
}
