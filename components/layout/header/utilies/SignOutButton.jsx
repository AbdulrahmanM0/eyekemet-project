"use client";

import { deleteSession } from "@/api/authinticated";
import { resetCart } from "@/store/features/cart/cartSlice";
import { useDispatch } from "react-redux";

export default function SignOutButton() {
    const dispatch = useDispatch()

    const handleSignOut = async () => {
        try {
            dispatch(resetCart());
            await deleteSession();
        } catch (error) {
            console.error("Sign out failed:", error);
        }
    };

    return (
        <button
            className="text-light400 text-clamp-14 flex gap-clamp-12 items-center"
            onClick={handleSignOut}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-16 h-clamp-16" width="16" height="18" viewBox="0 0 16 18" fill="none">
                <path d="M11 0C11.5523 0 12 0.447715 12 1C12 1.55228 11.5523 2 11 2H2V15C2 15.5523 2.44772 16 3 16H11C11.5523 16 12 16.4477 12 17C12 17.5523 11.5523 18 11 18H3C1.34315 18 0 16.6569 0 15V1C0 0.447715 0.447715 0 1 0H11ZM11.6172 5.07617C11.9909 4.92139 12.421 5.00697 12.707 5.29297L15.707 8.29297C16.0976 8.68349 16.0976 9.31651 15.707 9.70703L12.707 12.707C12.421 12.993 11.9909 13.0786 11.6172 12.9238C11.2436 12.769 11 12.4044 11 12V10H5C4.44772 10 4 9.55228 4 9C4 8.44772 4.44772 8 5 8H11V6C11 5.59558 11.2436 5.23098 11.6172 5.07617Z" fill="#AE7929" />
            </svg>
            Sign Out
        </button>
    );
}