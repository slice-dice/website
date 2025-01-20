import Link from 'next/link'
import { Fragment } from 'react'

export type TableOfContentId = {
    id: string
    title: string
}

export function TableOfContent({ ids }: { ids: TableOfContentId[] }) {
    return (
        <div className="mb-8 space-x-2 text-justify text-[80%] text-[#CC4A49]">
            <b>Indice.</b>
            {ids.map(({ id, title }, i) => (
                <Fragment key={i}>
                    <Link href={`#${id}`} className="text-[#CC4A49] underline hover:no-underline">
                        {title}
                    </Link>
                    {i < ids.length - 1 && <span> - </span>}
                </Fragment>
            ))}
        </div>
    )
}

export function Anchor({ id }: { id: string }) {
    return <a id={id} style={{ visibility: 'hidden' }} />
}
