import Image from 'next/image'
import { ReactElement } from 'react'

import heroImage from '@/assets/images/hero.png'

export async function Hero(): Promise<ReactElement> {
    return (
        <div className="mt-px">
            <Image src={heroImage} alt={`Slice & Dice Hero`} className="h-ato m-0 w-full align-top" />
        </div>
    )
}
