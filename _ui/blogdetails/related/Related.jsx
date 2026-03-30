import PrimaryBtn from '@/components/btn/Primary'
import Blog from '@/components/cards/Blog'
import { blogs } from '@/data/blogs'
import Swipper from '@/components/swiper/products/Swipper'
import Link from 'next/link'
import Product from '@/components/cards/Product';

function Related({ title, slogan, related_posts, related_products }) {

    return (
        <section>
            <div className='bg-full py-clamp-100 '>
                {/* heading  */}
                <div className='flex flex-wrap gap-clamp-24 justify-between mb-clamp-64 px-[clamp(20px,2.083vw,40px)] mb-clamp-64'>
                    {/* title  */}
                    <div className='flex flex-col gap-clamp-24'>
                        <h3 className='text-clamp-64 text-balance font-bold uppercase leading-none'>
                            {title}
                        </h3>
                        <p className='text-gray100 text-clamp-16 leading-none'>
                            {slogan}
                        </p>
                    </div>

                    <Link href={"/products"} className='w-fit'>
                        <PrimaryBtn />
                    </Link>
                </div>

                {/* swiper  */}
                <div>
                    {/* <Swipper content={related_posts?.map((item, index) => (<Blog key={item.name + index} {...item} />))} /> */}
                    {/* {deals?.products?.length > 0 && ( */}
                        {/* <div> */}
                            <Swipper content={related_products.map((item) => (
                                <Product key={item.id} {...item} />
                            ))} />
                        {/* </div> */}
                    {/* )} */}
                </div>
            </div>
        </section>
    )
}

export default Related