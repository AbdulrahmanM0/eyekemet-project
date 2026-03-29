"use client"
import PrimaryBtn from "@/components/btn/Primary"
import { useSelector } from "react-redux";

function PaymentSummary({ disable , loading }) {
    const { cartItems, subTotal, total, discount, shipping } = useSelector((state) => state.cartReducer);

    return (
        <section className="sticky top-[var(--header-height)]">
            <div className="p-clamp-48 bg-wd500">
                {/* Payment Summary */}
                <div className="flex flex-col gap-clamp-32 ">
                    <h5 className="text-clamp-20 uppercase font-bold text-light400">
                        Payment Summary
                    </h5>

                    <div className="flex justify-between gap-clamp-24">
                        <h6 className="text-clamp-18 text-gray200 leading-[0.7] ">
                            Sub Total
                        </h6>
                        <h5 className="text-clamp-20 uppercase font-bold text-light400 leading-[0.7] ">
                            EGP {subTotal}
                        </h5>
                    </div>

                    <div className={`flex justify-between gap-clamp-24`}>
                        <h6 className="text-clamp-18 text-gray200 leading-[0.7] ">
                            Shipping
                        </h6>
                        <h5 className="text-clamp-20 uppercase font-bold text-light400 leading-[0.7] ">
                            EGP {shipping}
                        </h5>
                    </div>

                    {/* discount  */}
                    <div className={`flex justify-between gap-clamp-24 `}>
                        <h6 className="text-clamp-18 text-green100 leading-[0.7] ">
                            Discount
                        </h6>
                        <h5 className="text-clamp-20 uppercase font-bold leading-[0.7] text-green100 " >
                            -EGP {discount}
                        </h5>
                    </div>

                    {/* grand total  */}
                    <div className="flex justify-between gap-clamp-24">
                        <h6 className="text-clamp-18 text-gray200 leading-[0.7] ">
                            Grand Total
                        </h6>
                        <h5 className="text-clamp-20 uppercase font-bold text-light400 leading-[0.7] ">
                            EGP {total}
                        </h5>
                    </div>

                    {/* discount code  */}
                    <div>
                        <p className="text-light400 text-clamp-18 mb-clamp-20">
                            Do you have a discount code?
                        </p>

                        <div className="flex flex-wrap gap-clamp-24 sm:gap-0 max-w-full">
                            <input
                                type="text"
                                className="flex-1 border border-gray300 bg-wd500 px-clamp-20 py-clamp-20 focus:outline-none focus:ring-2 focus:ring-gold100 rounded-[2px] text-clamp-18 placeholder-gray200 placeholder-text-clamp-16"
                                placeholder="Enter promo code"
                            />

                            <button
                                className="w-full sm:w-fit bg-gold100 flex items-center justify-center gap-clamp-10 px-clamp-28 py-clamp-16 text-clamp-18 font-bold text-balance uppercase rounded-[2px]"
                            >
                                Apply
                                <svg
                                    className="w-clamp-24 h-clamp-24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M19 3C19.5523 3 20 3.44772 20 4V18C20 19.6569 18.6569 21 17 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H17C17.5523 19 18 18.5523 18 18V5H9C8.44772 5 8 4.55228 8 4C8 3.44772 8.44772 3 9 3H19ZM11.6172 8.07617C11.9909 7.92139 12.421 8.00697 12.707 8.29297L15.707 11.293C16.0976 11.6835 16.0976 12.3165 15.707 12.707L12.707 15.707C12.421 15.993 11.9909 16.0786 11.6172 15.9238C11.2436 15.769 11 15.4044 11 15V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V9C11 8.59558 11.2436 8.23098 11.6172 8.07617Z"
                                        fill="#FEFEFE"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* proceed */}
                    <div className="bg-full" disabled={disable || loading}>
                        <PrimaryBtn value="Proceed to checkout" className="w-full justify-center" disable={disable || loading} />
                    </div>
                    <div>
                        <p className="text-clamp-16 text-gray200 text-center">
                            Checkout quickly and securely
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentSummary