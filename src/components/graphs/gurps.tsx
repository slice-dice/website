'use client'

import { useState, useCallback, ReactElement, useEffect } from 'react'
import { PieChart, PieChartData } from '../graphs/charts/pie-chart'

const COLORS = ['#2B6B5E', '#CC4A49']
const ROLLS = 50
const DICE_NUMBER = 3
const DICE_FACES = 6

export function GurpsGraph(): ReactElement {
    const [skill, setSkill] = useState<number>(10)
    const [results, setResults] = useState<PieChartData[]>([
        { name: 'Successi', value: 0 },
        { name: 'Fallimenti', value: 0 },
    ])

    const simulateRolls = useCallback(() => {
        let successes = 0

        // Simulate 50 dice rolls
        for (let i = 0; i < ROLLS; i++) {
            let sumRoll = 0
            for (let j = 0; j < DICE_NUMBER; j++) {
                sumRoll += Math.floor(Math.random() * DICE_FACES) + 1
            }

            if (sumRoll <= skill) {
                successes++
            }
        }

        setResults([
            { name: 'Successi', value: successes },
            { name: 'Fallimenti', value: ROLLS - successes },
        ])
    }, [skill])

    useEffect(() => {
        simulateRolls()
    }, [simulateRolls])

    return (
        <div className="flex flex-col items-center gap-12 p-4">
            <div className="flex gap-4">
                <span className="my-auto font-medium">Abilità:</span>
                <input
                    type="number"
                    min="0"
                    max="18"
                    value={skill}
                    onChange={(e) => setSkill(Math.min(18, Math.max(0, Number(e.target.value))))}
                    className="w-20 rounded-sm border p-2"
                />
                <button
                    onClick={simulateRolls}
                    className="rounded bg-[#CC4A49] px-4 py-2 text-white transition-colors hover:bg-[#a63c3b]"
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
