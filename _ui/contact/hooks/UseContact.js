"use client"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import handleContact from "@/api/contact/handleContact";

export default function useContactForm() {
  const schema = z.object({
    name: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string()
      .min(10, "Mobile number must be at least 10 digits")
      .regex(/^\+?\d+$/, "Invalid phone number"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(1, "Message is required"),
  });

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    const res = await handleContact({data})
    // console.log(res,"rearaf") 
    // alert("Form submitted! Check console.");
    // reset();
  };

  return { register, handleSubmit, errors, isSubmitting, onSubmit };
}