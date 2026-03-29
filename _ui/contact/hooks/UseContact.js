// hooks/useContactForm.js
"use client"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import handleContact from "@/api/contact/handleContact";

export default function useContactForm(contactForm = []) {

  // create Zod schema dynamically
  const schema = useMemo(() => {
    const shape = {};

    contactForm.forEach((field) => {
      const { id, field_type, is_required } = field;

      let zodField;

      switch (field_type) {
        case "email":
          zodField = is_required ? z.string().email("Invalid email") : z.string().email("Invalid email").optional();
          break;
        case "phone":
          zodField = is_required ? z.string().min(10, "Invalid phone") : z.string().min(10, "Invalid phone").optional();
          break;
        case "textarea":
        case "text":
        case "select":
        default:
          zodField = is_required ? z.string().min(1, "Required") : z.string().optional();
      }

      shape[id] = zodField;
    });

    return z.object(shape);
  }, [contactForm]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  // submit handler
  const onSubmit = async (data) => {
    console.log("Form submitted:", data);
    // TODO: send to API
    const res = await handleContact({data})
    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
}