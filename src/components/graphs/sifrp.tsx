'use client'

import { useState, useCallback, ReactElement, useEffect, useRef } from 'react'
import { LineChart, LineChartData } from './charts/line-chart'

const ROLLS = 50
const DICE_FACES = 6
const DEFAULT_DICES_VALUE = 3

function simulateRolls(dices: number): LineChartData[] {
    const resultsArray: LineChartData[] = []

    // Simulate 50 dice rolls
    for (let i = 0; i < ROLLS; i++) {
        let roll = 0

        for (let j = 0; j < dices; j++) {
            roll += Math.floor(Math.random() * DICE_FACES) + 1
        }

        resultsArray.push({ name: i + 1, value: roll })
    }

    return resultsArray
}

export function SIFRPGraph(): ReactElement {
    const [dices, setDices] = useState<number>(DEFAULT_DICES_VALUE)
    const dicesRef = useRef<HTMLInputElement>(null)
    const [results, setResults] = useState<LineChartData[]>(simulateRolls(DEFAULT_DICES_VALUE))

    const handleSubmit = useCallback(() => {
        const dices = dicesRef.current ? parseInt(dicesRef.current.value) : 0
        const newResults = simulateRolls(dices)
        // Update state with new results and input value
        setResults(newResults)
        setDices(dices)
    }, [])

    return (
        <div className="flex flex-col items-center gap-12 p-4">
            <div className="flex gap-4">
                <div className="flex gap-2">
                    <input
                        type="number"
                        min="1"
                        max="7"
                        ref={dicesRef}
                        defaultValue={DEFAULT_DICES_VALUE}
                        className="w-20 rounded-sm border p-2"
                    />
                    <span className="my-auto font-medium">D6</span>
                </div>

                <button
                    onClick={handleSubmit}
                    className="cursor-pointer rounded bg-[#CC4A49] px-4 py-2 text-white transition-colors hover:bg-[#a63c3b]"
                >
                    Tira i dadi
                </button>
            </div>

            <LineChart data={results} />

            <div className="text-center">
                <p className="text-sm text-gray-500">
                    I valori sopra esposti rappresentano il risultato di 50 tiri di dado con {dices}{' '}
                    {dices === 1 ? 'dado' : 'dadi'} a 6 facce, sommando il risultato di ciascun dado.
                </p>
            </div>
        </div>
    )
}
