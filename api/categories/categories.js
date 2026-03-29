"use server";

import axiosInstance from "@/lib/axios";
import { getSessionToken } from "../authinticated";

export default async function handleCategory({ method = "get", formData = {} }) {
  const { customer } = await getSessionToken();

  const customerData = JSON.parse(customer.value);

  const body = {
    ...formData,
    customer_id: customerData.id,
    tenant_id: process.env.TENANT_ID,
  };


  try {
    const res = await axiosInstance.post(
      `functions/v1/cart/${method}`,
      body
    );

    return {
      data: res.data,
      status: res.status,
    };
  } catch (error) {
    console.log("Error:", error?.response?.data || error.message);

    return {
      data: error?.response?.data,
      status: error?.response?.status,
    };
  }
}