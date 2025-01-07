import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        p: ({ children }: { children: React.ReactNode }) => (
            <p className="text-justify text-base lg:text-lg xl:text-xl">{children}</p>
        ),
        h1: ({ children }: { children: React.ReactNode }) => (
            <h1 className="m-0 break-words p-0 pb-4 text-2xl font-bold text-[#CC4A49] sm:pb-6 sm:text-3xl lg:pb-7 lg:text-4xl xl:pb-8 xl:text-5xl">
                {children}
            </h1>
        ),
        blockquote: ({ children }: { children: React.ReactNode }) => (
            <blockquote className="relative mb-6 border-l-4 border-[#094f56] p-5">{children}</blockquote>
        ),
        ...components,
    }
}
