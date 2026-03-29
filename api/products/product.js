"use server";

import axiosInstance from "@/lib/axios";

export default async function handleProduct({item_id}) {

    try {
        const res = await axiosInstance.get(
            `functions/v1/get-menu-items?tenant_id=${process.env.TENANT_ID}&item_id=${item_id}`
        );
        return res.data;
    } catch (error) {
        console.error("Request failed:", error?.response?.data || error.message);
        return error?.response?.data;
    }
}