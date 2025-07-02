"use client"

import { Clock, CreditCard, Users, Shield, PawPrint, Banknote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function PoliciesSection() {
  const policies = [
    {
      id: "checkin",
      title: "Check-in",
      icon: Clock,
      availability: "Available 24 hours",
      description:
        "Guests are required to show a photo identification and credit card upon check-in. You'll need to let the property know in advance what time you'll arrive.",
    },
    {
      id: "checkout",
      title: "Check-out",
      icon: Clock,
      availability: "Available 24 hours",
      description: null,
    },
    {
      id: "cancellation",
      title: "Cancellation/ prepayment",
      icon: CreditCard,
      availability: null,
      description:
        "Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.",
    },
    {
      id: "children",
      title: "Children and beds",
      icon: Users,
      availability: null,
      description: null,
      details: [
        {
          subtitle: "Child policies",
          content: [
            "Children of any age are welcome.",
            "Children 12 years and above will be charged as adults at this property.",
            "To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.",
          ],
        },
        {
          subtitle: "Cot and extra bed policies",
          content: [
            "The number of extra beds allowed is dependent on the option you choose. Please check your selected option for more information.",
            "There are no cots available at this property.",
            "All extra beds are subject to availability.",
          ],
        },
      ],
    },
    {
      id: "age",
      title: "No age restriction",
      icon: Shield,
      availability: null,
      description: "There is no age requirement for check-in",
    },
    {
      id: "pets",
      title: "Pets",
      icon: PawPrint,
      availability: null,
      description: "Pets are not allowed.",
    },
    {
      id: "payment",
      title: "Cash only",
      icon: Banknote,
      availability: null,
      description: "This property only accepts cash payments.",
    },
  ]

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <Card className="border border-gray-200  bg-white">
          <CardContent className="p-0">
            {/* Header */}
            <div className="px-6 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">Policies</h2>
            </div>

            {/* Policies List */}
            <div className="divide-y divide-gray-100">
              {policies.map((policy) => {
                
                return (
                  <div
                    key={policy.id}
                    className="mx-6 py-6 hover:bg-gray-50/50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Left Column - Title with Icon */}
                      <div className="lg:col-span-1">
                        <div className="flex items-start space-x-3">
                          
                          <h3 className="text-2xl font-semibold text-gray-900 leading-tight">{policy.title}</h3>
                        </div>
                      </div>

                      {/* Right Column - Content */}
                      <div className="lg:col-span-2">
                        <div className="space-y-2">
                          {/* Availability Badge */}
                          {policy.availability && (
                            <div className="inline-flex items-center rounded-full text-base font-medium  text-[#000] ">
                              {policy.availability}
                            </div>
                          )}

                          {/* Main Description */}
                          {policy.description && <p className="text-gray-600 text-base leading-relaxed">{policy.description}</p>}

                          {/* Detailed Policies (for Children and beds) */}
                          {policy.details && (
                            <div className="space-y-4">
                              {policy.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="space-y-2">
                                  <h4 className="font-semibold text-[#000]">{detail.subtitle}</h4>
                                  <div className="space-y-1">
                                    {detail.content.map((item, itemIndex) => (
                                      <p key={itemIndex} className="text-gray-600 text-base leading-relaxed">
                                        {item}
                                      </p>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
