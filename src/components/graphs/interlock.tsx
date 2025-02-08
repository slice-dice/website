'use client'

import { useState, useCallback, ReactElement, useEffect } from 'react'
import { LineChart, Line, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

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
                    Risultato: <span className="font-bold">{payload[0].value}</span>
                </p>
            </div>
        )
    }
    return null
}

export function InterlockGraph(): ReactElement {
    const [skill, setSkill] = useState<number>(5)
    const [stat, setStat] = useState<number>(6)
    const [results, setResults] = useState<RollResult[]>([])

    const simulateRolls = useCallback(() => {
        const resultsArray: RollResult[] = []

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
            <div className="flex gap-4">
                <span className="my-auto font-medium">Caratteristica:</span>
                <input
                    type="number"
                    min="1"
                    max="10"
                    value={stat}
                    onChange={(e) => setStat(Math.min(10, Math.max(1, Number(e.target.value))))}
                    className="w-20 rounded border p-2"
                />
                <span className="my-auto font-medium">Abilità:</span>
                <input
                    type="number"
                    min="1"
                    max="10"
                    value={skill}
                    onChange={(e) => setSkill(Math.min(10, Math.max(1, Number(e.target.value))))}
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
                    <LineChart data={results} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <YAxis domain={[0, 30]} label={{ angle: -90, position: 'insideLeft' }} />
                        <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                        <Line type="monotone" dataKey="value" stroke="#CC4A49" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="text-center">
                <p className="text-sm text-gray-500">
                    I valori sopra esposti rappresentano il risultato di 50 tiri di dado con un dado a 10 facce, sommando il
                    valore della caratteristica, dell&apos;abilità e il risultato del dado.
                </p>
            </div>
        </div>
    )
}
