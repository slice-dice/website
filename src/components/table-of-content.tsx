import Link from 'next/link'

export type TableOfContentId = {
    id: string
    title: string
}

export function TableOfContent({ ids }: { ids: TableOfContentId[] }) {
    return (
        <div className="mb-8 space-x-2 text-justify text-[80%] text-[#CC4A49]">
            <b>Indice.</b>
            {ids.map(({ id, title }, i) => (
                <>
                    <Link key={id} href={`#${id}`} className="text-[#CC4A49] underline hover:no-underline">
                        {title}
                    </Link>
                    {i < ids.length - 1 && <span> - </span>}
                </>
            ))}
        </div>
    )
}

export function Anchor({ id }: { id: string }) {
    return <a id={id} style={{ visibility: 'hidden' }} />
}
