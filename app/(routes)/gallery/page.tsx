// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { X } from "lucide-react";
// import Navbar from "@/components/routes/shared/navbar";
// import Footer from "@/components/routes/shared/footer";
// import { MasonryGrid, MasonryItem, Item } from "@/components/motion/masonary";

// const galleryImages = [
//     {
//         src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3100.jpg",
//         alt: "Rafting through rapids",
//         category: "rafting",
//     },
//     {
//         src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3101.jpg",
//         alt: "Kayaking in calm waters",
//         category: "kayaking",
//     },
//     {
//         src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
//         alt: "Expedition team at campsite",
//         category: "expedition",
//     },
//     {
//         src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3103.jpg",
//         alt: "Group rafting adventure",
//         category: "rafting",
//     },
//     {
//         src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3104.jpg",
//         alt: "Kayaking instruction session",
//         category: "kayaking",
//     },
//     {
//         src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3105.jpg",
//         alt: "Trekking through mountain trails",
//         category: "expedition",
//     },
//     {
//         src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3106.jpg",
//         alt: "White water rafting excitement",
//         category: "rafting",
//     },
//     {
//         src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3107.jpg",
//         alt: "Kayaking through gentle rapids",
//         category: "kayaking",
//     },
//     {
//         src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3108.jpg",
//         alt: "Camping under the stars",
//         category: "expedition",
//     },
//     {
//         src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3109.jpg",
//         alt: "River crossing adventure",
//         category: "expedition",
//     },
//     {
//         src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3110.jpg",
//         alt: "Professional rafting team",
//         category: "rafting",
//     },
//     {
//         src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3111.jpg",
//         alt: "Kayaking training session",
//         category: "kayaking",
//     },
//     {
//         src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3112.jpg",
//         alt: "Mountain view from campsite",
//         category: "expedition",
//     },
//     {
//         src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3113.jpg",
//         alt: "Rafting safety demonstration",
//         category: "rafting",
//     },
//     {
//         src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3114.jpg",
//         alt: "Kayaking equipment preparation",
//         category: "kayaking",
//     },
// ];

// export default function GalleryPage() {
//     const [selectedImage, setSelectedImage] = useState<string | null>(null);
//     const [filter, setFilter] = useState<string | null>(null);
//     const [selected, setSelected] = useState<Item | null>(null);

//     // Convert to items format with IDs
//     const items = galleryImages.map((url, index) => ({
//         id: index + 1,
//         url: url.src,
//         title: url.alt,
//     }));

//     const filteredImages = filter
//         ? galleryImages.filter((img) => img.category === filter)
//         : galleryImages;

//     return (
//         <div className="min-h-screen bg-white">
//             <Navbar />
//             <main>
//                 {/* Hero Section */}
//                 <section className="relative h-[400px] overflow-hidden">
//                     <Image
//                         src="https://res.cloudinary.com/dkuixrz40/image/upload/v1735479492/water-rafting-T0100.jpg"
//                         alt="Adventure Gallery"
//                         fill
//                         className="object-cover"
//                         priority
//                     />
//                     <div className="absolute inset-0 bg-black/40" />
//                     <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
//                         <h1 className="mb-4 text-4xl font-bold md:text-5xl">
//                             Adventure Gallery
//                         </h1>
//                         <p className="max-w-3xl text-xl">
//                             Glimpses of the thrilling experiences that await you
//                         </p>
//                     </div>
//                 </section>

//                 <div className="mx-auto max-w-7xl py-16">
//                     <MasonryGrid>
//                         {items.map((item) => (
//                             <MasonryItem
//                                 key={item.id}
//                                 item={item}
//                                 index={item.id}
//                                 setSelected={setSelected}
//                             />
//                         ))}
//                     </MasonryGrid>
//                 </div>

