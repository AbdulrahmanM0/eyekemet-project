"use server";

import axios from "axios";
import { getSessionToken } from "../authinticated";

export default async function handleCheckoutFull(data) {
  const { token } = await getSessionToken();

  try {
    const res = await axios.post(
      `${process.env.THE_COINS_API}/functions/v1/create-public-order`,
      {
        ...data, 
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          tenant_id: process.env.TENANT_ID,
        },
      }
    );

    return res.data; 
  } catch (error) {
    console.log("Error", error.response?.data || error.message);
    return error.response?.data || { error: "Server error" };
  }
}