'use client'

import { useState, useCallback, ReactElement, useRef } from 'react'
import { LineChart, LineChartData } from './charts/line-chart'

const ROLLS = 50
const DICE_FACES = 6
const DEFAULT_INCREMENT_VALUE = 3
const DEFAULT_PARTIAL_VALUE = 2

function simulateRolls(increment: number, partial: number): LineChartData[] {
    const resultsArray: LineChartData[] = []

    // Simulate 50 dice rolls
    for (let i = 0; i < ROLLS; i++) {
        let sumIncrement = 0

        for (let j = 0; j < increment; j++) {
            sumIncrement += Math.floor(Math.random() * DICE_FACES) + 1
        }

        const roll = sumIncrement + partial

        resultsArray.push({ name: i + 1, value: roll })
    }

    return resultsArray
}

export function OpenD6Graph(): ReactElement {
    const [increment, setIncrement] = useState<number>(DEFAULT_INCREMENT_VALUE)
    const [partial, setPartial] = useState<number>(DEFAULT_PARTIAL_VALUE)
    const incrementRef = useRef<HTMLInputElement>(null)
    const partialRef = useRef<HTMLInputElement>(null)
    const [results, setResults] = useState<LineChartData[]>(simulateRolls(DEFAULT_INCREMENT_VALUE, DEFAULT_PARTIAL_VALUE))

    const handleSubmit = useCallback(() => {
        const increment = incrementRef.current ? parseInt(incrementRef.current.value) : 0
        const partial = partialRef.current ? parseInt(partialRef.current.value) : 0
        const newResults = simulateRolls(increment, partial)
        // Update state with new results and input values
        setResults(newResults)
        setIncrement(increment)
        setPartial(partial)
    }, [])

    return (
        <div className="flex flex-col items-center gap-12 p-4">
            <div className="flex gap-4">
                <div className="flex gap-2">
                    <input
                        type="number"
                        min="1"
                        max="8"
                        ref={incrementRef}
                        defaultValue={DEFAULT_INCREMENT_VALUE}
                        className="w-20 rounded-sm border p-2"
                    />
                    <span className="my-auto font-medium">D6</span>
                </div>
                <span className="my-auto font-medium">+</span>
                <div className="flex gap-2">
                    <input
                        type="number"
                        min="0"
                        max="3"
                        ref={partialRef}
                        defaultValue={DEFAULT_PARTIAL_VALUE}
                        className="w-20 rounded-sm border p-2"
                    />
                    <span className="my-auto font-medium">pip</span>
                </div>
                <button
                    onClick={handleSubmit}
                    className="mx-auto cursor-pointer rounded-sm bg-[#CC4A49] px-4 py-2 whitespace-nowrap text-white transition-colors hover:bg-[#a63c3b]"
                >
                    Tira i dadi
                </button>
            </div>

            <LineChart data={results} />

            <div className="text-center">
                <p className="text-sm text-gray-500">
                    I valori sopra esposti rappresentano il risultato di 50 tiri di dado con {increment}{' '}
                    {increment === 1 ? 'dado' : 'dadi'} a 6 facce, sommando i risultati di ciascun dado e aggiungendo{' '}
                    {partial} {partial === 1 ? 'pip' : 'pip'}.
                </p>
            </div>
        </div>
    )
}
