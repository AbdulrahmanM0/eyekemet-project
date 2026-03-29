import React from 'react'
import StarRating from './utilis/Rating'

function Review() {
    return (
        <section>
            <div className='bg-wd600 py-clamp-100'>
                <div className='w-[clamp(320px,74.583vw,1432px)] mx-auto flex flex-col gap-clamp-42'>
                    {/* title  */}
                    <div className='flex flex-col gap-clamp-42'>
                        <h3 className='text-clamp-64 text-balance font-bold uppercase leading-none'>
                            Leave a Review?
                        </h3>
                        <p className='text-gray100 text-clamp-18 leading-[1.2]'>
                            Share your thoughts and experiences with the Eye Kemet community.
                        </p>
                    </div>

                    {/* form  */}
                    <div>
                        <div className='flex flex-wrap justify-between gap-clamp-42 mb-clamp-20'>
                            {/* review type  */}
                            <div className='flex flex-col gap-clamp-24'>
                                <p className='text-gray100 text-clamp-18 leading-none'>
                                    Review Type
                                </p>

                                <div className='flex gap-clamp-24'>
                                    <div className='flex justify-between items-center gap-clamp-16'>
                                        <div>
                                            <label htmlFor="remember" className="flex items-center gap-3 cursor-pointer select-none">

                                                {/* Hidden checkbox */}
                                                <input
                                                    type="checkbox"
                                                    id="remember"
                                                    className="peer hidden"
                                                />

                                                {/* Custom box */}
                                                <div className="h-clamp-24 w-clamp-24 border border-gray300 rounded 
                                                            flex items-center justify-center
                                                            transition-all duration-200
                                                            peer-checked:bg-gold100 peer-checked:border-black bg-full">

                                                    {/* Check icon */}

                                                    <svg className="transition-opacity duration-200 shrink-0" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.6678 3.66781C11.0583 3.27745 11.6914 3.27735 12.0818 3.66781C12.472 4.0583 12.4721 4.69141 12.0818 5.08187L6.53983 10.6239C6.35231 10.8113 6.09793 10.9168 5.8328 10.9168C5.56767 10.9168 5.31329 10.8113 5.12577 10.6239L2.50077 7.99886C2.11034 7.60842 2.1105 6.97533 2.50077 6.5848C2.8913 6.19429 3.52432 6.19426 3.91483 6.5848L5.8328 8.50277L10.6678 3.66781Z" fill="#292929" />
                                                    </svg>
                                                </div>

                                                <p className="text-clamp-18 text-light100 leading-none">
                                                    Written Reviews
                                                </p>

                                            </label>
                                        </div>


                                    </div>

                                    <div className='flex justify-between items-center gap-clamp-16'>
                                        <div>
                                            <label htmlFor="remember" className="flex items-center gap-3 cursor-pointer select-none">

                                                {/* Hidden checkbox */}
                                                <input
                                                    type="checkbox"
                                                    id="remember"
                                                    className="peer hidden"
                                                />

                                                {/* Custom box */}
                                                <div className="h-clamp-24 w-clamp-24 border border-gray300 rounded 
                                                            flex items-center justify-center
                                                            transition-all duration-200
                                                            peer-checked:bg-gold100 peer-checked:border-black bg-full">

                                                    {/* Check icon */}

                                                    <svg className="transition-opacity duration-200 shrink-0" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.6678 3.66781C11.0583 3.27745 11.6914 3.27735 12.0818 3.66781C12.472 4.0583 12.4721 4.69141 12.0818 5.08187L6.53983 10.6239C6.35231 10.8113 6.09793 10.9168 5.8328 10.9168C5.56767 10.9168 5.31329 10.8113 5.12577 10.6239L2.50077 7.99886C2.11034 7.60842 2.1105 6.97533 2.50077 6.5848C2.8913 6.19429 3.52432 6.19426 3.91483 6.5848L5.8328 8.50277L10.6678 3.66781Z" fill="#292929" />
                                                    </svg>
                                                </div>

                                                <p className="text-clamp-18 text-light100 leading-none">
                                                    Video Testimonial
                                                </p>

                                            </label>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div className='bg-full py-clamp-18 px-clamp-32 flex gap-clamp-24 rounded-[2px] border border-gray400'>
                                <StarRating />

                                <p className='text-[#626262] text-clamp-18'>
                                    0/5 Rating
                                </p>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-clamp-20'>
                            {/* name */}
                            <div>
                                <input type='text' className='input !bg-full' placeholder='Full name *' />
                            </div>
                            {/* email */}
                            <div>
                                <input type='email' className='input !bg-full' placeholder='Enter email *' />
                            </div>
                            {/* phone */}
                            <div>
                                <input type='text' className='input !bg-full' placeholder='Phone number *' />
                            </div>

                            <div className='col-span-full'>
                                <textarea className='input !bg-full' placeholder='Enter your message *' name="" id="" cols="30" rows="10"></textarea>
                            </div>

                            <div className='w-fit'>
                                <button className='secondary-btn px-clamp-28 py-clamp-16'>
                                    Send
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-24 h-clamp-24 text-clamp-24' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 18.4805H18V8.41406L6.70703 19.707L5.29297 18.293L16.5859 7H6.51953V5H19C19.5523 5 20 5.44772 20 6V18.4805Z" fill="#FEFEFE" />
                                    </svg>
                                </button>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </section>
    )
}

export default Review