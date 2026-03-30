"use client"
import { useSelector } from "react-redux";
import Description from "../Description"
import PaymentSummary from "../PaymentSummary"
import useCheckout from "../hooks/useCheckout";

function FormProvider({ extraction_id, name, email, phone, alladdress , extraction }) {
    const { cartItems, cart , loading } = useSelector((state) => state.cartReducer);
    const { onSubmit, register, handleSubmit, errors, isSubmitting, control, setValue } = useCheckout({ name, email, phone, extraction_id, cart, cartItems, alladdress });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='px-clamp-100 bg-full'>
                <div className='flex flex-wrap gap-clamp-100 justify-center'>
                    {/* cols 1  */}
                    <div className='py-clamp-100 flex-1'>
                        <Description loading={loading} alladdress={alladdress} name={name} email={email} phone={phone} cartItems={cartItems} register={register} control={control} errors={errors} setValue={setValue} extraction={extraction} />
                    </div>
                    {/* cols 2 */}
                    <div className='py-clamp-100 '>
                        <PaymentSummary disable={isSubmitting} loading={loading}/>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormProvider