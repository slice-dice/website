# Guida ai contributi per Slice & Dice

Questa guida fornisce indicazioni su come formattare i contenuti inviati agli indirizzi di contatto del progetto SliceNDice.

> **Nota:** Per inviare il tuo contributo, usa il modulo di contatto sul sito o invia una email all'indirizzo specificato nella sezione contatti di Slice & Dice.

## Elementi di base

### Intestazioni

```markdown
# Titolo principale

## Sezione importante

### Sottosezione
```

- `# Titolo principale` - Usato solo per il titolo della pagina, in rosso grande
- `## Sezione importante` - Crea un'intestazione di sezione con sfondo verde scuro
- `### Sottosezione` - Crea una piccola intestazione con sfondo rosso

### Paragrafi e testo

```markdown
Questo è un paragrafo normale. Il testo verrà giustificato automaticamente.

> Questo è un blocco citazione. Utile per evidenziare regole importanti o note particolari.
```

### Collegamenti

```markdown
[Testo del link](https://esempio.com)

<Link href={`/grafici-interattivi/nome-sistema`}>QUI</Link>
```

- Usa `Testo` per link esterni
- Per link interni al sito, usa il componente `<Link>` come mostrato

## Componenti speciali

### Tabella dei contenuti

```markdown
<TableOfContent
ids={
[
{
id: "intro",
title: "Introduzione"
},
{
id: "meccaniche",
title: "Meccaniche di gioco"
}
]
}
/>
```

Posiziona la tabella dei contenuti all'inizio del documento, subito dopo il titolo principale.

### Ancore per la navigazione

```markdown
<Anchor id="intro" />
## Introduzione
```

Inserisci un'ancora prima di ogni sezione che hai elencato nella tabella dei contenuti.

### Blocchi di immagini

```markdown
<ImageBlock>
    <Image>![Descrizione dell'immagine](/images/sistemi-di-gioco/nome-immagine.jpg 'Titolo dell'immagine')</Image>
    <ImageCaption>Testo della didascalia, eventualmente con <Link href={`/qualcosa`}>link</Link>.</ImageCaption>
</ImageBlock>
```

Per immagini rotonde, aggiungi `rounded={true}` al tag Image:

```markdown
<Image rounded={true}>![Descrizione](/images/nome-immagine.jpg 'Titolo')</Image>
```

### Blocchi di testo centrati

```markdown
<CenterBlock>
    Questo testo sarà centrato e occuperà l'80% della larghezza disponibile. Utile per evidenziare concetti importanti o parti esplicative.
</CenterBlock>
```

### Tabelle

```markdown
<Table>
    <Thead>
        <Tr>
            <Th>Intestazione 1</Th>
            <Th>Intestazione 2</Th>
        </Tr>
    </Thead>
    <Tbody>
        <Tr>
            <Td>Valore 1</Td>
            <Td>Valore 2</Td>
        </Tr>
        <Tr>
            <Td align="left">Allineamento a sinistra</Td>
            <Td align="center">Allineamento al centro</Td>
        </Tr>
    </Tbody>
</Table>
```

Per l'allineamento del testo nelle celle, usa `align="left"`, `align="center"` o `align="right"`.

### Link per acquisti

```markdown
<ShoppingTips>Acquista su [Amazon](https://amazon.it/link-al-libro) (ITA)</ShoppingTips>
<ShoppingTips>Acquista su [DriveThruRPG](https://drivethru.com/libro) (ENG)</ShoppingTips>
```

Posiziona questi link alla fine del documento.

## Struttura consigliata per un nuovo sistema

1. **Titolo** (`# Nome Sistema`)
2. **Tabella dei contenuti** (`<TableOfContent>`)
3. **Introduzione** con ancora (`<Anchor id="intro" />`)
4. **Punti di forza e debolezza**
5. **Creazione del personaggio**
6. **Meccaniche di gioco**
7. **Distribuzione delle probabilità** (con grafico)
8. **Conflitti**
9. **Combattimento**
10. **Danni e guarigione**
11. **Accorgimenti per il play by chat**
12. **Link per gli acquisti** (`<ShoppingTips>`)

## Suggerimenti pratici

- Usa le immagini con dimensioni appropriate (non troppo pesanti)
- Mantieni la formattazione coerente con gli altri sistemi già presenti
- Usa i blocchi citazione (`>`) per evidenziare regole o punti importanti
- Sfrutta i blocchi centrati (`<CenterBlock>`) per migliorare la leggibilità del testo
- Ogni sezione principale dovrebbe avere la sua ancora per la navigazione
- Verifica sempre che i link nella tabella dei contenuti corrispondano alle ancore nel testo

## Esempio minimo di struttura

```markdown
# Nome del Sistema

<TableOfContent
ids={
[
{
id: "intro",
title: "Introduzione"
},
{
id: "meccaniche",
title: "Meccaniche di gioco"
}
]
}
/>

<Anchor id="intro" />
## Introduzione
<CenterBlock>
    Questo sistema di gioco è stato creato per... ecc.
</CenterBlock>

<ImageBlock>
    <Image>![Illustrazione](/images/sistemi-di-gioco/nome-immagine.jpg 'Titolo')</Image>
    <ImageCaption>Descrizione dell'immagine e crediti.</ImageCaption>
</ImageBlock>

<Anchor id="meccaniche" />
## Meccaniche di gioco
> Regola principale: lancia i dadi e ottieni un successo se...

<ShoppingTips>Acquista su [Amazon](https://amazon.it/link) (ITA)</ShoppingTips>
```

Ricorda di salvare il file con l'estensione `.mdx` e nominarlo con il nome del sistema in formato URL-friendly (tutto minuscolo, trattini invece di spazi).
