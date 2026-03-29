"use client"

import React from "react"
import { Link } from "react-scroll"

function Navigation() {
    const navs = [
        { title: "Our story", target: "story" },
        { title: "Our mission", target: "mission" },
        { title: "Our vision", target: "vision" },
        { title: "Our values", target: "values" },
    ]

    return (
        <section className="hidden sm:block sticky top-[var(--header-height)] z-30 ">
            <div className="border-b border-b-gray400 bg-full text-balance flex justify-center w-full overflow-hidden">

                {navs.map((item) => (
                    <Link
                        key={item.target}
                        to={item.target}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        data-aos="fade-left"
                        activeClass="text-gold100 border-b border-b-gold100"
                        className=" p-clamp-32 leading-[0.7] text-clamp-18 uppercase font-bold whitespace-nowrap cursor-pointer"
                    >
                        {item.title}
                    </Link>
                ))}

            </div>
        </section>
    )
}

export default Navigation