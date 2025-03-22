import { Metadata } from 'next'

import { Main } from '@/components/main'
import { Article } from '@/components/article'
import { Anchor, TableOfContent, TableOfContentId } from '@/components/table-of-content'

import { gameplaySystems } from '@/data/gameplay-systems'

const overrideMdxComponents = {
    // TableOfContent
    TableOfContent: ({ ids }: { ids: TableOfContentId[] }) => <TableOfContent ids={ids} />,
    // Anchor
    Anchor: ({ id }: { id: string }) => <Anchor id={id} />,
    // OpenD6
    OpenD6Strength: ({ children }: { children: React.ReactNode }) => <span className="text-[#cc4a48]">{children}</span>,
    OpenD6Agility: ({ children }: { children: React.ReactNode }) => <span className="text-[#588c73]">{children}</span>,
    OpenD6Intelligence: ({ children }: { children: React.ReactNode }) => <span className="text-[#3282a6]">{children}</span>,
    OpenD6Charisma: ({ children }: { children: React.ReactNode }) => <span className="text-[#88578b]">{children}</span>,
}

type GameplaySystemPageProps = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ params }: GameplaySystemPageProps) {
    const slug = (await params).slug
    const { default: Docs } = await import(`../../../../docs/sistemi-di-gioco/${slug}.mdx`)

    return (
        <Main>
            <Article>
                <Docs components={overrideMdxComponents} />
            </Article>
        </Main>
    )
}

export async function generateMetadata({ params }: GameplaySystemPageProps): Promise<Metadata> {
    const slug = (await params).slug

    const gameplaySystem = gameplaySystems.find(({ url }) => url === slug)

    return {
        title: gameplaySystem?.name ?? 'Sistema di gioco',
        description: gameplaySystem?.description ?? `Pagina dedicata al sistema di gioco ${gameplaySystem?.name}`,
    }
}

export function generateStaticParams() {
    const slugs: { slug: string }[] = []

    gameplaySystems.forEach(({ url }) => {
        slugs.push({ slug: url })
    })

    return slugs
}

export const dynamicParams = false
