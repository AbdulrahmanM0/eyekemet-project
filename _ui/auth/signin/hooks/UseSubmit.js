
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import handleSginin from "@/api/auth/login";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authWarn } from "@/store/features/cart/cartSlice";

const schema = z.object({
    phone: z
        .string()
        .min(10, "Phone number too short")
        .transform((val) => val.replace(/\s|-/g, ""))
        .refine((val) => /^\+?\d+$/.test(val), {
            message: "Invalid phone number",
        }),
});

function UseSubmit(props) {
    const openDialog = useSelector(state => state.cartReducer?.authwarntoggle)
    const dispatch = useDispatch();
    const [time, setTime] = useState(0);
    const {
        register,
        handleSubmit,
        setError,
        setValue,
        control,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const router = useRouter();
    const onSubmit = async (data) => {
        try {
            const phone = props?.phone || data?.phone?.replace(/\s+/g, "");
            const formData = new FormData();
            formData.set("phone", phone);

            const res = await handleSginin(formData);

            if (res.status === 429) {
                console.log("Too many requests");
                toast.error(res.data?.error || "Too many requests. Please wait a moment.");
                setTime(10 * 60)
            } else if (res.data?.error) {
                toast.error(res.data.error);
            } else {
                if(openDialog) dispatch(authWarn(false));
                router.push(`/signin/otp?phone=${phone}`);
            }
        } catch (err) {
            setError("phone", {
                type: "server",
                message: err?.message || "Something went wrong",
            });
        }
    };

    return { onSubmit, register, handleSubmit, errors, isSubmitting, control, setValue, time, setTime }
}

export default UseSubmit