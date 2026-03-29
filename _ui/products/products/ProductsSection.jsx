import Product from '@/components/cards/Product'
import Loadmore from './utilies/Loadmore'

async function ProductsSection({deals}) {
    console.log(deals,"dealsdealss")

    return (
        <section>
            <div className='bg-full'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 pb-clamp-64'>
                    {deals?.products?.map((item, index) => (
                        <Product key={index} {...item} />
                    ))}
                </div>

                {/* load more  */}
                <div className='pb-clamp-100'>
                    <Loadmore deals={deals}/>
                </div>
            </div>
        </section>
    )
}

export default ProductsSection