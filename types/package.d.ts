type Rapids =
    | {
          total?: string;
          grades?: string;
      }
    | Record<string, never>;

export type Package = {
    title: string;
    description: string;
    image: {
        src: string;
    };
    featured_image: {
        src: string;
        class?: string;
    };
    duration: string;
    groupSize: string;
    price: number;
    link: string;
    startingPoint?: string;
    endingPoint?: string;
    rapids?: Rapids;
};
