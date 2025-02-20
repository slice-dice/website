import { ReactElement } from 'react'
import { LineChart as RechartsLineChart, Line, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

export interface LineChartData {
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

export const LineChart = ({ data }: { data: Array<LineChartData> }): ReactElement => {
    return (
        <div className="h-[400px] w-full max-w-[600px] md:max-w-full">
            <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <YAxis domain={[0, 30]} label={{ angle: -90, position: 'insideLeft' }} />
                    <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                    <Line type="monotone" dataKey="value" stroke="#CC4A49" strokeWidth={2} dot={false} />
                </RechartsLineChart>
            </ResponsiveContainer>
        </div>
    )
}