//                 {/* Gallery Section */}
//                 <section className="py-16">
//                     <div className="mx-auto max-w-7xl">
//                         <div className="mb-8 flex justify-center">
//                             <div className="flex flex-wrap gap-2 rounded-lg bg-white p-1 shadow-sm">
//                                 <button
//                                     onClick={() => setFilter(null)}
//                                     className={`rounded-md px-4 py-2 transition ${
//                                         filter === null
//                                             ? "bg-blue-600 text-white"
//                                             : "hover:bg-blue-100"
//                                     }`}
//                                 >
//                                     All Adventures
//                                 </button>
//                                 <button
//                                     onClick={() => setFilter("rafting")}
//                                     className={`rounded-md px-4 py-2 transition ${
//                                         filter === "rafting"
//                                             ? "bg-blue-600 text-white"
//                                             : "hover:bg-blue-100"
//                                     }`}
//                                 >
//                                     Rafting
//                                 </button>
//                                 <button
//                                     onClick={() => setFilter("kayaking")}
//                                     className={`rounded-md px-4 py-2 transition ${
//                                         filter === "kayaking"
//                                             ? "bg-blue-600 text-white"
//                                             : "hover:bg-blue-100"
//                                     }`}
//                                 >
//                                     Kayaking
//                                 </button>
//                                 <button
//                                     onClick={() => setFilter("expedition")}
//                                     className={`rounded-md px-4 py-2 transition ${
//                                         filter === "expedition"
//                                             ? "bg-blue-600 text-white"
//                                             : "hover:bg-blue-100"
//                                     }`}
//                                 >
//                                     Expedition
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
//                             {filteredImages.map((image, index) => (
//                                 <div
//                                     key={index}
//                                     className="relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md transition hover:opacity-90"
//                                     onClick={() => setSelectedImage(image.src)}
//                                 >
//                                     <Image
//                                         src={image.src || "/placeholder.svg"}
//                                         alt={image.alt}
//                                         fill
//                                         className="object-cover"
//                                     />
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Lightbox */}
//                         {selectedImage && (
//                             <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
//                                 <button
//                                     className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white"
//                                     onClick={() => setSelectedImage(null)}
//                                 >
//                                     <X className="h-6 w-6" />
//                                 </button>
//                                 <div className="relative h-[80vh] w-full max-w-4xl">
//                                     <Image
//                                         src={
//                                             selectedImage || "/placeholder.svg"
//                                         }
//                                         alt="Gallery image"
//                                         fill
//                                         className="object-contain"
//                                     />
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </section>
//                 {/* Video Gallery */}
//                 <section className="bg-blue-50 py-16">
//                     <div className="mx-auto max-w-7xl">
//                         <div className="mb-12 text-center">
//                             <h2 className="mb-4 text-3xl font-bold text-blue-800">
//                                 Adventure Videos
//                             </h2>
//                             <p className="mx-auto max-w-3xl text-lg text-blue-600">
//                                 Watch our thrilling adventures in action
//                             </p>
//                         </div>

//                         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                             {[1, 2, 3].map((index) => (
//                                 <div
//                                     key={index}
//                                     className="overflow-hidden rounded-lg bg-white shadow-md"
//                                 >
//                                     <div className="relative aspect-video">
//                                         <Image
//                                             src={`/placeholder.svg?height=400&width=600&text=Video ${index}`}
//                                             alt={`Adventure Video ${index}`}
//                                             fill
//                                             className="object-cover"
//                                         />
//                                         <div className="absolute inset-0 flex items-center justify-center">
//                                             <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30">
//                                                 <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600">
//                                                     <svg
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                         viewBox="0 0 24 24"
//                                                         fill="white"
//                                                         className="h-8 w-8"
//                                                     >
//                                                         <path d="M8 5v14l11-7z" />
//                                                     </svg>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="p-4">
//                                         <h3 className="text-lg font-bold">{`Thrilling ${
//                                             index === 1
//                                                 ? "Rafting"
//                                                 : index === 2
//                                                   ? "Kayaking"
//                                                   : "Expedition"
//                                         } Adventure`}</h3>
//                                         <p className="text-gray-700">
//                                             Experience the excitement of our{" "}
//                                             {index === 1
//                                                 ? "rafting"
//                                                 : index === 2
//                                                   ? "kayaking"
//                                                   : "expedition"}{" "}
//                                             adventures through this
//                                             action-packed video.
//                                         </p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//             </main>
//             <Footer />
//         </div>
//     );
// }


https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3100.jpg

"use client"
// app/gallery/page.jsx
import { CldImage } from "next-cloudinary";


export default async function Gallery() {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`, {
        headers: {
            Authorization: `Basic ${Buffer.from(process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
        }
    });
    const { resources } = await response.json();

    console.log(resources);
    

    return (
        <div className="grid grid-cols-3 gap-4">
            {resources.map((image: { public_id: string }) => (
                <CldImage
                    key={image.public_id}
                    src={image.public_id}
                    width={400}
                    height={300}
                    alt={image.public_id}
                    className="h-64 w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            ))}
        </div>
    );
}
