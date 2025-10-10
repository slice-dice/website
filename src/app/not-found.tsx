import { Article } from '@/components/article'
import { Main } from '@/components/main'
import Link from 'next/link'

export default function NotFound() {
    return (
        <Main>
            <header>
                <h1 className="m-0 mb-4 break-words p-0 text-center text-2xl font-bold text-[#CC4A49] sm:mb-6 sm:text-3xl lg:mb-7 lg:text-4xl xl:mb-8 xl:text-5xl">
                    Ops... pagina non trovata!
                </h1>
            </header>
            <Article>
                <div className="space-y-12 text-center">
                    <p className="m-0">
                        La pagina che stai cercando non esiste... o forse è stata mangiata da un dinosauro!
                        <br />
                        Se pensi che ci sia un errore, segnalacelo{' '}
                        <Link href="/contatti" className="text-[#CC4A49] underline hover:no-underline">
                            qui
                        </Link>
                        .
                    </p>
                    <p className="m-0">
                        <Link
                            href={`/`}
                            className="decoration-none bg-[#c9493b] px-6 py-4 text-[0.9375rem] text-white transition-colors duration-200 hover:bg-[#e36355] focus:outline-dotted active:bg-[#e36355] sm:text-[1rem] lg:text-[1.0625rem] xl:text-[1.125rem]"
                        >
                            &laquo; Torna alla home
                        </Link>
                    </p>
                </div>
            </Article>
        </Main>
    )
}
