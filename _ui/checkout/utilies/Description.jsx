"use client"
import Link from 'next/link'
import PersonalForm from "./forms/PersonalForm";
import AddressForm from "./forms/AddressForm";
import PaymentMethod from "./forms/PaymentMethod";
import Product from './Product';
import DeliverTo from './forms/DeliverTo';

function Description({ cartItems, register, control, errors, alladdress, setValue, loading }) {

    return (
        <div className='flex flex-col gap-clamp-40'>
            {/* navigation */}
            <div className='flex gap-clamp-14 text-clamp-16 leading-[0.7] text-gray200'>
                <Link href={"/"}>Home</Link><span>/</span><Link href={"/products"}>Cart</Link><span>/</span><span className='text-light400 whitespace-nowrap'>Ckeckout</span>
            </div>

            {/* title  */}
            <div>
                <h3 className='text-clamp-64 text-light400 uppercase font-bold leading-none'>
                    Checkout
                </h3>
            </div>

            <p className="text-clamp-18 text-gray200 leading-[0.7]">
                {cartItems && cartItems?.length} items order
            </p>

            {/* products  */}
            <div>
                {
                    cartItems?.map((item) => (
                        <Product {...item} key={item?.id} loading={loading}/>
                    ))
                }
            </div>

            {/* personal info  */}
            <PersonalForm register={register} control={control} errors={errors} loading={loading}/>
            {/* Deliver to  */}
            <DeliverTo alladdress={alladdress} setValue={setValue} />

            {/* address info  */}
            {/* <AddressForm register={register}/> */}
            {/* payment method  */}
            <PaymentMethod register={register} />
        </div>
    )
}

export default Description