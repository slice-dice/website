'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function GraphRule({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div className="mb-8">
            <div>
                <button
                    className="transition-color flex w-full items-center justify-between rounded-lg bg-[#094f56] px-4 py-2 text-left text-white duration-300 ease-in-out hover:bg-[#0c6b75] focus:outline-none"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <h3 className="text-lg font-bold">Regole</h3>
                    <ChevronDown
                        className={`transform ${collapsed ? 'rotate-0' : 'rotate-180'} transition-transform duration-300 ease-in-out`}
                    />
                </button>
            </div>
            <div
                className={`transition-max-height w-full overflow-hidden duration-500 ease-in-out ${collapsed ? 'max-h-0' : 'max-h-screen'}`}
            >
                {children}
            </div>
        </div>
    )
}
