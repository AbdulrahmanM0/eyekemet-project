"use client"
import UseAnimations from 'react-useanimations';
import alertCircle from 'react-useanimations/lib/alertCircle';
import { DialogDemo } from '@/components/items/dialog/Dialog'
import UseRemoveAddress from '../hooks/UseRemoveAddress';

function Dialog({ dialog, handleDialog, id , handleSubmit , loading}) {

    return (

        < DialogDemo open={dialog} customClass={" max-w-[416px]"} >
            <div className="mx-auto  w-full flex flex-col gap-clamp-24 relative p-clamp-48 ">
                {/* close icon  */}
                <button onClick={handleDialog} disabled={loading} className="absolute focus:outline-none border-0 top-0 p-clamp-10 bg-wd500 right-clamp-20 bg-wd500 -translate-y-[50%] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-24 h-clamp-24" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7929 6.79289C16.1834 6.40237 16.8164 6.40237 17.207 6.79289C17.5975 7.18342 17.5975 7.81643 17.207 8.20696L13.414 11.9999L17.207 15.7929C17.5975 16.1834 17.5975 16.8164 17.207 17.207C16.8164 17.5975 16.1834 17.5975 15.7929 17.207L11.9999 13.414L8.20696 17.207C7.81643 17.5975 7.18342 17.5975 6.79289 17.207C6.40237 16.8164 6.40237 16.1834 6.79289 15.7929L10.5859 11.9999L6.79289 8.20696C6.40237 7.81643 6.40237 7.18342 6.79289 6.79289C7.18342 6.40237 7.81643 6.40237 8.20696 6.79289L11.9999 10.5859L15.7929 6.79289Z" fill="#D44040" />
                    </svg>
                </button>

                {/* content  */}
                <div className="text-center flex flex-col gap-clamp-24 items-center">
                    <UseAnimations
                        animation={alertCircle}
                        size={80}
                        loop={false}
                        strokeColor="#AE7929"
                        className='text-gold100 fill-gold100 w-[64px] h-[56px]'
                    />
                    <h4 className="upperase font-bold text-clamp-36 text-light400">
                        Are you sure?
                    </h4>
                    <p className="text-clamp-16 text-gray200">
                        This will be deleted permanently.
                    </p>
                </div>

                <div onClick={() => handleSubmit(id)} disabled={loading} className="flex gap-clamp-20">
                    <button className="secondary-btn group w-full justify-center flex gap-clamp-10">
                        {loading ?
                            <svg xmlns="http://www.w3.org/2000/svg" className=' animate-spin text-balance fill-balance w-clamp-24 h-clamp-24' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 1.99988C17.5228 1.99988 22 6.47703 22 11.9999C22 17.5227 17.5228 21.9999 12 21.9999C6.47715 21.9999 2 17.5227 2 11.9999C2 9.98412 2.59925 8.10896 3.625 6.53894L2.29297 5.20691C2.00697 4.92091 1.92139 4.49074 2.07617 4.11707C2.23098 3.74346 2.59558 3.49988 3 3.49988H7C7.55228 3.49988 8 3.94759 8 4.49988V8.49988C8 8.90429 7.75641 9.26889 7.38281 9.42371C7.00914 9.57849 6.57897 9.49291 6.29297 9.20691L5.07715 7.99109C4.39285 9.17015 4 10.5387 4 11.9999C4 16.4182 7.58172 19.9999 12 19.9999C16.4183 19.9999 20 16.4182 20 11.9999C20 7.5816 16.4183 3.99988 12 3.99988C11.4477 3.99988 11 3.55216 11 2.99988C11 2.44759 11.4477 1.99988 12 1.99988Z" />
                            </svg>
                            :
                            <div className='relative'>
                                <svg
                                    width="10"
                                    fill="none"
                                    viewBox="0 0 39 7"
                                    className="origin-right duration-500 group-hover:rotate-90"
                                >
                                    <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
                                    <line
                                        stroke-width="3"
                                        stroke="white"
                                        y2="1.5"
                                        x2="26.0357"
                                        y1="1.5"
                                        x1="12"
                                    ></line>
                                </svg>
                                <svg width="10" fill="none" viewBox="0 0 33 39" className="">
                                    <mask fill="white" id="path-1-inside-1_8_19">
                                        <path
                                            d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                                        ></path>
                                    </mask>
                                    <path
                                        mask="url(#path-1-inside-1_8_19)"
                                        fill="white"
                                        d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                                    ></path>
                                    <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
                                    <path stroke-width="4" stroke="white" d="M21 6V29"></path>
                                </svg>
                            </div>
                        }
                        Delete
                    </button>

                    {/* cancel  */}
                    <button onClick={handleDialog} disabled={loading} className="first-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-24 h-clamp-24 fill-light400 text-light400' width="24" height="24" viewBox="0 0 24 24">
                            <path d="M19 3C19.5523 3 20 3.44772 20 4V18C20 19.6569 18.6569 21 17 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H17C17.5523 19 18 18.5523 18 18V5H9C8.44772 5 8 4.55228 8 4C8 3.44772 8.44772 3 9 3H19ZM11.6172 8.07617C11.9909 7.92139 12.421 8.00697 12.707 8.29297L15.707 11.293C16.0976 11.6835 16.0976 12.3165 15.707 12.707L12.707 15.707C12.421 15.993 11.9909 16.0786 11.6172 15.9238C11.2436 15.769 11 15.4044 11 15V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V9C11 8.59558 11.2436 8.23098 11.6172 8.07617Z" />
                        </svg>

                        Cancel
                    </button>
                </div>
            </div>
        </DialogDemo >
    )
}

export default Dialog