'use client'

import { useState, useCallback, ReactElement, useRef } from 'react'
import { PieChart, PieChartData } from '../graphs/charts/pie-chart'

const COLORS = ['#2B6B5E', '#CC4A49']
const ROLLS = 50
const DICE_FACES = 20
const DEFAULT_DIFFICULTY_VALUE = 20
const DEFAULT_STAT_VALUE = 16
const DEFAULT_SKILL_VALUE = 9

function simulateRolls(difficulty: number, stat: number, skill: number): PieChartData[] {
    let successes = 0

    // Simulate 50 dice rolls
    for (let i = 0; i < ROLLS; i++) {
        const roll = Math.floor(Math.random() * DICE_FACES) + 1
        const sum = roll + (stat - 10) / 2 + skill

        if (sum >= difficulty) {
            successes++
        }
    }

    return [
        { name: 'Successi', value: successes },
        { name: 'Fallimenti', value: ROLLS - successes },
    ]
}

export function D20System(): ReactElement {
    const difficultyRef = useRef<HTMLInputElement>(null)
    const statRef = useRef<HTMLInputElement>(null)
    const skillRef = useRef<HTMLInputElement>(null)
    const [results, setResults] = useState<PieChartData[]>(
        simulateRolls(DEFAULT_DIFFICULTY_VALUE, DEFAULT_STAT_VALUE, DEFAULT_SKILL_VALUE),
    )

    const handleSubmit = useCallback(() => {
        const difficulty = difficultyRef.current ? parseInt(difficultyRef.current.value) : 0
        const stat = statRef.current ? parseInt(statRef.current.value) : 0
        const skill = skillRef.current ? parseInt(skillRef.current.value) : 0
        const newResults = simulateRolls(difficulty, stat, skill)
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
                            max="40"
                            ref={difficultyRef}
                            defaultValue={DEFAULT_DIFFICULTY_VALUE}
                            className="w-20 rounded-sm border p-2"
                        />
                    </div>
                    <div className="flex justify-between gap-4">
                        <span className="my-auto font-medium">Caratteristica:</span>
                        <input
                            type="number"
                            min="6"
                            max="24"
                            ref={statRef}
                            defaultValue={DEFAULT_STAT_VALUE}
                            className="w-20 rounded-sm border p-2"
                        />
                    </div>
                    <div className="flex justify-between gap-4">
                        <span className="my-auto font-medium">Gradi:</span>
                        <input
                            type="number"
                            min="1"
                            max="20"
                            ref={skillRef}
                            defaultValue={DEFAULT_SKILL_VALUE}
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
