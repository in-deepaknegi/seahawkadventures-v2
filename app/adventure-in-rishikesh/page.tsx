import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Filter } from "lucide-react"

export default function Packages() {
  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center">
          <Image
            src="/placeholder.svg?height=700&width=1920&text=Adventure+Packages"
            alt="Adventure Packages"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <h5 className="text-white/80 mb-3 tracking-wide">EXPLORE OUR OFFERINGS</h5>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Adventure Packages</h1>
              <p className="text-white/90 text-lg mb-8 max-w-md">
                Discover our range of thrilling adventures tailored to every experience level
              </p>
            </div>
          </div>
        </section>

        {/* Packages Filter */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <Filter className="h-5 w-5 text-gray-500" />
                <h3 className="text-xl font-bold">Filter Packages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="rounded-full">
                  All Packages
                </Button>
                <Button variant="outline" className="rounded-full">
                  Rafting
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full bg-primary text-white border-primary hover:bg-primary/90"
                >
                  Kayaking
                </Button>
                <Button variant="outline" className="rounded-full">
                  Trekking
                </Button>
                <Button variant="outline" className="rounded-full">
                  Camping
                </Button>
                <Button variant="outline" className="rounded-full">
                  Expeditions
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500">Sort by:</span>
                <select className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option>Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Duration</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Rafting Packages */}
        <section className="py-16">
          <div className="container">
            <div className="mb-12">
              <h5 className="text-primary mb-3">WHITE WATER THRILLS</h5>
              <h2 className="text-4xl font-bold mb-6">Rafting Packages</h2>
              <p className="text-gray-600 max-w-3xl">
                Experience the thrill of navigating through the rapids of the Ganges with our range of rafting packages
                suitable for beginners to experienced adventurers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "12 Km Rafting",
                  description: "Suitable for beginners, includes 8 rapids of grade I-II",
                  image: "/placeholder.svg?height=300&width=500&text=12+Km+Rafting",
                  features: ["2 hours", "8 rapids", "Grade I-II", "Safety equipment provided"],
                  price: "₹999",
                  slug: "12-km-rafting",
                },
                {
                  title: "16 Km Rafting",
                  description: "Perfect for adventure seekers, includes 12 rapids of grade II-III",
                  image: "/placeholder.svg?height=300&width=500&text=16+Km+Rafting",
                  features: ["3 hours", "12 rapids", "Grade II-III", "Lunch included"],
                  price: "₹1,499",
                  featured: true,
                  slug: "16-km-rafting",
                },
                {
                  title: "26 Km Rafting",
                  description: "Our most comprehensive rafting experience with grade III-IV rapids",
                  image: "/placeholder.svg?height=300&width=500&text=26+Km+Rafting",
                  features: ["5 hours", "16 rapids", "Grade III-IV", "Meals & photos included"],
                  price: "₹2,499",
                  slug: "26-km-rafting",
                },
              ].map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl overflow-hidden transition-all hover:shadow-xl ${
                    pkg.featured ? "ring-2 ring-primary shadow-lg" : "border"
                  }`}
                >
                  <div className="relative">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    {pkg.featured && (
                      <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{pkg.title}</h3>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <Check className="h-5 w-5 mr-3 text-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold">₹{pkg.price}</p>
                      <Link href={`/packages/river-rafting/${pkg.slug}`}>
                        <Button className="bg-black hover:bg-black/80 rounded-full px-6">View Details</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kayaking Packages */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="mb-12">
              <h5 className="text-primary mb-3">PADDLE ADVENTURES</h5>
              <h2 className="text-4xl font-bold mb-6">Kayaking Packages</h2>
              <p className="text-gray-600 max-w-3xl">
                Master the art of kayaking with our specialized packages designed for all skill levels, from beginners
                to advanced paddlers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Kayak Basics",
                  description: "Learn the fundamentals of kayaking in calm waters",
                  image: "/placeholder.svg?height=300&width=500&text=Kayak+Basics",
                  features: ["2 hours", "Calm waters", "All equipment", "Certified instructors"],
                  price: "₹1,499",
                  slug: "kayak-basics",
                },
                {
                  title: "River Kayaking",
                  description: "Navigate through gentle river currents with guidance",
                  image: "/placeholder.svg?height=300&width=500&text=River+Kayaking",
                  features: ["3 hours", "Gentle rapids", "Safety gear", "Photos included"],
                  price: "₹2,499",
                  featured: true,
                  slug: "river-kayaking",
                },
                {
                  title: "Advanced Kayaking",
                  description: "Master technical maneuvers in challenging waters",
                  image: "/placeholder.svg?height=300&width=500&text=Advanced+Kayaking",
                  features: ["5 hours", "Technical training", "Grade II-III", "Lunch included"],
                  price: "₹3,999",
                  slug: "advanced-kayaking",
                },
              ].map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl overflow-hidden transition-all hover:shadow-xl ${
                    pkg.featured ? "ring-2 ring-primary shadow-lg" : "border"
                  }`}
                >
                  <div className="relative">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    {pkg.featured && (
                      <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{pkg.title}</h3>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <Check className="h-5 w-5 mr-3 text-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold">₹{pkg.price}</p>
                      <Link href={`/packages/kayaking/${pkg.slug}`}>
                        <Button className="bg-black hover:bg-black/80 rounded-full px-6">View Details</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expedition Packages */}
        <section className="py-16">
          <div className="container">
            <div className="mb-12">
              <h5 className="text-primary mb-3">MULTI-DAY ADVENTURES</h5>
              <h2 className="text-4xl font-bold mb-6">Expedition Packages</h2>
              <p className="text-gray-600 max-w-3xl">
                Embark on multi-day adventures that combine rafting, trekking, and camping for an immersive experience
                in the Himalayan wilderness.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Day Trek",
                  description: "Explore scenic trails around Rishikesh with expert guides",
                  image: "/placeholder.svg?height=300&width=500&text=Day+Trek",
                  features: ["6 hours", "Moderate difficulty", "Lunch included", "Transport provided"],
                  price: "₹1,999",
                  slug: "day-trek",
                },
                {
                  title: "Overnight Camping",
                  description: "Camp under the stars by the riverside with bonfire and activities",
                  image: "/placeholder.svg?height=300&width=500&text=Overnight+Camping",
                  features: ["24 hours", "All meals", "Camping gear", "Evening activities"],
                  price: "₹3,499",
                  featured: true,
                  slug: "overnight-camping",
                },
                {
                  title: "Multi-Day Expedition",
                  description: "Complete adventure package with rafting, trekking and camping",
                  image: "/placeholder.svg?height=300&width=500&text=Multi-Day+Expedition",
                  features: ["3 days", "Multiple activities", "All inclusive", "Photography"],
                  price: "₹8,999",
                  slug: "multi-day-expedition",
                },
              ].map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl overflow-hidden transition-all hover:shadow-xl ${
                    pkg.featured ? "ring-2 ring-primary shadow-lg" : "border"
                  }`}
                >
                  <div className="relative">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    {pkg.featured && (
                      <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{pkg.title}</h3>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <Check className="h-5 w-5 mr-3 text-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold">₹{pkg.price}</p>
                      <Link href={`/packages/expedition/${pkg.slug}`}>
                        <Button className="bg-black hover:bg-black/80 rounded-full px-6">View Details</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h5 className="text-primary mb-3">LIMITED TIME</h5>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Special Offers</h2>
              <p className="text-gray-300">Take advantage of our seasonal discounts and special package deals</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3">Monsoon Special</h3>
                  <p className="text-gray-300 mb-6">
                    Experience the thrill of rafting during monsoon season with our special package that includes
                    accommodation and meals.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 line-through">₹5,999</p>
                      <p className="text-2xl font-bold text-white">₹4,499</p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 rounded-full px-6">Book Now</Button>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3">Group Discount</h3>
                  <p className="text-gray-300 mb-6">
                    Book for a group of 5 or more and get 15% off on any of our adventure packages. Perfect for friends
                    and family outings.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-bold text-white">15% OFF</p>
                      <p className="text-gray-400">for groups of 5+</p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 rounded-full px-6">Book Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h5 className="text-primary mb-3">FREQUENTLY ASKED</h5>
              <h2 className="text-4xl font-bold mb-6">Common Questions</h2>
              <p className="text-gray-600">
                Find answers to our most frequently asked questions about our adventure packages
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "What should I bring for a rafting trip?",
                  answer:
                    "We recommend bringing a change of clothes, water shoes or sandals with straps, sunscreen, and a waterproof bag for your valuables. We provide all necessary safety equipment including life jackets and helmets.",
                },
                {
                  question: "Do I need prior experience for rafting?",
                  answer:
                    "No prior experience is needed for our beginner and intermediate rafting trips. Our expert guides will provide a comprehensive safety briefing and instructions before the trip.",
                },
                {
                  question: "What is your cancellation policy?",
                  answer:
                    "We offer full refunds for cancellations made at least 48 hours before the scheduled trip. For cancellations within 48 hours, we offer a 50% refund or the option to reschedule.",
                },
                {
                  question: "Is rafting safe for children?",
                  answer:
                    "We offer family-friendly rafting trips suitable for children aged 12 and above. For younger children, we recommend our calmer water activities with additional safety measures.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-5">Ready for Your Next Adventure?</h2>
              <p className="text-white/90 mb-8">Book your next thrilling experience with Sea Hawk Adventure today!</p>
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-5 text-base">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
