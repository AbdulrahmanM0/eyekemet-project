"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTransition } from "react";

export default function DropFilter({ title, values, onChange }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState(() => {
    const currentValue = searchParams.get("order_by");
    return values.find((v) => v.value === currentValue) ?? null;
  });

  const [isPending, startTransition] = useTransition();

  const select = (item) => {
    setSelected(item);
    onChange?.(item.id);

    const params = new URLSearchParams(searchParams.toString());
    params.set("order_by", item.value);
    params.set("per_page", "1");

    startTransition(() => {
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  const displayLabel = selected ? selected.title : title;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-clamp-18 focus-visible:outline-none group">
        <span className="text-balance text-clamp-20 font-bold leading-none uppercase">
          {displayLabel}
        </span>
        <svg
          className="transition-transform duration-300 group-data-[state=open]:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.292933 5.29289C0.00694959 5.57888 -0.0786362 6.00906 0.0761363 6.38273C0.230944 6.75632 0.59556 6.99991 0.999964 6.99992L11 6.99992C11.4044 6.99992 11.769 6.75633 11.9238 6.38273C12.0786 6.00906 11.993 5.57888 11.707 5.29289L6.707 0.292886C6.31647 -0.0976235 5.68345 -0.0976333 5.29293 0.292886L0.292933 5.29289Z"
            fill="#6B6B6B"
          />
        </svg>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="bg-dark100 border-none p-4 flex flex-col gap-clamp-20 min-w-[300px] z-[9999]"
      >
        {values.map((item) => {
          const isSelected = selected?.id === item.id;

          return (
            <label
              key={item.id}
              className="flex items-center gap-4 cursor-pointer select-none"
              onClick={() => select(item)}
            >
              <div
                className={`h-clamp-24 w-clamp-24 border rounded-[2px] flex items-center justify-center transition-all duration-200 ${
                  isSelected ? "bg-gold100 border-[#D0B183]" : "border-[#6B6B6B]"
                }`}
              >
                {/*  spinner */}
                {isSelected && (
                  isPending ? (
                    <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-clamp-10 h-clamp-10"
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.45975 0.292807C8.85029 -0.0975503 9.48334 -0.0976547 9.87382 0.292807C10.264 0.683296 10.2641 1.31641 9.87382 1.70687L4.33182 7.24886C4.1443 7.43629 3.88993 7.54183 3.62479 7.54183C3.35966 7.54183 3.10528 7.43629 2.91776 7.24886L0.292762 4.62386C-0.0976644 4.23342 -0.0975099 3.60033 0.292762 3.2098C0.683296 2.81929 1.31631 2.81926 1.70682 3.2098L3.62479 5.12777L8.45975 0.292807Z"
                        fill="#F7F2EA"
                      />
                    </svg>
                  )
                )}
              </div>
              <span className="text-white text-clamp-18 font-light">{item.title}</span>
            </label>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}