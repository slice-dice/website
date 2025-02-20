import { ReactElement } from 'react'
import { BarChart as RechartsBarChart, Bar, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

export interface BarChartData {
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

export const BarChart = ({ data }: { data: Array<BarChartData> }): ReactElement => {
    return (
        <div className="h-[400px] w-full max-w-[600px] md:max-w-full">
            <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <YAxis
                        domain={[0, 10]}
                        label={{
                            angle: -90,
                            position: 'insideLeft',
                        }}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }} />
                    <Bar dataKey="value" fill="#CC4A49" maxBarSize={20} barSize={10} />
                </RechartsBarChart>
            </ResponsiveContainer>
        </div>
    )
}
