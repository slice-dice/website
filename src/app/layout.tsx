import type { Metadata } from 'next'
import ProgressBarProvider from '@/components/progressbar-provider'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Footer } from '@/components/footer'

import { Barlow } from 'next/font/google'
import './globals.css'

const barlow = Barlow({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-barlow',
})

export const metadata: Metadata = {
    title: {
        template: '%s | Slice & Dice',
        default: 'Slice & Dice',
    },
    description: 'Regole e sistemi per il tuo gioco di ruolo',
    metadataBase: new URL('https://www.slicendice.it'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Slice & Dice',
        description: 'Regole e sistemi per il tuo gioco di ruolo',
        url: 'https://www.slicendice.it',
        siteName: 'Slice & Dice',
        images: [
            {
                url: '/banner.png',
                width: 1200,
                height: 600,
                alt: 'Slice & Dice',
            },
        ],
        locale: 'it_IT',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Slice & Dice',
        description: 'Regole e sistemi per il tuo gioco di ruolo',
        creator: '@SliceAndDice',
        site: 'https://www.slicendice.it',
        images: ['/banner.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
    },
    keywords: [
        'Slice & Dice',
        'Giochi di ruolo',
        'Regole',
        'Sistemi',
        'Dadi',
        'Dungeon Master',
        'Giocatore',
        'Play by Chat',
        'Play by Forum',
    ],
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${barlow.variable} px-0 antialiased sm:px-4 md:px-6 lg:px-8`}>
                <ProgressBarProvider>
                    <div className="mx-auto my-0 w-full max-w-[1440px] overflow-hidden bg-white p-0">
                        <Header />
                        <Hero />
                        <div className="px-6 pt-6 pb-0 sm:px-8 sm:pt-8 lg:px-16 lg:pt-16 xl:px-20 xl:pt-20">{children}</div>
                        <Footer />
                    </div>
                </ProgressBarProvider>
            </body>
        </html>
    )
}
