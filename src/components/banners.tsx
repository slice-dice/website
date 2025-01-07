import Image from 'next/image'

export function Banners() {
    return (
        <div className="mt-11 flex flex-col items-center justify-center">
            <Image src="/banner.png" alt="Banner" width={280} height={70} />
            <Image src="/bannerw.png" alt="Banner White" width={280} height={70} />
        </div>
    )
}
