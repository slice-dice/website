import { SubRoute } from './routes'

export interface GameDesign101 extends SubRoute {
    category: string[]
}

export const gameDesign101: GameDesign101[] = [
    {
        name: 'Un gioco è un gioco',
        url: 'un-gioco-e-un-gioco',
        category: ['game design 101', 'meccaniche', 'narrazione'],
    },
    {
        name: 'Sistema: obiettivo - sfida - risultato',
        url: 'sistema-obiettivo-sfida-risultato',
        category: ['conflitto', 'game design 101', 'narrazione'],
    },
    {
        name: 'Un gioco è le proprie regole',
        url: 'un-gioco-e-le-proprie-regole',
        category: ['game design 101', 'meccaniche', 'regole'],
    },
    {
        name: 'Sensazione di incertezza',
        url: 'sensazione-di-incertezza',
        category: ['dinamiche', 'meccaniche', 'scelte'],
    },
    {
        name: 'Sfidare il giocatore',
        url: 'sfidare-il-giocatore',
        category: ['dinamiche', 'meccaniche'],
    },
    {
        name: 'Tutti i giochi implicano un conflitto',
        url: 'tutti-i-giochi-implicano-un-conflitto',
        category: ['conflitto', 'dinamiche'],
    },
    {
        name: 'Conflitto e strategia',
        url: 'conflitto-e-strategia',
        category: ['conflitto', 'dinamiche'],
    },
    {
        name: 'Dinamiche: il motore in movimento',
        url: 'dinamiche-il-motore-in-movimento',
        category: ['bilanciamento', 'dinamiche', 'playtesting'],
    },
    {
        name: 'Morra cinese',
        url: 'morra-cinese',
        category: ['bilanciamento', 'conflitto', 'dinamiche'],
    },
    {
        name: 'Un gioco equo',
        url: 'un-gioco-equo',
        category: ['bilanciamento', 'conflitto', 'dinamiche'],
    },
    {
        name: 'Sbrigare le scartoffie',
        url: 'sbrigare-le-scartoffie',
        category: ['game design 101'],
    },
    {
        name: 'La regola del loop',
        url: 'la-regola-del-loop',
        category: ['playtesting'],
    },
    {
        name: 'Gioco di ruolo',
        url: 'gioco-di-ruolo',
        category: ['gioco di ruolo'],
    },
    {
        name: 'Epilogo',
        url: 'epilogo',
        category: ['game design 101'],
    },
]
