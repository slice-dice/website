'use client'

import { useState, useCallback, ReactElement, useEffect, useRef } from 'react'
import { LineChart, LineChartData } from './charts/line-chart'

const ROLLS = 50
const DICE_FACES = 10
const DEFAULT_SKILL_VALUE = 5
const DEFAULT_STAT_VALUE = 6

function simulateRolls(stat: number, skill: number): LineChartData[] {
    const resultsArray: LineChartData[] = []

    // Simulate 50 dice rolls
    for (let i = 0; i < ROLLS; i++) {
        const roll = Math.floor(Math.random() * DICE_FACES) + 1
        const value = roll + stat + skill

        resultsArray.push({ name: i + 1, value })
    }

    return resultsArray
}

export function InterlockGraph(): ReactElement {
    const skillRef = useRef<HTMLInputElement>(null)
    const statRef = useRef<HTMLInputElement>(null)
    const [results, setResults] = useState<LineChartData[]>(simulateRolls(DEFAULT_STAT_VALUE, DEFAULT_SKILL_VALUE))

    const handleSubmit = useCallback(() => {
        const stat = statRef.current ? parseInt(statRef.current.value) : 0
        const skill = skillRef.current ? parseInt(skillRef.current.value) : 0
        const newResults = simulateRolls(stat, skill)
        setResults(newResults)
    }, [])

    return (
        <div className="flex flex-col items-center gap-12 p-4">
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex flex-col space-y-4 sm:flex-row sm:gap-4 sm:space-y-0">
                    <div className="flex justify-between gap-4">
                        <span className="my-auto font-medium">Caratteristica:</span>
                        <input
                            type="number"
                            min="1"
                            max="10"
                            ref={statRef}
                            defaultValue={DEFAULT_STAT_VALUE}
                            className="w-20 rounded-sm border p-2"
                        />
                    </div>
                    <div className="flex justify-between gap-4">
                        <span className="my-auto font-medium">Abilità:</span>
                        <input
                            type="number"
                            min="1"
                            max="10"
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

            <LineChart data={results} />

            <div className="text-center">
                <p className="text-sm text-gray-500">
                    I valori sopra esposti rappresentano il risultato di 50 tiri di dado con un dado a 10 facce, sommando il
                    valore della caratteristica, dell&apos;abilità e il risultato del dado.
                </p>
            </div>
        </div>
    )
}
