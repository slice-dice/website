import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { Anchor, TableOfContent, TableOfContentId } from '@/components/table-of-content'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        /**
         * Default components
         */
        p: ({ children }: { children: React.ReactNode }) => <p className="mb-8 p-5 text-justify text-[100%]">{children}</p>,
        h1: ({ children }: { children: React.ReactNode }) => (
            <h1 className="m-0 mb-4 break-words p-0 text-2xl font-bold text-[#CC4A49] sm:mb-6 sm:text-3xl lg:mb-7 lg:text-4xl xl:mb-8 xl:text-5xl">
                {children}
            </h1>
        ),
        h2: ({ children }: { children: React.ReactNode }) => (
            <h2 className="m-0 mb-8 break-words p-0 pb-4 text-center text-[1.75rem] font-bold">
                <p className="bg-[#094f56] leading-[30px] text-white">{children}</p>
            </h2>
        ),
        h3: ({ children }: { children: React.ReactNode }) => (
            <h3 className="mb-3 mt-4 break-words p-0 text-center text-[1.75rem] font-bold">
                <p className="m-auto w-[80%] bg-[#CC4A49] text-[80%] leading-[30px] text-white sm:w-[30%] lg:w-[20%]">
                    {children}
                </p>
            </h3>
        ),
        blockquote: ({ children }: { children: React.ReactNode }) => (
            <blockquote className="relative mb-8 border-l-4 border-[#094f56]">{children}</blockquote>
        ),
        a: ({ children, href }: { children: React.ReactNode; href: string }) => (
            <a className="text-[#CC4A49] underline hover:no-underline" href={href}>
                {children}
            </a>
        ),
        img: ({ src, alt, title }: { src: string; alt: string; title: string }) => (
            <Image src={src} alt={alt} title={title} width={512} height={342} />
        ),
        hr: () => <hr className="my-8 border-t-2 border-[#094f56]" />,

        /**
         * Custom components
         */
        Link: ({ href, children }: { href: string; children: React.ReactNode }) => (
            <Link href={href} className="text-[#CC4A49] underline hover:no-underline">
                {children}
            </Link>
        ),
        // Table
        Table: ({ children }: { children: React.ReactNode }) => (
            <div className="mb-4 overflow-x-auto pb-6">
                <table className="w-full table-fixed">{children}</table>
            </div>
        ),
        Thead: ({ children }: { children: React.ReactNode }) => <thead>{children}</thead>,
        Tbody: ({ children }: { children: React.ReactNode }) => <tbody>{children}</tbody>,
        Tr: ({ children }: { children: React.ReactNode }) => <tr>{children}</tr>,
        Th: ({ children }: { children: React.ReactNode }) => (
            <th className="border px-[0.6rem] py-[0.4rem] text-center text-base font-bold lg:text-lg xl:text-xl">
                {children}
            </th>
        ),
        Td: ({ children, align = 'center' }: { children: React.ReactNode; align: string }) => (
            <td className={`border px-[0.6rem] py-[0.4rem] text-base lg:text-lg xl:text-xl ${align && `text-${align}`}`}>
                {children}
            </td>
        ),
        // TableOfContent
        TableOfContent: ({ ids }: { ids: TableOfContentId[] }) => <TableOfContent ids={ids} />,
        // Anchor
        Anchor: ({ id }: { id: string }) => <Anchor id={id} />,
        // ImageBlock
        ImageBlock: ({ children }: { children: React.ReactNode }) => <div className="mb-6 pb-4">{children}</div>,
        Image: ({ children }: { children: React.ReactNode }) => (
            <div className="flex items-center justify-center">
                <div className="border-y-[5px] border-[#CC4A49]">{children}</div>
            </div>
        ),
        ImageCaption: ({ children }: { children: React.ReactNode }) => (
            <div className="mt-2 text-center text-[12px] text-black/50">{children}</div>
        ),
        // CenterBlock
        CenterBlock: ({ children }: { children: React.ReactNode }) => <div className="mx-auto w-[80%]">{children}</div>,
        // ShoppingTips
        ShoppingTips: ({ children }: { children: React.ReactNode }) => (
            <h3 className="mb-3 mt-4 break-words p-0 text-center text-[1.75rem] font-bold">
                <p className="m-auto w-[80%] rounded bg-[#094f56] p-[5px] text-[70%] leading-[30px] text-white sm:w-[40%] lg:w-[20%]">
                    {children}
                </p>
            </h3>
        ),

        // OpenD6
        OpenD6Strength: ({ children }: { children: React.ReactNode }) => <span className="text-[#cc4a48]">{children}</span>,
        OpenD6Agility: ({ children }: { children: React.ReactNode }) => <span className="text-[#588c73]">{children}</span>,
        OpenD6Intelligence: ({ children }: { children: React.ReactNode }) => (
            <span className="text-[#3282a6]">{children}</span>
        ),
        OpenD6Charisma: ({ children }: { children: React.ReactNode }) => <span className="text-[#88578b]">{children}</span>,

        //
        ...components,
    }
}
