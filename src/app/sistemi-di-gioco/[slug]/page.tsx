export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const { default: Docs } = await import(`../../../../docs/sistemi-di-gioco/${slug}.mdx`)

    return (
        <article className="prose lg:prose-xl">
            <Docs />
        </article>
    )
}

export function generateStaticParams() {
    return [{ slug: 'basic-role-playing' }]
}

export const dynamicParams = false
