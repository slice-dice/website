'use client'

import { useState, useCallback, ReactElement, useEffect } from 'react'
import { BarChart, Bar, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

const ROLLS = 50
const DICE_FACES = 10

interface RollResult {
    name: number
    value: number
}

interface CustomTooltipProps {
    active?: boolean
    payload?: Array<{
        value: number
    }>
    label?: number
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-md border border-gray-200 bg-white p-2 shadow-md">
                {label !== undefined && (
                    <p className="text-sm">
                        Tiro no.<span className="font-bold">{label + 1}</span>
                    </p>
                )}
                <p className="text-sm">
                    Successi: <span className="font-bold">{payload[0].value}</span>
                </p>
            </div>
        )
    }
    return null
}

export function StorytellerSystemGraph(): ReactElement {
    const [dices, setDices] = useState<number>(6)
    const [difficulty, setDifficulty] = useState<number>(6)
    const [results, setResults] = useState<RollResult[]>([])

    const simulateRolls = useCallback(() => {
        const resultsArray: RollResult[] = []

        // Simulate 50 dice rolls
        for (let i = 0; i < ROLLS; i++) {
            let successes = 0

            for (let j = 0; j < dices; j++) {
                const roll = Math.floor(Math.random() * DICE_FACES) + 1

                if (roll >= difficulty) {
                    successes++
                }
            }

            resultsArray.push({ name: i + 1, value: successes })
        }

        setResults(resultsArray)
    }, [dices, difficulty])

    useEffect(() => {
        simulateRolls()
    }, [simulateRolls])

    return (
        <div className="flex flex-col items-center gap-12 p-4">
            <div className="flex gap-4">
                <span className="my-auto font-medium">Pool di dadi (d10):</span>
                <input
                    type="number"
                    min="1"
                    max="10"
                    value={dices}
                    onChange={(e) => setDices(Math.min(10, Math.max(1, Number(e.target.value))))}
                    className="w-20 rounded border p-2"
                />

                <span className="my-auto font-medium">Difficoltà:</span>
                <input
                    type="number"
                    min="1"
                    max="10"
                    value={difficulty}
                    onChange={(e) => setDifficulty(Math.min(10, Math.max(1, Number(e.target.value))))}
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
                    <BarChart data={results} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <YAxis
                            domain={[0, 10]}
                            label={{
                                angle: -90,
                                position: 'insideLeft',
                            }}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }} />
                        <Bar dataKey="value" fill="#CC4A49" maxBarSize={20} barSize={10} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="text-center">
                <p className="text-sm text-gray-500">
                    I valori sopra esposti rappresentano il numero di successi ottenuti su 50 tiri di {dices}{' '}
                    {dices === 1 ? 'dado' : 'dadi'} a 10 facce con difficoltà {difficulty}.
                </p>
            </div>
        </div>
    )
}
