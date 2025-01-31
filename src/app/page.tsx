import { Main } from '@/components/main'
import About from '../../docs/about.mdx'

export default function Home() {
    return (
        <Main>
            <article className="prose lg:prose-xl">
                <About />
            </article>
        </Main>
    )
}
