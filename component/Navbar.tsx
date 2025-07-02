"use client"

import { ChevronDown, User, ArrowUpRight, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 py-4 bg-[#E9F6FF] border-b border-gray-100">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <img
            src="https://res.cloudinary.com/diez3alve/image/upload/v1751306386/Group_1707478001_kr4x3z.png"
            alt="DayF Booking Logo"
            className="h-6 sm:h-10 w-auto"
          />
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center space-x-8">
        <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
          Home
        </Link>
        <Link href="/hotels" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
          Hotels
        </Link>
        <Link href="/house" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
          House
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
          About Us
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
          Contact Us
        </Link>
      </div>

      {/* Desktop Right Side Actions */}
      <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
        {/* Currency Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center rounded-full border border-[#A5D3F1] space-x-1 text-gray-700 hover:text-gray-900 px-2 lg:px-3"
            >
              <img
                src="https://res.cloudinary.com/diez3alve/image/upload/v1751307687/elements_cfznnz.svg"
                alt="Euro"
                className="w-4 h-4 lg:w-5 lg:h-5"
              />
              <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4 text-[#007DD0]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>€ EUR</DropdownMenuItem>
            <DropdownMenuItem>$ USD</DropdownMenuItem>
            <DropdownMenuItem>£ GBP</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Language/Country Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center rounded-full border border-[#A5D3F1] space-x-1 text-gray-700 hover:text-gray-900 px-2 lg:px-3"
            >
              <img
                src="https://res.cloudinary.com/diez3alve/image/upload/v1751306572/Frame_1597881996_vpxvhi.png"
                alt="Language"
                className="w-4 h-4 lg:w-5 lg:h-5"
              />
              <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4 text-[#007DD0]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>🇪🇸 Español</DropdownMenuItem>
            <DropdownMenuItem>🇺🇸 English</DropdownMenuItem>
            <DropdownMenuItem>🇫🇷 Français</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* List Property Button */}
        <Button className="bg-[#E9F6FF] hover:bg-white text-[#007DD0] border rounded-full border-[#A5D3F1] font-medium px-3 lg:px-4 py-2 flex items-center space-x-2 text-sm lg:text-base">
          <span className="hidden lg:inline">List your property</span>
          <span className="lg:hidden">List</span>
          <ArrowUpRight className="w-3 h-3 lg:w-4 lg:h-4" />
        </Button>

        {/* Notification Bell */}
        <Button variant="ghost" size="icon" className="text-gray-600 rounded-full bg-[#FFFFFF80] hover:text-gray-900">
          <img
            src="https://res.cloudinary.com/diez3alve/image/upload/v1751306573/notification-bubble_gtmycq.png"
            alt="Notifications"
            className="w-4 h-4 lg:w-5 lg:h-5"
          />
        </Button>

        {/* User Profile */}
        <Button variant={"ghost"} className="flex rounded-full bg-[#FFFFFF80] items-center ">
          
            <User className="w-3 h-3 lg:w-5 lg:h-5 text-gray-600" />
          
          <span className="text-[#007DD0] font-medium text-sm lg:text-base hidden lg:inline">Sunan</span>
        </Button>
      </div>

      {/* Mobile Right Side - Simplified */}
      <div className="flex md:hidden items-center space-x-2">
        {/* Mobile Notification */}
        <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
          <img
            src="https://res.cloudinary.com/diez3alve/image/upload/v1751306573/notification-bubble_gtmycq.png"
            alt="Notifications"
            className="w-5 h-5"
          />
        </Button>

        {/* Mobile User */}
        <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-gray-600" />
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetTitle></SheetTitle>
            <div className="flex flex-col space-y-6 mt-6 px-4">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-4">
                <SheetClose asChild>
                  <Link href="/" className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors">
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/hotels"
                    className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Hotels
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/house"
                    className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    House
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/about"
                    className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    About Us
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Contact Us
                  </Link>
                </SheetClose>
              </div>

              {/* Mobile Actions */}
              <div className="border-t pt-6 space-y-4">
                {/* Mobile List Property Button */}
                <Button className="w-full bg-white hover:bg-white text-[#007DD0] border rounded-full border-[#A5D3F1] font-medium px-4 py-3 flex items-center justify-center space-x-2">
                  <span>List your property</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>

                {/* Mobile Currency & Language */}
                <div className="flex space-x-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex-1 flex items-center justify-center space-x-2 bg-transparent"
                      >
                        <img
                          src="https://res.cloudinary.com/diez3alve/image/upload/v1751307687/elements_cfznnz.svg"
                          alt="Euro"
                          className="w-5 h-5"
                        />
                        <span>EUR</span>
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>€ EUR</DropdownMenuItem>
                      <DropdownMenuItem>$ USD</DropdownMenuItem>
                      <DropdownMenuItem>£ GBP</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex-1 flex items-center justify-center space-x-2 bg-transparent"
                      >
                        <img
                          src="https://res.cloudinary.com/diez3alve/image/upload/v1751306572/Frame_1597881996_vpxvhi.png"
                          alt="Language"
                          className="w-5 h-5"
                        />
                        <span>ES</span>
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>🇪🇸 Español</DropdownMenuItem>
                      <DropdownMenuItem>🇺🇸 English</DropdownMenuItem>
                      <DropdownMenuItem>🇫🇷 Français</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Mobile User Info */}
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Sunan</p>
                    <p className="text-sm text-gray-500">View Profile</p>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
