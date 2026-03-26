import ShareLinks from '@/components/items/links/ShareLinks'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    const data = [
        {
            title: "Information",
            links: [
                {
                    label: "About us",
                    src: "/aboutus"
                },
                {
                    label: "Blog",
                    src: "/blogs"
                },
                {
                    label: "Events",
                    src: "/events"
                },
                {
                    label: "Testimonials",
                    src: "/testmonials"
                },
            ]
        },
        {
            title: "Helpful links",
            links: [
                {
                    label: "Supports",
                    src: "/support"
                },
                {
                    label: "Privacy Policy",
                    src: "/policy"
                },
                {
                    label: "Terms & Conditions",
                    src: "/terms"
                },
                {
                    label: "Return Policy",
                    src: "/policy"
                },
            ]
        },
        {
            title: "Our Services",
            links: [
                {
                    label: "Order",
                    src: "/order"
                },
                {
                    label: "Products",
                    src: "/products"
                },
                {
                    label: "Return & Exchange",
                    src: "/return"
                },
            ]
        },
    ]

    return (
        <footer>
            <div className='p-clamp-100 pb-clamp-72 border-t border-t-gray400'>
                <div className='sm:px-clamp-100'>
                    {/* logo  */}
                    <div className='flex justify-center items-center gap-clamp-72'>
                        {/* line  */}
                        <div className='h-[1px] bg-gray400 w-[19.531vw]' />
                        {/* logo */}
                        <div>
                            <Image src={"/images/logo.png"} className='w-[clamp(80px,9.844vw,189px)]' width={189} height={56} alt='eye kemet' />
                        </div>
                        <div className='h-[1px] bg-gray400 w-[19.531vw]' />
                    </div>

                    {/* footer */}
                    <div className='flex flex-wrap flex-col gap-clamp-72 pt-clamp-72'>

                        <div className='flex-wrap flex justify-between gap-clamp-24'>
                            <div className="sm:col-span-2 flex flex-col gap-clamp-24">
                                <h3 className='text-clamp-36 text-light400 uppercase font-bold leading-none'>
                                    Join Our Newsletter
                                </h3>
                                <p className="text-clamp-18 text-gray200 leading-[1.2]">
                                    Be the first to know about new collections and exclusive offers.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-clamp-24 sm:gap-0 max-w-full">
                                <input
                                    type="text"
                                    className="leading-[0.7] flex-1 border border-gray300 bg-full px-clamp-16 sm:px-clamp-20 py-clamp-16 sm:py-clamp-20 focus:outline-none focus:ring-2 focus:ring-gold100 rounded-[2px] text-clamp-18 text-gray200 placeholder-gray200 placeholder-text-clamp-16 w-[clamp(300px,18.23vw,350px)]"
                                    placeholder="Enter your email"
                                />
                                <button
                                    className="leading-[0.7] w-full sm:w-fit bg-gold100 flex items-center justify-center gap-clamp-10 px-clamp-16 sm:px-clamp-28 py-clamp-16 text-clamp-18 font-bold text-balance uppercase rounded-[2px]"
                                >
                                    Subscribe
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-16 h-clamp-16' width="15" height="15" viewBox="0 0 15 15" fill="none">
                                        <path d="M14.707 13.4805H12.707V3.41406L1.41406 14.707L0 13.293L11.293 2H1.22656V0H13.707C14.2593 0 14.707 0.447715 14.707 1V13.4805Z" fill="#FEFEFE" />
                                    </svg>
                                </button>
                            </div>

                        </div>

                        <div className='flex-wrap flex justify-between gap-clamp-48'>
                            {/* links */}
                            {
                                data.map((item, index) => (
                                    <div key={index + item.title} className='flex flex-col gap-clamp-48'>
                                        <h5 className='text-balance text-clamp-20 font-bold uppercase'>
                                            {item.title}
                                        </h5>
                                        <div className='flex flex-col gap-clamp-36 text-clamp-18 leading-[0.7] text-gray200 '>
                                            {
                                                item.links.map((item, index) => (
                                                    <Link href={item.src} key={index + item.label}>
                                                        {item.label}
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                            {/* contact infos  */}
                            <div className='flex flex-col gap-clamp-48'>
                                <h5 className='text-balance text-clamp-20 font-bold uppercase'>
                                    Contact Us
                                </h5>
                                <div className='flex flex-col gap-clamp-20'>
                                    {/* phone  */}
                                    <div className='flex items-center gap-clamp-16'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-24 h-clamp-24' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 16C21 18.6685 18.7417 21.2259 15.7939 20.4756C9.78389 18.9456 5.05445 14.2161 3.52441 8.20605C2.77412 5.25825 5.33152 3 8 3L9 3C10.1267 3 10.9448 3.90093 11.0439 4.89941C11.1268 5.73517 11.3238 6.53724 11.6191 7.28906C11.7463 7.61303 11.6955 7.97591 11.4922 8.25L11.3955 8.36133L10.3965 9.36231C11.3906 11.1386 12.8623 12.6106 14.6387 13.6045L15.6387 12.6045C15.9199 12.3233 16.3407 12.2355 16.7109 12.3809C17.4628 12.6762 18.2648 12.8732 19.1006 12.9561C20.0991 13.0552 21 13.8733 21 15L21 16Z" fill="#AE7929" />
                                        </svg>
                                        <h6 className='text-clamp-18 text-light400 leading-[0.7]'>
                                            +20 12 7455 0956
                                        </h6>
                                    </div>

                                    {/* email  */}
                                    <div className='flex items-center gap-clamp-16'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-24 h-clamp-24' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 4C21.0444 4 21.088 4.00319 21.1309 4.00879C21.1443 4.01056 21.1576 4.01332 21.1709 4.01562C21.2588 4.03077 21.3425 4.05726 21.4209 4.09375C21.4267 4.09645 21.4327 4.09875 21.4385 4.10156C21.5177 4.1403 21.5905 4.18969 21.6562 4.24707C21.6648 4.2545 21.6734 4.26181 21.6816 4.26953C21.7081 4.29423 21.7332 4.32024 21.7568 4.34766C21.7653 4.35747 21.7732 4.36776 21.7812 4.37793C21.8044 4.40696 21.8258 4.43721 21.8457 4.46875C21.852 4.47877 21.8583 4.48875 21.8643 4.49902C21.9086 4.57532 21.9428 4.65775 21.9658 4.74512C21.9681 4.75392 21.9706 4.76265 21.9727 4.77148C21.9898 4.84495 22 4.92129 22 5V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V5C2 4.92137 2.00921 4.84489 2.02637 4.77148C2.02844 4.76266 2.03088 4.75391 2.0332 4.74512C2.05616 4.65782 2.09052 4.57527 2.13477 4.49902C2.14071 4.48875 2.14704 4.47876 2.15332 4.46875C2.17314 4.43723 2.19466 4.40696 2.21777 4.37793C2.22586 4.36777 2.23374 4.35747 2.24219 4.34766C2.2658 4.32025 2.29096 4.29423 2.31738 4.26953C2.32565 4.26181 2.33426 4.2545 2.34277 4.24707C2.40652 4.19138 2.47725 4.14369 2.55371 4.10547C2.56282 4.10092 2.5718 4.09607 2.58105 4.0918C2.65852 4.056 2.74148 4.03065 2.82812 4.01562C2.84144 4.0133 2.85471 4.01058 2.86816 4.00879C2.91131 4.00311 2.9553 4 3 4H21ZM12.707 14.707C12.3165 15.0975 11.6835 15.0975 11.293 14.707L4 7.41406V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V7.41406L12.707 14.707Z" fill="#AE7929" />
                                        </svg>
                                        <h6 className='text-clamp-18 text-light400 leading-[0.7]'>
                                            Eye Kemet45@info.com
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-wrap justify-between gap-clamp-64'>
                            <p className='text-clamp-16 text-gray200 leading-[1.2]'>
                                © 2025 Eye Kemet. All rights reserved. Each piece is individually crafted and numbered.
                            </p>
                            <ShareLinks title={"Follow us"} />
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer