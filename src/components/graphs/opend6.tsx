'use client'

import { useState, useCallback, ReactElement, useEffect } from 'react'
import { LineChart, LineChartData } from './charts/line-chart'

const ROLLS = 50
const DICE_FACES = 6

export function OpenD6Graph(): ReactElement {
    const [increment, setIncrement] = useState<number>(3)
    const [partial, setPartial] = useState<number>(2)
    const [results, setResults] = useState<LineChartData[]>([])

    const simulateRolls = useCallback(() => {
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

        setResults(resultsArray)
    }, [increment, partial])

    useEffect(() => {
        simulateRolls()
    }, [simulateRolls])

    return (
        <div className="flex flex-col items-center gap-12 p-4">
            <div className="flex gap-4">
                <div className="flex gap-2">
                    <input
                        type="number"
                        min="1"
                        max="8"
                        value={increment}
                        onChange={(e) => setIncrement(Math.min(8, Math.max(1, Number(e.target.value))))}
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
                        value={partial}
                        onChange={(e) => setPartial(Math.min(3, Math.max(0, Number(e.target.value))))}
                        className="w-20 rounded-sm border p-2"
                    />
                    <span className="my-auto font-medium">pip</span>
                </div>
                <button
                    onClick={simulateRolls}
                    className="mx-auto whitespace-nowrap rounded-sm bg-[#CC4A49] px-4 py-2 text-white transition-colors hover:bg-[#a63c3b]"
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
