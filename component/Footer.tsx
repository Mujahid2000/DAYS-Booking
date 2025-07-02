"use client"

import {  Phone, Mail, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FaFacebookF } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1e5799] to-[#2989d8] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-12">
        {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image
                src="https://res.cloudinary.com/diez3alve/image/upload/v1751306386/Group_1707478001_kr4x3z.png"
                alt="DayF Booking Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
        <div className="flex justify-between gap-8 lg:gap-12 ">
          {/* Left Section - Logo and Description */}
          <div className=" border-r pr-48 space-y-6 ">
            

            {/* Description */}
            <p className="text-white/90 leading-relaxed max-w-md">
              DAYF Booking makes booking your next stay easy, affordable, and stress-free. With thousands of hotels
              worldwide, exclusive deals, and secure payment options, we&apos;re here to help you find the perfect place to
              stay, every time.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="w-10 h-10  hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10  hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <FaFacebookF  size={20}/>

              </Link>
              <Link
                href="#"
                className="w-10 h-10  hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Instagram />
              </Link>
              <Link
                href="#"
                className="w-10 h-10  hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599-.043 1.126-.16 1.126-.16v-2.134c-.728.16-1.335.231-2.086.231-2.981 0-3.73-2.269-3.73-2.269-.516-1.316-1.259-1.666-1.259-1.666-1.030-.706.078-.692.078-.692 1.139.081 1.740 1.170 1.740 1.170 1.012 1.734 2.656 1.233 3.301.943.102-.735.396-1.233.719-1.516-2.512-.286-5.152-1.256-5.152-5.590 0-1.235.44-2.244 1.161-3.035-.116-.287-.504-1.441.111-3.003 0 0 .947-.304 3.103 1.156.899-.25 1.863-.375 2.823-.38.958.005 1.923.13 2.823.38 2.155-1.460 3.101-1.156 3.101-1.156.617 1.562.229 2.716.112 3.003.723.791 1.160 1.800 1.160 3.035 0 4.344-2.644 5.301-5.163 5.582.407.352.771 1.044.771 2.104v3.119c0 .304.527.421 1.126.16C20.562 21.8 24 17.302 24 12c0-6.627-5.374-12-12-12z" />
                </svg>
              </Link>
            </div>

            
          </div>
<div className="flex justify-between gap-16 ">
{/* Middle Section - Navigation Links */}
          <div className="">
            <div className="space-y-2">
              <Link href="/" className="block text-white hover:text-white/80 transition-colors duration-200 text-base">
                Home
              </Link>
              <Link
                href="/hotels"
                className="block text-white hover:text-white/80 transition-colors duration-200 text-base"
              >
                Hotels
              </Link>
              <Link
                href="/deals"
                className="block text-white hover:text-white/80 transition-colors duration-200 text-base"
              >
                Deals
              </Link>
              <Link
                href="/about"
                className="block text-white hover:text-white/80 transition-colors duration-200 text-base"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-white/80 transition-colors duration-200 text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Section - Contact Info and App Download */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/80" />
                <span className="text-white">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/80" />
                <span className="text-white">support@yourappname.com</span>
              </div>
            </div>

            {/* Download Our App */}
            <div className="space-x-4 flex items-center">
              <h3 className="text-white font-semibold text-lg">Download Our App</h3>
              <div className="flex items-center space-x-3">
                {/* Google Play Store */}
                <Link
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12  hover:bg-white/20 rounded-lg transition-colors duration-200"
                >
                 <img src="https://res.cloudinary.com/diez3alve/image/upload/v1751455232/elements_2_zz9dtr.svg" alt="" />
                </Link>
                {/* Apple App Store */}
                <Link
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12  hover:bg-white/20 rounded-lg transition-colors duration-200"
                >
                  <img src="https://res.cloudinary.com/diez3alve/image/upload/v1751455194/elements_1_ojeeox.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
</div>
          
        </div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 ">
    {/* Address */}
            <div className="flex items-start space-x-3 mt-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M19.0545 17.8745C19.7694 18.3306 20.1458 18.8479 20.1458 19.3745C20.1458 19.9011 19.7694 20.4185 19.0545 20.8745C18.3396 21.3306 17.3112 21.7093 16.0729 21.9726C14.8346 22.2359 13.4299 22.3745 12 22.3745C10.5701 22.3745 9.16541 22.2359 7.92708 21.9726C6.68876 21.7093 5.66045 21.3306 4.9455 20.8745C4.23055 20.4185 3.85416 19.9011 3.85416 19.3745C3.85416 18.8479 4.23055 18.3306 4.9455 17.8745" stroke="white" strokeLinecap="round"/>
  <path d="M19.1875 10.8745C19.1875 15.8565 14.003 19.2286 12.4405 20.1317C12.1652 20.2908 11.8348 20.2908 11.5595 20.1317C9.99702 19.2286 4.8125 15.8565 4.8125 10.8745C4.8125 6.37451 8.29509 3.37451 12 3.37451C15.8333 3.37451 19.1875 6.37451 19.1875 10.8745Z" stroke="white"/>
  <path d="M11.9997 7.37451C13.8208 7.37451 15.3337 8.92125 15.3337 10.8745C15.3337 12.8278 13.8208 14.3745 11.9997 14.3745C10.1787 14.3743 8.66667 12.8277 8.66667 10.8745C8.66667 8.92136 10.1787 7.3747 11.9997 7.37451Z" stroke="white"/>
</svg>
              <span className="text-white/90">123 Travel St, Suite 100, City, Country</span>
            </div>
    {/* Bottom Copyright */}
        <div className="">
          <div className="text-center">
            <p className="text-white/80">© 2023, All Rights Reserved</p>
          </div>
        </div>
</div>
        
      </div>
    </footer>
  )
}
