import Link from 'next/link'
import { Fragment } from 'react'

export function CateroriesList({ categories }: { categories: string[] }) {
    return (
        <div className="mb-3 text-[0.9375rem] sm:text-[1rem] lg:text-[1.0625rem] xl:text-[1.125rem]">
            <ul className="m-0 flex flex-wrap items-center gap-4 p-0">
                {categories.map((category, index) => (
                    <Fragment key={index}>
                        {index > 0 && <span className="h-1 w-1 self-center rounded-full bg-gray-400" />}
                        <li className="flex items-center">
                            <Link
                                href={`/game-design-101/category/${category}`}
                                className="transition-color text-[#CC4A49] no-underline hover:text-[#e36355] hover:underline"
                            >
                                {category}
                            </Link>
                        </li>
                    </Fragment>
                ))}
            </ul>
        </div>
    )
}
