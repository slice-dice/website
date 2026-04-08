export function Main({ children }: { children: React.ReactNode }) {
    return <main className="mx-auto mb-20 max-w-220">{children}</main>
}

export function MainFooter({ children }: { children: React.ReactNode }) {
    return (
        <main className="-mr-6 -ml-6 border-t p-6 sm:-mr-12 sm:-ml-12 sm:p-12 lg:-mr-16 lg:-ml-16 lg:p-16 xl:-mr-20 xl:-ml-20 xl:p-20">
            {children}
        </main>
    )
}
