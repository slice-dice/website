'use client'

import { useState, useCallback, ReactElement, useEffect } from 'react'
import { LineChart, LineChartData } from './charts/line-chart'

const ROLLS = 50
const DICE_FACES = 10

export function InterlockGraph(): ReactElement {
    const [skill, setSkill] = useState<number>(5)
    const [stat, setStat] = useState<number>(6)
    const [results, setResults] = useState<LineChartData[]>([])

    const simulateRolls = useCallback(() => {
        const resultsArray: LineChartData[] = []

        // Simulate 50 dice rolls
        for (let i = 0; i < ROLLS; i++) {
            const roll = Math.floor(Math.random() * DICE_FACES) + 1
            const value = roll + stat + skill

            resultsArray.push({ name: i + 1, value })
        }

        setResults(resultsArray)
    }, [skill, stat])

    useEffect(() => {
        simulateRolls()
    }, [simulateRolls])

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
                            value={stat}
                            onChange={(e) => setStat(Math.min(10, Math.max(1, Number(e.target.value))))}
                            className="w-20 rounded-sm border p-2"
                        />
                    </div>
                    <div className="flex justify-between gap-4">
                        <span className="my-auto font-medium">Abilità:</span>
                        <input
                            type="number"
                            min="1"
                            max="10"
                            value={skill}
                            onChange={(e) => setSkill(Math.min(10, Math.max(1, Number(e.target.value))))}
                            className="w-20 rounded-sm border p-2"
                        />
                    </div>
                </div>
                <button
                    onClick={simulateRolls}
                    className="mx-auto whitespace-nowrap rounded-sm bg-[#CC4A49] px-4 py-2 text-white transition-colors hover:bg-[#a63c3b]"
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
