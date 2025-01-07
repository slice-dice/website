import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'
import { Mail, MessageSquareText, Pencil, Star } from 'lucide-react'

type FooterLinkProps = {
    href: string
    children: ReactNode
}

function FooterLink({ href, children }: FooterLinkProps): ReactElement {
    return (
        <Link
            className="flex items-center gap-4 px-8 py-4 text-sm font-medium uppercase tracking-[1.3] text-[#CC4A49] transition-transform duration-300 ease-in-out hover:scale-105 md:justify-between md:text-lg"
            href={href}
        >
            {children}
        </Link>
    )
}

export async function Footer(): Promise<ReactElement> {
    return (
        <footer className="bg-background p-4 text-center text-white" style={{ boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)' }}>
            <div className="mx-auto flex max-w-[880px] flex-col flex-wrap gap-6 md:gap-8">
                <section className="flex flex-col flex-wrap justify-center md:flex-row">
                    <FooterLink href="/contatti">
                        <Mail size={24} />
                        contatti
                    </FooterLink>
                    <FooterLink href="/proposte">
                        <MessageSquareText size={24} />
                        proposte
                    </FooterLink>
                    <FooterLink href="/">
                        <Star size={24} />
                        ringraziamenti
                    </FooterLink>
                    <FooterLink href="/">
                        <Pencil size={24} />
                        copyright
                    </FooterLink>
                </section>
                <section className="flex flex-col flex-wrap justify-center text-xs text-[#CC4A49] sm:flex-row">
                    <div className="text-center sm:text-left">
                        <p>
                            Copyright © 2025 Slice & Dice | Powered by{' '}
                            <Link href={'/'} className="text-[#CC4A49] hover:underline">
                                Slice & Dice
                            </Link>
                        </p>
                    </div>
                </section>
            </div>
        </footer>
    )
}
