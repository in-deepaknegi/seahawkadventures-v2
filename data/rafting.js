import R1 from '@/components/routes/rafting/R1';
import R2 from '@/components/routes/rafting/R2';
import R3 from '@/components/routes/rafting/R3';

import I1 from '@/public/images/rafting/r06.jpg';


const rafting = [
    {
        slug: "12-km-rafting",
        title: "12 Km Rafting in Rishikesh",
        description: "Embark on unforgettable hiking, rafting, and kayaking adventures in the stunning landscapes of Uttarakhand, surrounded by the majestic beauty of the Himalayas, and along the pristine Ganges River, where every bend brings new thrills and breathtaking views.",
        image: "url('/images/rafting/r06.jpg')",
        img: I1,
        content: <R1 />
    },
    {
        slug: "16-km-rafting",
        title: "16 Km Rafting in Rishikesh",
        description: "Embark on unforgettable hiking, rafting, and kayaking adventures in the stunning landscapes of Uttarakhand, surrounded by the majestic beauty of the Himalayas, and along the pristine Ganges River, where every bend brings new thrills and breathtaking views.",
        image: "url('/images/rafting/m00.jpg')",
        img: I1,
        content: <R2 />
    },
    {
        slug: "26-km-rafting",
        title: "26 Km Rafting in Rishikesh",
        description: "Embark on unforgettable hiking, rafting, and kayaking adventures in the stunning landscapes of Uttarakhand, surrounded by the majestic beauty of the Himalayas, and along the pristine Ganges River, where every bend brings new thrills and breathtaking views.",
        image: "url('/images/rafting/m00.jpg')",
        img: I1,
        content: <R3 />
    },
]

export default rafting;