import Image from 'next/image'
import React from 'react'

function Product({ image_url, name, total_price, quantity, id, handleRemoveItem, handleUpdateItem, loading }) {
    return (
        <div key={id} disabled={loading} className="flex gap-clamp-14 3xl:gap-clamp-16 border-b border-gray400 py-clamp-20 disabled:bg-[rgb(34 33 33)] relative">
            {/* Thumbnail placeholder */}
            <div className="relative w-[clamp(90px,6.875vw,132px)] h-auto bg-full rounded-[2px] shrink-0 flex items-center justify-center">
                <Image src={image_url} className="object-cover bg-full" fill alt={name} />
            </div>

            <div className="flex flex-col gap-clamp-10 flex-1">
                <p className="text-light400 font-bold text-clamp-20 3xl:text-clamp-28 leading-none uppercase">
                    {name}
                </p>

                {/* <div className='flex gap-clamp-24'>
                    <p className='text-clamp-16 text-gray200 leading-'>
                        Pure Gold
                    </p>
                    <p className='text-clamp-16 text-gray200 leading-'>
                        24K
                    </p>
                    <p className='text-clamp-16 text-gray200 leading-'>
                        Round
                    </p>
                </div> */}

                <div className="flex items-center gap-clamp-18 3xl:gap-clamp-20 mt-auto">
                    {/* Qty controls */}
                    <div className="flex items-center gap-clamp-10 border border-gray400 rounded-[2px] bg-gray400 w-fit">
                        <button disabled={quantity === 1 || loading} onClick={() => handleUpdateItem({ item_id: id, quantity: quantity > 0 && quantity - 1 })} className="px-clamp-10 py-clamp-6 text-gold100 hover:text-light400 transition-colors text-clamp-16">−</button>
                        <span className="text-light400 text-clamp-14 min-w-[20px] text-center">{quantity}</span>
                        <button disabled={loading} onClick={() => handleUpdateItem({ item_id: id, quantity: quantity + 1 })} className="px-clamp-10 py-clamp-6 text-gold100 hover:text-light400 transition-colors text-clamp-16 ">+</button>
                    </div>
                    <span className="text-light400 font-thin text-clamp-16 3xl:text-clamp-18 leading-none">
                        {total_price} EGP
                    </span>
                </div>
            </div>

            {/* Remove */}
            <button disabled={loading} onClick={() => handleRemoveItem({ item_id: id })} className="text-gray200 hover:text-light400 transition-colors self-start shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-24 h-clamp-24" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7929 6.79289C16.1834 6.40237 16.8164 6.40237 17.207 6.79289C17.5975 7.18342 17.5975 7.81643 17.207 8.20696L13.414 11.9999L17.207 15.7929C17.5975 16.1834 17.5975 16.8164 17.207 17.207C16.8164 17.5975 16.1834 17.5975 15.7929 17.207L11.9999 13.414L8.20696 17.207C7.81643 17.5975 7.18342 17.5975 6.79289 17.207C6.40237 16.8164 6.40237 16.1834 6.79289 15.7929L10.5859 11.9999L6.79289 8.20696C6.40237 7.81643 6.40237 7.18342 6.79289 6.79289C7.18342 6.40237 7.81643 6.40237 8.20696 6.79289L11.9999 10.5859L15.7929 6.79289Z" fill="#D44040" />
                </svg>
            </button>
            {loading &&
                <div className="absolute inset-0 bg-black/20" />
            }
        </div>
    )
}

export default Product