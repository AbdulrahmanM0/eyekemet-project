"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FilterAccordion({ filters }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getParamKey = (filterName) => {
    if (filterName === "sub_category") return `attr_${filterName}`;
    if (filterName === "tags") return "attr_KEY";
    return filterName;
  };

  const [selectedSingle, setSelectedSingle] = React.useState(() => {
    const initial = {};
    filters.forEach((f) => {
      if (f.type === "select") {
        const key = getParamKey(f.name);
        const value = searchParams.get(key);
        if (value) initial[f.name] = value;
      }
    });
    return initial;
  });

  const [selectedMulti, setSelectedMulti] = React.useState(() => {
    const initial = {};
    filters.forEach((f) => {
      if (f.type === "multi_select") {
        const key = getParamKey(f.name);
        const value = searchParams.get(key);
        if (value) initial[f.name] = value.split(",");
      }
    });
    return initial;
  });

  const [selectedRange, setSelectedRange] = React.useState(() => {
    const initial = {};
    filters.forEach((f) => {
      if (f.type === "range") {
        const min = searchParams.get("price_min");
        const max = searchParams.get("price_max");
        if (min || max) {
          initial[f.name] = {
            min: Number(min) || f.min,
            max: Number(max) || f.max,
          };
        }
      }
    });
    return initial;
  });

  const [selectedBoolean, setSelectedBoolean] = React.useState(() => {
    const initial = {};
    filters.forEach((f) => {
      if (f.type === "boolean") {
        const value = searchParams.get(f.name);
        if (value) initial[f.name] = value === "true";
      }
    });
    return initial;
  });

  const updateSearchParams = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete(key);

    if (value === null || value === "" || (Array.isArray(value) && value.length === 0)) {
      router.replace(`?${params.toString()}`);
      return;
    }

    if (typeof value === "object" && value.min !== undefined && value.max !== undefined) {
      params.set("price_min", value.min);
      params.set("price_max", value.max);
    } else if (Array.isArray(value)) {
      params.set(key, value.join(","));
    } else {
      params.set(key, value);
    }

    router.replace(`?${params.toString()}`);
  };

  const handleSingleChange = (filterName, value) => {
    const paramKey = getParamKey(filterName);
    setSelectedSingle((prev) => {
      const updated = { ...prev, [filterName]: value };
      updateSearchParams(paramKey, value);
      return updated;
    });
  };

  const handleMultiChange = (filterName, value) => {
    const paramKey = getParamKey(filterName);
    setSelectedMulti((prev) => {
      const current = prev[filterName] || [];
      const updatedValues = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      const updated = { ...prev, [filterName]: updatedValues };
      updateSearchParams(paramKey, updatedValues);
      return updated;
    });
  };

  const handleRangeChange = (filterName, minOrMax, value, filterDefault) => {
    setSelectedRange((prev) => {
      const current = prev[filterName] || {
        min: filterDefault.min,
        max: filterDefault.max,
      };
      const updated = {
        ...prev,
        [filterName]: { ...current, [minOrMax]: Number(value) },
      };
      updateSearchParams(filterName, updated[filterName]);
      return updated;
    });
  };

  const handleBooleanChange = (filterName, value) => {
    setSelectedBoolean((prev) => {
      const updated = { ...prev, [filterName]: value };
      updateSearchParams(filterName, value);
      return updated;
    });
  };

  return (
    <Accordion type="multiple" collapsible="true" className="w-full">
      {filters.filter((item) => item.name !== "sort").map((filter, index) => (
        <AccordionItem value={filter.name} key={filter.name + index} className="border-b border-b-gray300">
          <AccordionTrigger className="text-clamp-18 font-thin">
            {filter.name.replace(/_/g, " ")}
          </AccordionTrigger>
          <AccordionContent className="p-4 bg-gray-900 text-white rounded-b-md">
            {filter.type === "select" && (
              <div className="flex flex-col gap-2">
                {filter.values.map((val) => (
                  <label
                    key={val.id || val}
                    className="flex items-center gap-2"
                    style={{ color: "#AE7929" }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedSingle[filter.name] === (val.id || val)}
                      onChange={() =>
                        handleSingleChange(filter.name, val.id || val)
                      }
                      style={{ accentColor: "#AE7929" }}
                    />
                    {val.name || val}
                  </label>
                ))}
              </div>
            )}

            {filter.type === "multi_select" && (
              <div className="flex flex-col gap-2">
                {filter.values.map((val) => (
                  <label
                    key={val}
                    className="flex items-center gap-2"
                    style={{ color: "#AE7929" }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedMulti[filter.name]?.includes(val) || false}
                      onChange={() => handleMultiChange(filter.name, val)}
                      style={{ accentColor: "#AE7929" }}
                    />
                    {val}
                  </label>
                ))}
              </div>
            )}

            {filter.type === "range" && (
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input
                    type="number"
                    min={filter.min}
                    max={filter.max}
                    value={selectedRange[filter.name]?.min ?? filter.min}
                    onChange={(e) =>
                      handleRangeChange(
                        filter.name,
                        "min",
                        e.target.value,
                        filter
                      )
                    }
                    className="w-1/2 p-2 text-black rounded"
                    placeholder="Min"
                  />
                  <input
                    type="number"
                    min={filter.min}
                    max={filter.max}
                    value={selectedRange[filter.name]?.max ?? filter.max}
                    onChange={(e) =>
                      handleRangeChange(
                        filter.name,
                        "max",
                        e.target.value,
                        filter
                      )
                    }
                    className="w-1/2 p-2 text-black rounded"
                    placeholder="Max"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>{filter.min}</span>
                  <span>{filter.max}</span>
                </div>
              </div>
            )}

            {filter.type === "boolean" && (
              <label
                className="flex items-center gap-2"
                style={{ color: "#AE7929" }}
              >
                <input
                  type="checkbox"
                  checked={selectedBoolean[filter.name] || false}
                  onChange={(e) =>
                    handleBooleanChange(filter.name, e.target.checked)
                  }
                  style={{ accentColor: "#AE7929" }}
                />
                Yes / No
              </label>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}