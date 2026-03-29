"use server";

import axiosInstance from "@/lib/axios";

export default async function handleContact({ data }) {
  try {
    const res = await axiosInstance.post("functions/v1/contact-form", {
      ...data
    });
    return res.data;
  } catch (error) {
    return error?.response?.data
  }
}