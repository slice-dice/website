export function Main({ children }: { children: React.ReactNode }) {
    return <main className="mx-auto mb-20 max-w-[880px]">{children}</main>
}

export function MainFooter({ children }: { children: React.ReactNode }) {
    return (
        <main className="-ml-6 -mr-6 border-t p-6 sm:-ml-12 sm:-mr-12 sm:p-12 lg:-ml-16 lg:-mr-16 lg:p-16 xl:-ml-20 xl:-mr-20 xl:p-20">
            {children}
        </main>
    )
}
