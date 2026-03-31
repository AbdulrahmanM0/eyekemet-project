
import Link from 'next/link'
import Dialog from './Dialog'
import Remove from './Remove'


function Address({ status, order_number, address, label, street, building_number, floor, apartment, id }) {
    const info = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13.333 1.5C13.8283 1.5 14.2388 1.8603 14.3184 2.33301H16.666C17.2182 2.33301 17.6658 2.78087 17.666 3.33301V14.666C17.666 16.3229 16.3229 17.666 14.666 17.666H5.33301C3.6763 17.6658 2.33301 16.3228 2.33301 14.666V3.33301C2.33318 2.78098 2.78098 2.33318 3.33301 2.33301H5.68164C5.76119 1.8603 6.17167 1.5 6.66699 1.5C7.16215 1.50016 7.57181 1.86043 7.65137 2.33301H12.3486C12.4282 1.86043 12.8378 1.50016 13.333 1.5ZM4.33301 5.66699H15.666V4.33301H14.3184C14.2391 4.80608 13.8286 5.16699 13.333 5.16699C12.8376 5.16683 12.4279 4.80595 12.3486 4.33301H7.65137C7.57207 4.80595 7.16238 5.16683 6.66699 5.16699C6.17144 5.16699 5.76093 4.80608 5.68164 4.33301H4.33301V5.66699Z" fill="#969696" />
            </svg>,
            body: "Order Date : 4 Oct 2025"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13.333 1.5C13.8283 1.5 14.2388 1.8603 14.3184 2.33301H16.666C17.2182 2.33301 17.6658 2.78087 17.666 3.33301V14.666C17.666 16.3229 16.3229 17.666 14.666 17.666H5.33301C3.6763 17.6658 2.33301 16.3228 2.33301 14.666V3.33301C2.33318 2.78098 2.78098 2.33318 3.33301 2.33301H5.68164C5.76119 1.8603 6.17167 1.5 6.66699 1.5C7.16215 1.50016 7.57181 1.86043 7.65137 2.33301H12.3486C12.4282 1.86043 12.8378 1.50016 13.333 1.5ZM4.33301 5.66699H15.666V4.33301H14.3184C14.2391 4.80608 13.8286 5.16699 13.333 5.16699C12.8376 5.16683 12.4279 4.80595 12.3486 4.33301H7.65137C7.57207 4.80595 7.16238 5.16683 6.66699 5.16699C6.17144 5.16699 5.76093 4.80608 5.68164 4.33301H4.33301V5.66699Z" fill="#969696" />
            </svg>,
            body: "Delivery Date :Get it by 10 Oct 2025"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.70878 3.87683C7.63055 0.95506 12.368 0.955179 15.2898 3.87683C18.2117 6.79866 18.2117 11.5361 15.2898 14.4579L10.7068 19.0409C10.3163 19.4313 9.68323 19.4314 9.29276 19.0409L4.70878 14.4579C1.78718 11.5361 1.78717 6.79861 4.70878 3.87683ZM9.9998 7.66785C9.17141 7.6679 8.4998 8.33945 8.4998 9.16785V9.17663C8.5003 10.0046 9.17172 10.6766 9.9998 10.6766H10.0086C10.8364 10.6763 11.5081 10.0044 11.5086 9.17663V9.16785C11.5086 8.33965 10.8367 7.66822 10.0086 7.66785H9.9998Z" fill="#969696" />
            </svg>,
            body: "Ship to : 7 AbdelMonaem Fawzy El Nozha, New Caio, Egypt"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                <path d="M7.73917 1.04766L7.995 0.93933C10.37 -0.117337 12.7283 -0.0915032 14.2708 0.10933L14.6125 0.157663L14.9225 0.210163L15.2 0.26433L15.4417 0.31683C16.1617 0.48183 16.6117 1.09766 16.6617 1.75933L16.6667 1.88433V11.5385C16.6667 12.3943 15.8533 12.956 15.0892 12.7802L14.8558 12.7285L14.585 12.6768L14.2808 12.6268C14.1102 12.6011 13.9391 12.5791 13.7675 12.561L13.39 12.5277C12.1542 12.441 10.545 12.5285 8.9275 13.186L8.67167 13.2943C6.48 14.2693 4.30167 14.3227 2.76583 14.1668L2.39583 14.1252L2.05417 14.0752L1.74417 14.0227L1.60083 13.996L1.22583 13.9168C0.505 13.7518 0.055 13.136 0.00500003 12.4743L0 12.3493V2.69516C0 1.83933 0.813333 1.27683 1.5775 1.4535L1.81083 1.50516L2.08167 1.55683L2.38583 1.60683C3.66583 1.7985 5.69583 1.8785 7.73917 1.04766ZM8.33333 3.7835C7.44928 3.7835 6.60143 4.13469 5.97631 4.75981C5.35119 5.38493 5 6.23278 5 7.11683C5 8.00089 5.35119 8.84873 5.97631 9.47385C6.60143 10.099 7.44928 10.4502 8.33333 10.4502C9.21739 10.4502 10.0652 10.099 10.6904 9.47385C11.3155 8.84873 11.6667 8.00089 11.6667 7.11683C11.6667 6.23278 11.3155 5.38493 10.6904 4.75981C10.0652 4.13469 9.21739 3.7835 8.33333 3.7835ZM8.33333 5.45016C8.77536 5.45016 9.19928 5.62576 9.51184 5.93832C9.8244 6.25088 10 6.6748 10 7.11683C10 7.55886 9.8244 7.98278 9.51184 8.29534C9.19928 8.6079 8.77536 8.7835 8.33333 8.7835C7.89131 8.7835 7.46738 8.6079 7.15482 8.29534C6.84226 7.98278 6.66667 7.55886 6.66667 7.11683C6.66667 6.6748 6.84226 6.25088 7.15482 5.93832C7.46738 5.62576 7.89131 5.45016 8.33333 5.45016Z" fill="#969696" />
            </svg>,
            body: "Pay Via :Cash on delivery"
        },
    ]
    return (
        <div className='p-clamp-40 rounded-[2px] border border-gray400 bg-wd700 flex flex-col gap-clamp-24'>
            <div className='flex flex-wrap gap-clamp-18'>
                <div className='flex-1'>
                    {/* head  */}
                    <div className='mb-clamp-16'>
                        <div className='flex flex-col gap-clamp-28'>
                            <h4 className='text-light400 text-clamp-28 leading-[1.2] uppercase'>
                                {label}
                            </h4>
                            <p className='text-gray200 text-clamp-12 3xl:text-clamp-14 '>
                                Address : {address}
                            </p>
                        </div>
                    </div>
                    <div>
                        {/* location  */}
                        <div className='flex gap-clamp-10 text-clamp-18 text-balance leading-[1.2] mb-clamp-24'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-24 h-clamp-24' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.79372 4.79372C9.22181 1.36563 14.7797 1.36563 18.2078 4.79372C21.6357 8.22182 21.6358 13.7797 18.2078 17.2078L12.7078 22.7078C12.5203 22.8953 12.2659 23.0007 12.0008 23.0008C11.7356 23.0008 11.4812 22.8952 11.2937 22.7078L5.79372 17.2078C2.36564 13.7797 2.36563 8.22181 5.79372 4.79372ZM12.0008 9.50075C11.1723 9.50075 10.5008 10.1723 10.5008 11.0008V11.0105C10.5009 11.8388 11.1724 12.5105 12.0008 12.5105H12.0105C12.8387 12.5104 13.5104 11.8387 13.5105 11.0105V11.0008C13.5105 10.1724 12.8388 9.50091 12.0105 9.50075H12.0008Z" fill="#AE7929" />
                            </svg>
                            {building_number} - {street} - {address}
                        </div>

                        <div className="flex flex-wrap gap-clamp-24">
                            <div className="flex-1 min-w-0 flex flex-col gap-clamp-14">
                                <span className="text-clamp-14 text-[#474747]">Floor Number :</span>
                                <div className="text-balance text-clamp-18">{floor}th</div>
                            </div>
                            {apartment &&
                                <div className="flex-1 min-w-0 flex flex-col gap-clamp-14">
                                    <span className="text-clamp-14 text-[#474747]">Apartment Number :</span>
                                    <div className="text-balance text-clamp-18">{apartment}</div>
                                </div>
                            }
                            {/* <div className="flex-1 min-w-0 flex flex-col gap-clamp-14">
                                <span className="text-clamp-14 text-[#474747]">Phone Number :</span>
                                <div className="text-balance text-clamp-18">5th</div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* btn  */}
                <div className='flex gap-clamp-24'>
                    <div className='w-fit'>
                        <Link href={`/profile/address/add?id=${id}`} className='border border-gold100 flex gap-clamp-10 py-clamp-12 px-clamp-24 text-clamp-14 font-bold text-balance uppercase leading-[0.7] rounded-[2px] w-full text-center justify-center items-center uppercase'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-16 3xl:w-clamp-18 h-clamp-16 3xl:h-clamp-18' width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M2 13L1 17L5 16L16.5858 4.41421C17.3668 3.63316 17.3668 2.36683 16.5858 1.58579L16.4142 1.41421C15.6332 0.633165 14.3668 0.633166 13.5858 1.41421L2 13Z" stroke="#F7F2EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 13L1 17L5 16L15 6L12 3L2 13Z" fill="#F7F2EA" />
                                <path d="M12 3L15 6" stroke="#F7F2EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 17H18" stroke="#F7F2EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Change
                        </Link>
                    </div>
                    <div className='w-fit'>
                        <Remove id={id} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address