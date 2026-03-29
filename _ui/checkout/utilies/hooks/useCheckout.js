"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useEffect } from "react";
import handleCheckout from "@/api/cart/checkout";

const schema = z.object({
  customer_name: z.string().min(1, "Name is required"),
  customer_email: z.string().email("Invalid email address"),
  customer_phone: z
    .string()
    .min(1, "Phone is required")
    .regex(/^(\+20|0)?1[0-2,5]{1}[0-9]{8}$/, "Invalid phone number"),
}).passthrough();

function useCheckout(props) {
  const formatAddress = (addresses = []) => {
    const item = addresses.find((i) => i?.is_default);
    if (!item) return "";

    return `${item.building_number || ""}, ${item.street || ""}, ${item.floor ? `${item.floor}th floor` : ""
      }, ${item.address || ""}`
      .replace(/(, )+/g, ", ")
      .replace(/^, |, $/g, "");
  };

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
      extraction_id: props?.extraction_id || "",
      customer_name: props?.name || "",
      customer_email: props?.email || "",
      customer_phone: props?.phone || "",
      delivery_address: formatAddress(props?.alladdress),
      customer_id: "",
      order_type: "delivery",
      payment_method: "cash",
      items: props?.cartItems || [],
      subtotal: 0,
      tax: 0,
      total: 0,
      tenant_id: ""
    },
  });


  useEffect(() => {
    if (props.cart) {
      reset({
        extraction_id: props?.extraction_id || "",
        customer_name: props?.name || "",
        customer_email: props?.email || "",
        customer_phone: props?.phone || "",
        customer_id: props.cart.id || "",
        order_type: "delivery",
        payment_method: "cash",
        items: props?.cartItems || [],
        subtotal: Number(props.cart.subtotal || 0),
        tax: Number(props.cart.tax || 0),
        total: Number(props.cart.total || 0),
        tenant_id: props.cart.tenant_id || ""
      });
    }
  }, [props.cart, props.items, props.name, props.email, props.phone, props.extraction_id, reset]);

  const onSubmit = async (data) => {
    try {
      const res = await handleCheckout(data);
      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success("Checkout successful!");
      }
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    }
  };

  return { onSubmit, register, handleSubmit, errors, isSubmitting, control, setValue };
}

export default useCheckout;