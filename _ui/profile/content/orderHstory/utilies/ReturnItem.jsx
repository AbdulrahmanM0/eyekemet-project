import Image from 'next/image'
import React from 'react'

function ReturnItem({ item, customClass }) {
    return (
        <div className='flex gap-clamp-10'>

            <label
                className="flex items-center gap-clamp-24 cursor-pointer select-none p-cclamp-8"
            >
                <input
                    type="checkbox"
                    className="peer hidden"
                    name="type"
                // checked={!!checked[item.id]}
                // onChange={() => toggle(item.id)}
                />

                <div className="h-5 w-5 border border-gray-300 rounded flex items-center justify-center transition-all duration-200 peer-checked:bg-gold100 peer-checked:border-black">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        className="transition-colors duration-200 text-[#292929] peer-checked:text-white fill-current"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.45975 0.292807C8.85029 -0.0975503 9.48334 -0.0976547 9.87382 0.292807C10.264 0.683296 10.2641 1.31641 9.87382 1.70687L4.33182 7.24886C4.1443 7.43629 3.88993 7.54183 3.62479 7.54183C3.35966 7.54183 3.10528 7.43629 2.91776 7.24886L0.292762 4.62386C-0.0976644 4.23342 -0.0975099 3.60033 0.292762 3.2098C0.683296 2.81929 1.31631 2.81926 1.70682 3.2098L3.62479 5.12777L8.45975 0.292807Z"
                        />
                    </svg>
                </div>
                <span className="text-white text-clamp-16 font-light">{item.label}</span>
            </label>

            <div className='flex flex-col lg:flex-row gap-clamp-30 lg:items-center items-start text-gray200' >
                <div className='shrink-0'>
                    <Image src={item?.image_url} className={` w-[147px] h-[151px] object-cover ${customClass}`} width={147} height={151} alt={item?.name} />
                </div>
                <div className='flex items-center justify-between gap-clamp-24 w-full'>
                    <div className='flex flex-col gap-clamp-14 '>
                        <h4 className='text-clamp-14 3xl:text-clamp-16 uppercase text-light400 font-bold leading-[1.2]'>
                            {item?.name}
                        </h4>

                        <div className='flex flex-wrap items-center gap-clamp-20'>
                            <div className='text-light400 text-clamp-14'>
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

export default ReturnItem