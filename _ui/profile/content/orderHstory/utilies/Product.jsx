import Image from 'next/image'
import Link from 'next/link';
import Item from './Item';

function Product({ status, order_number, items, total, subtotal, discount, tax, delivery_address, created_at, id, data }) {

    const formattedDate = new Date(created_at).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    const info = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-20 h-clamp-20' width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13.333 1.5C13.8283 1.5 14.2388 1.8603 14.3184 2.33301H16.666C17.2182 2.33301 17.6658 2.78087 17.666 3.33301V14.666C17.666 16.3229 16.3229 17.666 14.666 17.666H5.33301C3.6763 17.6658 2.33301 16.3228 2.33301 14.666V3.33301C2.33318 2.78098 2.78098 2.33318 3.33301 2.33301H5.68164C5.76119 1.8603 6.17167 1.5 6.66699 1.5C7.16215 1.50016 7.57181 1.86043 7.65137 2.33301H12.3486C12.4282 1.86043 12.8378 1.50016 13.333 1.5ZM4.33301 5.66699H15.666V4.33301H14.3184C14.2391 4.80608 13.8286 5.16699 13.333 5.16699C12.8376 5.16683 12.4279 4.80595 12.3486 4.33301H7.65137C7.57207 4.80595 7.16238 5.16683 6.66699 5.16699C6.17144 5.16699 5.76093 4.80608 5.68164 4.33301H4.33301V5.66699Z" fill="#969696" />
            </svg>,
            body: `Order Date : ${formattedDate}`
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-20 h-clamp-20' width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.70878 3.87683C7.63055 0.95506 12.368 0.955179 15.2898 3.87683C18.2117 6.79866 18.2117 11.5361 15.2898 14.4579L10.7068 19.0409C10.3163 19.4313 9.68323 19.4314 9.29276 19.0409L4.70878 14.4579C1.78718 11.5361 1.78717 6.79861 4.70878 3.87683ZM9.9998 7.66785C9.17141 7.6679 8.4998 8.33945 8.4998 9.16785V9.17663C8.5003 10.0046 9.17172 10.6766 9.9998 10.6766H10.0086C10.8364 10.6763 11.5081 10.0044 11.5086 9.17663V9.16785C11.5086 8.33965 10.8367 7.66822 10.0086 7.66785H9.9998Z" fill="#969696" />
            </svg>,
            body: delivery_address || "no address"
        },
    ]
    return (
        <div className=' h-fit p-clamp-40 rounded-[2px] border border-gray400 bg-wd700 flex flex-col gap-clamp-24'>
            {/* head  */}
            <div className='flex justify-between items-center gap-clamp-28 3xl:gap-clamp-32'>
                <div className='flex flex-col gap-clamp-12'>
                    <h4 className='text-light400 text-clamp-16 leading-[1.2]'>
                        Order ID : {order_number}
                    </h4>
                    <p className='text-gray200 text-clamp-12 3xl:text-clamp-14 '>
                        {items.length === 1 ? "One Item" : items.length > 1 && `${items.length} Items`}
                    </p>
                </div>
                {/* status  */}
                <div
                    className={`py-[7px] px-clamp-10 rounded-[2px]  bg-gray300 ${status === "completed"
                            ? "!bg-[#40D465]"
                            : status === "shipping"
                                ? "!bg-[#AE7929]"
                                : status === "placed"
                                    ? "!bg-[#6B6B6B]"
                                    : status === "cancelled"
                                        ? "!bg-red200"
                                        : ""
                        } text-light400 3xl:text-clamp-14 text-clamp-12 leading-[0.7]`}
                >                    {status}
                </div>
            </div>
            {
                items?.map((item, index) => (
                    <Item item={item} key={item?.id} />
                ))
            }

            {/* info  */}
            <div className='text-gray200 text-clamp-14'>
                Order Info
            </div>

            <div className='flex flex-col gap-clamp-14'>
                {info.map((item, index) => (
                    <div className='flex gap-clamp-10 items-center text-gray200' key={index}>
                        <div>
                            {item.icon}
                        </div>
                        <div className='text-clamp-14'>
                            {item.body}
                        </div>
                    </div>
                ))}
            </div>
            <hr className='border-gray200' />

            <div className='flex flex-col gap-clamp-16'>
                <div className='text-balance 3xl:text-clamp-20 text-clamp-18 font-thin uppercase leading-[1.2]'>
                    SubTotal Price: EGP {subtotal}
                </div>
                <div className='text-gray200 3xl:text-clamp-20 text-clamp-18 font-thin uppercase leading-[1.2]'>
                    Tax: EGP {tax}
                </div>
                {discount > 0 &&
                    <div className='text-gray200 3xl:text-clamp-20 text-clamp-18 font-thin uppercase leading-[1.2]'>
                        Discount: EGP {discount}
                    </div>
                }
                <div className='text-gold100 border-t border-t-gold100 w-fit pt-clamp-10 3xl:text-clamp-20 text-clamp-18 font-bold uppercase leading-[1.2]'>
                    Total Price: EGP {total}
                </div>
            </div>

            <div className='flex flex-wrap gap-clamp-24'>
                <div className='w-fit'>
                    <button className='border border-gold100 flex gap-clamp-10 py-clamp-12 px-clamp-24 text-clamp-14 font-bold text-balance uppercase leading-[1.2] rounded-[2px] w-full text-center justify-center items-center uppercase'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-16 h-clamp-16' width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15 15.9999C15.5523 15.9999 16 16.4476 16 16.9999C16 17.5522 15.5523 17.9999 15 17.9999H3C2.44772 17.9999 2 17.5522 2 16.9999C2 16.4476 2.44772 15.9999 3 15.9999H15ZM8.29297 0.292893C8.68349 -0.0976314 9.31651 -0.0976305 9.70703 0.292893L14.707 5.29289C14.993 5.57889 15.0786 6.00906 14.9238 6.38274C14.769 6.75634 14.4044 6.99992 14 6.99992H10V13.9999C10 14.5522 9.55228 14.9999 9 14.9999C8.44772 14.9999 8 14.5522 8 13.9999V6.99992H4C3.59558 6.99992 3.23098 6.75634 3.07617 6.38274C2.92139 6.00906 3.00697 5.57889 3.29297 5.29289L8.29297 0.292893Z" fill="#FEFEFE" />
                        </svg>
                        Download receipt
                    </button>
                </div>
                {data?.type === "history" &&
                    <div className='w-fit'>
                        <Link href={`/profile/orders/${id}`} className='secondary-btn whitespace-nowrap shrink-0 !leading-[1.2] !w-fit'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-16 h-clamp-16' width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M6.38281 13.875C7.2111 13.8752 7.88281 14.5467 7.88281 15.375V15.3828C7.88264 16.211 7.21099 16.8826 6.38281 16.8828H6.375C5.54668 16.8828 4.87517 16.2111 4.875 15.3828V15.375C4.875 14.5466 5.54657 13.875 6.375 13.875H6.38281ZM13.1328 13.875C13.9611 13.8752 14.6328 14.5467 14.6328 15.375V15.3828C14.6326 16.211 13.961 16.8826 13.1328 16.8828H13.125C12.2967 16.8828 11.6252 16.2111 11.625 15.3828V15.375C11.625 14.5466 12.2966 13.875 13.125 13.875H13.1328ZM3.75 1.25C4.27239 1.25 4.70678 1.65207 4.74707 2.17285L4.84863 3.5H15.75C16.0344 3.5 16.3054 3.62109 16.4951 3.83301C16.6848 4.04493 16.7755 4.32768 16.7441 4.61035L16.1777 9.70508C16.0179 11.1436 14.8538 12.263 13.4102 12.3662L6.55566 12.8555C4.90951 12.9731 3.47733 11.7392 3.35059 10.0938L2.92578 4.57715L2.82422 3.25H2.25C1.69772 3.25 1.25 2.80228 1.25 2.25C1.25 1.69772 1.69772 1.25 2.25 1.25H3.75ZM9.75 6.125C9.19772 6.125 8.75 6.57272 8.75 7.125V7.25H8.625C8.07272 7.25 7.625 7.69772 7.625 8.25C7.625 8.80228 8.07272 9.25 8.625 9.25H8.75V9.375C8.75 9.92728 9.19772 10.375 9.75 10.375C10.3023 10.375 10.75 9.92728 10.75 9.375V9.25H10.875C11.4273 9.25 11.875 8.80228 11.875 8.25C11.875 7.69772 11.4273 7.25 10.875 7.25H10.75V7.125C10.75 6.57272 10.3023 6.125 9.75 6.125Z" fill="#FEFEFE" />
                            </svg>
                            track order
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Product