import { DialogDemo } from '@/components/items/dialog/Dialog'
import UserPicture from './UserPicture'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { toggle } from '@/store/features/cart/cartSlice'

function DialogUploadImg({ handlePicture, openPictureDialog, uploadperformance, user, extraction_id }) {
    const router = useRouter();
    const dispatch = useDispatch() 

    const handleCheckout = () => {
        router.push(`/checkout?extraction_id=${extraction_id}`);
        handlePicture();
        dispatch(toggle())
    }

    return (
        <DialogDemo open={openPictureDialog} setOpen={handlePicture} customClass={" w-fit min-w-[300px] z-[99992]"}>
            <div className="mx-auto flex flex-col gap-clamp-24 relative p-clamp-48 ">
                {/* close icon  */}
                <button onClick={() => handlePicture(null)} className="absolute top-0 p-clamp-10 bg-wd500 right-clamp-20 bg-wd500 -translate-y-[50%] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-24 h-clamp-24" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7929 6.79289C16.1834 6.40237 16.8164 6.40237 17.207 6.79289C17.5975 7.18342 17.5975 7.81643 17.207 8.20696L13.414 11.9999L17.207 15.7929C17.5975 16.1834 17.5975 16.8164 17.207 17.207C16.8164 17.5975 16.1834 17.5975 15.7929 17.207L11.9999 13.414L8.20696 17.207C7.81643 17.5975 7.18342 17.5975 6.79289 17.207C6.40237 16.8164 6.40237 16.1834 6.79289 15.7929L10.5859 11.9999L6.79289 8.20696C6.40237 7.81643 6.40237 7.18342 6.79289 6.79289C7.18342 6.40237 7.81643 6.40237 8.20696 6.79289L11.9999 10.5859L15.7929 6.79289Z" fill="#D44040" />
                    </svg>
                </button>

                {/* content  */}
                <div className="text-center flex flex-col gap-clamp-24 items-center">
                    {uploadperformance < 100 ?
                        <>
                            {/* user picture  */}
                            <div className="h-full w-full relative">
                                <UserPicture user={user} />
                            </div>

                            <div className="text-light400 text-clamp-18 leading-[0.7]">
                                Scanning....
                            </div>

                            {/* performance  */}
                            <div className="flex items-center gap-clamp-12 w-full">
                                <div className="h-[8px] rounded-[4px] flex-1 bg-gray200">
                                    <div className={`h-full ${uploadperformance < 20 ? " bg-red100 " : uploadperformance < 70 ? " bg-gold100 " : " bg-green100 "}`} style={{ width: `${uploadperformance}%` }} />
                                </div>

                                <div className="text-light400 text-clamp-14 rounded-[4px]">
                                    {uploadperformance}%
                                </div>
                            </div>
                        </>
                        :
                        <>
                            {/* user eye picture  */}
                            <div className="h-full w-full relative">
                                <div className="w-fit h-fit mx-auto relative">
                                    <Image src={user || ""} className="mx-auto w-[120px] h-[120px] object-cover" width={120} height={120} alt="user eye" />
                                    <div className="p-clamp-10 bg-green100 w-fit absolute bottom-0 right-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5429 10.5429C28.9334 10.1524 29.5664 10.1524 29.9569 10.5429C30.3474 10.9334 30.3474 11.5664 29.9569 11.957L15.7069 26.207C15.5194 26.3945 15.2651 26.4999 14.9999 26.4999C14.7347 26.4999 14.4804 26.3945 14.2929 26.207L7.54285 19.457C7.15237 19.0664 7.1524 18.4334 7.54285 18.0429C7.93338 17.6524 8.5664 17.6524 8.95692 18.0429L14.9999 24.0859L28.5429 10.5429Z" fill="#FEFEFE" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <h4 className="upperase font-bold text-clamp-36 text-light400">
                                Scan Completed
                            </h4>
                            <p className="text-clamp-16 text-gray200">
                                Submit a clear iris image or schedule an appointment with our expert technicians.
                            </p>

                            {/* go to checkout btn */}
                            <button onClick={handleCheckout} className="secondary-btn !text-clamp-18 w-full !px-clamp-28 !py-clamp-16 justify-center flex gap-clamp-10 !leading-[1.3]">
                                Go to checkout
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-24 h-clamp-24" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 18.4805H18V8.41406L6.70703 19.707L5.29297 18.293L16.5859 7H6.51953V5H19C19.5523 5 20 5.44772 20 6V18.4805Z" fill="#FEFEFE" />
                                </svg>
                            </button>
                        </>
                    }
                </div>
            </div>
        </DialogDemo>
    )
}

export default DialogUploadImg