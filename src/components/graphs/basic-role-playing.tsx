'use client'

import { useCallback, ReactElement, useRef, useState } from 'react'
import { PieChart, PieChartData } from '../graphs/charts/pie-chart'

const COLORS = ['#2B6B5E', '#3B8F7C', '#4FB3A9', '#CC4A49']
const ROLLS = 50
const DICE_FACES = 100
const DEFAULT_SKILL_VALUE = 55

function simulateRolls(skill: number): PieChartData[] {
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

    return [
        { name: 'Successi', value: successes ?? 0 },
        { name: 'Successi ardui', value: hardSuccesses ?? 0 },
        { name: 'Successi estremi', value: extremeSuccesses ?? 0 },
        { name: 'Fallimenti', value: ROLLS - ((successes ?? 0) + (hardSuccesses ?? 0) + (extremeSuccesses ?? 0)) },
    ]
}

export function BasicRolePlayingGraph(): ReactElement {
    const skillRef = useRef<HTMLInputElement>(null)
    const [results, setResults] = useState<PieChartData[]>(simulateRolls(DEFAULT_SKILL_VALUE))

    const handleSubmit = useCallback(() => {
        const skill = skillRef.current ? parseInt(skillRef.current.value) : 0
        const newResults = simulateRolls(skill)
        setResults(newResults)
    }, [])

    return (
        <div className="flex flex-col items-center gap-12 p-4">
            <div className="flex gap-4">
                <span className="my-auto font-medium">Abilità:</span>
                <input
                    type="number"
                    min="1"
                    max="100"
                    className="w-20 rounded-sm border p-2"
                    ref={skillRef}
                    defaultValue={DEFAULT_SKILL_VALUE}
                />
                <button
                    onClick={handleSubmit}
                    className="cursor-pointer rounded bg-[#CC4A49] px-4 py-2 text-white transition-colors hover:bg-[#a63c3b]"
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
