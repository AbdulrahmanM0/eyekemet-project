"use client"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import Discounts from "./utilies/Discounts"
import Image from "next/image"
import { DialogDemo } from "../items/dialog/Dialog"
import UserPicture from "./utilies/UserPicture"
import { useUploadImage } from "./hooks/UploadImage"
import Link from "next/link"
import { useSelector } from "react-redux"
import useCart from "../layout/header/hooks/useCart"
import Product from "./utilies/Product"
import DialogImg from "./utilies/DialogImg"
import DialogUploadImg from "./utilies/DialogUploadImg"
import DialogStreem from "./utilies/DialogStreem"
import { useCallback } from "react"

export default function Cart() {
    const { open } = useSelector((state) => state.cartReducer)
    const { handlePicture, openPictureDialog, handleImageDialog, openDialog, uploadperformance, handleStreem, openStreem, user } = useUploadImage();
    const { handleCartToggle, cartItems, subTotal, total, discount, handleClearCart, handleRemoveItem, handleUpdateItem, capaigns, loading, extraction_id } = useCart();

    const CartItems = useCallback(() => {
        return <>
            {cartItems?.length > 0 &&
                <div className=" mt-clamp-18">
                    {/* discounts */}
                    <div className="flex flex-col gap-clamp-18">
                        <h6 className="leading-[0.7] text-light400 text-clamp-14 3xl:text-clamp-16">
                            Discounts
                        </h6>

                        <div className="px-clamp-24 py-clamp-12 3xl:py-clamp-14 bg-gold100">
                            <Discounts capaigns={capaigns} />
                        </div>
                    </div>

                    {/* free deliver */}
                    {capaigns && capaigns?.length > 0 &&
                        <div className={`p-clamp-24 ${total >= capaigns[0]?.min_order_amount ? "bg-gold100" : "bg-gray400"} mt-clamp-18`}>
                            <div className="flex items-center gap-clamp-10">
                                {/* icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M13 2C13.5523 2 14 2.44772 14 3V8H18C20.7614 8 23 10.2386 23 13V17C23 18.3544 22.1019 19.4973 20.8691 19.8701C20.7307 20.3277 20.4826 20.7596 20.1211 21.1211C18.9495 22.2927 17.0505 22.2927 15.8789 21.1211C15.552 20.7942 15.3193 20.409 15.1748 20H8.8252C8.68071 20.409 8.44801 20.7942 8.12109 21.1211C6.94952 22.2927 5.05048 22.2927 3.87891 21.1211C3.51738 20.7596 3.2683 20.3278 3.12988 19.8701C1.8976 19.497 1 18.3541 1 17V3C1 2.44772 1.44772 2 2 2H13ZM6.70703 18.293C6.31651 17.9024 5.68349 17.9024 5.29297 18.293C5.09751 18.4884 5 18.7425 5 19C5 19.2575 5.09751 19.5116 5.29297 19.707C5.68349 20.0976 6.31651 20.0976 6.70703 19.707C6.90249 19.5116 7 19.2575 7 19C7 18.7425 6.90249 18.4884 6.70703 18.293ZM18.707 18.293C18.3165 17.9024 17.6835 17.9024 17.293 18.293C17.0975 18.4884 17 18.7425 17 19C17 19.2575 17.0975 19.5116 17.293 19.707C17.6835 20.0976 18.3165 20.0976 18.707 19.707C18.9025 19.5116 19 19.2575 19 19C19 18.7425 18.9025 18.4884 18.707 18.293ZM14 18H15.1748C15.3193 17.591 15.552 17.2058 15.8789 16.8789C17.0505 15.7073 18.9495 15.7073 20.1211 16.8789C20.369 17.1269 20.5611 17.4093 20.7041 17.709C20.8865 17.5278 21 17.2774 21 17V13C21 11.3431 19.6569 10 18 10H14V18Z" fill="#FAFAFA" />
                                </svg>

                                {/* Text */}
                                {total < capaigns[0]?.min_order_amount ? (
                                    <p className="text-clamp-12 3xl:text-clamp-14 text-light100 h-fit">
                                        You’re {capaigns[0]?.min_order_amount - total} EGP Away From Free Shipping
                                    </p>
                                ) : (
                                    <p className="text-clamp-12 3xl:text-clamp-14 text-light100 h-fit">
                                        Free Shipping
                                    </p>
                                )}
                            </div>

                            {/* progress bar */}
                            {total < capaigns[0]?.min_order_amount && (
                                <div className="h-[4px] 3xl:h-[6px] bg-gray300 mt-clamp-10">
                                    <div
                                        className="bg-gold100 h-full"
                                        style={{ width: `${Math.min(100, (total / capaigns[0]?.min_order_amount) * 100)}%` }}
                                    />
                                </div>
                            )}
                        </div>
                    }
                </div>
            }
        </>
    }, [total, capaigns, cartItems])


    const ProductsItems = useCallback(() => {
        return (
            <div className="flex-1 overflow-y-auto no-scrollbar py-clamp-20 flex flex-col">
                {cartItems?.length <= 0 ? (
                    <p className="text-gray200 text-clamp-14 3xl:text-clamp-16 text-center mt-auto mb-auto">
                        Your cart is empty.
                    </p>
                ) : (
                    cartItems?.map((item) => (
                        <Product {...item} loading={loading} key={item?.id} handleRemoveItem={handleRemoveItem} handleUpdateItem={handleUpdateItem} />
                    ))
                )}
            </div>
        )
    }, [cartItems, loading])

    const Footer = useCallback(() => {
        return (
            <>
                {cartItems?.length > 0 &&
                    <div className="flex flex-col gap-clamp-24 mt-clamp-24">
                        <div className="text-clamp-18 3xl:text-clamp-20 text-light400 font-bold uppercase">
                            Payment Summary
                        </div>
                        {/*1 sub total */}
                        <div className="flex items-center justify-between text-light400">
                            <div className="text-clamp-16 3xl:text-clamp-18 text-gray200 leading-[0.7]">
                                Sub Total
                            </div>
                            <div className="text-clamp-18 3xl:text-clamp-20 text-light400 font-bold uppercase leading-[0.7]">
                                EGP {subTotal}
                            </div>
                        </div>
                        {discount != 0 &&
                            <div className="flex items-center justify-between">
                                <div className="text-clamp-16 3xl:text-clamp-18 text-gray200 leading-[0.7] line-through">
                                    Discount
                                </div>
                                <div className="text-clamp-18 3xl:text-clamp-20 text-light400 font-bold uppercase leading-[0.7]">
                                    EGP {discount}
                                </div>
                            </div>
                        }

                        {/* 2 shippnng  */}
                        {/* <div className="flex items-center justify-between text-light400">
                        <div className="text-clamp-18 text-gray200 leading-[0.7] ">
                            Shipping
                        </div>
                        <div className="text-clamp-20 text-light400 font-bold uppercase leading-[0.7]">
                            EGP 200
                        </div>
                    </div> */}
                        {/* 3 total  */}
                        <div className="flex items-center justify-between text-light400">
                            <div className="text-clamp-16 3xl:text-clamp-18 text-gray200 leading-[0.7]">
                                Grand Total
                            </div>
                            <div className="text-clamp-18 3xl:text-clamp-20 text-light400 font-bold uppercase leading-[0.7]">
                                EGP {total}
                            </div>
                        </div>

                        <button onClick={handleImageDialog} className="secondary-btn w-full px-clamp-28 py-clamp-16 justify-center flex gap-clamp-10">
                            Checkout
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-24 h-clamp-24" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20 18.4805H18V8.41406L6.70703 19.707L5.29297 18.293L16.5859 7H6.51953V5H19C19.5523 5 20 5.44772 20 6V18.4805Z" fill="#FEFEFE" />
                            </svg>
                        </button>
                        {/* note  */}
                        <p className="text-clamp-14 3xl:text-clamp-16 text-gray200 leading-none text-center">
                            Checkout quickly and securely
                        </p>
                    </div>
                }
            </>
        )
    }, [cartItems, subTotal, discount, total])
    
    return (
        <Drawer open={open} direction="right">
            <DrawerContent
                className="
                    mt-0
                    fixed inset-y-0 right-0 left-auto
                    w-full max-w-[652px] h-full
                    flex flex-col
                    rounded-none
                    border-l border-gray400
                    bg-dark100
                    focus:outline-none
                    [&>div:first-child]:hidden
                    p-clamp-48
                    z-[500]
                "
            >
                {/* Header */}
                <DrawerHeader className="flex items-center justify-between py-clamp-10 p-0">
                    <DrawerTitle className="p-0">
                        <h5 className="text-light100 font-bold text-clamp-24 3xl:text-clamp-28 uppercase leading-none">Shopping Cart</h5>
                    </DrawerTitle>
                    <DrawerClose asChild>
                        <div className="flex gap-clamp-10">
                            {cartItems?.length > 0 &&
                                <button onClick={handleClearCart} className="underline text-gold100 text-clamp-14 3xl:text-clamp-16 font-bold ">
                                    Empty Cart
                                </button>
                            }
                            <button
                                onClick={handleCartToggle}
                                aria-label="Close cart"
                                className="text-gray200 hover:text-light400 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7929 6.79289C16.1834 6.40237 16.8164 6.40237 17.207 6.79289C17.5975 7.18342 17.5975 7.81643 17.207 8.20696L13.414 11.9999L17.207 15.7929C17.5975 16.1834 17.5975 16.8164 17.207 17.207C16.8164 17.5975 16.1834 17.5975 15.7929 17.207L11.9999 13.414L8.20696 17.207C7.81643 17.5975 7.18342 17.5975 6.79289 17.207C6.40237 16.8164 6.40237 16.1834 6.79289 15.7929L10.5859 11.9999L6.79289 8.20696C6.40237 7.81643 6.40237 7.18342 6.79289 6.79289C7.18342 6.40237 7.81643 6.40237 8.20696 6.79289L11.9999 10.5859L15.7929 6.79289Z" fill="#D44040" />
                                </svg>
                            </button>
                        </div>
                    </DrawerClose>
                </DrawerHeader>

                <CartItems />

                {/* Items */}
                <ProductsItems />

                {/* Footer & Payment */}
                <Footer />

            </DrawerContent>

            <DialogImg openDialog={openDialog} handleImageDialog={handleImageDialog} handlePicture={handlePicture} handleStreem={handleStreem} />
            {/* dialog upload picture */}
            <DialogUploadImg  extraction_id={extraction_id} user={user} openPictureDialog={openPictureDialog} handlePicture={handlePicture} uploadperformance={uploadperformance} />
            {/* <DialogStreem handleStreem={handleStreem} openStreem={openStreem}/> */}
        </Drawer>
    )
}