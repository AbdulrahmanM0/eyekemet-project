"use client";

import { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Accordion from "./Accordion";

export default function FilterDrawer({ filter_products }) {
    const [open, setOpen] = useState(false);
    const filters = filter_products?.filters;

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="default" className="text-balance text-clamp-20 font-bold leading-none uppercase"> <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-24 h-clamp-24 text-balance fill-balance" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.5 17C13.0523 17 13.5 17.4477 13.5 18C13.5 18.5523 13.0523 19 12.5 19H11.5C10.9477 19 10.5 18.5523 10.5 18C10.5 17.4477 10.9477 17 11.5 17H12.5ZM16.5 11C17.0523 11 17.5 11.4477 17.5 12C17.5 12.5523 17.0523 13 16.5 13H7.5C6.94772 13 6.5 12.5523 6.5 12C6.5 11.4477 6.94772 11 7.5 11H16.5ZM19.5 5C20.0523 5 20.5 5.44772 20.5 6C20.5 6.55228 20.0523 7 19.5 7H4.5C3.94772 7 3.5 6.55228 3.5 6C3.5 5.44772 3.94772 5 4.5 5H19.5Z" />
                </svg> Open Filter</Button>
            </SheetTrigger>

            <SheetContent
                side="left"
                className="
                    mt-0
                    w-80 h-full
                    flex flex-col
                    rounded-none
                    border-l border-gray400
                    bg-dark100
                    focus:outline-none
                    z-[999]
                    text-balance
                    p-clamp-8
                "
            >
                <SheetHeader>
                    <SheetTitle>
                        <div className="text-clamp-16 text-balance font-thin pt-4">
                            Filter by :
                        </div>
                    </SheetTitle>
                </SheetHeader>

                <div className="overflow-y-auto p-1">
                    <Accordion filters={filters} />
                </div>

            </SheetContent>
        </Sheet>
    );
}