import ShareLinks from '@/components/items/links/ShareLinks'
import { contactinfo } from '@/data/aboutus'
import React from 'react'

function Details() {
    return (
        <div className='w-[clamp(300px,29.479vw,566px)] py-clamp-24 flex flex-col justify-between gap-clamp-24'>
            <p className='text-clamp-18 text-gray200 leadng-[1.3]'>
                Thank you for your interest in Eye Kemet. Our friendly staff can advise and answer all your questions. We provide interest-free layaway plans, financing, free jewelry cleaning and inspection, and monthly specials.
            </p>

            {/* contact info  */}
            <div className='flex flex-col gap-clamp-16'>
                {contactinfo.map((item, index) => (
                    <div className='flex gap-clamp-16 items-center' key={index + item.label}>
                        <div>{item.icon}</div>
                        <div className='text-clamp-18 text-light400'>{item.label}</div>
                    </div>
                ))}
            </div>

            {/* social lnks  */}
            <div>
                <ShareLinks title={"Follow us"} />
            </div>
        </div>
    )
}

export default Details