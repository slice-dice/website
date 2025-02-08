'use client'

import { useState, useCallback, ReactElement, useEffect } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const COLORS = ['#2B6B5E', '#CC4A49']
const ROLLS = 50
const DICE_NUMBER = 3
const DICE_FACES = 6

interface RollResult {
    name: string
    value: number
}

export function GurpsGraph(): ReactElement {
    const [skill, setSkill] = useState<number>(10)
    const [results, setResults] = useState<RollResult[]>([
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
                    className="w-20 rounded border p-2"
                />
                <button
                    onClick={simulateRolls}
                    className="rounded bg-[#CC4A49] px-4 py-2 text-white transition-colors hover:bg-[#a63c3b]"
                >
                    Tira i dadi
                </button>
            </div>

            <div className="h-[400px] w-full max-w-[600px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={results}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={150}
                            label={({ name, value }) => `${name}: ${value}`}
                        >
                            {results.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="text-center">
                <p className="text-sm text-gray-500">
                    I valori sopra esposti rappresentano il numero di successi e fallimenti ottenuti su 50 tiri di dado.
                </p>
            </div>
        </div>
    )
}
