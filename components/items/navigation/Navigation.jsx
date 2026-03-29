import Link from 'next/link'
import React from 'react'

function Navigation({ pagination }) {
    return (
        <div className='flex justify-center gap-clamp-14 text-clamp-16 text-gray200 leading-[0.7]'>
            <Link href={"/"}>
                Home
            </Link>
            {pagination?.length > 0 && pagination.map((item, index) => (
                <React.Fragment key={index}>
                    <span key={index}>
                        /
                    </span>
                    <Link key={index+item.title} href={item.Link || "#"}>
                        {item.title}
                    </Link>
                </React.Fragment>
            ))}
        </div>
    )
}

export default Navigation