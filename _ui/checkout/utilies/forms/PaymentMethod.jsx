import { paymentmethods } from '@/data/payment'
import Image from 'next/image'
import React from 'react'

function PaymentMethod({register,loading}) {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-clamp-20 min-w-[320px]'>
            <div className="sm:col-span-2 flex flex-col gap-clamp-24">
                <h3 className='text-clamp-36 text-light400 uppercase font-bold leading-none'>
                    Payment method
                </h3>
                <p className="text-clamp-18 text-gray200 leading-none">
                    Choose the payment method that works best for you. All transactions are secure and encrypted.
                </p>
            </div>

            {/* payment options  */}
            <div className='sm:col-span-2 p-clamp-32 grid lg:grid-cols-2 gap-clamp-24 border border-gray400'>
                {paymentmethods.map((item, index) => (
                    <div key={index} className='p-clamp-20 w-full gap-clamp-16 flex bg-wd500'>
                        {/* checkbox  */}
                        <label htmlFor="remember" className="flex items-center gap-3 select-none">
                            {/* Hidden checkbox */}
                            <input
                                type="radio"
                                id="remember"
                                className="peer hidden diabled:opacity-[20%]"
                                checked={index == 0}
                                disabled
                            />
                            {/* Custom box */}
                            <div className="h-clamp-24 w-clamp-24 border border-gray300 rounded 
                                            flex items-center justify-center
                                            transition-all duration-200
                                            peer-checked:bg-gold100 peer-checked:border-black">
                                {/* Check icon */}
                                <svg className="transition-opacity duration-200 shrink-0" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.6678 3.66781C11.0583 3.27745 11.6914 3.27735 12.0818 3.66781C12.472 4.0583 12.4721 4.69141 12.0818 5.08187L6.53983 10.6239C6.35231 10.8113 6.09793 10.9168 5.8328 10.9168C5.56767 10.9168 5.31329 10.8113 5.12577 10.6239L2.50077 7.99886C2.11034 7.60842 2.1105 6.97533 2.50077 6.5848C2.8913 6.19429 3.52432 6.19426 3.91483 6.5848L5.8328 8.50277L10.6678 3.66781Z" fill="#292929" />
                                </svg>
                            </div>
                        </label>
                        {/* payment method  */}
                        <div className='flex flex-col gap-clamp-14 flex-1'>
                            <h5 className='text-light400 text-clamp-18 leading-[0.7]'>
                                {item.title}
                            </h5>
                            <p className='text-gray200 text-clamp-16 leading-[0.7]'>
                                {item.slogan}
                            </p>
                        </div>
                        <div className='h-fit my-auto'>
                            <Image src={`/images/payment/${item.logo}`} className='w-auto h-auto' width={24} height={24} alt={item.title}/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PaymentMethod