"use server";

import axiosInstance from "@/lib/axios";
import { getSessionToken } from "../authinticated";

export default async function handleProfile() {
    const {token} = await getSessionToken();
    try {
        const res = await axiosInstance.get(
            `functions/v1/get-customer`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return res.data;
    } catch (error) {
        console.error("Request failed:", error?.response?.data || error.message);
        return error?.response?.data;
    }
}