"use client"

import { UtensilsCrossed, ShoppingBag, Waves, Train, } from "lucide-react"

export default function ExploreArea() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Explore the Area</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
          {/* Left Side - Categories */}
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-9">
            {/* Restaurants & cafes */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <UtensilsCrossed className="w-5 h-5 text-gray-600" />
                <h3 className=" font-semibold text-gray-900 text-base">Restaurants & cafes</h3>
              </div>
              <div className="space-y-3 text-xs text-[#757575]">
                <div className="flex items-center justify-between ">
                  <span className="text-gray-700">Blue Cafe</span>
                  <span className="text-gray-500 ">1.4 km</span>
                </div>
                <div className="flex items-center justify-between ">
                  <span className="text-gray-700">Blue Cafe</span>
                  <span className="text-gray-500 ">1.4 km</span>
                </div>
                <div className="flex items-center justify-between ">
                  <span className="text-gray-700">Blue Cafe</span>
                  <span className="text-gray-500 ">1.4 km</span>
                </div>
              </div>
            </div>

            {/* Shops & Markets */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingBag className="w-5 h-5 text-gray-600" />
                <h3 className=" font-semibold text-gray-900 text-base">Shops & Markets</h3>
              </div>
              <div className="space-y-3 text-xs text-[#757575]">
                <div className="flex items-center justify-between ">
                  <span className="text-gray-700">Central Mall</span>
                  <span className="text-gray-500 ">1.4 km</span>
                </div>
                <div className="flex items-center justify-between ">
                  <span className="text-gray-700">Central Mall</span>
                  <span className="text-gray-500 ">1.4 km</span>
                </div>
                <div className="flex items-center justify-between ">
                  <span className="text-gray-700">Central Mall</span>
                  <span className="text-gray-500 ">1.4 km</span>
                </div>
              </div>
            </div>

            {/* Beaches */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Waves className="w-5 h-5 text-gray-600" />
                <h3 className=" font-semibold text-gray-900 text-base">Beaches</h3>
              </div>
              <div className="space-y-3 text-xs text-[#757575]">
                <div className="flex items-center justify-between ">
                  <span className="text-gray-700">Les Dunes Beach</span>
                  <span className="text-gray-500 ">1.4 km</span>
                </div>
                <div className="flex items-center justify-between ">
                  <span className="text-gray-700">Les Dunes Beach</span>
                  <span className="text-gray-500 ">1.4 km</span>
                </div>
                <div className="flex items-center justify-between ">
                  <span className="text-gray-700">Les Dunes Beach</span>
                  <span className="text-gray-500 ">1.4 km</span>
                </div>
              </div>
            </div>

            {/* Public transport */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Train className="w-5 h-5 text-gray-600" />
                <h3 className=" font-semibold text-gray-900 text-base">Public transport</h3>
              </div>
              <div className="space-y-3 text-xs text-[#757575]">
                <div className="flex items-center  justify-between ">
                  <span className="text-gray-700">Train – Riverdale Central Station</span>
                  <span className="text-gray-500 ">1.4 km</span>
                </div>
                <div className="flex items-center  justify-between ">
                  <span className="text-gray-700">Metro – Cityline Metro Hub</span>
                  <span className="text-gray-500 ">1.4 km</span>
                </div>
                <div className="flex items-center  justify-between ">
                  <span className="text-gray-700">Metro – Cityline Metro Hub</span>
                  <span className="text-gray-500 ">1.4 km</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map with iframe */}
          <div className="relative">
            <div className="bg-gray-100 rounded-lg overflow-hidden  relative">
              {/* Google Maps iframe showing Algiers, Algeria (random location) */}
              <img
                src="https://res.cloudinary.com/diez3alve/image/upload/v1751442373/bb45ebae9c80d7c9bd3dcd13669e8450af060a93_1_znjmqe.png"
                loading="lazy"
                className="rounded-lg w-full h-[257.736px] object-cover"
              />

             

              {/* Explore the Area Link */}
              <div className="absolute w-full h-6 -mt-[66px] pointer-events-auto">
  <button
    className="bg-white h-17 w-full bg-opacity-90 text-[#007DD0] font-medium text-base border rounded-b-lg hover:underline px-3 py-3 shadow-lg translate-y-[-2px]"
  >
    Explore the Area
  </button>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
