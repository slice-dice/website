export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const { default: Docs } = await import(`../../../docs/${slug}.mdx`)

    return (
        <article className="prose lg:prose-xl">
            <Docs />
        </article>
    )
}

export function generateStaticParams() {
    return [{ slug: 'contatti' }, { slug: 'proposte' }, { slug: 'ringraziamenti' }, { slug: 'copyright' }]
}

export const dynamicParams = false
