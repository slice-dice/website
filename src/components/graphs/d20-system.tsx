'use client'

import { useState, useCallback, ReactElement, useEffect } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const COLORS = ['#2B6B5E', '#CC4A49']
const ROLLS = 50
const DICE_FACES = 20

interface RollResult {
    name: string
    value: number
}

export function D20System(): ReactElement {
    const [difficulty, setDifficulty] = useState<number>(20)
    const [stat, setStat] = useState<number>(16)
    const [skill, setSkill] = useState<number>(9)
    const [results, setResults] = useState<RollResult[]>([
        { name: 'Successi', value: 0 },
        { name: 'Fallimenti', value: 0 },
    ])

    const simulateRolls = useCallback(() => {
        let successes = 0

        // Simulate 50 dice rolls
        for (let i = 0; i < ROLLS; i++) {
            const roll = Math.floor(Math.random() * DICE_FACES) + 1
            const sum = roll + (stat - 10) / 2 + skill

            if (sum >= difficulty) {
                successes++
            }
        }

        setResults([
            { name: 'Successi', value: successes },
            { name: 'Fallimenti', value: ROLLS - successes },
        ])
    }, [difficulty, skill, stat])

    useEffect(() => {
        simulateRolls()
    }, [simulateRolls])

    return (
        <div className="flex flex-col items-center gap-12 p-4">
            <div className="flex gap-4">
                <span className="my-auto font-medium">CD:</span>
                <input
                    type="number"
                    min="1"
                    max="40"
                    value={difficulty}
                    onChange={(e) => setDifficulty(Math.min(40, Math.max(1, Number(e.target.value))))}
                    className="w-20 rounded border p-2"
                />
                <span className="my-auto font-medium">Caratteristica:</span>
                <input
                    type="number"
                    min="6"
                    max="24"
                    value={stat}
                    onChange={(e) => setStat(Math.min(24, Math.max(6, Number(e.target.value))))}
                    className="w-20 rounded border p-2"
                />
                <span className="my-auto font-medium">Gradi:</span>
                <input
                    type="number"
                    min="1"
                    max="20"
                    value={skill}
                    onChange={(e) => setSkill(Math.min(20, Math.max(1, Number(e.target.value))))}
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
