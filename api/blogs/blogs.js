"use server";

import axiosInstance from "@/lib/axios";

export default async function handleBlogs(slug) {
  try {
    const query = new URLSearchParams({
      tenant_id: process.env.TENANT_ID,
      ...(slug ? { slug } : {}), 
    }).toString();

    const res = await axiosInstance.get(`functions/v1/get-blog-posts?${query}`);

    return res.data;
  } catch (error) {
    // console.error("Blogs error:", error?.response?.data || error.message);
    return null;
  }
}