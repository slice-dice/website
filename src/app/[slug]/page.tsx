import { Main } from '@/components/main'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const { default: Docs } = await import(`../../../docs/${slug}.mdx`)

    return (
        <Main>
            <article className="prose lg:prose-xl">
                <Docs />
            </article>
        </Main>
    )
}

export function generateStaticParams() {
    return [
        { slug: 'contatti' },
        { slug: 'proposte' },
        { slug: 'ringraziamenti' },
        { slug: 'copyright' },
        { slug: 'faq' },
        { slug: 'glossario' },
    ]
}

export const dynamicParams = false
