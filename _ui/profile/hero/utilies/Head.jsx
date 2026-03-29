import React from 'react'

function Head({ profile }) {
    const cards = [
        !profile?.birthday && {
            id: "1",
            title: "Add your birthday",
            body: "Get special offers on your birthday",
        },
        !profile?.phone && {
            id: "2",
            title: "Add your phone number",
            body: "Get personalized offers through SMS messages",
        },
    ].filter(Boolean);

    return (
        <div className='h-full w-full flex flex-col'>
            <div className='mt-auto'>
                <div className='flex justify-between items-end w-[clamp(320px,90vw,1358px)] xl:w-[clamp(320px,80vw,1358px)] mx-auto pb-clamp-24'>
                    {/* name  */}
                    <div className='flex flex-col gap-clamp-20 flex-1'>
                        <h3 className='text-clamp-60 3xl:text-clamp-64 text-light400 font-bold uppercase leading-[1.2]'>
                            {profile?.name}
                        </h3>
                        {profile?.email ?
                            <p className='text-clamp-18 text-gray200'>
                                {profile?.email}
                            </p>
                            : profile?.phone &&
                            <p className='text-clamp-18 text-gray200'>
                                {profile?.phone}
                            </p>
                        }
                    </div>

                    {/* cards  */}
                    {cards.length > 0 && (
                        <div className='hidden md:block w-fit'>
                            <div className='flex flex-col gap-clamp-20 w-fit'>
                                <h6 className='text-light400 ms-auto md:ms-0 text-clamp-18 w-fit'>
                                    Update your account
                                </h6>

                                {/* card */}
                                <div className='flex flex-wrap md:justify-end gap-clamp-10'>
                                    {cards.map((item) => (
                                        <div key={item.id} className='p-clamp-20 flex border border-gray400 bg-full'>
                                            <div className='flex flex-col gap-clamp-14'>
                                                <h6 className='text-light400 font-bold leading-[1.1] text-clamp-14 '>
                                                    {item.title}
                                                </h6>
                                                <p className='text-gray200 text-clamp-12 '>
                                                    {item.body}
                                                </p>
                                            </div>
                                            <div className='flex flex-col'>
                                                <svg className='mt-auto' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                    <path d="M15 13.8604H13.5V6.31055L5.03027 14.7803L3.96973 13.7197L12.4395 5.25H4.88965V3.75H14.25C14.6642 3.75 15 4.08579 15 4.5V13.8604Z" fill="#2B2B2B" />
                                                </svg>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Head