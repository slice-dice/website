import { SubRoute } from './routes'

export interface GameDesign101 extends SubRoute {
    categories: string[]
    description?: string
}

export const gameDesign101: GameDesign101[] = [
    {
        name: 'Un gioco è un gioco',
        url: 'un-gioco-e-un-gioco',
        categories: ['game design 101', 'meccaniche', 'narrazione'],
        description:
            'Il game design è l’atto di decidere quello che un gioco dovrebbe essere. Le decisioni che riguardano la narrazione sono uno degli aspetti del game design, ma ce ne sono molti, molti altri. Le decisioni che riguardano le regole, l’aspetto, il passo narrativo, l’assunzione di rischi, le ricompense e le punizioni, nonché tutto il resto di quello che il giocatore può esperire, sono responsabilità del game designer.',
    },
    {
        name: 'Sistema: obiettivo - sfida - risultato',
        url: 'sistema-obiettivo-sfida-risultato',
        categories: ['conflitto', 'game design 101', 'narrazione'],
        description:
            'Tutti i giochi condividono la stessa identica struttura? Ovviamente no.\n Un gioco di carte ha un formato molto diverso da un gioco da tavolo; un gioco d’azione in 3D non è certo la stessa cosa di un trivia. Tuttavia, ci deve pur essere qualcosa che condividono affinché li si possa chiaramente riconoscere tutti quanti come giochi.',
    },
    {
        name: 'Un gioco è le proprie regole',
        url: 'un-gioco-e-le-proprie-regole',
        categories: ['game design 101', 'meccaniche', 'regole'],
        description:
            'Le meccaniche sono il cuore di ciò che un gioco è. Sono le interazioni e le relazioni che rimangono quando tutta la parte estetica, tecnologica e narrativa è strappata via. La parte fondamentale delle meccaniche sono le regole. Le regole definiscono le azioni, nonché le loro conseguenze e limitazioni. In altre parole, le regole rendono possibili tutte le meccaniche di gioco e delimitano la vera cosa che rende un gioco tale, cioè avere obiettivi precisi.',
    },
    {
        name: 'Sensazione di incertezza',
        url: 'sensazione-di-incertezza',
        categories: ['dinamiche', 'meccaniche', 'scelte'],
        description:
            'Pensateci un attimo: se sapessi chi vincerà il gioco prima ancora che inizi, perché perdere tempo a giocare? C’è una ragione se lo sport è mostrato in tv quasi sempre in tempo reale: privato del dramma dell’incertezza del risultato, si fa fatica a mantenere alto l’interesse dello spettatore.\n Un modo per comprendere perché i giochi abbiano bisogno di incertezza è che se il risultato di un gioco è predeterminato, l’esperienza di gioco diventa priva di significato.',
    },
    {
        name: 'Sfidare il giocatore',
        url: 'sfidare-il-giocatore',
        categories: ['dinamiche', 'meccaniche'],
        description:
            'In un certo senso, la natura della sfida suggerisce la natura della risposta del giocatore. I giochi migliori, però, consentono al giocatore di pensare in maniera creativa e usare azioni non convenzionali per affrontare le sfide. Allo stadio di definizione del concept del gioco, non è necessario definire precisamente quali sfide il giocatore dovrà affrontare, ma è bene avere un’idea di quali tipologie di sfide si vogliono nel proprio gioco.',
    },
    {
        name: 'Tutti i giochi implicano un conflitto',
        url: 'tutti-i-giochi-implicano-un-conflitto',
        categories: ['conflitto', 'dinamiche'],
        description:
            'Il conflitto è un elemento intrinseco di ogni gioco. Al di fuori di un gioco, il conflitto può essere qualcosa di distruttivo, ma nei giochi assistiamo al meraviglioso paradosso di un conflitto simulato che genera gioco significativo.',
    },
    {
        name: 'Conflitto e strategia',
        url: 'conflitto-e-strategia',
        categories: ['conflitto', 'dinamiche'],
        description:
            'Il conflitto richiede che il gioco abbia una componente quanto meno tattica e spesso anche una strategica, oppure entrambe.\n La strategia è l’atto mentale della pianificazione: avvantaggiarsi della propria situazione e delle proprie risorse, anticipare le mosse dell’avversario, conoscere e minimizzare le proprie debolezze. Una sfida di tipo strategico è quella in cui un giocatore deve guardare il gioco attentamente e stabilire un piano d’azione.',
    },
    {
        name: 'Dinamiche: il motore in movimento',
        url: 'dinamiche-il-motore-in-movimento',
        categories: ['bilanciamento', 'dinamiche', 'playtesting'],
        description:
            'Chi non ha molta esperienza nell’ambito dei giochi da tavoli potrebbe supporre, semplicisticamente, che sia sufficiente avere ben chiare le regole di un gioco per poter immaginare il suo svolgimento senza effettivamente giocarlo. La realtà è ben diversa: la semplice lettura del regolamento spesso riesce a trasmettere solo in parte o per nulla l’idea di ciò che accade davvero nel corso della partita.',
    },
    {
        name: 'Morra cinese',
        url: 'morra-cinese',
        categories: ['bilanciamento', 'conflitto', 'dinamiche'],
        description:
            'L’esempio più iconico di tutto ciò è morra cinese (che forse conosci anche come Sasso Carta Forbice), dove nessuno degli elementi predomina, perché ce n’è sempre uno che può sconfiggerlo. È quindi un semplice modo per assicurarsi che ogni elemento di gioco abbia sia forze che debolezze.',
    },
    {
        name: 'Un gioco equo',
        url: 'un-gioco-equo',
        categories: ['bilanciamento', 'conflitto', 'dinamiche'],
        description:
            'Un altro tipo di asimmetria è insita nell’offrire obiettivi diversi a giocatori diversi. Questo può aggiungere complessità ed intrigo al gioco. Puoi offrire condizioni di vittoria asimmetriche quando gli avversari sono uguali in tutto il resto o puoi combinare obiettivi asimmetrici con situazioni iniziali pure asimmetriche, se proprio vuoi affrontare una vera sfida di bilanciamento.',
    },
    {
        name: 'Sbrigare le scartoffie',
        url: 'sbrigare-le-scartoffie',
        categories: ['game design 101'],
        description:
            'Non c’è un formato specifico che una documentazione di gioco deve avere. Ad esempio, il consulente di videogiochi Mark Cerny presenta la sua documentazione in elenchi puntati di massimo una pagina per ogni argomento, perché sostiene che una presentazione semplice sia più facile da leggere e digerire per il suo team. Ma tu usa qualsiasi cosa funzioni bene per te.',
    },
    {
        name: 'La regola del loop',
        url: 'la-regola-del-loop',
        categories: ['playtesting'],
        description:
            'Ad un certo punto arriverà il momento di mettere alla prova la tua idea di gioco. Ma che succede se la tua visione di gioco richiede mesi di programmazione e lavoro grafico prima che possiate anche solo essere in grado di provarlo? In questo caso, hai bisogno di arrivare a questo punto con cautela',
    },
    {
        name: 'Giochi di ruolo',
        url: 'giochi-di-ruolo',
        categories: ['gioco di ruolo'],
        description:
            'I giochi di ruolo hanno sicuramente tutta la bardatura di un gioco in senso stretto. Un gioco di ruolo da tavolo solitamente coinvolge dadi, manuali ed un discreto quantitativo di gioco strategico. I giochi da tavolo incorporano chiaramente tutti gli elementi che compongono un gioco, tranne uno: un risultato quantificabile. ',
    },
    {
        name: 'Epilogo: il paradosso del mucchio',
        url: 'epilogo',
        categories: ['game design 101'],
        description:
            'Il gameplay non è una singola entità, ma una combinazione di molti elementi, una sinergia che emerge dall’inclusione di certi fattori.',
    },
]
