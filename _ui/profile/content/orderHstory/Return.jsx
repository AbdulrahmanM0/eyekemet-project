"use client"
import Image from "next/image";
import Link from "next/link";
import Item from "./utilies/Item";
import Head from "../utilies/Head";
import ReturnItem from "./utilies/ReturnItem";
import Dialog from "./utilies/Dialog";
import useReturnOrder from "./hooks/useReturnOrder";

const statusList = [
    { value: "pending", label: "Order placed" },
    { value: "confirmed", label: "Order confirmed by store" },
    { value: "preparing", label: "Preparing your order" },
    { value: "ready", label: "Order ready for pickup/delivery" },
    { value: "out_for_delivery", label: "Out for delivery" },
    { value: "delivered", label: "C" },
    { value: "completed", label: "Order completed" },
];

export default function OrderTracking({ items, order_number, created_at, status, subtotal, tax, total, discount, estimated_ready_time, delivery_address, payment_method, customer_name, customer_phone, customer_email,id }) {
    const currentStatus = status === "completed" ? "return": "cancel";
    const { dialog, handleDialog, handleSubmit, loading } = useReturnOrder(currentStatus);
    return (
        <div >
            <Link href={"/profile/orders"} className="group flex uppercase items-center mb-clamp-40 text-clamp-18 text-balance font-bold ">
                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:-translate-x-2 duration-300 w-clamp-36 h-clamp-36" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M20.2929 9.79293C20.5789 9.50695 21.0091 9.42136 21.3827 9.57614C21.7563 9.73094 21.9999 10.0956 21.9999 10.5V25.5C21.9999 25.9044 21.7563 26.269 21.3827 26.4238C21.0091 26.5786 20.5789 26.493 20.2929 26.207L12.7929 18.707C12.4024 18.3165 12.4024 17.6835 12.7929 17.2929L20.2929 9.79293Z" fill="#BC904D" />
                </svg>
                Back
            </Link>

            <div className=" border-gray400 border p-clamp-64 bg-wd700">
                {/* Header */}
                <div className="mb-clamp-40">
                    <Head head={`ORDER ID : ${order_number}`} slogan={new Date(created_at).toLocaleString()} />
                </div>
                <p className="text-clamp-18 text-balance leading-[1.2] mb-clamp-40">
                    Select the item you want to return, and select an option from the Reason for return menu.
                </p>

                <div className="flex flex-col gap-clamp-40">
                    <div className=' flex flex-col gap-clamp-20 '>
                        <div className="flex flex-col gap-clamp-24 rounded-2xl  w-full max-w-sm text-white">
                            <div className='flex gap-clamp-10 items-center text-clamp-16 text-gray200 leading-[0.7]'>
                                Select type
                            </div>

                            <div className="flex gap-clamp-20">
                                <div className='flex gap-clamp-20'>
                                    {items.map((item, index) => (
                                        <ReturnItem item={item} key={index} customClass={"w-[76px] h-[79px]"} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-clamp-24">
                        <div className="w-full">
                            <div>
                                <button onClick={handleDialog} className='secondary-btn whitespace-nowrap shrink-0 !w-fit h-fit'>
                                    <span>{currentStatus} Order</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-18 h-clamp-18' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 10.9998C21.5523 10.9998 22 11.4475 22 11.9998C22 17.5226 17.5228 21.9998 12 21.9998C9.98405 21.9998 8.10917 21.3997 6.53906 20.3738L5.20703 21.7068C4.92103 21.9928 4.49086 22.0784 4.11719 21.9236C3.74359 21.7688 3.5 21.4042 3.5 20.9998V16.9998C3.5 16.4475 3.94772 15.9998 4.5 15.9998H8.5C8.90442 15.9998 9.26902 16.2433 9.42383 16.6169C9.57861 16.9906 9.49303 17.4208 9.20703 17.7068L7.99121 18.9216C9.17037 19.6061 10.5387 19.9998 12 19.9998C16.4183 19.9998 20 16.418 20 11.9998C20 11.4475 20.4477 10.9998 21 10.9998ZM12 1.99976C14.0155 1.99976 15.8901 2.59928 17.46 3.62476L18.793 2.29272C19.079 2.00673 19.5091 1.92115 19.8828 2.07593C20.2564 2.23074 20.5 2.59534 20.5 2.99976V6.99976C20.5 7.55204 20.0523 7.99976 19.5 7.99976H15.5C15.0956 7.99976 14.731 7.75617 14.5762 7.38257C14.4214 7.00889 14.507 6.57872 14.793 6.29272L16.0078 5.0769C14.8289 4.39287 13.4608 3.99976 12 3.99976C7.58172 3.99976 4 7.58148 4 11.9998C4 12.552 3.55228 12.9998 3 12.9998C2.44772 12.9998 2 12.552 2 11.9998C2 6.47691 6.47715 1.99976 12 1.99976Z" fill="#FEFEFE" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <Dialog currentStatus={currentStatus} dialog={dialog} handleDialog={handleDialog} id={id} handleSubmit={handleSubmit} loading={loading}/>
            </div>
        </div>
    );
}