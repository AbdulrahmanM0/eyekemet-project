"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getSessionToken() {
  const cookieStore = await cookies(); 
  const token = cookieStore.get("token")?.value;
  const customer = cookieStore.get("customer");

  return { token, customer };         
}

export async function deleteSession() {
  const cookieStore = await cookies(); 

  cookieStore.set("token", "", { maxAge: 0, path: "/" });
  cookieStore.set("customer", "", { maxAge: 0, path: "/" });

  redirect("/signin");
}