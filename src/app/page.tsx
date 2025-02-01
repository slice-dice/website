import { Main } from '@/components/main'
import { Article } from '@/components/article'
import About from '../../docs/about.mdx'

const overrideMdxComponents = {
    p: ({ children }: { children: React.ReactNode }) => (
        <p className="m-0 mb-6 p-[20px] text-justify text-[120%]">{children}</p>
    ),
}

export default function Home() {
    return (
        <Main>
            <Article>
                <About components={overrideMdxComponents} />
            </Article>
        </Main>
    )
}
