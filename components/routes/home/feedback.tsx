import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { feedback as data } from "@/config/feedback";
import { ChevronRight, Star } from "lucide-react";
import Link from "next/link";
const firstRow = data.slice(0, data.length / 2);

const ReviewCard = ({
    name,
    username,
    comment,
    stars,
    index,
}: {
    name: string;
    username: string;
    comment: string;
    stars: number;
    index: number;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-[220px] cursor-pointer overflow-hidden rounded-xl border p-4 md:w-[350px] xl:p-6",
                "border-gray-950/[.1] bg-yellow-50",
            )}
        >
            <div className="flex items-start gap-4">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <div
                            className={`flex size-10 items-center justify-center rounded-full bg-gradient-to-br text-2xl text-white ${index % 2 === 0 ? "from-blue-400 to-violet-600" : "from-green-500 to-yellow-400"}`}
                        >
                            {name.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                            <figcaption className="font-medium text-gray-900">
                                {name}
                            </figcaption>
                            <span className="text-sm text-gray-500">
                                {username}
                            </span>
                        </div>
                    </div>
                    {comment ? (
                        <>
                            <div className="mt-5 flex items-center gap-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-3 w-3 ${i < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                    />
                                ))}
                            </div>
                            <p className="mt-2 line-clamp-2 text-sm text-gray-700 md:line-clamp-3">
                                {comment}
                            </p>
                        </>
                    ) : (
                        <div className="mt-5 flex items-center gap-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-5 w-5 ${i < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </figure>
    );
};

export default function Feedback() {
    return (
        <>
            <section
                id="testimonials"
                className="bg-gray-900 py-20 text-white md:py-24"
            >
                <div className="mx-auto w-full max-w-full px-0">
                    <div className="mx-auto mb-14 max-w-3xl px-4 text-center md:px-0">
                        <div className="text-sm uppercase">feedbacks</div>
                        <h2 className="mb-4 text-4xl font-normal md:text-4xl xl:text-5xl">
                            What Our Adventurers Say
                        </h2>
                        <p className="text-gray-300">
                            Hear from those who&apos;ve experienced our adventures
                            firsthand
                        </p>
                    </div>

                    <Marquee pauseOnHover className="[--duration:120s]">
                        {firstRow.map((review, i) => (
                            <ReviewCard
                                key={`${review.username}-${i}`}
                                {...review}
                                index={i}
                            />
                        ))}
                    </Marquee>
                    {/* <Marquee reverse pauseOnHover className="[--duration:120s]">
                        {secondRow.map((review, i) => (
                            <ReviewCard
                                key={`${review.username}-${i}`}
                                {...review}
                                index={i}
                            />
                        ))}
                    </Marquee> */}

                    <div className="mt-10 text-center">
                        <Link
                            href="/feedback"
                            className="flex items-center justify-center gap-2 text-white"
                        >
                            View All Testimonials
                            <ChevronRight className="size-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
