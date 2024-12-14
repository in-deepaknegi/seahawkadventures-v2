import { useMDXComponent } from "@content-collections/mdx/react";
import { HTMLAttributes } from "react";
import { Package } from "./types/booking";

interface MDXProps {
    code: string;
    className?: string;
}

const components = {
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className={`text-3xl text-black`} {...props} />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 className={`text-xl text-black`} {...props} />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4 className={`text-lg text-black`} {...props} />
    ),

    ul: ({ className, ...props }: React.HTMLAttributes<HTMLDListElement>) => (
        <ul className={` list-disc ml-5 space-y-2`} {...props} />
    ),

    strong: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <strong className={`font-monm font-medium text-black`} {...props} />
    ),

    pre: ({ children, raw, ...props }: ExtendedPreProps) => (
        <pre {...props} className="relative my-2 mb-4 rounded-md p-2 text-sm">
            {children}
        </pre>
    ),
    p: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <p className={`text-base font-monr`} {...props} />
    ),
};

export function Mdx({ code, className }: MDXProps) {
    const Component = useMDXComponent(code);

    return (
        <article className={`z-50 mx-auto space-y-10 mt-10 ${className}`}>
            <Component components={components} />
        </article>
    );
}

interface ExtendedPreProps extends HTMLAttributes<HTMLPreElement> {
    raw?: string;
}

