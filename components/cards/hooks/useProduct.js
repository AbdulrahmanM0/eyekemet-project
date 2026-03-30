"use client"
import { cart } from "@/store/features/cart/cartSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"

function useProduct() {
    const dispatch = useDispatch();
    const [selectedOptions, setSelectedOptions] = useState({});
    const { loading } = useSelector(state => state?.cartReducer);

    const handleAddToCart = async (id) => {
        const formData = {
            menu_item_id: id,
            quantity: 1,
            modifiers:selectedOptions
        }
        await dispatch(cart({ method: "add", formData }))
    }
    return { handleAddToCart, loading, setSelectedOptions , selectedOptions }
}

export default useProduct