import Image from 'next/image'
import React from 'react'

function loading() {
    return (
        <div
            className="w-full h-screen bg-center bg-cover relative overflow-hidden"
            style={{
                backgroundImage:
                    "url(/images/bannars/black-background-with-black-background-with-pattern.png)",
            }}
        >
            <Image
                data-aos="fade-right"
                data-aos-duration="800"
                className="h-full w-auto absolute left-0 top-0"
                src="/images/items/mask.png"
                alt="pharo mask"
                width={610}
                height={1080}
            />

            <div
                data-aos="fade-left"
                data-aos-duration="800"
                className="absolute right-0 top-0 h-full"
            >
                <Image
                    className="h-full w-auto scale-x-[-1]"
                    src="/images/items/mask.png"
                    alt="pharo mask"
                    width={610}
                    height={1080}
                />
            </div>
        </div>
    )
}

export default loading