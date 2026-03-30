"use client"
import Head from '@/_ui/profile/content/utilies/Head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function DeliverTo({ alladdress, setValue }) {
    const [selectedId, setSelectedId] = useState(null);
    console.log("alladdress", alladdress)

    useEffect(() => {
        if (alladdress?.length) {
            const defaultItem = alladdress.find(i => i?.is_default);
            if (defaultItem) {
                setSelectedId(defaultItem.id);

                setValue("delivery_address", formatAddress(defaultItem));
            }
        }
    }, [alladdress]);

    const formatAddress = (item) => {
        return `${item.building_number || ""}, ${item.street || ""}, ${item.floor ? `${item.floor}th floor` : ""
            }, ${item.address || ""}`
            .replace(/(, )+/g, ", ")
            .replace(/^, |, $/g, "");
    };

    return (
        <section>
            <div className="flex justify-between mb-clamp-20">
                <Head head={"Delivery to"} slogan={"Choose the address you want to receive your order"} />
                <div className='w-fit'>
                    <Link href={`/profile/address/add`} className='secondary-btn whitespace-nowrap shrink-0 !w-fit !leading-[1.2]'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-24 h-clamp-24" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 5C12.5523 5 13 5.44772 13 6V11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H11V6C11 5.44772 11.4477 5 12 5Z" fill="#FEFEFE" />
                        </svg>
                        Add new address
                    </Link>
                </div>
            </div>
            <div className='p-clamp-30 flex flex-col gap-clamp-20 border-gray400 border'>
                {alladdress.length > 0 ? alladdress.map((item, index) => (
                    <div key={item?.id || index} className='p-clamp-20 rounded-[2px] border border-gray400 bg-wd700 flex flex-col gap-clamp-24'>
                        {/* address  */}
                        <div className='flex gap-clamp-18'>
                            {/* btn  */}
                            <div className="md:col-span-2">
                                <label
                                    className="flex items-center gap-clamp-16 cursor-pointer select-none"
                                >
                                    <input
                                        type="checkbox"
                                        className="peer hidden"
                                        checked={selectedId === item?.id}
                                        onChange={() => {
                                            setSelectedId(item?.id);
                                            const formatted = formatAddress(item);
                                            setValue("delivery_address", formatted, {
                                                shouldValidate: true,
                                                shouldDirty: true
                                            });
                                        }}
                                    />
                                    <div className="h-clamp-24 w-clamp-24 border border-gray300 rounded flex items-center justify-center transition-all duration-200 peer-checked:bg-gold100 peer-checked:border-black">
                                        <svg
                                            className="transition-opacity duration-200 shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10.6678 3.66781C11.0583 3.27745 11.6914 3.27735 12.0818 3.66781C12.472 4.0583 12.4721 4.69141 12.0818 5.08187L6.53983 10.6239C6.35231 10.8113 6.09793 10.9168 5.8328 10.9168C5.56767 10.9168 5.31329 10.8113 5.12577 10.6239L2.50077 7.99886C2.11034 7.60842 2.1105 6.97533 2.50077 6.5848C2.8913 6.19429 3.52432 6.19426 3.91483 6.5848L5.8328 8.50277L10.6678 3.66781Z"
                                                fill="#292929"
                                            />
                                        </svg>
                                    </div>
                                </label>
                            </div>
                            {/* address  */}
                            <div className='flex-1 flex flex-col gap-clamp-14'>
                                {/* label  */}
                                <h6 className='text-clamp-16 3xl:text-clamp-18 text-light400'>
                                    {item?.label}
                                </h6>
                                <p className='text-clamp-14 text-gray200 '>
                                    {item?.building_number}, {item?.street}, {item?.floor}th floor, {item?.address}
                                </p>
                                {/* <div className='text-clamp-14 text-light400'>
                                    +2 010 0552 267
                                </div> */}
                            </div>
                            {/* change addresss  */}
                            <div className='w-fit'>
                                <Link href={`/profile/address/add?id=${item?.id}`} className='border border-gold100 flex gap-clamp-10 py-clamp-12 px-clamp-24 text-clamp-14 font-bold text-balance uppercase leading-[0.7] rounded-[2px] w-full text-center justify-center items-center uppercase'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-16 3xl:w-clamp-18 h-clamp-16 3xl:h-clamp-18' width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M2 13L1 17L5 16L16.5858 4.41421C17.3668 3.63316 17.3668 2.36683 16.5858 1.58579L16.4142 1.41421C15.6332 0.633165 14.3668 0.633166 13.5858 1.41421L2 13Z" stroke="#F7F2EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 13L1 17L5 16L15 6L12 3L2 13Z" fill="#F7F2EA" />
                                        <path d="M12 3L15 6" stroke="#F7F2EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 17H18" stroke="#F7F2EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Change
                                </Link>
                            </div>
                        </div>
                    </div>
                )): 
                <h3 className='text-clamp-16 text-gray200 leading-[1.2]'>
                    Please Provide an address to deliver your order, you can add a new address by clicking the "Add new address" button. 
                </h3>
                }
            </div>

        </section>
    )
}

export default DeliverTo