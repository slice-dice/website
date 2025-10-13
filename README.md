# Slice & Dice [![Netlify Status](https://api.netlify.com/api/v1/badges/358677dc-8fea-4306-af7e-3163e9d12da0/deploy-status)](https://app.netlify.com/projects/slicendiceit/deploys)

> _To slice and dice is to break a body of information down into smaller parts or to examine it from different viewpoints so that you can understand it better._

Questo è **Slice & Dice**, una piccola directory di sistemi di gioco per gli aspiranti gestori di PBC.

## Stack Tecnologico

- **Next.js 15** - Framework React per la produzione
- **React 19** - Framework UI
- **MDX** - Per la gestione dei contenuti
- **Tailwind CSS** - Per lo styling
- **Recharts** - Per la visualizzazione dei dati
- **TypeScript** - Per la type safety

## Come Iniziare

1. Clona il repository
2. Installa le dipendenze:

```sh
pnpm install
```

3. Avvia il server di sviluppo:

```sh
pnpm dev
```

4. Build per la produzione:

```sh
pnpm build
```

5. Avvia il server di produzione:

```sh
pnpm start
```

L'applicazione sarà disponibile all'indirizzo `http://localhost:3000`

## Struttura del Progetto

- [`docs`](docs) - Documentazione MDX e contenuti
- [`src`](src) - Codice sorgente
- [`public`](public) - Asset statici

## Sviluppo

- Usa `pnpm lint` per eseguire i controlli ESLint
- Il progetto usa Prettier per la formattazione del codice
- TypeScript è configurato per il type checking

## Contributi

- Per i **Grafici Interattivi** è stato preso come riferimento il progetto [Rpgchart](https://github.com/sam-sepi/Rpgchart) di [sam-sepi](https://github.com/sam-sepi).
