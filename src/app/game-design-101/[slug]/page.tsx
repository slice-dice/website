import { Main, MainFooter } from '@/components/main'
import { Article } from '@/components/article'
import Link from 'next/link'

import { gameDesign101 } from '@/data/game-design-101'

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
                    <h1 className="m-0 mb-4 break-words p-0 text-2xl font-bold text-[#CC4A49] sm:mb-6 sm:text-3xl lg:mb-7 lg:text-4xl xl:mb-8 xl:text-5xl">
                        {currentSlug?.name}
                    </h1>
                    <Docs />
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
