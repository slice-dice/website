'use client'

import { useState, useCallback, ReactElement, useEffect } from 'react'
import { PieChart, PieChartData } from '../graphs/charts/pie-chart'

const COLORS = ['#2B6B5E', '#CC4A49']
const ROLLS = 50
const DICE_FACES = 20

export function CypherSystemGraph(): ReactElement {
    const [difficulty, setDifficulty] = useState<number>(5)
    const [effort, setEffort] = useState<number>(1)
    const [results, setResults] = useState<PieChartData[]>([
        { name: 'Successi', value: 0 },
        { name: 'Fallimenti', value: 0 },
    ])

    const simulateRolls = useCallback(() => {
        let successes = 0

        // Simulate 50 dice rolls
        for (let i = 0; i < ROLLS; i++) {
            const roll = Math.floor(Math.random() * DICE_FACES) + 1
            if (roll >= (difficulty - effort) * 3) {
                successes++
            }
        }

        setResults([
            { name: 'Successi', value: successes },
            { name: 'Fallimenti', value: ROLLS - successes },
        ])
    }, [difficulty, effort])

    useEffect(() => {
        simulateRolls()
    }, [simulateRolls])

    return (
        <div className="flex flex-col items-center gap-12 p-4">
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="space-x-4">
                    <span className="my-auto font-medium">CD:</span>
                    <input
                        type="number"
                        min="1"
                        max="10"
                        value={difficulty}
                        onChange={(e) => setDifficulty(Math.min(10, Math.max(1, Number(e.target.value))))}
                        className="w-20 rounded border p-2"
                    />
                    <span className="my-auto font-medium">Tenacia:</span>
                    <input
                        type="number"
                        min="0"
                        max="6"
                        value={effort}
                        onChange={(e) => setEffort(Math.min(6, Math.max(0, Number(e.target.value))))}
                        className="w-20 rounded border p-2"
                    />
                </div>
                <button
                    onClick={simulateRolls}
                    className="mx-auto whitespace-nowrap rounded bg-[#CC4A49] px-4 py-2 text-white transition-colors hover:bg-[#a63c3b]"
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
