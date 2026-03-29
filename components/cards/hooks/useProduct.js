"use client"
import { cart } from "@/store/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux"

function useProduct() {
    const dispatch = useDispatch();
    const {loading} = useSelector(state => state?.cartReducer);

    const handleAddToCart = async (id) => {
        const formData = {
            menu_item_id: id,
            quantity: 1,
        }
        await  dispatch(cart({method: "add", formData }))
    }
    return {handleAddToCart,loading}
}

export default useProduct