import { gameDesign101 } from '@/data/game-design-101'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const { default: Docs } = await import(`../../../../docs/grafici-interattivi/${slug}.mdx`)

    return (
        <article className="prose lg:prose-xl">
            <Docs />
        </article>
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
