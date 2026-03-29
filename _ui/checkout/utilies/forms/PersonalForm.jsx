import Phone from "@/components/items/PhoneInput";
import Skeleton from "react-loading-skeleton";

function ErrorMsg({ message, loading }) {
    if (!message) return null;
    return (
        <p className="text-red100 text-clamp-12 mt-1 flex items-center gap-1 animate-[slideDown_0.25s_ease-out] [@keyframes_slideDown]{0%{transform:translateY(-10px);opacity:0}100%{transform:translateY(0);opacity:1}}">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 4.418-3.582 8-8 8S2 14.418 2 10 5.582 2 10 2s8 3.582 8 8zm-8-3a1 1 0 00-1 1v2a1 1 0 002 0V8a1 1 0 00-1-1zm0 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            {message}
        </p>
    );
}
function PersonalForm({ errors, control, register, loading }) {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-clamp-20'>
            <div className="sm:col-span-2 flex flex-col gap-clamp-24">
                <h3 className='text-clamp-36 text-light400 uppercase font-bold leading-none'>
                    Personal info
                </h3>
                <p className="text-clamp-18 text-gray200 leading-none">
                    Fill the requirement data below
                </p>
            </div>

            {/* Name */}
            <div>
                {loading ? <Skeleton height={48} /> :
                    <input
                        className="input"
                        placeholder="Full name *"
                        type="text"
                        {...register("customer_name")}
                        disabled
                    />
                }
                <ErrorMsg message={errors.customer_name?.message} />
            </div>

            {/* Email */}
            <div>
                <input
                    className="input"
                    placeholder="Email *"
                    type="text"
                    {...register("customer_email")}
                />
                <ErrorMsg message={errors.customer_email?.message} />
            </div>

            <div className='sm:col-span-2'>
                <input className='input' placeholder='Enter mobile number  *' type="text" {...register("customer_phone")} />
                <ErrorMsg message={errors.customer_phone?.message} />

                {/* <Phone control={control} /> */}
            </div>
        </section>
    )
}

export default PersonalForm