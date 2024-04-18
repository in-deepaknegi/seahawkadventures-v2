import K1 from "@/public/images/kayak/k02.jpg";
import K2 from "@/public/images/kayak/k05.jpg";

import S1 from "@/public/images/svg/globe.svg";
import S2 from "@/public/images/svg/sign.svg";
import S3 from '@/public/images/svg/map.svg';
import S4 from '@/public/images/svg/stopwatch.svg';
import S5 from '@/public/images/svg/user.svg';

const kayak = [
    {
        slug: 'beginners-kayak-course',
        title: "Beginner's Kayak Course",
        imageUrl: "url('/images/kayak/k02.jpg')",
        image: K1,
        rate: 15000,
        href: "#",

        description: "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",

        svg: S1,
        class: "bg-[#f4f1ec]",
        sub: [
            {
                name: "Location : Rishikesh, Uttarakhand",
                img: S3,
            },
            {
                name: "Duration : 4 Days",
                img: S4,
            },
            {
                name: "Group Size : 1 - 5 (Age: 14 - 55)",
                img: S5,
            },
        ]
    },
    {
        slug: 'intermediate-course',
        title: "Intermediate Kayak Course",
        imageUrl: "url('/images/kayak/k05.jpg')",
        image: K2,
        rate: 30000,
        href: "#",

        description: "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",

        svg: S2,
        class: "bg-[#f0f4ed]",
        sub: [
            {
                name: "Location : Rishikesh, Uttarakhand",
                img: S3,
            },
            {
                name: "Duration : 8 Days",
                img: S4,
            },
            {
                name: "Group Size : 1 - 5 (Age: 14 - 55)",
                img: S5,
            },
        ]
    },

]

export default kayak;