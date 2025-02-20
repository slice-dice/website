'use client'

import { useState, useCallback, ReactElement, useEffect } from 'react'
import { LineChart, LineChartData } from './charts/line-chart'

const ROLLS = 50
const DICE_FACES = 6

export function SIFRPGraph(): ReactElement {
    const [dices, setDices] = useState<number>(3)
    const [results, setResults] = useState<LineChartData[]>([])

    const simulateRolls = useCallback(() => {
        const resultsArray: LineChartData[] = []

        // Simulate 50 dice rolls
        for (let i = 0; i < ROLLS; i++) {
            let roll = 0

            for (let j = 0; j < dices; j++) {
                roll += Math.floor(Math.random() * DICE_FACES) + 1
            }

            resultsArray.push({ name: i + 1, value: roll })
        }

        setResults(resultsArray)
    }, [dices])

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
                        max="7"
                        value={dices}
                        onChange={(e) => setDices(Math.min(7, Math.max(1, Number(e.target.value))))}
                        className="w-20 rounded border p-2"
                    />
                    <span className="my-auto font-medium">D6</span>
                </div>

                <button
                    onClick={simulateRolls}
                    className="rounded bg-[#CC4A49] px-4 py-2 text-white transition-colors hover:bg-[#a63c3b]"
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
