import { ReactElement } from 'react'
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

export interface PieChartData {
    name: string
    value: number
    [key: string]: string | number
}

export const PieChart = ({
    data,
    colors,
}: {
    data: Record<string, PieChartData> | PieChartData[]
    colors: string[]
}): ReactElement => {
    const chartData = Array.isArray(data) ? data : Object.values(data)

    return (
        <div className="h-[400px] w-full max-w-[600px] md:max-w-full">
            <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                    <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        labelLine={{
                            className: 'hidden sm:block',
                        }}
                        label={({ cx, cy, midAngle, innerRadius, outerRadius, value, name }) => {
                            if (value === 0 || midAngle === undefined || midAngle === null) return null

                            if (window.innerWidth >= 640) {
                                return `${name}: ${value}`
                            } else {
                                const RADIAN = Math.PI / 180
                                const radius =
                                    (innerRadius as number) + ((outerRadius as number) - (innerRadius as number)) * 0.7
                                const x = (cx as number) + radius * Math.cos(-midAngle * RADIAN)
                                const y = (cy as number) + radius * Math.sin(-midAngle * RADIAN)

                                return (
                                    <text
                                        x={x}
                                        y={y}
                                        fill="white"
                                        textAnchor={x > (cx as number) ? 'start' : 'end'}
                                        dominantBaseline="central"
                                    >
                                        {String(value)}
                                    </text>
                                )
                            }
                        }}
                    >
                        {chartData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </RechartsPieChart>
            </ResponsiveContainer>
        </div>
    )
}
