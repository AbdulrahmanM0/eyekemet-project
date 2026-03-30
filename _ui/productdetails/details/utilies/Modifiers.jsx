"use client";
import React, { useState, useEffect } from "react";

function Modifiers({ details, setSelectedOptions, selectedOptions }) {

    useEffect(() => {
        if (!details?.modifiers) return;
        const initialSelections = {};
        details.modifiers.forEach((modifier) => {
            const defaultOption = modifier.options.find((opt) => opt.is_default && opt.is_available);
            const firstAvailable = modifier.options.find((opt) => opt.is_available);

            initialSelections[modifier.id] = defaultOption || firstAvailable;
        });
        setSelectedOptions(initialSelections);
    }, [details]);

    const handleOptionClick = (modifierId, option) => {
        if (!option.is_available) return;

        setSelectedOptions((prev) => ({
            ...prev,
            [modifierId]: option,
        }));
    };

    return (
        <>
            {details?.modifiers?.length > 0 && (
                <div className="flex flex-col gap-clamp-20">
                    {details.modifiers.map((modifier) => (
                        <div key={modifier.id}>
                            <h5 className="text-light200 uppercase font-bold text-clamp-14 3xl:text-clamp-16 leading-[1.2]">
                                {modifier.name}
                            </h5>

                            <div className="flex justify-between flex-wrap gap-clamp-32">
                                <div className="flex gap-clamp-10 flex-wrap text-balance text-clamp-14 3xl:text-clamp-16">
                                    {modifier.options.map((option) => {
                                        const isSelected = selectedOptions[modifier.id]?.id === option.id;
                                        return (
                                            <div
                                                key={option.id}
                                                onClick={() => handleOptionClick(modifier.id, option)}
                                                className={`
                                                            p-clamp-16 w-[44px] h-[44px] rounded-[2px] flex items-center justify-center
                                                            ${isSelected ? "bg-gold100 border border-[#BC904D]" : "border border-gray400"}
                                                            ${!option.is_available ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                                                            `}
                                                >
                                                {option.name}
                                            </div>
                                        );
                                    })}
                                </div>

                                {modifier.name.toLowerCase() === "size" && (
                                    <div className="px-clamp-24 py-clamp-12 gap-clamp-10 flex border border-gold100 rounded-[2px] h-fit items-center mt-auto">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-clamp-16 h-clamp-16"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                        >
                                            <path
                                                d="M10.5 1.25C10.7652 1.25 11.0195 1.35543 11.207 1.54297L14.957 5.29297C15.1446 5.48051 15.25 5.73478 15.25 6V13.75C15.25 15.4069 13.9069 16.75 12.25 16.75H5.75C4.09315 16.75 2.75 15.4069 2.75 13.75V2.25C2.75 1.69772 3.19772 1.25 3.75 1.25H10.5ZM6.75 11.75C6.19772 11.75 5.75 12.1977 5.75 12.75C5.75 13.3023 6.19772 13.75 6.75 13.75H11.25C11.8023 13.75 12.25 13.3023 12.25 12.75C12.25 12.1977 11.8023 11.75 11.25 11.75H6.75ZM6.75 8.75C6.19772 8.75 5.75 9.19772 5.75 9.75C5.75 10.3023 6.19772 10.75 6.75 10.75H11.25C11.8023 10.75 12.25 10.3023 12.25 9.75C12.25 9.19772 11.8023 8.75 11.25 8.75H6.75ZM10.75 5.75H12.5859L10.75 3.91406V5.75Z"
                                                fill="#FEFEFE"
                                            />
                                        </svg>
                                        <h6 className="text-clamp-14 3xl:text-clamp-16 font-bold uppercase leading-[0.7] text-balance">
                                            Size Guide
                                        </h6>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Modifiers;