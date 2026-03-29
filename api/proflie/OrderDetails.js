"use server";

import axiosInstance from "@/lib/axios";
import { getSessionToken } from "../authinticated";

export default async function handleOrderDetails(id) {
    const { token } = await getSessionToken();
    try {
        const res = await axiosInstance.get(
            `functions/v1/get-customer-orders?order_id=${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return res.data;
    } catch (error) {
        console.error("ordersesponse", error?.response || error.message);
        return error?.response?.data;
    }
}