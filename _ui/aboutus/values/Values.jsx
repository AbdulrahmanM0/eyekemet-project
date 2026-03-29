import React from 'react'

function Values() {
    const data = [
        {
            head: "Craftsmanship",
            body: "Unwavering commitment to quality"
        },
        {
            head: "Originality",
            body: "Unique, never duplicated designs"
        },
        {
            head: "Individuality",
            body: "Celebrating your unique self"
        },
        {
            head: "Excellence",
            body: "Setting the standard for artistry"
        },
    ]
    return (
        <section id='values'>
            <div className='p-clamp-100 overflow-hidden max-w-screen overflow-hidden' style={{ backgroundImage: "url(/images/bannars/store.png)",backgroundAttachment: "fixed" }}>

                <div data-aos="fade-down" className='flex flex-col gap-clamp-40 h-fit my-auto bg-full p-clamp-64  lg:w-[clamp(300px,42.448vw,815px)]'>
                    <h6 className='text-balance text-clamp-18 leading-[0.7]'>
                        Our Story
                    </h6>
                    <h3 className='text-balance uppercase font-bold text-clamp-64 leading-none'>
                        Where your eyes unlock wearable treasures
                    </h3>
                    <p className='text-gray200 text-clamp-18 '>
                        At Eye Kemet, we champion the belief that your eyes hold the key to unlocking wearable treasures. Our dedicated artisans are committed to capturing the unique essence of your gaze, transforming it into personalized jewelry.
                    </p>

                    {/* itemss  */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-clamp-20'>
                        {
                            data.map((item, index) => (
                                <div key={index + item.head} className='flex gap-clamp-14'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.7929 6.79289C19.1834 6.40237 19.8164 6.40237 20.2069 6.79289C20.5975 7.18341 20.5975 7.81642 20.2069 8.20695L10.7069 17.707C10.5194 17.8945 10.2651 17.9999 9.99991 17.9999C9.73469 17.9999 9.48042 17.8945 9.29288 17.707L4.79288 13.207C4.40238 12.8164 4.40237 12.1834 4.79288 11.7929C5.18341 11.4024 5.81643 11.4024 6.20695 11.7929L9.99991 15.5859L18.7929 6.79289Z" fill="#FEFEFE" />
                                        </svg>
                                    </div>
                                    <div className='flex flex-col gap-clamp-14'>
                                        <h5 className='text-balance text-clamp-18 '>
                                            {item.head}
                                        </h5>
                                        <p className='text-clamp-16 text-gray200'>
                                            {item.body}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Values