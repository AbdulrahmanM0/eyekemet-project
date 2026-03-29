"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useEffect } from "react";
import handleUpdateProfile from "@/api/proflie/UpdateProfile";
import { useRouter } from "next/navigation";
import { setSession } from "@/_ui/otp/hooks/setSession";

const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    birthday: z.string().optional(),
    gender: z.enum(["male", "female"], "Please select gender"),
});

function UseEdit(props) {
    const router = useRouter();
    
    const {
        register,
        handleSubmit,
        setError,
        setValue,
        control,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: props?.name || "",
            email: props?.email || "",
            birthday: props?.birthday || "676",
            gender: props?.gender || "male",
        },
    });

    const onSubmit = async (data) => {
        try {
            const res = await handleUpdateProfile(data);
            if (res?.error) {
                toast.error(res.error);
            } else {
                setSession({customer: res?.customer });
                router.refresh();
                toast.success("Profile updated successfully!");
            }
        } catch (err) {
            toast.error(err.message || "Something went wrong");
        }
    };

    return { onSubmit, register, handleSubmit, errors, isSubmitting, control, setValue };
}

export default UseEdit;