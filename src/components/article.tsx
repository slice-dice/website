export function Article({ children }: { children: React.ReactNode }) {
    return (
        <article className="prose lg:prose-xl text-[1.0625rem] leading-[1.75] sm:text-[1.0625rem] sm:leading-[1.75] lg:text-[1.125rem] lg:leading-[1.75] xl:text-[1.1875rem] xl:leading-[1.75]">
            {children}
        </article>
    )
}

export function MiniArticle({ children }: { children: React.ReactNode }) {
    return (
        <article className="prose lg:prose-xl m-0 mb-6 p-0 text-[1.0625rem] leading-[1.75] sm:mb-12 lg:mb-16 lg:text-[1.125rem] lg:leading-[1.75] xl:mb-20 xl:text-[1.1875rem] xl:leading-[1.75]">
            {children}
        </article>
    )
}
