'use client'

import { useState, useCallback, ReactElement, useEffect, useRef } from 'react'
import { BarChart, BarChartData } from './charts/bar-chart'

const ROLLS = 50
const DICE_FACES = 10
const DEFAULT_DICES_VALUE = 6
const DEFAULT_DIFFICULTY_VALUE = 6

function simulateRolls(dices: number, difficulty: number): BarChartData[] {
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

    return resultsArray
}

export function StorytellerSystemGraph(): ReactElement {
    const [dices, setDices] = useState<number>(DEFAULT_DICES_VALUE)
    const [difficulty, setDifficulty] = useState<number>(DEFAULT_DIFFICULTY_VALUE)
    const dicesRef = useRef<HTMLInputElement>(null)
    const difficultyRef = useRef<HTMLInputElement>(null)
    const [results, setResults] = useState<BarChartData[]>(simulateRolls(DEFAULT_DICES_VALUE, DEFAULT_DIFFICULTY_VALUE))

    const handleSubmit = useCallback(() => {
        const dices = dicesRef.current ? parseInt(dicesRef.current.value) : 0
        const difficulty = difficultyRef.current ? parseInt(difficultyRef.current.value) : 0
        const newResults = simulateRolls(dices, difficulty)
        // Update state with new results and input values
        setResults(newResults)
        setDices(dices)
        setDifficulty(difficulty)
    }, [])

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
                            ref={dicesRef}
                            defaultValue={DEFAULT_DICES_VALUE}
                            className="w-20 rounded-sm border p-2"
                        />
                    </div>

                    <div className="flex justify-between gap-4">
                        <span className="my-auto font-medium">Difficoltà:</span>
                        <input
                            type="number"
                            min="1"
                            max="10"
                            ref={difficultyRef}
                            defaultValue={DEFAULT_DIFFICULTY_VALUE}
                            className="w-20 rounded-sm border p-2"
                        />
                    </div>
                </div>

                <button
                    onClick={handleSubmit}
                    className="mx-auto cursor-pointer rounded-sm bg-[#CC4A49] px-4 py-2 whitespace-nowrap text-white transition-colors hover:bg-[#a63c3b]"
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
