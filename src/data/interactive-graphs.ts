import { SubRoute } from './routes'

export interface InteractiveGraph extends SubRoute {
    description?: string
}

export const interactiveGraphs: InteractiveGraph[] = [
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
]
