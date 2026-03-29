"use server";

import axiosInstance from "@/lib/axios";

export default async function handleContact({ data }) {
  try {
    const res = await axiosInstance.post("functions/v1/contact-form", {
      form_data:{...data},
      tenant_id: process.env.TENANT_ID
    });
    return res.data;
  } catch (error) {
    console.log(error.response, "zzzzzdf")
    return error?.response?.data
  }
}