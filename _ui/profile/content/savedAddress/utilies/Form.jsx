"use client";

import MapAddress from "@/components/items/map/MapAddress";
import UseAddAddress from "../hooks/UseAddAddress";
import { CountryDropdown } from "@/components/items/map/CountrySelector";

// error message 
function ErrorMsg({ message }) {
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

function Form({ address, method }) {
  const { onSubmit, register, handleSubmit, errors, isSubmitting, submitError } =
    UseAddAddress({ ...address, method });

  return (
    <>
      <form
        className="grid md:grid-cols-2 grid-cols-1 gap-clamp-24"
        data-aos="fade-up"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <div>
          <CountryDropdown
            placeholder="Select country"
            defaultValue="USA"
            onChange={() => "void"}
          />
        </div>
        <div className="col-span-2">
          <MapAddress />
        </div> */}
        {/* Label */}
        <div className="md:col-span-2">
          <input
            className={`input transition-colors duration-200 ${errors.label ? "!border-red100 !focus:border-red100" : ""}`}
            placeholder="Label (e.g., Work)"
            type="text"
            {...register("label")}
            disabled={isSubmitting}
          />
          <ErrorMsg message={errors.label?.message} />
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <input
            className={`input transition-colors duration-200 ${errors.address ? "!border-red100 !focus:border-red100" : ""}`}
            placeholder="Address"
            type="text"
            {...register("address")}
            disabled={isSubmitting}
          />
          <ErrorMsg message={errors.address?.message} />
        </div>

        {/* Street */}
        <div>
          <input
            className={`input transition-colors duration-200 ${errors.street ? "!border-red100 !focus:border-red100" : ""}`}
            placeholder="Street"
            type="text"
            {...register("street")}
            disabled={isSubmitting}
          />
          <ErrorMsg message={errors.street?.message} />
        </div>

        {/* Building Number */}
        <div>
          <input
            className={`input transition-colors duration-200 ${errors.building_number ? "!border-red100 !focus:border-red100" : ""}`}
            placeholder="Building Number"
            type="text"
            {...register("building_number")}
            disabled={isSubmitting}
          />
          <ErrorMsg message={errors.building_number?.message} />
        </div>

        {/* Floor */}
        <div className="md:col-span-2">
          <input
            className={`input transition-colors duration-200 ${errors.floor ? "!border-red100 !focus:border-red100" : ""}`}
            placeholder="Floor"
            type="text"
            {...register("floor")}
            disabled={isSubmitting}
          />
          <ErrorMsg message={errors.floor?.message} />
        </div>

        {/* Default Address */}
        <div className="md:col-span-2">
          <label
            className="flex items-center gap-clamp-16 cursor-pointer select-none"
          >
            <input
              type="checkbox"

              {...register("is_default")}
              className="peer hidden"
              disabled={isSubmitting}
            />
            <div className="h-clamp-24 w-clamp-24 border border-gray300 rounded flex items-center justify-center transition-all duration-200 peer-checked:bg-gold100 peer-checked:border-black">
              <svg
                className="transition-opacity duration-200 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.6678 3.66781C11.0583 3.27745 11.6914 3.27735 12.0818 3.66781C12.472 4.0583 12.4721 4.69141 12.0818 5.08187L6.53983 10.6239C6.35231 10.8113 6.09793 10.9168 5.8328 10.9168C5.56767 10.9168 5.31329 10.8113 5.12577 10.6239L2.50077 7.99886C2.11034 7.60842 2.1105 6.97533 2.50077 6.5848C2.8913 6.19429 3.52432 6.19426 3.91483 6.5848L5.8328 8.50277L10.6678 3.66781Z"
                  fill="#292929"
                />
              </svg>
            </div>
            <p className="text-clamp-18 text-balance leading-[0.7]">Default Address</p>
          </label>
        </div>

        {/* Submit Error */}
        {submitError && (
          <div className="md:col-span-2 text-red-500 text-sm animate-[slideDown_0.25s_ease-out] flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {typeof submitError === "string" ? submitError : JSON.stringify(submitError)}
          </div>
        )}

        {/* Submit Button */}
        <div className="w-fit md:col-span-2">
          <button
            type="submit"
            className="secondary-btn whitespace-nowrap shrink-0 !w-fit !py-clamp-16 !px-clamp-24"
            disabled={isSubmitting}
          >
            {method === "post" ?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-clamp-14 h-clamp-14"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7 0C7.55228 0 8 0.447715 8 1V6H13C13.5523 6 14 6.44772 14 7C14 7.55228 13.5523 8 13 8H8V13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13V8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H6V1C6 0.447715 6.44772 0 7 0Z"
                  fill="#FEFEFE"
                />
              </svg> :
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M20 18.4805H18V8.41406L6.70703 19.707L5.29297 18.293L16.5859 7H6.51953V5H19C19.5523 5 20 5.44772 20 6V18.4805Z" fill="#FEFEFE" />
              </svg>}
            {isSubmitting ? "Loading..." : method === "post" ? "Add new address" : method === "put" && "Update Address"}
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;