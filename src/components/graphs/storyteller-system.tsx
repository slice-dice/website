'use client'

import { useState, useCallback, ReactElement, useEffect } from 'react'
import { BarChart, BarChartData } from './charts/bar-chart'

const ROLLS = 50
const DICE_FACES = 10

export function StorytellerSystemGraph(): ReactElement {
    const [dices, setDices] = useState<number>(6)
    const [difficulty, setDifficulty] = useState<number>(6)
    const [results, setResults] = useState<BarChartData[]>([])

    const simulateRolls = useCallback(() => {
        const resultsArray: BarChartData[] = []

        // Simulate 50 dice rolls
        for (let i = 0; i < ROLLS; i++) {
            let successes = 0

            for (let j = 0; j < dices; j++) {
                const roll = Math.floor(Math.random() * DICE_FACES) + 1

                if (roll >= difficulty) {
                    successes++
                }
            }

            resultsArray.push({ name: i + 1, value: successes })
        }

        setResults(resultsArray)
    }, [dices, difficulty])

    useEffect(() => {
        simulateRolls()
    }, [simulateRolls])

    return (
        <div className="flex flex-col items-center gap-12 p-4">
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex flex-col space-y-4 sm:flex-row sm:gap-4 sm:space-y-0">
                    <div className="flex justify-between gap-4">
                        <span className="my-auto font-medium">Pool di dadi (d10):</span>
                        <input
                            type="number"
                            min="1"
                            max="10"
                            value={dices}
                            onChange={(e) => setDices(Math.min(10, Math.max(1, Number(e.target.value))))}
                            className="w-20 rounded border p-2"
                        />
                    </div>

                    <div className="flex justify-between gap-4">
                        <span className="my-auto font-medium">Difficoltà:</span>
                        <input
                            type="number"
                            min="1"
                            max="10"
                            value={difficulty}
                            onChange={(e) => setDifficulty(Math.min(10, Math.max(1, Number(e.target.value))))}
                            className="w-20 rounded border p-2"
                        />
                    </div>
                </div>

                <button
                    onClick={simulateRolls}
                    className="mx-auto whitespace-nowrap rounded bg-[#CC4A49] px-4 py-2 text-white transition-colors hover:bg-[#a63c3b]"
                >
                    Tira i dadi
                </button>
            </div>

            <BarChart data={results} />

            <div className="text-center">
                <p className="text-sm text-gray-500">
                    I valori sopra esposti rappresentano il numero di successi ottenuti su 50 tiri di {dices}{' '}
                    {dices === 1 ? 'dado' : 'dadi'} a 10 facce con difficoltà {difficulty}.
                </p>
            </div>
        </div>
    )
}
