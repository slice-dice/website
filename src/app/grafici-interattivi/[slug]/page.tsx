import { Main } from '@/components/main'
import { Article } from '@/components/article'

import { interactiveGraphs } from '@/data/interactive-graphs'
import { GraphRule } from '@/components/graphs-rule'
import { Metadata } from 'next'

const overrideMDXComponents = {
    GraphRule: ({ children }: { children: React.ReactNode }) => <GraphRule>{children}</GraphRule>,
}

type InteractiveGraphsProps = {
    params: Promise<{ slug: string }>
}

export default async function Page({ params }: InteractiveGraphsProps) {
    const slug = (await params).slug
    const { default: Docs } = await import(`../../../../docs/grafici-interattivi/${slug}.mdx`)

    return (
        <Main>
            <Article>
                <Docs components={overrideMDXComponents} />
            </Article>
        </Main>
    )
}

export async function generateMetadata({ params }: InteractiveGraphsProps): Promise<Metadata> {
    const slug = (await params).slug

    const interactiveGraph = interactiveGraphs.find(({ url }) => url === slug)

    return {
        title: interactiveGraph?.name ?? 'Grafico interattivo',
        description: interactiveGraph?.description ?? `Pagina dedicata al grafico interattivo per ${interactiveGraph?.name}`,
    }
}

export function generateStaticParams() {
    const slugs: { slug: string }[] = []

    interactiveGraphs.forEach(({ url }) => {
        slugs.push({ slug: url })
    })

    return slugs
}

export const dynamicParams = false
