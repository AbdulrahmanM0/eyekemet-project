import Image from 'next/image'
import React from 'react'

function Item({item,customClass}) {
    return (
        <div className='flex flex-col lg:flex-row gap-clamp-30 lg:items-center items-start text-gray200' >
            <div className='shrink-0'>
                <Image src={item?.image_url} className={` w-[147px] h-[151px] object-cover ${ customClass}`} width={147} height={151} alt={item?.name} />
            </div>
            <div >
                <div className='flex flex-col gap-clamp-16 '>
                    <h4 className='text-clamp-24 3xl:text-clamp-28 uppercase text-light400 font-bold leading-[1.2]'>
                        {item?.name}
                    </h4>

                    <div className='flex flex-wrap items-center gap-clamp-20'>
                        <div className='text-light400 text-clamp-18'>
                            Quantity: {item?.quantity}
                        </div>
                    </div>

                    <div className='flex gap-clamp-20 text-gray200 text-clamp-14 3xl:text-clamp-16 leading-[0.7]'>
                        {
                            item?.quantity == 1 &&
                            <div className='flex gap-clamp-10 text-clamp-14 text-gray200 '>
                                Item Price: {item.unit_price}
                            </div>
                        }
                    </div>
                    <div className='flex flex-col gap-clamp-10'>
                        <div className='text-gold100 3xl:text-clamp-20 text-clamp-18 font-bold uppercase leading-[1.2]'>
                            EGP {item?.total_price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item