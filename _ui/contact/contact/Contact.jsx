import Navigation from '@/components/items/navigation/Navigation'
import React from 'react'
import ContactForm from './utilies/Form'
import Details from './utilies/Details'

function Contact({ contactForm }) {
    const data = {
        pagination: [
            {
                title: "Contact Us",
                link: "/contact"
            }
        ],
        title: "Get in Touch"
    }
    return (
        <section>
            <div className='bg-full overflow-hidden pb-clamp-100'>
                {/* navigation & title  */}
                <div className='p-clamp-60 text-center flex flex-col gap-clamp-40 border-b border-b-gray400'>
                    <Navigation {...data} />
                    <h4 className='text-light400 text-clamp-36 font-bold leading-none uppercase'>
                        {data?.title ? data.title : "Shop Now"}
                    </h4>
                </div>

                {/* title  */}
                <div className="w-full flex justify-center py-clamp-88">
                    <h2 className="text-light400 text-[clamp(64px,16.667vw,320px)] leading-[0.8] font-bold uppercase whitespace-nowrap">
                        Contact Us
                    </h2>
                </div>

                {/* contact data & form */}
                <div className='px-clamp-100 flex justify-between md:flex-row flex-col gap-clamp-40'>
                    <Details />
                    <ContactForm contactForm={contactForm?.fields}/>
                </div>


            </div>
        </section>
    )
}

export default Contact