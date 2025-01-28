import { BookText, CircleHelp, LucideIcon, Home, LineChart, List, Quote } from 'lucide-react'

import { gameplaySystems } from './gameplay-systems'
import { interactiveGraphs } from './interactive-graphs'

export type SubRoute = {
    name: string
    url: string
}

export type Route = {
    name: string
    url: string
    icon: LucideIcon
    items?: SubRoute[]
}

export const routes: Route[] = [
    {
        name: "Cos'è Slice & Dice?",
        url: '/',
        icon: Home,
    },
    {
        name: 'FAQ',
        url: 'faq',
        icon: CircleHelp,
    },
    {
        name: 'Sistemi di gioco',
        url: 'sistemi-di-gioco',
        icon: BookText,
        items: gameplaySystems,
    },
    {
        name: 'Grafici interattivi',
        url: 'grafici-interattivi',
        icon: LineChart,
        items: interactiveGraphs,
    },
    {
        name: 'Glossario',
        url: 'glossario',
        icon: List,
    },
    {
        name: 'Game Design 101',
        url: 'game-design-101',
        icon: Quote,
    },
]
