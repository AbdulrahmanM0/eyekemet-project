import { Item } from '@radix-ui/react-accordion'
import Image from 'next/image'
import React from 'react'

function Product({ image_url, name, total_price, quantity, id, modifiers, loading, eye }) {
    return (
        <div className="relative py-clamp-32 flex gap-clamp-24 flex-wrap border-b border-b-gray400">
            {/* product img  */}
            <div>
                <Image src={image_url} width={132} height={132} className="bg-[#101010] w-[clamp(100px,6.875vw,132px)] h-[clamp(100px,6.875vw,132px)]" alt="product image" />
            </div>
            {/* product details */}
            <div className="justify-center flex flex-1 flex-col gap-clamp-16">
                {/* title  */}
                <h4 className="text-light400 text-clamp-28 font-bold uppercase leading-[1.2]">
                    {name}
                </h4>

                {/* categories  */}
                <div className='flex gap-clamp-24'>
                    {modifiers && modifiers.length > 0 &&
                        modifiers.map((item, index) => (
                            < p key={index} className='text-clamp-16 text-gray200 leading-[0.7]'>
                                {item}
                            </p>
                        ))
                    }
                </div>

                <div className="flex flex-wrap gap-clamp-20">
                    <div className="text-light400 text-clamp-18">
                        Quantity: {quantity}
                    </div>
                    {/* eye picture  */}
                    <div className="flex gap-clamp-14">
                        <Image src={eye || "/images/bannars/eye.png"} className='w-[24px] h-[24px] object-cover chrink-0' width={24} height={24} alt="user eye picture" />
                        {/* user name  */}
                        <div className="text-light400 text-clamp-18">
                            Iris Blueprinted
                        </div>
                    </div>
                </div>

            </div>

            {/* price and descounnts  */}
            <div className="flex flex-col gap-clamp-24 items-end justify-center">
                <h6 className="text-clamp-28 text-gold100 uppercase font-bold leading-[0.7]">
                    EGP {total_price}
                </h6>
                {/* <p className="text-green100 text-clamp-16 leading-[0.7] whtespace-nowrap">
                    You save : EGP 10,000
                </p> */}
            </div>
            {loading &&
                <div className="absolute inset-0 bg-black/20" />
            }
        </div >
    )
}

export default Product