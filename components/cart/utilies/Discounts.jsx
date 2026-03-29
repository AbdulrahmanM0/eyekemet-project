"use client"
import React, { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"

export default function Discounts({ capaigns }) {
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <div className="relative">
            {/* buttons */}
            <button ref={prevRef} className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.2929 6.29293C13.5789 6.00695 14.0091 5.92136 14.3827 6.07614C14.7563 6.23094 14.9999 6.59556 14.9999 6.99996V17C14.9999 17.4044 14.7563 17.769 14.3827 17.9238C14.0091 18.0786 13.5789 17.993 13.2929 17.707L8.29289 12.707C7.90238 12.3165 7.90237 11.6835 8.29289 11.2929L13.2929 6.29293Z" fill="#F7F2EA" />
                </svg>
            </button>

            <button ref={nextRef} className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.7071 17.7071C10.4211 17.993 9.99094 18.0786 9.61727 17.9239C9.24368 17.7691 9.00009 17.4044 9.00008 17L9.00008 7.00003C9.00008 6.59562 9.24368 6.23102 9.61727 6.07621C9.99095 5.92143 10.4211 6.00701 10.7071 6.293L15.7071 11.293C16.0976 11.6835 16.0976 12.3165 15.7071 12.7071L10.7071 17.7071Z" fill="#F7F2EA" />
                </svg>
            </button>

            {/* Swiper */}
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    // Assign refs when swiper initializes
                    swiper.params.navigation.prevEl = prevRef.current
                    swiper.params.navigation.nextEl = nextRef.current
                }}
                className="mySwiper text-light400 text-clamp-18 text-center"
            >
                {capaigns.map((item, index) => (
                    <SwiperSlide key={index+name}>{item.name} {item.min_order_amount && <>on oreders over EGP {item.min_order_amount}</> }</SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}