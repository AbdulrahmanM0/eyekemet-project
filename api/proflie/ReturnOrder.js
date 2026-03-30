"use server";

import axiosInstance from "@/lib/axios";
import { getSessionToken } from "../authinticated";

export default async function handleReturnOrders({ path = "get-orders", params = "",data = {} }) {
    const { token } = await getSessionToken();

    try {
        const res = await axiosInstance.patch(
            `functions/v1/${path}${params}`,
            {
                ...data
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log("peding", res.data)
        return res.data;
    } catch (error) {
        console.error("Request failed:", error?.response?.data || error.message);
        return error?.response?.data;
    }
}