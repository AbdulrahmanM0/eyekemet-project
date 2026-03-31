"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useEffect } from "react";
import handleCheckout from "@/api/cart/checkout";
import handlePromocode from "@/api/cart/promocode"; 
import { useRouter } from "next/navigation";
// import { validateAndApplyPromocode } from "@/utils/promocode"; 

const schema = z.object({
  customer_name: z.string().min(1, "Name is required"),
  customer_email: z.string().email("Invalid email address"),
  customer_phone: z
    .string()
    .min(1, "Phone is required")
    .regex(/^(\+20|0)?1[0-2,5]{1}[0-9]{8}$/, "Invalid phone number"),
  promocode: z.string().optional(),
}).passthrough();

function useCheckout(props) {
  const router = useRouter(); 
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
      discount: 0,
      promocode: "",
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
        discount: Number(props.cart.discount || 0),
        promocode: "",
        tenant_id: props.cart.tenant_id || ""
      });
    }
  }, [props.cart, props.items, props.name, props.email, props.phone, props.extraction_id, reset]);

  const onSubmit = async (data) => {
    try {
      // Generate unique order number
      const order_number = `ORD-${Date.now().toString(36).toUpperCase()}`;
      const payload = { ...data, order_number };

      // Validate promo code if exists
      if (data.promocode) {
        const promoRes = await handlePromocode(data.promocode);
        if (!promoRes?.length) {
          toast.error("Invalid promo code");
          return;
        }

        // const validation = validateAndApplyPromocode(data.total, promoRes[0]);
        // if (!validation.valid) {
        //   toast.error(validation.error);
        //   return;
        // }

        // Apply discount
        payload.discount = (payload.discount || 0) + validation.discount;
        payload.total = Math.max(payload.total - validation.discount, 0);
      }

      const res = await handleCheckout(payload);
      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success(`Checkout successful! Your order number: ${order_number}`);
        router.push("/")
      }
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    }
  };

  return { onSubmit, register, handleSubmit, errors, isSubmitting, control, setValue };
}

export default useCheckout;