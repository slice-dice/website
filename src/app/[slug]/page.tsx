import { Article } from '@/components/article'
import { Main } from '@/components/main'
import { Metadata } from 'next'

type PageParams = {
    params: Promise<{ slug: string }>
}

export default async function Page({ params }: PageParams) {
    const slug = (await params).slug
    const { default: Docs } = await import(`../../../docs/${slug}.mdx`)

    return (
        <Main>
            <Article>
                <Docs />
            </Article>
        </Main>
    )
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
    const slug = (await params).slug

    return {
        title: slug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase()) || '',
    }
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
