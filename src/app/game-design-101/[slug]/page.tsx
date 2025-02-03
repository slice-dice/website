import { Main, MainFooter } from '@/components/main'
import { Article } from '@/components/article'
import { CateroriesList } from '@/components/categories-list'
import Image from 'next/image'
import Link from 'next/link'

import { gameDesign101 } from '@/data/game-design-101'

const overrideMdxComponents = {
    p: ({ children }: { children: React.ReactNode }) => <p className="m-0 mb-6 p-[20px] text-justify">{children}</p>,
    h4: ({ children }: { children: React.ReactNode }) => (
        <h4 className="m-0 mb-6 text-justify text-[90%] italic">{children}</h4>
    ),
    h5: ({ children }: { children: React.ReactNode }) => (
        <h5 className="m-0 mb-4 px-5 text-justify font-bold text-[#cc4a49]">{children}</h5>
    ),
    img: ({ src, alt, title }: { src: string; alt: string; title: string }) => (
        <Image src={src} alt={alt} title={title} width={423} height={365} />
    ),
    ImageCaption: ({ children }: { children: React.ReactNode }) => (
        <figcaption className="mb-4 mt-2 text-center text-[1rem] text-black/50">{children}</figcaption>
    ),
    ImageAuthor: ({
        alt,
        src,
        width,
        height,
        children,
    }: {
        alt: string
        src: string
        width: number
        height: number
        children: React.ReactNode
    }) => (
        <>
            <div className="flex items-center justify-center">
                <figure className="overflow-hidden rounded-full">
                    <Image src={src} alt={alt} width={width} height={height} title={alt} />
                </figure>
            </div>
            <figcaption className="mb-4 mt-2 text-center text-[1rem] text-black/50">{children}</figcaption>
        </>
    ),
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const { default: Docs } = await import(`../../../../docs/game-design-101/${slug}.mdx`)

    // Get the position of the current slug
    const currentSlug = gameDesign101.find(({ url }) => url === slug)
    const currentIndex = gameDesign101.findIndex(({ url }) => url === slug) || 0

    // Get the previous slug
    const prevSlug = gameDesign101[currentIndex - 1]
    // Get the next slug
    const nextSlug = gameDesign101[currentIndex + 1]

    return (
        <>
            <Main>
                <Article>
                    <header>
                        {currentSlug?.categories && <CateroriesList categories={currentSlug.categories} />}
                        <h1 className="m-0 mb-4 break-words p-0 text-2xl font-bold text-[#CC4A49] sm:mb-6 sm:text-3xl lg:mb-7 lg:text-4xl xl:mb-8 xl:text-5xl">
                            {currentSlug?.name}
                        </h1>
                    </header>
                    <Docs components={overrideMdxComponents} />
                </Article>
            </Main>
            <MainFooter>
                <nav className="mx-auto my-0 w-full max-w-[1120px]">
                    <div className="flex">
                        {prevSlug && (
                            <div className="m-0 w-1/2 break-words pr-4">
                                <Link href={`/game-design-101/${prevSlug.url}`}>
                                    <span className="block text-black/50">&laquo; Articolo precedente</span>
                                    <h3 className="text-[1.25rem] font-bold leading-[1.4] text-[#CC4A49] no-underline hover:text-[#e36355] focus:outline-dotted active:text-[#e36355] lg:text-[1.375rem] lg:leading-[1.4] xl:text-[1.5rem] xl:leading-[1.4]">
                                        {prevSlug.name}
                                    </h3>
                                </Link>
                            </div>
                        )}
                        {nextSlug && (
                            <div className="m-0 w-1/2 break-words pl-4 text-right">
                                <Link href={`/game-design-101/${nextSlug.url}`}>
                                    <span className="block text-black/50">Articolo successivo &raquo;</span>
                                    <h3 className="text-[1.25rem] font-bold leading-[1.4] text-[#CC4A49] no-underline hover:text-[#e36355] focus:outline-dotted active:text-[#e36355] lg:text-[1.375rem] lg:leading-[1.4] xl:text-[1.5rem] xl:leading-[1.4]">
                                        {nextSlug.name}
                                    </h3>
                                </Link>
                            </div>
                        )}
                    </div>
                </nav>
            </MainFooter>
        </>
    )
}

export function generateStaticParams() {
    const slugs: { slug: string }[] = []

    gameDesign101.forEach(({ url }) => {
        slugs.push({ slug: url })
    })

    return slugs
}

export const dynamicParams = false
