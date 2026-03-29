import Image from "next/image";
import Link from "next/link";
import Item from "./utilies/Item";
import Head from "../utilies/Head";
import ReturnItem from "./utilies/ReturnItem";


export default function OrderTracking({ items, order_number, created_at, status, subtotal, tax, total, discount, estimated_ready_time, delivery_address, payment_method, customer_name, customer_phone, customer_email }) {

    const info = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13.333 1.5C13.8283 1.5 14.2388 1.8603 14.3184 2.33301H16.666C17.2182 2.33301 17.6658 2.78087 17.666 3.33301V14.666C17.666 16.3229 16.3229 17.666 14.666 17.666H5.33301C3.6763 17.6658 2.33301 16.3228 2.33301 14.666V3.33301C2.33318 2.78098 2.78098 2.33318 3.33301 2.33301H5.68164C5.76119 1.8603 6.17167 1.5 6.66699 1.5C7.16215 1.50016 7.57181 1.86043 7.65137 2.33301H12.3486C12.4282 1.86043 12.8378 1.50016 13.333 1.5ZM4.33301 5.66699H15.666V4.33301H14.3184C14.2391 4.80608 13.8286 5.16699 13.333 5.16699C12.8376 5.16683 12.4279 4.80595 12.3486 4.33301H7.65137C7.57207 4.80595 7.16238 5.16683 6.66699 5.16699C6.17144 5.16699 5.76093 4.80608 5.68164 4.33301H4.33301V5.66699Z" fill="#969696" />
            </svg>,
            body: `Order Date : ${new Date(created_at).toLocaleString()}`
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13.333 1.5C13.8283 1.5 14.2388 1.8603 14.3184 2.33301H16.666C17.2182 2.33301 17.6658 2.78087 17.666 3.33301V14.666C17.666 16.3229 16.3229 17.666 14.666 17.666H5.33301C3.6763 17.6658 2.33301 16.3228 2.33301 14.666V3.33301C2.33318 2.78098 2.78098 2.33318 3.33301 2.33301H5.68164C5.76119 1.8603 6.17167 1.5 6.66699 1.5C7.16215 1.50016 7.57181 1.86043 7.65137 2.33301H12.3486C12.4282 1.86043 12.8378 1.50016 13.333 1.5ZM4.33301 5.66699H15.666V4.33301H14.3184C14.2391 4.80608 13.8286 5.16699 13.333 5.16699C12.8376 5.16683 12.4279 4.80595 12.3486 4.33301H7.65137C7.57207 4.80595 7.16238 5.16683 6.66699 5.16699C6.17144 5.16699 5.76093 4.80608 5.68164 4.33301H4.33301V5.66699Z" fill="#969696" />
            </svg>,
            body: `Delivery Date : ${new Date(estimated_ready_time).toLocaleString() || "not "}`
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.70878 3.87683C7.63055 0.95506 12.368 0.955179 15.2898 3.87683C18.2117 6.79866 18.2117 11.5361 15.2898 14.4579L10.7068 19.0409C10.3163 19.4313 9.68323 19.4314 9.29276 19.0409L4.70878 14.4579C1.78718 11.5361 1.78717 6.79861 4.70878 3.87683ZM9.9998 7.66785C9.17141 7.6679 8.4998 8.33945 8.4998 9.16785V9.17663C8.5003 10.0046 9.17172 10.6766 9.9998 10.6766H10.0086C10.8364 10.6763 11.5081 10.0044 11.5086 9.17663V9.16785C11.5086 8.33965 10.8367 7.66822 10.0086 7.66785H9.9998Z" fill="#969696" />
            </svg>,
            body: `Ship to : ${delivery_address || "No Address"}`
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.40616 3.93048L9.66199 3.82214C12.037 2.76548 14.3953 2.79131 15.9378 2.99214L16.2795 3.04048L16.5895 3.09298L16.867 3.14714L17.1087 3.19964C17.8287 3.36464 18.2787 3.98048 18.3287 4.64214L18.3337 4.76714V14.4213C18.3337 15.2771 17.5203 15.8388 16.7562 15.663L16.5228 15.6113L16.252 15.5596L15.9478 15.5096C15.7772 15.4839 15.6061 15.462 15.4345 15.4438L15.057 15.4105C13.8212 15.3238 12.212 15.4113 10.5945 16.0688L10.3387 16.1771C8.14699 17.1521 5.96866 17.2055 4.43283 17.0496L4.06283 17.008L3.72116 16.958L3.41116 16.9055L3.26783 16.8788L2.89283 16.7996C2.17199 16.6346 1.72199 16.0188 1.67199 15.3571L1.66699 15.2321V5.57798C1.66699 4.72214 2.48033 4.15964 3.24449 4.33631L3.47783 4.38798L3.74866 4.43964L4.05283 4.48964C5.33283 4.68131 7.36283 4.76131 9.40616 3.93048ZM10.0003 6.66631C9.11627 6.66631 8.26842 7.0175 7.6433 7.64262C7.01818 8.26774 6.66699 9.11559 6.66699 9.99964C6.66699 10.8837 7.01818 11.7315 7.6433 12.3567C8.26842 12.9818 9.11627 13.333 10.0003 13.333C10.8844 13.333 11.7322 12.9818 12.3573 12.3567C12.9825 11.7315 13.3337 10.8837 13.3337 9.99964C13.3337 9.11559 12.9825 8.26774 12.3573 7.64262C11.7322 7.0175 10.8844 6.66631 10.0003 6.66631ZM10.0003 8.33298C10.4424 8.33298 10.8663 8.50857 11.1788 8.82113C11.4914 9.13369 11.667 9.55762 11.667 9.99964C11.667 10.4417 11.4914 10.8656 11.1788 11.1782C10.8663 11.4907 10.4424 11.6663 10.0003 11.6663C9.5583 11.6663 9.13438 11.4907 8.82181 11.1782C8.50925 10.8656 8.33366 10.4417 8.33366 9.99964C8.33366 9.55762 8.50925 9.13369 8.82181 8.82113C9.13438 8.50857 9.5583 8.33298 10.0003 8.33298Z" fill="#969696" />
            </svg>,
            body: `Pay Via : ${payment_method || "Not Specified"}`
        },
    ]
    const customerinfo = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14 11C16.7614 11 19 13.2386 19 16C19 17.6569 17.6569 19 16 19H4C2.34315 19 1 17.6569 1 16C1 13.2386 3.23858 11 6 11H14ZM10 1C12.2091 1 14 2.79086 14 5C14 7.20914 12.2091 9 10 9C7.79086 9 6 7.20914 6 5C6 2.79086 7.79086 1 10 1Z" fill="#969696" />
            </svg>,
            body: customer_name || ""
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M19 2C19.0444 2 19.088 2.00319 19.1309 2.00879C19.1443 2.01056 19.1576 2.01332 19.1709 2.01562C19.2588 2.03077 19.3425 2.05726 19.4209 2.09375C19.4267 2.09645 19.4327 2.09875 19.4385 2.10156C19.5177 2.1403 19.5905 2.18969 19.6562 2.24707C19.6648 2.2545 19.6734 2.26181 19.6816 2.26953C19.7081 2.29423 19.7332 2.32024 19.7568 2.34766C19.7653 2.35747 19.7732 2.36776 19.7812 2.37793C19.8044 2.40696 19.8258 2.43721 19.8457 2.46875C19.852 2.47877 19.8583 2.48875 19.8643 2.49902C19.9086 2.57532 19.9428 2.65775 19.9658 2.74512C19.9681 2.75392 19.9706 2.76265 19.9727 2.77148C19.9898 2.84495 20 2.92129 20 3V15C20 16.6569 18.6569 18 17 18H3C1.34315 18 0 16.6569 0 15V3C0 2.92137 0.00920642 2.84489 0.0263672 2.77148C0.0284394 2.76266 0.0308838 2.75391 0.0332031 2.74512C0.056155 2.65782 0.0905232 2.57527 0.134766 2.49902C0.140708 2.48875 0.147041 2.47876 0.15332 2.46875C0.173142 2.43723 0.19466 2.40696 0.217773 2.37793C0.225858 2.36777 0.233736 2.35747 0.242188 2.34766C0.265805 2.32025 0.290963 2.29423 0.317383 2.26953C0.325649 2.26181 0.334259 2.2545 0.342773 2.24707C0.40652 2.19138 0.477251 2.14369 0.553711 2.10547C0.562825 2.10092 0.571797 2.09607 0.581055 2.0918C0.658524 2.056 0.741475 2.03065 0.828125 2.01562C0.841439 2.0133 0.854707 2.01058 0.868164 2.00879C0.911311 2.00311 0.955302 2 1 2H19ZM10.707 12.707C10.3165 13.0975 9.68349 13.0975 9.29297 12.707L2 5.41406V15C2 15.5523 2.44772 16 3 16H17C17.5523 16 18 15.5523 18 15V5.41406L10.707 12.707Z" fill="#969696" />
            </svg>,
            body: customer_email || "No Email"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14 1C16.6685 1 19.2259 3.25825 18.4756 6.20605C16.9456 12.2161 12.2161 16.9455 6.20605 18.4756C3.25825 19.2259 1 16.6685 1 14V13C1 11.8733 1.90093 11.0552 2.89941 10.9561C3.73517 10.8732 4.53724 10.6762 5.28906 10.3809C5.61303 10.2537 5.97591 10.3045 6.25 10.5078L6.36133 10.6045L7.3623 11.6035C9.13857 10.6094 10.6106 9.13773 11.6045 7.36133L10.6045 6.36133C10.3233 6.08009 10.2355 5.65927 10.3809 5.28906C10.6762 4.53724 10.8732 3.73517 10.9561 2.89941C11.0552 1.90093 11.8733 1 13 1H14Z" fill="#969696" />
            </svg>,
            body: customer_phone || ""
        }
    ]

    const returnType = [
        {
            label: "Return",
        },
        {
            label: "Replacement",
        },
        {
            label: "Issue",
        },
    ]

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

                <div className="grid md:grid-cols-2 grid-cols-1 gap-clamp-40">
                    <div className=' flex flex-col gap-clamp-20 '>
                        <div className="flex flex-col gap-clamp-24 rounded-2xl  w-full max-w-sm text-white">
                            <div className='flex gap-clamp-10 items-center text-clamp-16 text-gray200 leading-[0.7]'>
                                Select type
                            </div>
                            {/* Timeline */}
                            <div className="relative flex flex-col gap-clamp-20">
                                {returnType.map((item, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center gap-clamp-24 cursor-pointer select-none p-cclamp-8"
                                    >
                                        <input
                                            type="radio"
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
                                ))}
                            </div>

                            <div className="flex flex-col gap-clamp-20">
                                {/* orders  */}
                                <div className='flex gap-clamp-10 items-center text-clamp-16 text-gray200 leading-[0.7]'>
                                    Select item you want to return
                                </div>
                                <div className='flex flex-col gap-clamp-20'>
                                    {items.map((item, index) => (
                                        <ReturnItem item={item} key={index} customClass={"w-[76px] h-[79px]"} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-clamp-24">
                        <div className='flex gap-clamp-10 items-center text-clamp-16 text-gray200 leading-[0.7]'>
                            Select type
                        </div>
                        {/* Timeline */}
                        <div className="relative flex flex-col gap-clamp-20">
                            {returnType.map((item, index) => (
                                <label
                                    key={index}
                                    className="flex items-center gap-clamp-24 cursor-pointer select-none p-cclamp-8"
                                >
                                    <input
                                        type="radio"
                                        className="peer hidden"
                                        name="type"
                                    // checked={!!checked[item.id]}
                                    // onChange={() => toggle(item.id)}
                                    />

                                    <div className="h-5 w-5 shrink-0 border border-gray-300 rounded flex items-center justify-center transition-all duration-200 peer-checked:bg-gold100 peer-checked:border-black">
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
                            ))}
                        </div>

                        <div className="w-full">
                            <textarea className='input !bg-transparent' placeholder='Enter your reason *' name="" id="" cols="30" rows="10"></textarea>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}