"use client"

import {  MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-6 lg:mb-8">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 lg:mb-4">El Aurassi Hotel</h1>
            <p className="text-gray-600 text-base lg:text-lg max-w-md">
              Spacious, modern rooms with panoramic views of the Mediterranean Sea.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button
              className="w-17 h-17 rounded-full bg-sky-50 flex justify-center items-center shadow-sm"
            >
             <img src="https://res.cloudinary.com/diez3alve/image/upload/v1751315101/Bookmark_light_vcprza.svg" alt="" className="w-10 opacity-100"/>
            </button>
            <button
              className="w-17 h-17 rounded-full bg-sky-50 flex justify-center items-center shadow-sm"
            >
              <img src="https://res.cloudinary.com/diez3alve/image/upload/v1751315101/Frame_1597882039_wobf9r.svg" alt="" className="w-10 opacity-100"/>
            </button>


            <Button className="bg-[#007DD0] w-[163px] h-[46px] hover:bg-[#006BB8] text-white px-6 py-[10px] text-lg rounded-full font-medium flex items-center space-x-2 shadow-lg">
              <span>Reserve</span>
              <MoveRight />
            </Button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="container mx-auto  py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* Large Main Image */}
        <div className="md:col-span-2">
          <Image
            src="https://res.cloudinary.com/diez3alve/image/upload/v1751312777/Rectangle_17650_qsl0n0.png"
            alt="El Aurassi Hotel Main Room"
            width={800}
            height={500}
            className="w-full h-[400px] md:h-[500px] object-cover rounded-tl-md shadow-sm"
            priority
          />
        </div>
        {/* Medium Images - Top Right */}
        <div className="flex flex-col gap-4">
            <Image
              src="https://res.cloudinary.com/diez3alve/image/upload/v1751312776/Rectangle_17651_kuzhiv.png"
              alt="Hotel Exterior View"
              width={400}
              height={240}
              className="w-full rounded-tr-md h-[targets: [192px] md:h-[240px] object-cover  shadow-sm"
            />
          <Image
            src="https://res.cloudinary.com/diez3alve/image/upload/v1751312776/Rectangle_17652_bwvxx9.png"
            alt="Hotel Pool Area"
            width={400}
            height={240}
            className="w-full h-[192px] md:h-[240px] object-cover shadow-sm"
          />
        </div>
      </div>
      {/* Small Images - Bottom Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mt-4">
        {[
          {
            src: 'https://res.cloudinary.com/diez3alve/image/upload/v1751312776/Rectangle_17653_fzqo2r.png',
            alt: 'Hotel Interior 1',
          },
          {
            src: 'https://res.cloudinary.com/diez3alve/image/upload/v1751312776/Rectangle_17654_zi5v1g.png',
            alt: 'Hotel Interior 2',
          },
          {
            src: 'https://res.cloudinary.com/diez3alve/image/upload/v1751312777/Rectangle_17656_afdm5a.png',
            alt: 'Hotel Interior 3',
          },
          {
            src: 'https://res.cloudinary.com/diez3alve/image/upload/v1751312776/Rectangle_17655_byxkjp.png',
            alt: 'Hotel Interior 4',
          },
          {
            src: 'https://res.cloudinary.com/diez3alve/image/upload/v1751312777/Rectangle_17657_rwnujq.png',
            alt: 'Hotel Interior 5',
          },
          {
            src: 'https://res.cloudinary.com/diez3alve/image/upload/v1751312777/Rectangle_17658_za0f2a.png',
            alt: 'Hotel Interior 6',
          },
        ].map((image, index) => (
          <div key={index} className="relative overflow-hidden  shadow-sm">
            <Image
              src={image.src}
              alt={image.alt}
              width={200}
              height={150}
              className={`w-full h-[120px] md:h-[150px] object-cover hover:scale-105 transition-transform duration-500 ${index == 0 ? 'rounded-bl-lg' : 'rounded-none'} ${index == 5 ? 'rounded-br-lg' : 'rounded-none'} `}
            />
          </div>
        ))}
      </div>
    </div>
      </div>
    </section>
  )
}
