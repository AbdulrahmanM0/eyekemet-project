"use server";

import axiosInstance from "@/lib/axios";

export default async function handleCampaigns() {
  try {
    const res = await axiosInstance.get(
      `rest/v1/smart_campaigns?tenant_id=eq.${process.env.TENANT_ID}&status=eq.active`
    );
    return res.data;
  } catch (error) {
    console.error("Request failed:", error?.response?.data || error.message);
    return error?.response?.data;
  }
}