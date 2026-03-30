"use server";

import axiosInstance from "@/lib/axios";

export default async function handleProducts(params = {}) {

  try {
    const queryString = new URLSearchParams(params).toString();

    const res = await axiosInstance.get(
      `functions/v1/get-category-products?tenant_id=${process.env.TENANT_ID}&${queryString}`
    );

    return res.data;
  } catch (error) {
    console.log("Error fetching products:", error?.response || error);
    console?.error("Request failed:", error?.response?.data || error.message);
    return error?.response?.data;
  }
}