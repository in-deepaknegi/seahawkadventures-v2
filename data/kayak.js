import R1 from '@/components/routes/kayak/R1';
import R2 from '@/components/routes/kayak/R2';

import I1 from '@/public/images/rafting/r06.jpg';


const kayak = [
    {
        slug: 'beginners-course',

        title: "Beginners Kayak Course",

        description: "Embark on unforgettable hiking, rafting, and kayaking adventures in the stunning landscapes of Uttarakhand, surrounded by the majestic beauty of the Himalayas, and along the pristine Ganges River, where every bend brings new thrills and breathtaking views.",
        image: "url('/images/kayak/k02.jpg')",
        img: I1,
        content: <R1 />
    },
    {
        slug: 'intermediate-course',

        title: "Intermediate Kayak Course",

        description: "Embark on unforgettable hiking, rafting, and kayaking adventures in the stunning landscapes of Uttarakhand, surrounded by the majestic beauty of the Himalayas, and along the pristine Ganges River, where every bend brings new thrills and breathtaking views.",
        image: "url('/images/kayak/k02.jpg')",
        img: I1,
        content: <R2 />
    },

]

export default kayak;