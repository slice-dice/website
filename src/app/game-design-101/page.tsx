import { Main } from '@/components/main'
import { Article } from '@/components/article'
import Link from 'next/link'
import GameDesign101 from '../../../docs/game-design-101.mdx'

import { gameDesign101 } from '@/data/game-design-101'

export default function Page() {
    return (
        <Main>
            <Article>
                <GameDesign101 />
                <div className="text-[1.0625rem] leading-[1.75] sm:text-[1.0625rem] sm:leading-[1.75] lg:text-[1.125rem] lg:leading-[1.75] xl:text-[1.1875rem] xl:leading-[1.75]">
                    <div className="border-l-[3px] border-[#094f56]">
                        <ul className="p-5">
                            {gameDesign101.map(({ name, url }, i) => (
                                <li key={i} className="gap-1">
                                    {i + 1}.{' '}
                                    <Link
                                        href={`/game-design-101/${url}`}
                                        className="text-[#CC4A49] underline hover:no-underline"
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Article>
        </Main>
    )
}
