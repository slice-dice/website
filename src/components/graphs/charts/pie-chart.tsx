import { ReactElement } from 'react'
import { PieChart as RechartPieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

export interface PieChartData {
    name: string
    value: number
}

export const PieChart = ({
    data,
    colors,
}: {
    data: Array<{ name: string; value: number }>
    colors: string[]
}): ReactElement => {
    return (
        <div className="h-[400px] w-full max-w-[600px] md:max-w-full">
            <ResponsiveContainer width="100%" height="100%">
                <RechartPieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        labelLine={{
                            className: 'hidden sm:block',
                        }}
                        label={({ cx, cy, midAngle, innerRadius, outerRadius, value, name }) => {
                            if (value === 0) return null

                            if (window.innerWidth >= 640) {
                                return `${name}: ${value}`
                            } else {
                                const RADIAN = Math.PI / 180
                                const radius = innerRadius + (outerRadius - innerRadius) * 0.7
                                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                                return (
                                    <text
                                        x={x}
                                        y={y}
                                        fill="white"
                                        textAnchor={x > cx ? 'start' : 'end'}
                                        dominantBaseline="central"
                                    >
                                        {value}
                                    </text>
                                )
                            }
                        }}
                    >
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </RechartPieChart>
            </ResponsiveContainer>
        </div>
    )
}
