import Image from 'next/image'

function Card({ author_name, author_avatar_url }) {
    return (
        <div className='p-clamp-48 bg-wd600 w-[clamp(320px,59.375vw,1140px)] mx-auto relative'>
            <div className='flex flex-col gap-clamp-30'>
                {/* <h5 className='text-light400 leading-[0.7]'>
                    Conclusion
                </h5> */}

                {/* paragraph  */}
                {/* <div className='flex flex-col gap-clamp-24'>
                    <p className='text-gray200 text-clamp-18'>
                        That’s precisely the focus of Eye Kemet’s upcoming workshop, "Illuminating Inner Vision Through Art." We'll delve into the theory of perception and the practical methods—like intuitive sketching—that can help artists capture emotion, analyze form, and evoke powerful connections.
                    </p>
                    <p className='text-gray200 text-clamp-18'>
                        So, if you’re eager to explore beyond the surface and start embracing intuition as your guide, join us. Let’s transform art together, one brushstroke at a time.
                    </p>
                </div> */}

                {/* auther */}
                <div className='flex gap-clamp-20'>
                    {author_avatar_url &&
                        <Image src={author_avatar_url || "/images/user/user.png"} className="rounded-full " width={52} height={52} alt="auther" />
                    }
                    {/* auther data  */}
                    <div className='flex flex-col gap-clamp-14 justify-center'>
                        <h6 className='leading-[0.7] text-balance text-clamp-18 '>
                            {author_name}
                        </h6>
                        <p className='leading-[0.7] text-clamp-16 text-gray200'>
                            Partner
                        </p>
                    </div>
                </div>
            </div>

            {/* icon  */}
            <svg className='absolute bottom-0 right-clamp-48 w-[16.84%] h-auto' xmlns="http://www.w3.org/2000/svg" width="192" height="136" viewBox="0 0 192 136" fill="none">
                <path d="M155.945 135.93C150.755 135.93 144.967 134.932 138.579 132.936C132.192 130.541 126.603 126.548 121.813 120.96C117.022 114.971 114.627 106.788 114.627 96.4083C114.627 86.8274 116.623 76.448 120.615 65.2702C124.607 54.0925 129.597 42.9147 135.585 31.7369C141.973 20.1599 147.961 9.58095 153.55 0L189.478 18.5631C185.486 25.7488 181.694 33.5333 178.101 41.9167C174.508 49.9008 171.514 57.0865 169.119 63.4738C166.723 69.4619 165.326 73.6536 164.927 76.0488C174.109 78.4441 180.696 82.2365 184.688 87.4262C189.079 92.2167 191.275 97.4064 191.275 102.995C191.275 111.778 188.48 119.562 182.891 126.349C177.302 132.736 168.32 135.93 155.945 135.93Z" fill="#2B2B2B" />
                <path d="M41.3179 135.93C36.1282 135.93 30.3397 134.932 23.9524 132.936C17.5651 130.541 11.9762 126.548 7.18572 120.96C2.39524 114.971 0 106.788 0 96.4083C0 86.8274 1.99603 76.448 5.9881 65.2702C9.98016 54.0925 14.9702 42.9147 20.9583 31.7369C27.3456 20.1599 33.3337 9.58095 38.9226 0L74.8512 18.5631C70.8592 25.7488 67.0667 33.5333 63.4738 41.9167C59.881 49.9008 56.8869 57.0865 54.4917 63.4738C52.0965 69.4619 50.6992 73.6536 50.3 76.0488C59.4818 78.4441 66.0687 82.2365 70.0608 87.4262C74.452 92.2167 76.6477 97.4064 76.6477 102.995C76.6477 111.778 73.8532 119.562 68.2643 126.349C62.6754 132.736 53.6933 135.93 41.3179 135.93Z" fill="#2B2B2B" />
            </svg>
        </div>
    )
}

export default Card