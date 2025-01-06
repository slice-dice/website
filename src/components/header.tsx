import Link from 'next/link'
import { ReactElement } from 'react'

function Brand(): ReactElement {
    return (
        <div className="m-0 flex max-w-full flex-col justify-center p-0">
            <p className="m-0 p-0 text-2xl font-bold sm:text-3xl md:text-4xl">
                <Link href="/">Slice & Dice</Link>
            </p>
        </div>
    )
}

export async function Header(): Promise<ReactElement> {
    return (
        <header className="border-b bg-white px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="flex flex-wrap py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <Brand />
            </div>
        </header>
    )
}
