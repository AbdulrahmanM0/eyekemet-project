"use server";

import axiosInstance from "@/lib/axios";
import { getSessionToken } from "../authinticated";

export default async function handleAddress({ data, method }) {
    const { token } = await getSessionToken();

    try {
        const res = await axiosInstance[method](`functions/v1/customer-addresses`, {
            ...data
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        );
        return res.data;
    } catch (error) {
        console.log("thiss is sthe rerror", error)
        return error?.response?.data || { error: "Server error" };
    }
}