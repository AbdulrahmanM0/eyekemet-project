"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import handleOtp from "@/api/otp/otp";
import { toast } from "react-toastify";
import { setSession } from "./setSession";
import { useRouter } from "next/navigation";

const schema = z.object({
  name: z.string().min(10, "Name must be at least 10 characters long"),
});

function UseSubmit({ phone, otp }) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    try {
      const res = await handleOtp({
        name: String(data.name),
        code: String(otp),
        phone: String(phone),
      });

      if (res?.error) {
        toast.error(res?.error || "An error occurred with otp response");
      } else {
        // Ressponse 
        console.log("OTP verified successfully:", res);
        if (res?.session) {
          //  start session 
          setSession({ session: res?.session, customer: res?.customer });
          router.push("/")
        } else {
          toast.error("Response has came without session");
        }
      }
    } catch (err) {
      toast.error(err?.message || "An Error Response has came without session");
    }
  };

  return { onSubmit, register, handleSubmit, errors, isSubmitting };
}

export default UseSubmit;