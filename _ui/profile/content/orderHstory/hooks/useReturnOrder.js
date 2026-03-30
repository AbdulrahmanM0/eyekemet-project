"use client"
import handleReturnOrders from '@/api/proflie/ReturnOrder';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function useReturnOrder(currentStatus) {
    const [dialog, setDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const method = "delete";
    const handleDialog = () => {
        setDialog(prev => !prev)
    }

    const handleSubmit = async (id) => {
        try {
            setLoading(true)
            const res = await handleReturnOrders({ order_id: id, action: currentStatus });
            router.push("/profile/orders")
            if (res?.data) {
                toast.success(res?.data?.message || "Deleted Succefully");
                handleDialog()
                router.refresh();
            }
        } catch (error) {
            console.error(
                "Failed to add address:",
                error?.response?.data || error.message
            );
            toast.error(error?.response?.data || error.message || "Something went wrong");
            setSubmitError(error?.response?.data || error.message);
        } finally {
            setLoading(false)
        }
    }


    return { dialog, handleDialog, handleSubmit, loading }
}

export default useReturnOrder