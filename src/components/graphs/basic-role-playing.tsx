'use client'

import { useState, useCallback, ReactElement, useEffect } from 'react'
import { PieChart, PieChartData } from '../graphs/charts/pie-chart'

const COLORS = ['#2B6B5E', '#3B8F7C', '#4FB3A9', '#CC4A49']
const ROLLS = 50
const DICE_FACES = 100

export function BasicRolePlayingGraph(): ReactElement {
    const [skill, setSkill] = useState<number>(55)
    const [results, setResults] = useState<PieChartData[]>([
        { name: 'Successi', value: 0 },
        { name: 'Successi ardui', value: 0 },
        { name: 'Successi estremi', value: 0 },
        { name: 'Fallimenti', value: 0 },
    ])

    const simulateRolls = useCallback(() => {
        let successes = 0
        let hardSuccesses = 0
        let extremeSuccesses = 0

        // Simulate 50 dice rolls
        for (let i = 0; i < ROLLS; i++) {
            const roll = Math.floor(Math.random() * DICE_FACES) + 1
            if (roll <= skill) {
                if (roll <= skill / 5) {
                    extremeSuccesses++
                } else if (roll <= skill / 2) {
                    hardSuccesses++
                } else {
                    successes++
                }
            }
        }

        setResults([
            { name: 'Successi', value: successes },
            { name: 'Successi ardui', value: hardSuccesses },
            { name: 'Successi estremi', value: extremeSuccesses },
            { name: 'Fallimenti', value: ROLLS - (successes + hardSuccesses + extremeSuccesses) },
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
                    min="1"
                    max="100"
                    value={skill}
                    onChange={(e) => setSkill(Math.min(100, Math.max(1, Number(e.target.value))))}
                    className="w-20 rounded border p-2"
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
