'use client'

import { useState, useCallback, ReactElement, useRef } from 'react'
import { PieChart, PieChartData } from '../graphs/charts/pie-chart'

const COLORS = ['#2B6B5E', '#CC4A49']
const ROLLS = 50
const DICE_FACES = 20
const DEFAULT_DIFFICULTY_VALUE = 5
const DEFAULT_EFFORT_VALUE = 1

function simulateRolls(difficulty: number, effort: number): PieChartData[] {
    let successes = 0

    // Simulate 50 dice rolls
    for (let i = 0; i < ROLLS; i++) {
        const roll = Math.floor(Math.random() * DICE_FACES) + 1
        if (roll >= (difficulty - effort) * 3) {
            successes++
        }
    }

    return [
        { name: 'Successi', value: successes },
        { name: 'Fallimenti', value: ROLLS - successes },
    ]
}

export function CypherSystemGraph(): ReactElement {
    const difficultyRef = useRef<HTMLInputElement>(null)
    const effortRef = useRef<HTMLInputElement>(null)
    const [results, setResults] = useState<PieChartData[]>(simulateRolls(DEFAULT_DIFFICULTY_VALUE, DEFAULT_EFFORT_VALUE))

    const handleSubmit = useCallback(() => {
        const difficulty = difficultyRef.current ? parseInt(difficultyRef.current.value) : 0
        const effort = effortRef.current ? parseInt(effortRef.current.value) : 0
        const newResults = simulateRolls(difficulty, effort)
        setResults(newResults)
    }, [])

    return (
        <div className="flex flex-col items-center gap-12 p-4">
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex flex-col space-y-4 sm:flex-row sm:gap-4 sm:space-y-0">
                    <div className="flex justify-between gap-4">
                        <span className="my-auto font-medium">CD:</span>
                        <input
                            type="number"
                            min="1"
                            max="10"
                            ref={difficultyRef}
                            defaultValue={DEFAULT_DIFFICULTY_VALUE}
                            className="w-20 rounded-sm border p-2"
                        />
                    </div>
                    <div className="flex justify-between gap-4">
                        <span className="my-auto font-medium">Tenacia:</span>
                        <input
                            type="number"
                            min="0"
                            max="6"
                            ref={effortRef}
                            defaultValue={DEFAULT_EFFORT_VALUE}
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

            <PieChart data={results} colors={COLORS} />

            <div className="text-center">
                <p className="text-sm text-gray-500">
                    I valori sopra esposti rappresentano il numero di successi e fallimenti ottenuti su 50 tiri di dado.
                </p>
            </div>
        </div>
    )
}
