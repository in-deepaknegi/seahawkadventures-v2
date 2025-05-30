import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CldImageComponent from "@/components/cld-image";
import { feedback as data } from "@/config/feedback";
import CldVideoComponent from "@/components/cld-video";

export default function TestimonialsPage() {
    return (
        <main className="-mt-[5rem]">
            {/* Hero Section */}
            <section className="relative h-[400px] overflow-hidden">
                <CldImageComponent
                    src="https://res.cloudinary.com/dr8gbqqid/image/upload/v1744621270/water-rafting-T0101_wbaw4q.jpg"
                    alt="Customer Testimonials"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                        Customer Testimonials
                    </h1>
                    <p className="max-w-3xl text-xl">
                        Hear from those who have experienced the thrill with Sea
                        Hawk Adventure
                    </p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {data.map((testimonial, index) => (
                            <Card key={index} className="h-full shadow-md">
                                <CardContent className="flex h-full flex-col p-6">
                                    <div className="mb-4 flex items-center gap-4">
                                        <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 bg-gradient-to-br from-blue-500 to-violet-600 text-2xl font-medium text-white">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">
                                                {testimonial.name}
                                            </h4>
                                            <div className="mt-1 flex">
                                                {Array.from({
                                                    length: 5,
                                                }).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-4 w-4 ${
                                                            i <
                                                            testimonial.stars
                                                                ? "fill-yellow-400 text-yellow-400"
                                                                : "text-gray-300"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mb-4 flex-grow leading-relaxed text-gray-700">
                                        {testimonial.comment}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Testimonials */}
            <section className="bg-blue-50 py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-blue-800">
                            Video Testimonials
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-blue-600">
                            Watch our customers share their adventure
                            experiences
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {[1, 2].map((index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-lg bg-white shadow-md"
                            >
                                <div className="relative aspect-video">
                                    {/* <Image
                                            src={`/placeholder.svg?height=400&width=600&text=Video Testimonial ${index}`}
                                            alt={`Video Testimonial ${index}`}
                                            fill
                                            className="object-cover"
                                        /> */}
                                    <video
                                        src="https://res.cloudinary.com/dr8gbqqid/video/upload/v1744878287/VN20250326_143840_1.mp4"
                                        className="object-cover h-[40rem] w-full"
                                        height={1080}
                                        width={680}
                                        autoPlay
                                        muted
                                        loop
                                    />

                                    {/* <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="white"
                                                    className="h-8 w-8"
                                                >
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold">{`${
                                        index === 1
                                            ? "Family Rafting Experience"
                                            : "Group Expedition Adventure"
                                    }`}</h3>
                                    <p className="text-gray-700">
                                        {index === 1
                                            ? "The Singh family shares their experience of rafting with Sea Hawk Adventure."
                                            : "Hear from a group of friends who embarked on our Himalayan expedition."}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Submit Your Testimonial */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md">
                        <div className="mb-8 text-center">
                            <h2 className="mb-2 text-2xl font-bold text-blue-800">
                                Share Your Experience
                            </h2>
                            <p className="text-gray-600">
                                Had an adventure with us? We&apos;d love to hear
                                about your experience!
                            </p>
                        </div>

                        <form className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        id="name"
                                        className="w-full rounded-md border p-2"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full rounded-md border p-2"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="location"
                                        className="text-sm font-medium"
                                    >
                                        Location
                                    </label>
                                    <input
                                        id="location"
                                        className="w-full rounded-md border p-2"
                                        placeholder="City, Country"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="adventure"
                                        className="text-sm font-medium"
                                    >
                                        Adventure Type
                                    </label>
                                    <select
                                        id="adventure"
                                        className="w-full rounded-md border p-2"
                                        required
                                    >
                                        <option value="">
                                            Select an adventure
                                        </option>
                                        <option value="beginner-rafting">
                                            Beginner&apos;s Rafting Adventure
                                        </option>
                                        <option value="intermediate-rafting">
                                            Intermediate Rafting Challenge
                                        </option>
                                        <option value="advanced-rafting">
                                            Advanced Rafting Expedition
                                        </option>
                                        <option value="kayaking-basics">
                                            Kayaking Basics
                                        </option>
                                        <option value="river-kayaking">
                                            River Kayaking Tour
                                        </option>
                                        <option value="advanced-kayaking">
                                            Advanced Kayaking
                                        </option>
                                        <option value="day-trek">
                                            Himalayan Day Trek
                                        </option>
                                        <option value="overnight-camping">
                                            Overnight Camping Adventure
                                        </option>
                                        <option value="multi-day-expedition">
                                            Multi-Day Himalayan Expedition
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="rating"
                                    className="text-sm font-medium"
                                >
                                    Rating
                                </label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <label
                                            key={star}
                                            className="cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="rating"
                                                value={star}
                                                className="sr-only"
                                            />
                                            <Star className="h-8 w-8 text-gray-300 peer-checked:fill-yellow-400 peer-checked:text-yellow-400 hover:text-yellow-400" />
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="testimonial"
                                    className="text-sm font-medium"
                                >
                                    Your Testimonial
                                </label>
                                <textarea
                                    id="testimonial"
                                    className="w-full rounded-md border p-2"
                                    rows={5}
                                    placeholder="Share your experience with us..."
                                    required
                                ></textarea>
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="photo"
                                    className="text-sm font-medium"
                                >
                                    Upload a Photo (Optional)
                                </label>
                                <input
                                    type="file"
                                    id="photo"
                                    className="w-full rounded-md border p-2"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                            >
                                Submit Testimonial
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
