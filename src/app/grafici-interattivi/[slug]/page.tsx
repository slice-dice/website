import { Main } from '@/components/main'
import { Article } from '@/components/article'

import { interactiveGraphs } from '@/data/interactive-graphs'
import { GraphRule } from '@/components/graphs-rule'

const overrideMDXComponents = {
    GraphRule: ({ children }: { children: React.ReactNode }) => <GraphRule>{children}</GraphRule>,
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
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

export function generateStaticParams() {
    const slugs: { slug: string }[] = []

    interactiveGraphs.forEach(({ url }) => {
        slugs.push({ slug: url })
    })

    return slugs
}

export const dynamicParams = false
