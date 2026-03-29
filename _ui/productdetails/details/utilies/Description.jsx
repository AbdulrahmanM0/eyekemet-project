"use client"
import useProduct from '@/components/cards/hooks/useProduct';
import Link from 'next/link'

function Description({ details, product }) {
    const { handleAddToCart, loading } = useProduct();

    return (
        <div className='flex flex-col gap-clamp-30 3xl:gap-clamp-42'>
            {/* navigation */}
            <div className='flex gap-clamp-14 text-clamp-14 3xl:text-clamp-16 leading-[0.7] text-gray200'>
                <Link href={"/"}>Home</Link><span>/</span><Link href={"/products"}>Products</Link><span>/</span><span className='text-light400 whitespace-nowrap'>{details?.name}</span>
            </div>

            {/* title  */}
            <div>
                <h3 className='text-clamp-48 3xl:text-clamp-64 text-light400 uppercase font-bold leading-none'>
                    {details?.name}
                </h3>
            </div>

            {/* description  */}
            <div className='flex flex-col gap-clamp-20'>
                <h5 className='text-light200 uppercase font-bold text-clamp-14 3xl:text-clamp-16 leading-[0.7]'>
                    Description
                </h5>

                <p className='text-clamp-14 3xl:text-clamp-16 text-gray200 leading-'>
                    {details?.description}
                </p>
            </div>

            {/* Features  */}
            <div className='flex flex-col gap-clamp-20'>
                <h5 className='text-light200 uppercase font-bold text-clamp-16 leading-[0.7]'>
                    Features
                </h5>

                <div className='flex gap-clamp-24'>
                    {
                        details?.tags?.map((item, index) => (
                            <p key={item + index} className='text-clamp-14 3xl:text-clamp-16 text-gray200 leading-'>
                                {item}
                            </p>
                        ))
                    }
                </div>
            </div>

            {/* Ring Size */}
            {details?.modifiers?.length > 0 && (
                <div className="flex flex-col gap-clamp-20">
                    {details.modifiers.map((modifier) => (
                        <div key={modifier.id}>
                            <h5 className="text-light200 uppercase font-bold text-clamp-14 3xl:text-clamp-16 leading-[1.2]">
                                {modifier.name}
                            </h5>

                            <div className="flex justify-between flex-wrap gap-clamp-32">
                                <div className="flex gap-clamp-10 flex-wrap text-balance text-clamp-14 3xl:text-clamp-16">
                                    {modifier.options.map((option) => (
                                        <div
                                            key={option.id}
                                            className={`
                                                        p-clamp-16 w-[44px] h-[44px] rounded-[2px] flex items-center justify-center
                                                        ${option.is_default
                                                        ? "bg-gold100 border border-[#BC904D]"
                                                        : "border border-gray400"}
                                                        ${!option.is_available ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                                                        `}
                                        >
                                            {option.name}
                                        </div>
                                    ))}
                                </div>

                                {/* Size Guide / Info Box */}
                                {modifier.name.toLowerCase() === "size" && (
                                    <div className="px-clamp-24 py-clamp-12 gap-clamp-10 flex border border-gold100 rounded-[2px] h-fit items-center mt-auto">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-clamp-16 h-clamp-16"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                        >
                                            <path
                                                d="M10.5 1.25C10.7652 1.25 11.0195 1.35543 11.207 1.54297L14.957 5.29297C15.1446 5.48051 15.25 5.73478 15.25 6V13.75C15.25 15.4069 13.9069 16.75 12.25 16.75H5.75C4.09315 16.75 2.75 15.4069 2.75 13.75V2.25C2.75 1.69772 3.19772 1.25 3.75 1.25H10.5ZM6.75 11.75C6.19772 11.75 5.75 12.1977 5.75 12.75C5.75 13.3023 6.19772 13.75 6.75 13.75H11.25C11.8023 13.75 12.25 13.3023 12.25 12.75C12.25 12.1977 11.8023 11.75 11.25 11.75H6.75ZM6.75 8.75C6.19772 8.75 5.75 9.19772 5.75 9.75C5.75 10.3023 6.19772 10.75 6.75 10.75H11.25C11.8023 10.75 12.25 10.3023 12.25 9.75C12.25 9.19772 11.8023 8.75 11.25 8.75H6.75ZM10.75 5.75H12.5859L10.75 3.91406V5.75Z"
                                                fill="#FEFEFE"
                                            />
                                        </svg>

                                        <h6 className="text-clamp-14 3xl:text-clamp-16 font-bold uppercase leading-[0.7] text-balance">
                                            Size Guide
                                        </h6>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Stock and price  */}
            <div className='flex items-center justify-between flex-wrap gap-clamp-24'>
                <div className='flex gap-clamp-12'>
                    <h4 className='text-light400 font-bold text-clamp-20 3xl:text-clamp-28 leading-[0.7] mb-clamp-18'>
                        Price:
                    </h4>
                    <span className='text-gold100 text-clamp-28 font-bold uppercase leading-[0.7]'>
                        {details?.price} EGP
                    </span>
                </div>

                <div className='px-clamp-20 py-clamp-16 bg-green200 flex items-center h-fit gap-clamp-14'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 3.00098C20.5523 3.00098 21 3.44869 21 4.00098V18.001C21 19.6578 19.6569 21.001 18 21.001H6C4.34315 21.001 3 19.6578 3 18.001V4.00098C3 3.44869 3.44772 3.00098 4 3.00098H20ZM15.707 9.29297C15.3165 8.90248 14.6835 8.90248 14.293 9.29297L11 12.5859L9.70703 11.293C9.31651 10.9025 8.68349 10.9025 8.29297 11.293C7.90245 11.6835 7.90247 12.3165 8.29297 12.707L10.293 14.707C10.6835 15.0976 11.3165 15.0976 11.707 14.707L15.707 10.707C16.0975 10.3165 16.0975 9.68348 15.707 9.29297Z" fill="#40D465" />
                        </svg>
                    </div>
                    <p className='text-light400 text-clamp-16 3xl:text-clamp-18 leading-none'>
                        In Stock
                    </p>
                </div>
            </div>

            {/* add btn  */}
            <div>
                <button
                    disabled={loading}
                    onClick={(e) => {
                        if (loading) return;
                        e.preventDefault();
                        e.stopPropagation();
                        handleAddToCart(product);
                    }}
                    className="secondary-btn px-clamp-28 py-clamp-16"
                >
                    {loading ?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-clamp-24 h-clamp-24 fill-current text-balance animate-spin"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 1.99988C17.5228 1.99988 22 6.47703 22 11.9999C22 17.5227 17.5228 21.9999 12 21.9999C6.47715 21.9999 2 17.5227 2 11.9999C2 9.98412 2.59925 8.10896 3.625 6.53894L2.29297 5.20691C2.00697 4.92091 1.92139 4.49074 2.07617 4.11707C2.23098 3.74346 2.59558 3.49988 3 3.49988H7C7.55228 3.49988 8 3.94759 8 4.49988V8.49988C8 8.90429 7.75641 9.26889 7.38281 9.42371C7.00914 9.57849 6.57897 9.49291 6.29297 9.20691L5.07715 7.99109C4.39285 9.17015 4 10.5387 4 11.9999C4 16.4182 7.58172 19.9999 12 19.9999C16.4183 19.9999 20 16.4182 20 11.9999C20 7.5816 16.4183 3.99988 12 3.99988C11.4477 3.99988 11 3.55216 11 2.99988C11 2.44759 11.4477 1.99988 12 1.99988Z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M6.50977 17C7.33819 17 8.00977 17.6716 8.00977 18.5V18.5098C8.00977 19.3382 7.33819 20.0098 6.50977 20.0098H6.5C5.67157 20.0098 5 19.3382 5 18.5098V18.5C5 17.6716 5.67157 17 6.5 17H6.50977ZM15.5098 17C16.3382 17 17.0098 17.6716 17.0098 18.5V18.5098C17.0098 19.3382 16.3382 20.0098 15.5098 20.0098H15.5C14.6716 20.0098 14 19.3382 14 18.5098V18.5C14 17.6716 14.6716 17 15.5 17H15.5098ZM3 0C3.52239 0 3.95678 0.402072 3.99707 0.922852L4.15625 3H19C19.2844 3 19.5554 3.12109 19.7451 3.33301C19.9348 3.54493 20.0255 3.82768 19.9941 4.11035L19.1777 11.4551C19.0179 12.8936 17.8538 14.013 16.4102 14.1162L6.05566 14.8555C4.40951 14.9731 2.97733 13.7392 2.85059 12.0938L2.2334 4.07715L2.07422 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H3ZM11 6.5C10.4477 6.5 10 6.94772 10 7.5V8H9.5C8.94771 8 8.5 8.44771 8.5 9C8.5 9.55229 8.94771 10 9.5 10H10V10.5C10 11.0523 10.4477 11.5 11 11.5C11.5523 11.5 12 11.0523 12 10.5V10H12.5C13.0523 10 13.5 9.55229 13.5 9C13.5 8.44771 13.0523 8 12.5 8H12V7.5C12 6.94772 11.5523 6.5 11 6.5Z" fill="#FEFEFE" />
                        </svg>
                    }
                    Add to cart
                </button>
            </div>

            {/* help  */}
            <div className='flex justify-center items-center gap-clamp-24'>
                <p className='text-clamp-18 text-balance leadinng-[0.7]'>
                    Need Help ?
                </p>
                <span className='text-light400 font-bold leading-[0.7] text-clamp-18'>
                    01276189374
                </span>
            </div>

            {/* return  */}
            <div className='flex gap-clamp-30 justify-center items-center'>
                {/* return */}
                <div className='flex gap-clamp-16 '>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-24 h-clamp-24' width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 11C21.5523 11 22 11.4477 22 12C22 17.5228 17.5228 22 12 22C9.98405 22 8.10917 21.4 6.53906 20.374L5.20703 21.707C4.92103 21.993 4.49086 22.0786 4.11719 21.9238C3.74359 21.769 3.5 21.4044 3.5 21V17C3.5 16.4477 3.94772 16 4.5 16H8.5C8.90442 16 9.26902 16.2436 9.42383 16.6172C9.57861 16.9909 9.49303 17.421 9.20703 17.707L7.99121 18.9219C9.17037 19.6063 10.5387 20 12 20C16.4183 20 20 16.4183 20 12C20 11.4477 20.4477 11 21 11ZM12 2C14.0155 2 15.8901 2.59953 17.46 3.625L18.793 2.29297C19.079 2.00697 19.5091 1.92139 19.8828 2.07617C20.2564 2.23098 20.5 2.59558 20.5 3V7C20.5 7.55228 20.0523 8 19.5 8H15.5C15.0956 8 14.731 7.75641 14.5762 7.38281C14.4214 7.00914 14.507 6.57897 14.793 6.29297L16.0078 5.07715C14.8289 4.39312 13.4608 4 12 4C7.58172 4 4 7.58172 4 12C4 12.5523 3.55228 13 3 13C2.44772 13 2 12.5523 2 12C2 6.47715 6.47715 2 12 2Z" fill="#969696" />
                    </svg>
                    <span className='text-clamp-16 text-gray200'>
                        30 days free return
                    </span>
                </div>
                {/* year */}
                <div className='flex gap-clamp-16 '>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-24 h-clamp-24' width="16" height="22" viewBox="0 0 16 22" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.62891 1.05567C6.82675 -0.351962 9.00031 -0.351816 10.1982 1.05567L10.2402 1.10547C10.4485 1.35025 10.7626 1.47991 11.083 1.4541L11.1475 1.44922C12.9898 1.3008 14.527 2.83736 14.3789 4.67969L14.373 4.74512C14.3473 5.0653 14.4771 5.37868 14.7217 5.58692L14.7715 5.62891C16.1793 6.8268 16.1793 9.00032 14.7715 10.1982L14.7217 10.2402C14.4769 10.4485 14.3472 10.7627 14.373 11.083L14.3789 11.1475C14.5061 12.7268 13.3945 14.0803 11.9141 14.3418V20.9141C11.9139 21.2826 11.7106 21.6209 11.3857 21.7949C11.0607 21.9689 10.6662 21.9505 10.3594 21.7461L7.91407 20.1152L5.46875 21.7461C5.16198 21.9505 4.76745 21.9688 4.44239 21.7949C4.11737 21.621 3.91419 21.2827 3.91407 20.9141V14.3418C2.43348 14.0806 1.32198 12.727 1.44922 11.1475L1.4541 11.083C1.47991 10.7626 1.35025 10.4485 1.10547 10.2402L1.05567 10.1982C-0.351816 9.00031 -0.351962 6.82675 1.05567 5.62891L1.10547 5.58692C1.3502 5.37867 1.47985 5.06542 1.4541 4.74512L1.44922 4.67969C1.30106 2.83748 2.83748 1.30106 4.67969 1.44922L4.74512 1.4541C5.06542 1.47985 5.37867 1.35021 5.58692 1.10547L5.62891 1.05567ZM9.91407 15.0615C8.78047 16.0808 7.04799 16.0812 5.91407 15.0625V19.0449L7.35938 18.082L7.48926 18.0078C7.80263 17.8609 8.17486 17.8861 8.46875 18.082L9.91407 19.0449V15.0615ZM10.6211 6.20703C10.2306 5.81651 9.59756 5.81651 9.20703 6.20703L6.91407 8.5L6.6211 8.20703C6.23057 7.81651 5.59756 7.81651 5.20703 8.20703C4.81651 8.59756 4.81651 9.23057 5.20703 9.6211L6.20703 10.6211C6.59758 11.0113 7.23067 11.0115 7.6211 10.6211L10.6211 7.6211C11.0115 7.23067 11.0113 6.59758 10.6211 6.20703Z" fill="#969696" />
                    </svg>
                    <span className='text-clamp-16 text-gray200'>
                        30 days free return
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Description