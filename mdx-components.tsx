import { useMDXComponent } from "@content-collections/mdx/react";
import { HTMLAttributes } from "react";

interface MDXProps {
    code: string;
    className?: string;
}

const components = {
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className={`text-3xl  text-black`} {...props} />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 className={`text-xl  text-black`} {...props} />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4 className={`text-lg text-black`} {...props} />
    ),

    ul: ({ className, ...props }: React.HTMLAttributes<HTMLDListElement>) => (
        <ul className={`ml-5 list-disc space-y-2`} {...props} />
    ),

    strong: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <strong className={` font-medium text-black`} {...props} />
    ),

    pre: ({ children, raw, ...props }: ExtendedPreProps) => (
        <pre {...props} className="relative my-2 mb-4 rounded-md p-2 text-sm">
            {children}
        </pre>
    ),
    p: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <p className={`font-monr text-base`} {...props} />
    ),
};

export function Mdx({ code, className }: MDXProps) {
    const Component = useMDXComponent(code);

    return (
        <article className={`z-50 mx-auto mt-10 space-y-10 ${className}`}>
            <Component components={components} />
        </article>
    );
}

interface ExtendedPreProps extends HTMLAttributes<HTMLPreElement> {
    raw?: string;
}
