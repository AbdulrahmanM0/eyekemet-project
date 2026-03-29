"use client"
import { useState } from "react";

const PlusIcon = () => (
    <div className="p-clamp-10 border border-gray400 rounded-[2px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M12 5C12.5523 5 13 5.44772 13 6V11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H11V6C11 5.44772 11.4477 5 12 5Z"
                fill="#AE7929"
            />
        </svg>
    </div>
);

const MinusIcon = () => (
    <div className="p-clamp-10 border border-gray400 rounded-[2px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H18Z"
                fill="#AE7929"
            />
        </svg>
    </div>
);

const AccordionItem = ({ title, children, isOpen, onClick }) => (
    <div className={`border border-gray400 w-full ${isOpen && " bg-wd600 "}`}>
        <button
            className="w-full flex justify-between items-center p-clamp-32 text-left font-bold text-white text-clamp-28 uppercase hover:bg-gray-900"
            onClick={onClick}
        >
            {title}
            {isOpen ? <MinusIcon /> : <PlusIcon />}
        </button>
        {isOpen && <div className="p-clamp-32 text-gray100">{children}</div>}
    </div>
);

export default function Accordion({faqs}) {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-full rounded-lg overflow-hidden">
            {faqs.map((faq, index) => (
                <AccordionItem
                    key={index}
                    title={faq.question}
                    isOpen={openIndex === index}
                    onClick={() => toggleIndex(index)}
                >
                    {faq.answer}
                </AccordionItem>
            ))}
        </div>
    );
}