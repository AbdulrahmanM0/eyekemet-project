"use client";

import PrimaryBtn from "@/components/btn/Primary";
import { useSelector } from "react-redux";
import usePromoCode from "./hooks/usePromoCode";
import { useState } from "react";

function PaymentSummary({ disable, loading }) {
  const { subTotal, total, discount, shipping } = useSelector(
    (state) => state.cartReducer
  );

  const { onSubmit, loading: promoLoading } = usePromoCode();
  const [code, setCode] = useState("");

  const handleApply = () => {
    if (!code.trim()) return;
    onSubmit(code);
  };

  return (
    <section className="sticky top-[var(--header-height)]">
      <div className="p-clamp-48 bg-wd500">
        <div className="flex flex-col gap-clamp-32 ">
          <h5 className="text-clamp-20 uppercase font-bold text-light400">
            Payment Summary
          </h5>

          <div className="flex justify-between">
            <h6 className="text-clamp-18 text-gray200">Sub Total</h6>
            <h5 className="text-clamp-20 font-bold text-light400">
              EGP {subTotal}
            </h5>
          </div>

          <div className="flex justify-between">
            <h6 className="text-clamp-18 text-gray200">Shipping</h6>
            <h5 className="text-clamp-20 font-bold text-light400">
              EGP {shipping}
            </h5>
          </div>

          <div className="flex justify-between">
            <h6 className="text-clamp-18 text-green100">Discount</h6>
            <h5 className="text-clamp-20 font-bold text-green100">
              -EGP {discount}
            </h5>
          </div>

          <div className="flex justify-between">
            <h6 className="text-clamp-18 text-gray200">Grand Total</h6>
            <h5 className="text-clamp-20 font-bold text-light400">
              EGP {total}
            </h5>
          </div>

          {/* Promo Code */}
          <div>
            <p className="text-light400 text-clamp-18 mb-clamp-20">
              Do you have a discount code?
            </p>

            <div className="flex flex-wrap gap-clamp-24 sm:gap-0">
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                type="text"
                placeholder="Enter promo code"
                className="flex-1 border text-light300 border-gray300 bg-wd500 px-clamp-20 py-clamp-20 focus:outline-none focus:ring-2 focus:ring-gold100"
              />

              <button
                onClick={handleApply}
                disabled={promoLoading}
                className="w-full sm:w-fit bg-gold100 text-light300 px-clamp-28 py-clamp-16 font-bold uppercase disabled:opacity-50"
              >
                {promoLoading ? "Applying..." : "Apply"}
              </button>
            </div>
          </div>

          {/* Proceed */}
          <PrimaryBtn
            value="Proceed to checkout"
            className="w-full justify-center"
            disable={disable || loading}
          />

          <p className="text-clamp-16 text-gray200 text-center">
            Checkout quickly and securely
          </p>
        </div>
      </div>
    </section>
  );
}

export default PaymentSummary;