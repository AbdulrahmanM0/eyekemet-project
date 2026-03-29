"use client"
import Image from 'next/image'
import Link from 'next/link';
import FullScreenDrawer from './utilies/Drawer';
import useHeader from './hooks/useHeader';
import useCart from './hooks/useCart';
import ProfileORSign from './utilies/ProfileORSign';
import React from 'react';

function Header({ name = false, value = false }) {
    const { handleDrawer, isSticky, scrolled, setOpen, open } = useHeader();

    return (
        <>
            <header
                id="site-header"
                className={`transition-colors duration-500 z-[400] w-full top-0 ${isSticky ? "sticky" : "absolute"
                    } ${(scrolled && !open) ? "bg-full" : "bg-[#00000059]"}`}
            >
                <div className='px-clamp-40 sm:px-clamp-100 py-clamp-48 flex items-center justify-between'>
                    <MenuContent handleDrawer={handleDrawer} />
                    {/* signin & cart */}
                    <CartContent value={value} name={name} />
                </div>
            </header>
            {/* drawer  */}
            <FullScreenDrawer open={open} setOpen={setOpen} />
        </>
    );
}

export default Header;

const CartContent = React.memo(({ name, value }) => {
    const { handleCartToggle, cartItems, loading } = useCart();

    return (
        <div className='flex gap-clamp-20 items-stretch'>
            {/* cart */}
            <div onClick={handleCartToggle} className='cursor-pointer shrink-0 p-clamp-16 bg-full border border-gray400 rounded-[2px] flex items-center justify-center relative'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-24 h-clamp-24' viewBox="0 0 24 24" fill="none">
                    <path d="M8.50977 19C9.33819 19 10.0098 19.6716 10.0098 20.5V20.5098C10.0098 21.3382 9.33819 22.0098 8.50977 22.0098H8.5C7.67157 22.0098 7 21.3382 7 20.5098V20.5C7 19.6716 7.67157 19 8.5 19H8.50977ZM17.5098 19C18.3382 19 19.0098 19.6716 19.0098 20.5V20.5098C19.0098 21.3382 18.3382 22.0098 17.5098 22.0098H17.5C16.6716 22.0098 16 21.3382 16 20.5098V20.5C16 19.6716 16.6716 19 17.5 19H17.5098ZM5 2C5.52239 2 5.95678 2.40207 5.99707 2.92285L6.15625 5H21C21.2844 5 21.5554 5.12109 21.7451 5.33301C21.9348 5.54493 22.0255 5.82768 21.9941 6.11035L21.1777 13.4551C21.0179 14.8936 19.8538 16.013 18.4102 16.1162L8.05566 16.8555C6.40951 16.9731 4.97733 15.7392 4.85059 14.0938L4.2334 6.07715L4.07422 4H3C2.44772 4 2 3.55228 2 3C2 2.44772 2.44772 2 3 2H5Z" fill="#AE7929" />
                </svg>

                {(loading || cartItems?.length > 0) &&
                    <span className="absolute -top-3 end-0 text-white text-[8px] font-light rounded-full w-5 h-5 flex items-center justify-center">
                        <span className="absolute inset-0 bg-[#CB4B32] rounded-full "></span>
                        <span className="absolute inset-0 bg-[#CB4B32] rounded-full shadow-lg shadow-[#CB4B32]/50 animate-ping"></span>
                        {/* loading */}
                        {loading ?
                            <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            :
                            <span className="relative z-10">{cartItems?.length}</span>
                        }
                    </span>
                }
            </div>

            {/* sign in */}
            <ProfileORSign name={name} value={value} />
        </div>
    )
})

const MenuContent = React.memo(({ handleDrawer }) => {
    return (<>
        {/* menu */}
        <div>
            <button onClick={handleDrawer} className='flex gap-clamp-24 items-center w-fit sm:w-[clamp(100px,12.188vw,234px)]'>
                {/* icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-32 h-clamp-32' width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <g clipPath="url(#clip0_667_842)">
                        <path d="M-1 10L-1 8L33 8V10L-1 10Z" fill="#AE7929" />
                        <path d="M-1 23L-1 21L33 21V23L-1 23Z" fill="#AE7929" />
                    </g>
                    <defs>
                        <clipPath id="clip0_667_842">
                            <rect width="32" height="32" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                {/* menu text */}
                <div className='hidden sm:block text-clamp-18 text-gold100 uppercase font-bold leading-[0.7]'>
                    Menu
                </div>
            </button>
        </div>

        {/* logo */}
        <Link href="/">
            <Image src={"/images/logo.png"} className='w-[clamp(80px,9.844vw,189px)]' width={189} height={56} alt='eye kemet' />
        </Link>
    </>)
})