"use client"

import { Calendar, User,  } from "lucide-react"
import { Button } from "@/components/ui/button"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export default function AvailabilitySection() {
  return (
    <section className=" px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Availability Search */}
       <div>
        <h2 className="text-[20px] font-bold pb-4">Availability</h2>
        <div className="flex gap-9 items-end  border border-[#A3D0EE] mb-4 rounded-[16px] max-w-4xl px-2 py-3">
            <div className="flex flex-col md:flex-row  gap-5">
              <div className="flex flex-col  gap-2">
                <label className="text-sm text-[#626262] font-medium" htmlFor="">Check-In</label>
                <div className="flex gap-5 bg-[#F6F6F6] w-full px-3 py-2 rounded-full  items-center">
                    <button className="bg-[#007DD0] p-[6px] rounded-full">
                        <Calendar  className="text-white w-4 h-4"/>
                    </button>
                    <p>Tue,23 June 2024</p>
                </div>
            </div>
            <div className="flex flex-col  gap-2">
                <label  className="text-sm text-[#626262] font-medium" htmlFor="">Check-Out</label>
                <div className="flex gap-5 bg-[#F6F6F6] w-full px-3 py-2 rounded-full  items-center">
                    <button className="bg-[#007DD0] p-[6px] rounded-full">
                        <Calendar className="text-white w-4 h-4"  />
                    </button>
                    <p>Sat,29 June 2024</p>
                </div>
            </div>
            <div className="flex flex-col  gap-2">
                <label className="text-sm text-[#626262] font-medium" htmlFor="">Room & Guest</label>
                <div className="flex gap-5 bg-[#F6F6F6] w-full px-3 py-2 rounded-full  items-center">
                    <button className="bg-[#007DD0] p-[6px] rounded-full">
                        <Calendar  className="text-white w-4 h-4"/>
                    </button>
                    <p>2 Adults  - 0 Children - 1 Room</p>
                </div>
            </div>
            </div>
            <button className="bg-[#007DD0] w-[125px] rounded-full text-white px-4 py-2 text-sm hover:bg-[#006BB8] transition-colors">
            Search
            </button>
        </div>
       </div>

         {/* Room Selection - Desktop Table */}
        <div className="mb-8 hidden lg:block">
          <div className="overflow-x-auto">
            {/* Table Header */}
            <div className="bg-[#007DD0] text-white ">
              <div className="grid grid-cols-6 gap-4 px-6 py-4">
                <div className="font-medium">Room type</div>
                <div className="font-medium">Number of guests</div>
                <div className="font-medium">Price for 1 week</div>
                <div className="font-medium">Your choices</div>
                <div className="font-medium">Select rooms</div>
                <div className="font-medium">Your choices</div>
              </div>
            </div>

            {/* Room Cards */}
            <div className="space-y-2">
              {/* Twin Room */}
              <div className="bg-white  mt-2 mb-2">
                <div className="grid grid-cols-6 gap-2  py-3">
                  <div className="border-r border-[#007DD05C] pr-4">
                    <div>
                      <h3 className="text-[#007DD0]  font-medium mb-2">Twin Room</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        
                        <span className="text-xs text-gray-600">2 single beds</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M16 11.865H1" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M16 11.865H1" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
</svg>

                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
  <path d="M2.25 16.24V5.73999C2.25 3.61867 2.25 2.55801 2.90901 1.899C3.56802 1.23999 4.62868 1.23999 6.75 1.23999H8.25C10.3713 1.23999 11.432 1.23999 12.091 1.899C12.75 2.55801 12.75 3.61867 12.75 5.73999V16.24H2.25Z" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.5 7.98999V4.98999C4.5 3.74899 4.759 3.48999 6 3.48999H9C10.241 3.48999 10.5 3.74899 10.5 4.98999V7.98999C10.5 9.23099 10.241 9.48999 9 9.48999H6C4.759 9.48999 4.5 9.23099 4.5 7.98999Z" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M0.75 16.24H14.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.5 3.48999V9.48999M10.5 6.48999L4.5 6.48999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.506 12.49L4.49927 12.49" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                          <span className="text-xs">Room</span>
                        </div>
                        <div className="flex items-center space-x-1">
                         <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <path d="M3.25 15.74H2.875V16.115H3.25V15.74ZM7.26517 12.2552C7.41161 12.1087 7.41161 11.8713 7.26517 11.7248C7.11872 11.5784 6.88128 11.5784 6.73483 11.7248L7.26517 12.2552ZM3.25 11.24H2.875V15.74H3.25H3.625V11.24H3.25ZM3.25 15.74V16.115H7.75V15.74V15.365H3.25V15.74ZM3.25 15.74L3.51516 16.0052L7.26517 12.2552L7 11.99L6.73483 11.7248L2.98484 15.4748L3.25 15.74Z" fill="#626262"/>
  <path d="M15.25 3.73999H15.625V3.36499H15.25V3.73999ZM11.2348 7.22483C11.0884 7.37127 11.0884 7.60871 11.2348 7.75516C11.3813 7.9016 11.6187 7.9016 11.7652 7.75516L11.2348 7.22483ZM15.25 8.23999H15.625V3.73999H15.25H14.875V8.23999H15.25ZM15.25 3.73999V3.36499H10.75V3.73999V4.11499H15.25V3.73999ZM15.25 3.73999L14.9848 3.47483L11.2348 7.22483L11.5 7.48999L11.7652 7.75516L15.5152 4.00516L15.25 3.73999Z" fill="#626262"/>
</svg>

                          <span className="text-xs">1200 sqft</span>
                        </div>
                        <div className="flex items-center space-x-1">
                         <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M1 3.19607C3.625 5.76984 7.43162 4.6668 8.29933 3.19607C8.42695 2.97975 8.5 2.7286 8.5 2.46071C8.5 1.64846 7.82843 0.98999 7 0.98999C6.17157 0.98999 5.5 1.64846 5.5 2.46071" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M12.25 5.43609C12.25 4.22322 13.0895 3.23999 14.125 3.23999C15.1605 3.23999 16 4.22322 16 5.43609C16 5.97389 15.835 6.46653 15.561 6.84833C14.0097 9.38363 6.4573 8.42728 2.5 7.6322" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M9.31403 13.6555C9.46847 14.1417 9.88518 14.49 10.375 14.49C10.9963 14.49 11.5 13.9296 11.5 13.2382C11.5 13.0032 11.4418 12.7833 11.3405 12.5953C10.3749 10.7343 5.49997 9.48292 1 12.821" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M13.75 10.365H15.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                          <span className="text-xs">Air condition</span>
                        </div>
                        <div className="flex items-center space-x-1">
                           <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
  <path d="M3.75 11.74L3.125 12.365M11.25 11.74L11.875 12.365" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M1.875 6.73999V7.36499C1.875 9.42738 1.875 10.4586 2.5157 11.0993C3.15641 11.74 4.18761 11.74 6.25 11.74H8.75C10.8124 11.74 11.8436 11.74 12.4843 11.0993C13.125 10.4586 13.125 9.42738 13.125 7.36499V6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.25 6.73999L13.75 6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round"/>
  <path d="M2.5 6.73999V2.69212C2.5 1.82109 3.2061 1.11499 4.07713 1.11499C4.77604 1.11499 5.39159 1.57498 5.58962 2.24524L5.625 2.36499" stroke="#626262" strokeWidth="0.75" strokeLinecap="round"/>
  <path d="M5 2.98999L6.5625 1.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
</svg>

                          <span className="text-xs">Bathroom</span>
                        </div>
                        <div className="flex items-center space-x-1">
                         <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <path d="M1.375 7.98999C1.375 10.1113 1.375 11.172 2.03401 11.831C2.69302 12.49 3.75368 12.49 5.875 12.49H11.125C13.2463 12.49 14.307 12.49 14.966 11.831C15.625 11.172 15.625 10.1113 15.625 7.98999V5.73999C15.625 3.61867 15.625 2.55801 14.966 1.899C14.307 1.23999 13.2463 1.23999 11.125 1.23999H5.875C3.75368 1.23999 2.69302 1.23999 2.03401 1.899C1.375 2.55801 1.375 3.61867 1.375 5.73999V7.98999Z" stroke="#626262" strokeWidth="1.125"/>
  <path d="M7.9375 16.24C7.9375 16.5507 8.18934 16.8025 8.5 16.8025C8.81066 16.8025 9.0625 16.5507 9.0625 16.24L7.9375 16.24ZM8.5 12.49L7.9375 12.49L7.9375 16.24L8.5 16.24L9.0625 16.24L9.0625 12.49L8.5 12.49Z" fill="#626262"/>
  <path d="M4.75 16.24L8.50005 13.99L12.25 16.24" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                          <span className="text-xs">TV</span>
                        </div>
                        <div className="flex items-center space-x-1">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M0.875 7.73999C0.875 4.38123 0.875 2.70185 1.91843 1.65842C2.96186 0.61499 4.64124 0.61499 8 0.61499C11.3588 0.61499 13.0381 0.61499 14.0816 1.65842C15.125 2.70185 15.125 4.38123 15.125 7.73999C15.125 11.0987 15.125 12.7781 14.0816 13.8216C13.0381 14.865 11.3588 14.865 8 14.865C4.64124 14.865 2.96186 14.865 1.91843 13.8216C0.875 12.7781 0.875 11.0987 0.875 7.73999Z" stroke="#626262" strokeWidth="1.125"/>
  <path d="M5 6.47516C5.86163 5.85208 6.89065 5.48999 7.99592 5.48999C9.10468 5.48999 10.1367 5.85437 11 6.48107M9.63069 8.48999C9.13862 8.21724 8.58343 8.06378 7.99592 8.06378C7.41137 8.06378 6.85881 8.2157 6.36858 8.48589" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M8 10.74H8.00476" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                          <span className="text-xs">WIFI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-r border-[#007DD05C] pr-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-gray-600" />
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                  </div>
                  <div className="border-r border-[#007DD05C] pr-4">
                    <span className="text-xl font-bold text-gray-900">$282</span>
                  </div>
                  <div className="border-r border-[#007DD05C] pr-4">
                    <div>
                      <p className="text-[#000] text-base mb-1">Breakfast included</p>
                      <p className="text-sm text-red-500">Only 4 rooms left</p>
                    </div>
                  </div>
                  <div className="border-r border-[#007DD05C] pr-4">
                    <Select defaultValue="0">
                      <SelectTrigger className="w-15 rounded-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex  justify-center">
                    <Button className="bg-[#007DD0] hover:bg-[#006BB8] text-white px-6 w-[185px] mx-auto  py-2 rounded-full">
                      Reserve
                    </Button>
                  </div>
                </div>
                <div className="border-b border-[#007DD05C] "></div>
              </div>

              {/* Deluxe Double Room 1 */}
              <div className="bg-white  mt-2 mb-2">
                <div className="grid grid-cols-6 gap-2  py-3">
                  <div className="border-r border-[#007DD05C] pr-4">
                    <div>
                      <h3 className="text-[#007DD0] font-medium mb-2">Deluxe Double Room</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        
                        <span className="text-sm text-gray-600">2 single beds</span>
                       <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M16 11.865H1" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M16 11.865H1" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
</svg>

                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div className="flex items-center  ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
  <path d="M2.25 16.24V5.73999C2.25 3.61867 2.25 2.55801 2.90901 1.899C3.56802 1.23999 4.62868 1.23999 6.75 1.23999H8.25C10.3713 1.23999 11.432 1.23999 12.091 1.899C12.75 2.55801 12.75 3.61867 12.75 5.73999V16.24H2.25Z" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.5 7.98999V4.98999C4.5 3.74899 4.759 3.48999 6 3.48999H9C10.241 3.48999 10.5 3.74899 10.5 4.98999V7.98999C10.5 9.23099 10.241 9.48999 9 9.48999H6C4.759 9.48999 4.5 9.23099 4.5 7.98999Z" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M0.75 16.24H14.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.5 3.48999V9.48999M10.5 6.48999L4.5 6.48999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.506 12.49L4.49927 12.49" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                          <span className="text-xs">Room</span>
                        </div>
                        <div className="flex items-center space-x-1">
                         <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <path d="M3.25 15.74H2.875V16.115H3.25V15.74ZM7.26517 12.2552C7.41161 12.1087 7.41161 11.8713 7.26517 11.7248C7.11872 11.5784 6.88128 11.5784 6.73483 11.7248L7.26517 12.2552ZM3.25 11.24H2.875V15.74H3.25H3.625V11.24H3.25ZM3.25 15.74V16.115H7.75V15.74V15.365H3.25V15.74ZM3.25 15.74L3.51516 16.0052L7.26517 12.2552L7 11.99L6.73483 11.7248L2.98484 15.4748L3.25 15.74Z" fill="#626262"/>
  <path d="M15.25 3.73999H15.625V3.36499H15.25V3.73999ZM11.2348 7.22483C11.0884 7.37127 11.0884 7.60871 11.2348 7.75516C11.3813 7.9016 11.6187 7.9016 11.7652 7.75516L11.2348 7.22483ZM15.25 8.23999H15.625V3.73999H15.25H14.875V8.23999H15.25ZM15.25 3.73999V3.36499H10.75V3.73999V4.11499H15.25V3.73999ZM15.25 3.73999L14.9848 3.47483L11.2348 7.22483L11.5 7.48999L11.7652 7.75516L15.5152 4.00516L15.25 3.73999Z" fill="#626262"/>
</svg>
                          <span className="text-xs">1200 sqft</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M1 3.19607C3.625 5.76984 7.43162 4.6668 8.29933 3.19607C8.42695 2.97975 8.5 2.7286 8.5 2.46071C8.5 1.64846 7.82843 0.98999 7 0.98999C6.17157 0.98999 5.5 1.64846 5.5 2.46071" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M12.25 5.43609C12.25 4.22322 13.0895 3.23999 14.125 3.23999C15.1605 3.23999 16 4.22322 16 5.43609C16 5.97389 15.835 6.46653 15.561 6.84833C14.0097 9.38363 6.4573 8.42728 2.5 7.6322" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M9.31403 13.6555C9.46847 14.1417 9.88518 14.49 10.375 14.49C10.9963 14.49 11.5 13.9296 11.5 13.2382C11.5 13.0032 11.4418 12.7833 11.3405 12.5953C10.3749 10.7343 5.49997 9.48292 1 12.821" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M13.75 10.365H15.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                          <span className="text-xs">Air condition</span>
                        </div>
                        <div className="flex items-center space-x-1">
                           <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
  <path d="M3.75 11.74L3.125 12.365M11.25 11.74L11.875 12.365" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M1.875 6.73999V7.36499C1.875 9.42738 1.875 10.4586 2.5157 11.0993C3.15641 11.74 4.18761 11.74 6.25 11.74H8.75C10.8124 11.74 11.8436 11.74 12.4843 11.0993C13.125 10.4586 13.125 9.42738 13.125 7.36499V6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.25 6.73999L13.75 6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round"/>
  <path d="M2.5 6.73999V2.69212C2.5 1.82109 3.2061 1.11499 4.07713 1.11499C4.77604 1.11499 5.39159 1.57498 5.58962 2.24524L5.625 2.36499" stroke="#626262" strokeWidth="0.75" strokeLinecap="round"/>
  <path d="M5 2.98999L6.5625 1.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
</svg>

                          <span className="text-xs">Bathroom</span>
                        </div>
                        <div className="flex items-center space-x-1">
                           <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <path d="M1.375 7.98999C1.375 10.1113 1.375 11.172 2.03401 11.831C2.69302 12.49 3.75368 12.49 5.875 12.49H11.125C13.2463 12.49 14.307 12.49 14.966 11.831C15.625 11.172 15.625 10.1113 15.625 7.98999V5.73999C15.625 3.61867 15.625 2.55801 14.966 1.899C14.307 1.23999 13.2463 1.23999 11.125 1.23999H5.875C3.75368 1.23999 2.69302 1.23999 2.03401 1.899C1.375 2.55801 1.375 3.61867 1.375 5.73999V7.98999Z" stroke="#626262" strokeWidth="1.125"/>
  <path d="M7.9375 16.24C7.9375 16.5507 8.18934 16.8025 8.5 16.8025C8.81066 16.8025 9.0625 16.5507 9.0625 16.24L7.9375 16.24ZM8.5 12.49L7.9375 12.49L7.9375 16.24L8.5 16.24L9.0625 16.24L9.0625 12.49L8.5 12.49Z" fill="#626262"/>
  <path d="M4.75 16.24L8.50005 13.99L12.25 16.24" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                          <span className="text-xs">TV</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M0.875 7.73999C0.875 4.38123 0.875 2.70185 1.91843 1.65842C2.96186 0.61499 4.64124 0.61499 8 0.61499C11.3588 0.61499 13.0381 0.61499 14.0816 1.65842C15.125 2.70185 15.125 4.38123 15.125 7.73999C15.125 11.0987 15.125 12.7781 14.0816 13.8216C13.0381 14.865 11.3588 14.865 8 14.865C4.64124 14.865 2.96186 14.865 1.91843 13.8216C0.875 12.7781 0.875 11.0987 0.875 7.73999Z" stroke="#626262" strokeWidth="1.125"/>
  <path d="M5 6.47516C5.86163 5.85208 6.89065 5.48999 7.99592 5.48999C9.10468 5.48999 10.1367 5.85437 11 6.48107M9.63069 8.48999C9.13862 8.21724 8.58343 8.06378 7.99592 8.06378C7.41137 8.06378 6.85881 8.2157 6.36858 8.48589" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M8 10.74H8.00476" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                          <span className="text-xs">WIFI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-r border-[#007DD05C] pr-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-gray-600" />
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                  </div>
                  <div className="border-r border-[#007DD05C] pr-4">
                    <span className="text-xl font-bold text-[#000] ">$282</span>
                  </div>
                  <div className="border-r border-[#007DD05C] pr-4">
                    <div>
                      <p className=" text-[#000] text-base mb-1">Breakfast included</p>
                      <p className="text-base text-red-500">Only 4 rooms left</p>
                    </div>
                  </div>
                  <div className=" pr-4">
                    <Select defaultValue="0">
                      <SelectTrigger className="w-15 rounded-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    
                  </div>
                </div>
                <div className="border-b border-[#007DD05C] "></div>
              </div>

              {/* Deluxe Double Room 2 */}
              <div className="bg-white  mt-2 mb-2">
                <div className="grid grid-cols-6 gap-2  py-3">
                  <div className="border-r border-[#007DD05C] pr-4">
                    <div>
                      <h3 className="text-[#007DD0] font-medium mb-2">Deluxe Double Room</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        
                        <span className="text-sm text-gray-600">2 single beds</span>
                       <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M16 11.865H1" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M16 11.865H1" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
</svg>

                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div className="flex items-center  ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
  <path d="M2.25 16.24V5.73999C2.25 3.61867 2.25 2.55801 2.90901 1.899C3.56802 1.23999 4.62868 1.23999 6.75 1.23999H8.25C10.3713 1.23999 11.432 1.23999 12.091 1.899C12.75 2.55801 12.75 3.61867 12.75 5.73999V16.24H2.25Z" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.5 7.98999V4.98999C4.5 3.74899 4.759 3.48999 6 3.48999H9C10.241 3.48999 10.5 3.74899 10.5 4.98999V7.98999C10.5 9.23099 10.241 9.48999 9 9.48999H6C4.759 9.48999 4.5 9.23099 4.5 7.98999Z" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M0.75 16.24H14.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.5 3.48999V9.48999M10.5 6.48999L4.5 6.48999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.506 12.49L4.49927 12.49" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                          <span className="text-xs">Room</span>
                        </div>
                        <div className="flex items-center space-x-1">
                         <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <path d="M3.25 15.74H2.875V16.115H3.25V15.74ZM7.26517 12.2552C7.41161 12.1087 7.41161 11.8713 7.26517 11.7248C7.11872 11.5784 6.88128 11.5784 6.73483 11.7248L7.26517 12.2552ZM3.25 11.24H2.875V15.74H3.25H3.625V11.24H3.25ZM3.25 15.74V16.115H7.75V15.74V15.365H3.25V15.74ZM3.25 15.74L3.51516 16.0052L7.26517 12.2552L7 11.99L6.73483 11.7248L2.98484 15.4748L3.25 15.74Z" fill="#626262"/>
  <path d="M15.25 3.73999H15.625V3.36499H15.25V3.73999ZM11.2348 7.22483C11.0884 7.37127 11.0884 7.60871 11.2348 7.75516C11.3813 7.9016 11.6187 7.9016 11.7652 7.75516L11.2348 7.22483ZM15.25 8.23999H15.625V3.73999H15.25H14.875V8.23999H15.25ZM15.25 3.73999V3.36499H10.75V3.73999V4.11499H15.25V3.73999ZM15.25 3.73999L14.9848 3.47483L11.2348 7.22483L11.5 7.48999L11.7652 7.75516L15.5152 4.00516L15.25 3.73999Z" fill="#626262"/>
</svg>
                          <span className="text-xs">1200 sqft</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M1 3.19607C3.625 5.76984 7.43162 4.6668 8.29933 3.19607C8.42695 2.97975 8.5 2.7286 8.5 2.46071C8.5 1.64846 7.82843 0.98999 7 0.98999C6.17157 0.98999 5.5 1.64846 5.5 2.46071" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M12.25 5.43609C12.25 4.22322 13.0895 3.23999 14.125 3.23999C15.1605 3.23999 16 4.22322 16 5.43609C16 5.97389 15.835 6.46653 15.561 6.84833C14.0097 9.38363 6.4573 8.42728 2.5 7.6322" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M9.31403 13.6555C9.46847 14.1417 9.88518 14.49 10.375 14.49C10.9963 14.49 11.5 13.9296 11.5 13.2382C11.5 13.0032 11.4418 12.7833 11.3405 12.5953C10.3749 10.7343 5.49997 9.48292 1 12.821" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M13.75 10.365H15.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                          <span className="text-xs">Air condition</span>
                        </div>
                        <div className="flex items-center space-x-1">
                           <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
  <path d="M3.75 11.74L3.125 12.365M11.25 11.74L11.875 12.365" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M1.875 6.73999V7.36499C1.875 9.42738 1.875 10.4586 2.5157 11.0993C3.15641 11.74 4.18761 11.74 6.25 11.74H8.75C10.8124 11.74 11.8436 11.74 12.4843 11.0993C13.125 10.4586 13.125 9.42738 13.125 7.36499V6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.25 6.73999L13.75 6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round"/>
  <path d="M2.5 6.73999V2.69212C2.5 1.82109 3.2061 1.11499 4.07713 1.11499C4.77604 1.11499 5.39159 1.57498 5.58962 2.24524L5.625 2.36499" stroke="#626262" strokeWidth="0.75" strokeLinecap="round"/>
  <path d="M5 2.98999L6.5625 1.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
</svg>

                          <span className="text-xs">Bathroom</span>
                        </div>
                        <div className="flex items-center space-x-1">
                           <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <path d="M1.375 7.98999C1.375 10.1113 1.375 11.172 2.03401 11.831C2.69302 12.49 3.75368 12.49 5.875 12.49H11.125C13.2463 12.49 14.307 12.49 14.966 11.831C15.625 11.172 15.625 10.1113 15.625 7.98999V5.73999C15.625 3.61867 15.625 2.55801 14.966 1.899C14.307 1.23999 13.2463 1.23999 11.125 1.23999H5.875C3.75368 1.23999 2.69302 1.23999 2.03401 1.899C1.375 2.55801 1.375 3.61867 1.375 5.73999V7.98999Z" stroke="#626262" strokeWidth="1.125"/>
  <path d="M7.9375 16.24C7.9375 16.5507 8.18934 16.8025 8.5 16.8025C8.81066 16.8025 9.0625 16.5507 9.0625 16.24L7.9375 16.24ZM8.5 12.49L7.9375 12.49L7.9375 16.24L8.5 16.24L9.0625 16.24L9.0625 12.49L8.5 12.49Z" fill="#626262"/>
  <path d="M4.75 16.24L8.50005 13.99L12.25 16.24" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                          <span className="text-xs">TV</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M0.875 7.73999C0.875 4.38123 0.875 2.70185 1.91843 1.65842C2.96186 0.61499 4.64124 0.61499 8 0.61499C11.3588 0.61499 13.0381 0.61499 14.0816 1.65842C15.125 2.70185 15.125 4.38123 15.125 7.73999C15.125 11.0987 15.125 12.7781 14.0816 13.8216C13.0381 14.865 11.3588 14.865 8 14.865C4.64124 14.865 2.96186 14.865 1.91843 13.8216C0.875 12.7781 0.875 11.0987 0.875 7.73999Z" stroke="#626262" strokeWidth="1.125"/>
  <path d="M5 6.47516C5.86163 5.85208 6.89065 5.48999 7.99592 5.48999C9.10468 5.48999 10.1367 5.85437 11 6.48107M9.63069 8.48999C9.13862 8.21724 8.58343 8.06378 7.99592 8.06378C7.41137 8.06378 6.85881 8.2157 6.36858 8.48589" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M8 10.74H8.00476" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                          <span className="text-xs">WIFI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-r border-[#007DD05C] pr-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-gray-600" />
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                  </div>
                  <div className="border-r border-[#007DD05C] pr-4">
                    <span className="text-xl font-bold text-gray-900">$282</span>
                  </div>
                  <div className="border-r border-[#007DD05C] pr-4">
                    <div>
                      <p className="text-sm text-gray-900 mb-1">Breakfast included</p>
                      <p className="text-sm text-red-500">Only 4 rooms left</p>
                    </div>
                  </div>
                  <div className=" pr-4">
                    <Select defaultValue="0">
                      <SelectTrigger className="w-15 rounded-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                   
                  </div>
                </div>
                <div className="border-b border-[#007DD05C] "></div>
              </div>
            </div>
          </div>
        </div>

        {/* Room Selection - Mobile Cards */}
        <div className="mb-8 lg:hidden">
          <div className="space-y-4">
            {/* Twin Room - Mobile */}
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[#007DD0] font-medium text-lg mb-2">Twin Room</h3>
                    <div className="flex items-center space-x-2 mb-3">
                     
                      <span className="text-sm text-gray-600">2 single beds</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M16 11.865H1" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M16 11.865H1" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
</svg>

                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
  <path d="M2.25 16.24V5.73999C2.25 3.61867 2.25 2.55801 2.90901 1.899C3.56802 1.23999 4.62868 1.23999 6.75 1.23999H8.25C10.3713 1.23999 11.432 1.23999 12.091 1.899C12.75 2.55801 12.75 3.61867 12.75 5.73999V16.24H2.25Z" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.5 7.98999V4.98999C4.5 3.74899 4.759 3.48999 6 3.48999H9C10.241 3.48999 10.5 3.74899 10.5 4.98999V7.98999C10.5 9.23099 10.241 9.48999 9 9.48999H6C4.759 9.48999 4.5 9.23099 4.5 7.98999Z" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M0.75 16.24H14.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.5 3.48999V9.48999M10.5 6.48999L4.5 6.48999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.506 12.49L4.49927 12.49" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                        <span>Room</span>
                      </div>
                      <div className="flex items-center space-x-1">
                       <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <path d="M3.25 15.74H2.875V16.115H3.25V15.74ZM7.26517 12.2552C7.41161 12.1087 7.41161 11.8713 7.26517 11.7248C7.11872 11.5784 6.88128 11.5784 6.73483 11.7248L7.26517 12.2552ZM3.25 11.24H2.875V15.74H3.25H3.625V11.24H3.25ZM3.25 15.74V16.115H7.75V15.74V15.365H3.25V15.74ZM3.25 15.74L3.51516 16.0052L7.26517 12.2552L7 11.99L6.73483 11.7248L2.98484 15.4748L3.25 15.74Z" fill="#626262"/>
  <path d="M15.25 3.73999H15.625V3.36499H15.25V3.73999ZM11.2348 7.22483C11.0884 7.37127 11.0884 7.60871 11.2348 7.75516C11.3813 7.9016 11.6187 7.9016 11.7652 7.75516L11.2348 7.22483ZM15.25 8.23999H15.625V3.73999H15.25H14.875V8.23999H15.25ZM15.25 3.73999V3.36499H10.75V3.73999V4.11499H15.25V3.73999ZM15.25 3.73999L14.9848 3.47483L11.2348 7.22483L11.5 7.48999L11.7652 7.75516L15.5152 4.00516L15.25 3.73999Z" fill="#626262"/>
</svg>

                        <span>1200 sqft</span>
                      </div>
                      <div className="flex items-center space-x-1">
                       <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M1 3.19607C3.625 5.76984 7.43162 4.6668 8.29933 3.19607C8.42695 2.97975 8.5 2.7286 8.5 2.46071C8.5 1.64846 7.82843 0.98999 7 0.98999C6.17157 0.98999 5.5 1.64846 5.5 2.46071" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M12.25 5.43609C12.25 4.22322 13.0895 3.23999 14.125 3.23999C15.1605 3.23999 16 4.22322 16 5.43609C16 5.97389 15.835 6.46653 15.561 6.84833C14.0097 9.38363 6.4573 8.42728 2.5 7.6322" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M9.31403 13.6555C9.46847 14.1417 9.88518 14.49 10.375 14.49C10.9963 14.49 11.5 13.9296 11.5 13.2382C11.5 13.0032 11.4418 12.7833 11.3405 12.5953C10.3749 10.7343 5.49997 9.48292 1 12.821" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M13.75 10.365H15.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                        <span>Air condition</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
  <path d="M3.75 11.74L3.125 12.365M11.25 11.74L11.875 12.365" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M1.875 6.73999V7.36499C1.875 9.42738 1.875 10.4586 2.5157 11.0993C3.15641 11.74 4.18761 11.74 6.25 11.74H8.75C10.8124 11.74 11.8436 11.74 12.4843 11.0993C13.125 10.4586 13.125 9.42738 13.125 7.36499V6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.25 6.73999L13.75 6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round"/>
  <path d="M2.5 6.73999V2.69212C2.5 1.82109 3.2061 1.11499 4.07713 1.11499C4.77604 1.11499 5.39159 1.57498 5.58962 2.24524L5.625 2.36499" stroke="#626262" strokeWidth="0.75" strokeLinecap="round"/>
  <path d="M5 2.98999L6.5625 1.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
</svg>

                        <span>Bathroom</span>
                      </div>
                      <div className="flex items-center space-x-1">
                       <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <path d="M1.375 7.98999C1.375 10.1113 1.375 11.172 2.03401 11.831C2.69302 12.49 3.75368 12.49 5.875 12.49H11.125C13.2463 12.49 14.307 12.49 14.966 11.831C15.625 11.172 15.625 10.1113 15.625 7.98999V5.73999C15.625 3.61867 15.625 2.55801 14.966 1.899C14.307 1.23999 13.2463 1.23999 11.125 1.23999H5.875C3.75368 1.23999 2.69302 1.23999 2.03401 1.899C1.375 2.55801 1.375 3.61867 1.375 5.73999V7.98999Z" stroke="#626262" strokeWidth="1.125"/>
  <path d="M7.9375 16.24C7.9375 16.5507 8.18934 16.8025 8.5 16.8025C8.81066 16.8025 9.0625 16.5507 9.0625 16.24L7.9375 16.24ZM8.5 12.49L7.9375 12.49L7.9375 16.24L8.5 16.24L9.0625 16.24L9.0625 12.49L8.5 12.49Z" fill="#626262"/>
  <path d="M4.75 16.24L8.50005 13.99L12.25 16.24" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                        <span>TV</span>
                      </div>
                      <div className="flex items-center space-x-1">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M0.875 7.73999C0.875 4.38123 0.875 2.70185 1.91843 1.65842C2.96186 0.61499 4.64124 0.61499 8 0.61499C11.3588 0.61499 13.0381 0.61499 14.0816 1.65842C15.125 2.70185 15.125 4.38123 15.125 7.73999C15.125 11.0987 15.125 12.7781 14.0816 13.8216C13.0381 14.865 11.3588 14.865 8 14.865C4.64124 14.865 2.96186 14.865 1.91843 13.8216C0.875 12.7781 0.875 11.0987 0.875 7.73999Z" stroke="#626262" strokeWidth="1.125"/>
  <path d="M5 6.47516C5.86163 5.85208 6.89065 5.48999 7.99592 5.48999C9.10468 5.48999 10.1367 5.85437 11 6.48107M9.63069 8.48999C9.13862 8.21724 8.58343 8.06378 7.99592 8.06378C7.41137 8.06378 6.85881 8.2157 6.36858 8.48589" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M8 10.74H8.00476" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                        <span>WIFI</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-gray-600" />
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-xl font-bold text-gray-900">$282</span>
                  </div>

                  <div>
                    <p className="text-sm text-gray-900 mb-1">Breakfast included</p>
                    <p className="text-sm text-red-500">Only 4 rooms left</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <Select defaultValue="0">
                      <SelectTrigger className="w-20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="bg-[#007DD0] hover:bg-[#006BB8] text-white px-6 py-2 rounded-full">
                      Reserve
                    </Button>
                  </div>
                </div>
                <div className="border-b border-[#007DD05C] mt-4"></div>
              </CardContent>
            </Card>

            {/* Deluxe Double Room 1 - Mobile */}
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[#007DD0] font-medium text-lg mb-2">Deluxe Double Room</h3>
                    <div className="flex items-center space-x-2 mb-3">
                     
                      <span className="text-sm text-gray-600">2 single beds</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M16 11.865H1" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M16 11.865H1" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
</svg>

                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
  <path d="M2.25 16.24V5.73999C2.25 3.61867 2.25 2.55801 2.90901 1.899C3.56802 1.23999 4.62868 1.23999 6.75 1.23999H8.25C10.3713 1.23999 11.432 1.23999 12.091 1.899C12.75 2.55801 12.75 3.61867 12.75 5.73999V16.24H2.25Z" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.5 7.98999V4.98999C4.5 3.74899 4.759 3.48999 6 3.48999H9C10.241 3.48999 10.5 3.74899 10.5 4.98999V7.98999C10.5 9.23099 10.241 9.48999 9 9.48999H6C4.759 9.48999 4.5 9.23099 4.5 7.98999Z" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M0.75 16.24H14.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.5 3.48999V9.48999M10.5 6.48999L4.5 6.48999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.506 12.49L4.49927 12.49" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                        <span>Room</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <path d="M3.25 15.74H2.875V16.115H3.25V15.74ZM7.26517 12.2552C7.41161 12.1087 7.41161 11.8713 7.26517 11.7248C7.11872 11.5784 6.88128 11.5784 6.73483 11.7248L7.26517 12.2552ZM3.25 11.24H2.875V15.74H3.25H3.625V11.24H3.25ZM3.25 15.74V16.115H7.75V15.74V15.365H3.25V15.74ZM3.25 15.74L3.51516 16.0052L7.26517 12.2552L7 11.99L6.73483 11.7248L2.98484 15.4748L3.25 15.74Z" fill="#626262"/>
  <path d="M15.25 3.73999H15.625V3.36499H15.25V3.73999ZM11.2348 7.22483C11.0884 7.37127 11.0884 7.60871 11.2348 7.75516C11.3813 7.9016 11.6187 7.9016 11.7652 7.75516L11.2348 7.22483ZM15.25 8.23999H15.625V3.73999H15.25H14.875V8.23999H15.25ZM15.25 3.73999V3.36499H10.75V3.73999V4.11499H15.25V3.73999ZM15.25 3.73999L14.9848 3.47483L11.2348 7.22483L11.5 7.48999L11.7652 7.75516L15.5152 4.00516L15.25 3.73999Z" fill="#626262"/>
</svg>

                        <span>1200 sqft</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M1 3.19607C3.625 5.76984 7.43162 4.6668 8.29933 3.19607C8.42695 2.97975 8.5 2.7286 8.5 2.46071C8.5 1.64846 7.82843 0.98999 7 0.98999C6.17157 0.98999 5.5 1.64846 5.5 2.46071" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M12.25 5.43609C12.25 4.22322 13.0895 3.23999 14.125 3.23999C15.1605 3.23999 16 4.22322 16 5.43609C16 5.97389 15.835 6.46653 15.561 6.84833C14.0097 9.38363 6.4573 8.42728 2.5 7.6322" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M9.31403 13.6555C9.46847 14.1417 9.88518 14.49 10.375 14.49C10.9963 14.49 11.5 13.9296 11.5 13.2382C11.5 13.0032 11.4418 12.7833 11.3405 12.5953C10.3749 10.7343 5.49997 9.48292 1 12.821" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M13.75 10.365H15.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                        <span>Air condition</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
  <path d="M3.75 11.74L3.125 12.365M11.25 11.74L11.875 12.365" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M1.875 6.73999V7.36499C1.875 9.42738 1.875 10.4586 2.5157 11.0993C3.15641 11.74 4.18761 11.74 6.25 11.74H8.75C10.8124 11.74 11.8436 11.74 12.4843 11.0993C13.125 10.4586 13.125 9.42738 13.125 7.36499V6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.25 6.73999L13.75 6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round"/>
  <path d="M2.5 6.73999V2.69212C2.5 1.82109 3.2061 1.11499 4.07713 1.11499C4.77604 1.11499 5.39159 1.57498 5.58962 2.24524L5.625 2.36499" stroke="#626262" strokeWidth="0.75" strokeLinecap="round"/>
  <path d="M5 2.98999L6.5625 1.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
</svg>

                        <span>Bathroom</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <path d="M1.375 7.98999C1.375 10.1113 1.375 11.172 2.03401 11.831C2.69302 12.49 3.75368 12.49 5.875 12.49H11.125C13.2463 12.49 14.307 12.49 14.966 11.831C15.625 11.172 15.625 10.1113 15.625 7.98999V5.73999C15.625 3.61867 15.625 2.55801 14.966 1.899C14.307 1.23999 13.2463 1.23999 11.125 1.23999H5.875C3.75368 1.23999 2.69302 1.23999 2.03401 1.899C1.375 2.55801 1.375 3.61867 1.375 5.73999V7.98999Z" stroke="#626262" strokeWidth="1.125"/>
  <path d="M7.9375 16.24C7.9375 16.5507 8.18934 16.8025 8.5 16.8025C8.81066 16.8025 9.0625 16.5507 9.0625 16.24L7.9375 16.24ZM8.5 12.49L7.9375 12.49L7.9375 16.24L8.5 16.24L9.0625 16.24L9.0625 12.49L8.5 12.49Z" fill="#626262"/>
  <path d="M4.75 16.24L8.50005 13.99L12.25 16.24" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                        <span>TV</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M0.875 7.73999C0.875 4.38123 0.875 2.70185 1.91843 1.65842C2.96186 0.61499 4.64124 0.61499 8 0.61499C11.3588 0.61499 13.0381 0.61499 14.0816 1.65842C15.125 2.70185 15.125 4.38123 15.125 7.73999C15.125 11.0987 15.125 12.7781 14.0816 13.8216C13.0381 14.865 11.3588 14.865 8 14.865C4.64124 14.865 2.96186 14.865 1.91843 13.8216C0.875 12.7781 0.875 11.0987 0.875 7.73999Z" stroke="#626262" strokeWidth="1.125"/>
  <path d="M5 6.47516C5.86163 5.85208 6.89065 5.48999 7.99592 5.48999C9.10468 5.48999 10.1367 5.85437 11 6.48107M9.63069 8.48999C9.13862 8.21724 8.58343 8.06378 7.99592 8.06378C7.41137 8.06378 6.85881 8.2157 6.36858 8.48589" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M8 10.74H8.00476" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                        <span>WIFI</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-gray-600" />
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-xl font-bold text-gray-900">$282</span>
                  </div>

                  <div>
                    <p className="text-sm text-gray-900 mb-1">Breakfast included</p>
                    <p className="text-sm text-red-500">Only 4 rooms left</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <Select defaultValue="0">
                      <SelectTrigger className="w-20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="bg-[#007DD0] hover:bg-[#006BB8] text-white px-6 py-2 rounded-full">
                      Reserve
                    </Button>
                  </div>
                </div>
                <div className="border-b border-[#007DD05C] mt-4"></div>
              </CardContent>
            </Card>

            {/* Deluxe Double Room 2 - Mobile */}
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[#007DD0] font-medium text-lg mb-2">Deluxe Double Room</h3>
                    <div className="flex items-center space-x-2 mb-3">
                     
                      <span className="text-sm text-gray-600">2 single beds</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M16 11.865H1" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M16 11.865H1" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#141B34" strokeWidth="1.125" strokeLinecap="round"/>
</svg>

                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
  <path d="M2.25 16.24V5.73999C2.25 3.61867 2.25 2.55801 2.90901 1.899C3.56802 1.23999 4.62868 1.23999 6.75 1.23999H8.25C10.3713 1.23999 11.432 1.23999 12.091 1.899C12.75 2.55801 12.75 3.61867 12.75 5.73999V16.24H2.25Z" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.5 7.98999V4.98999C4.5 3.74899 4.759 3.48999 6 3.48999H9C10.241 3.48999 10.5 3.74899 10.5 4.98999V7.98999C10.5 9.23099 10.241 9.48999 9 9.48999H6C4.759 9.48999 4.5 9.23099 4.5 7.98999Z" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M0.75 16.24H14.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.5 3.48999V9.48999M10.5 6.48999L4.5 6.48999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.506 12.49L4.49927 12.49" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                        <span>Room</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <path d="M3.25 15.74H2.875V16.115H3.25V15.74ZM7.26517 12.2552C7.41161 12.1087 7.41161 11.8713 7.26517 11.7248C7.11872 11.5784 6.88128 11.5784 6.73483 11.7248L7.26517 12.2552ZM3.25 11.24H2.875V15.74H3.25H3.625V11.24H3.25ZM3.25 15.74V16.115H7.75V15.74V15.365H3.25V15.74ZM3.25 15.74L3.51516 16.0052L7.26517 12.2552L7 11.99L6.73483 11.7248L2.98484 15.4748L3.25 15.74Z" fill="#626262"/>
  <path d="M15.25 3.73999H15.625V3.36499H15.25V3.73999ZM11.2348 7.22483C11.0884 7.37127 11.0884 7.60871 11.2348 7.75516C11.3813 7.9016 11.6187 7.9016 11.7652 7.75516L11.2348 7.22483ZM15.25 8.23999H15.625V3.73999H15.25H14.875V8.23999H15.25ZM15.25 3.73999V3.36499H10.75V3.73999V4.11499H15.25V3.73999ZM15.25 3.73999L14.9848 3.47483L11.2348 7.22483L11.5 7.48999L11.7652 7.75516L15.5152 4.00516L15.25 3.73999Z" fill="#626262"/>
</svg>

                        <span>1200 sqft</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M1 3.19607C3.625 5.76984 7.43162 4.6668 8.29933 3.19607C8.42695 2.97975 8.5 2.7286 8.5 2.46071C8.5 1.64846 7.82843 0.98999 7 0.98999C6.17157 0.98999 5.5 1.64846 5.5 2.46071" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M12.25 5.43609C12.25 4.22322 13.0895 3.23999 14.125 3.23999C15.1605 3.23999 16 4.22322 16 5.43609C16 5.97389 15.835 6.46653 15.561 6.84833C14.0097 9.38363 6.4573 8.42728 2.5 7.6322" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M9.31403 13.6555C9.46847 14.1417 9.88518 14.49 10.375 14.49C10.9963 14.49 11.5 13.9296 11.5 13.2382C11.5 13.0032 11.4418 12.7833 11.3405 12.5953C10.3749 10.7343 5.49997 9.48292 1 12.821" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M13.75 10.365H15.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                        <span>Air condition</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
  <path d="M3.75 11.74L3.125 12.365M11.25 11.74L11.875 12.365" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M1.875 6.73999V7.36499C1.875 9.42738 1.875 10.4586 2.5157 11.0993C3.15641 11.74 4.18761 11.74 6.25 11.74H8.75C10.8124 11.74 11.8436 11.74 12.4843 11.0993C13.125 10.4586 13.125 9.42738 13.125 7.36499V6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.25 6.73999L13.75 6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round"/>
  <path d="M2.5 6.73999V2.69212C2.5 1.82109 3.2061 1.11499 4.07713 1.11499C4.77604 1.11499 5.39159 1.57498 5.58962 2.24524L5.625 2.36499" stroke="#626262" strokeWidth="0.75" strokeLinecap="round"/>
  <path d="M5 2.98999L6.5625 1.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
</svg>

                        <span>Bathroom</span>
                      </div>
                      <div className="flex items-center space-x-1">
                       <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <path d="M1.375 7.98999C1.375 10.1113 1.375 11.172 2.03401 11.831C2.69302 12.49 3.75368 12.49 5.875 12.49H11.125C13.2463 12.49 14.307 12.49 14.966 11.831C15.625 11.172 15.625 10.1113 15.625 7.98999V5.73999C15.625 3.61867 15.625 2.55801 14.966 1.899C14.307 1.23999 13.2463 1.23999 11.125 1.23999H5.875C3.75368 1.23999 2.69302 1.23999 2.03401 1.899C1.375 2.55801 1.375 3.61867 1.375 5.73999V7.98999Z" stroke="#626262" strokeWidth="1.125"/>
  <path d="M7.9375 16.24C7.9375 16.5507 8.18934 16.8025 8.5 16.8025C8.81066 16.8025 9.0625 16.5507 9.0625 16.24L7.9375 16.24ZM8.5 12.49L7.9375 12.49L7.9375 16.24L8.5 16.24L9.0625 16.24L9.0625 12.49L8.5 12.49Z" fill="#626262"/>
  <path d="M4.75 16.24L8.50005 13.99L12.25 16.24" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                        <span>TV</span>
                      </div>
                      <div className="flex items-center space-x-1">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M0.875 7.73999C0.875 4.38123 0.875 2.70185 1.91843 1.65842C2.96186 0.61499 4.64124 0.61499 8 0.61499C11.3588 0.61499 13.0381 0.61499 14.0816 1.65842C15.125 2.70185 15.125 4.38123 15.125 7.73999C15.125 11.0987 15.125 12.7781 14.0816 13.8216C13.0381 14.865 11.3588 14.865 8 14.865C4.64124 14.865 2.96186 14.865 1.91843 13.8216C0.875 12.7781 0.875 11.0987 0.875 7.73999Z" stroke="#626262" strokeWidth="1.125"/>
  <path d="M5 6.47516C5.86163 5.85208 6.89065 5.48999 7.99592 5.48999C9.10468 5.48999 10.1367 5.85437 11 6.48107M9.63069 8.48999C9.13862 8.21724 8.58343 8.06378 7.99592 8.06378C7.41137 8.06378 6.85881 8.2157 6.36858 8.48589" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
  <path d="M8 10.74H8.00476" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                        <span>WIFI</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-gray-600" />
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-xl font-bold text-gray-900">$282</span>
                  </div>

                  <div>
                    <p className="text-sm text-gray-900 mb-1">Breakfast included</p>
                    <p className="text-sm text-red-500">Only 4 rooms left</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <Select defaultValue="0">
                      <SelectTrigger className="w-20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="bg-[#007DD0] hover:bg-[#006BB8] text-white px-6 py-2 rounded-full">
                      Reserve
                    </Button>
                  </div>
                </div>
                <div className="border-b border-[#007DD05C] mt-4"></div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* About this property */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About this property</h2>
          <p className="text-gray-600 leading-relaxed">
            The Executive Suite at El Aurassi Hotel in Algiers offers a luxurious and spacious experience tailored for
            both business and leisure travelers. With its modern design and panoramic views of the Mediterranean Sea,
            the suite combines comfort, elegance, and functionality.
          </p>
        </div>
      </div>
    </section>
  )
}
