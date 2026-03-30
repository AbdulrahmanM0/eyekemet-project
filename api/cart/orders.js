"use server";

import axiosInstance from "@/lib/axios";
import { getSessionToken } from "../authinticated";
export async function handleListOrders( ) {
    const { token } = await getSessionToken();

    try {
        const res = await axiosInstance.get(`functions/v1/get-customer-orders?tenant_id=${process.env.TENANT_ID}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                tenant_id: process.env.TENANT_ID
            },
        }
        );
        console.log("lsjdhfkdjfhdkslj", res?.data)

        return res.data;
    } catch (error) {
        console.log("lsjdhfkdjfhdkslj", error?.response)
        return error?.response?.data || { error: "Server error" };
    }
}

