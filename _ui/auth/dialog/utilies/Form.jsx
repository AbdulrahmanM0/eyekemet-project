"use client";
import PhoneInput from "../../signin/utilies/PhoneInput";
import UseSubmit from "../../signin/hooks/UseSubmit";
export default function Form() {
  const { onSubmit, register, handleSubmit, errors, isSubmitting, control } = UseSubmit()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-clamp-24">
        {/* Phone input */}
        <div>
          <PhoneInput control={control} />
          {errors.phone && (
            <p className="text-red100 text-clamp-18 mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Sign in button */}
        <div>
          <button disabled={isSubmitting} className="secondary-btn !text-clamp-18 w-full !px-clamp-28 !py-clamp-16 justify-center flex gap-clamp-10 !leading-[1.3]">
            Login
            <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-24 h-clamp-24" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 18.4805H18V8.41406L6.70703 19.707L5.29297 18.293L16.5859 7H6.51953V5H19C19.5523 5 20 5.44772 20 6V18.4805Z" fill="#FEFEFE" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}