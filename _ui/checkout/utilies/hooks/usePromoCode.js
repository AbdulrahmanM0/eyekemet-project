"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import handlePromocode from "@/api/cart/promocode";

function usePromoCode() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (code) => {
    try {
      setLoading(true);

      const res = await handlePromocode(code);

      if (!res) {
        toast.error("Invalid or expired code");
        return;
      }

      toast.success("Promo code applied!");
      console.log("PROMO DATA:", res);

    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { onSubmit, loading };
}

export default usePromoCode;