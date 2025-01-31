import { Fragment } from 'react'
import Link from 'next/link'
import { CateroriesList } from '@/components/categories-list'

import { gameDesign101 } from '@/data/game-design-101'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    // Get the category from the URL
    const category = (await params).slug.replace(/%20/g, ' ')

    // Obtain the list of articles for the category
    const articles = gameDesign101.filter((article) => article.categories.includes(category))

    return (
        <>
            <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
                <h1 className="text-[1.125rem] font-bold leading-[1.4] text-[#CC4A49] sm:text-[1.25rem] sm:leading-[1.4] lg:text-[1.375rem] lg:leading-[1.4] xl:text-[1.5rem] xl:leading-[1.4]">
                    Categoria: {category}
                </h1>
            </div>
            <div>
                {articles.map(({ name, url, description, categories }, i) => (
                    <article key={i} className="prose lg:prose-xl m-0 mb-6 p-0 sm:mb-12 lg:mb-16 xl:mb-20">
                        <header className="mb-4 sm:mb-6 lg:mb-7 xl:mb-8">
                            <CateroriesList categories={categories} />
                            <h2 className="text-[1.75rem] font-bold leading-[1.4] text-[#CC4A49] sm:text-[2rem] sm:leading-[1.4] lg:text-[2.5rem] lg:leading-[1.4] xl:text-[3rem] xl:leading-[1.4]">
                                <Link
                                    href={`/game-design-101/${url}`}
                                    className="text-[#CC4A49] no-underline transition-colors duration-200 hover:text-[#e36355] focus:outline-dotted active:text-[#e36355]"
                                >
                                    {name}
                                </Link>
                            </h2>
                        </header>
                        <div className="text-[1.0625rem] leading-[1.75] lg:text-[1.125rem] lg:leading-[1.75] xl:text-[1.1875rem] xl:leading-[1.75]">
                            <p className="mb-6">
                                {description?.split('\n').map((part, i) => (
                                    <Fragment key={i}>
                                        {part}
                                        <br />
                                    </Fragment>
                                ))}
                            </p>
                            <Link
                                href={`/game-design-101/${url}`}
                                className="decoration-none bg-[#c9493b] px-6 py-4 text-[0.9375rem] text-[#fff] transition-colors duration-200 hover:bg-[#e36355] focus:outline-dotted active:bg-[#e36355] sm:text-[1rem] lg:text-[1.0625rem] xl:text-[1.125rem]"
                            >
                                Continua a leggere &raquo;
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </>
    )
}
