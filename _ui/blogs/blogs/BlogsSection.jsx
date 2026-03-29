import LoadMoreButton from '@/components/btn/Loadmore'
import Blog from '@/components/cards/Blog'

function BlogsSection({blogsData}) {

    return (
        <section>
            <div className='bg-full py-clamp-100'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center pb-clamp-64 gap-y-clamp-24'>
                    {blogsData?.posts?.map((item, index) => (
                        <Blog key={item.title + index} {...item} />
                    ))}
                </div>

                {/* load more  */}
                <div className='pb-clamp-100'>
                    {/* <div className='w-fit mx-auto'>
                        <button className='secondary-btn px-clamp-28 py-clamp-16'>
                            Load More
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-24 h-clamp-24 text-clamp-24' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20 18.4805H18V8.41406L6.70703 19.707L5.29297 18.293L16.5859 7H6.51953V5H19C19.5523 5 20 5.44772 20 6V18.4805Z" fill="#FEFEFE" />
                            </svg>
                        </button>
                    </div> */}
                    {/* {blogsData?.posts?.length > blogsData?.pagination?.total >= } */}
                    <LoadMoreButton deals={blogsData}/>
                </div>
            </div>
        </section>
    )
}

export default BlogsSection