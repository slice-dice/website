import { SubRoute } from './routes'

export interface GameplaySystem extends SubRoute {
    description?: string
}

export const gameplaySystems: GameplaySystem[] = [
    {
        name: 'Basic Role Playing',
        url: 'basic-role-playing',
    },
    {
        name: 'Cypher System',
        url: 'cypher-system',
    },
    {
        name: 'd20 system',
        url: 'd20-system',
    },
    {
        name: 'GURPS',
        url: 'gurps',
    },
    {
        name: 'Interlock',
        url: 'interlock',
    },
    {
        name: 'OpenD6',
        url: 'opend6',
    },
    {
        name: 'SIFRP',
        url: 'sifrp',
    },
    {
        name: 'Storyteller System',
        url: 'storyteller-system',
    },
    {
        name: 'Year Zero Engine',
        url: 'year-zero-engine',
    },
]
