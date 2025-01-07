export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const { default: Docs } = await import(`../../../docs/${slug}.mdx`)

    return <Docs />
}

export function generateStaticParams() {
    return [{ slug: 'contatti' }]
}

export const dynamicParams = false
