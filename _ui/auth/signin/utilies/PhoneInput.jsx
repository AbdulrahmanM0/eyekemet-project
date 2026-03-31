import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";

function Phone({ control }) {
    return (
        <Controller
            name="phone"
            control={control}
            rules={{ required: "Phone is required" }}
            classame="input"
            render={({ field }) => (
                <PhoneInput
                    {...field}
                    country={"eg"}
                    placeholder="Enter Phone Number*"
                    inputClass="input w-full"
                    dropdownClass="bg-gray-900"
                    dropdownStyle={{
                        backgroundColor: "#151515",
                        color: "#fff",
                    }}
                    inputStyle={{
                        width: "100%",
                        border: "1px solid #2B2B2B",                     
                        paddingTop: "clamp(20px, 1vw, 20px)",
                        paddingBottom: "clamp(20px, 1vw, 20px)",
                        borderRadius: "2px",
                        backgroundColor: "#151515", 
                        fontSize: "clamp(16px, 1vw, 16px)",
                        lineHeight: "0.7",
                        outline: "none",
                    }} specialLabel=""
                    onChange={(value) => field.onChange(value)}
                />

            )}
        />
    )
}

export default Phone