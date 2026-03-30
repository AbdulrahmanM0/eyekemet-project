import { getSessionToken } from "@/api/authinticated";
import axiosInstance from "@/lib/axios";

export default async function handlePromocode(code) {
  const { token } = await getSessionToken();

  try {
    const res = await axiosInstance.get(
      `rest/v1/promocodes?tenant_id=eq.${process.env.TENANT_ID}&code=eq.${code}&is_active=eq.true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          tenant_id: process.env.TENANT_ID,
        },
      }
    );

    return res?.data?.[0] || null;
  } catch (error) {
    console.error("Error fetching promocode:", error?.response || error);
    return null;
  }
}