import { DialogDemo } from "@/components/items/dialog/Dialog"
import UploadButton from "./UploadBtn"

function DialogImg({openDialog,handleImageDialog,handlePicture,handleStreem}) {
    return (
        < DialogDemo open={openDialog} setOpen={handleImageDialog} customClass={" max-w-[416px] z-[99991]"} >
            <div className="mx-auto flex flex-col gap-clamp-24 relative p-clamp-48 ">
                {/* close icon  */}
                <button onClick={handleImageDialog} className="absolute top-0 p-clamp-10 bg-wd500 right-clamp-20 bg-wd500 -translate-y-[50%] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-24 h-clamp-24" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.7929 6.79289C16.1834 6.40237 16.8164 6.40237 17.207 6.79289C17.5975 7.18342 17.5975 7.81643 17.207 8.20696L13.414 11.9999L17.207 15.7929C17.5975 16.1834 17.5975 16.8164 17.207 17.207C16.8164 17.5975 16.1834 17.5975 15.7929 17.207L11.9999 13.414L8.20696 17.207C7.81643 17.5975 7.18342 17.5975 6.79289 17.207C6.40237 16.8164 6.40237 16.1834 6.79289 15.7929L10.5859 11.9999L6.79289 8.20696C6.40237 7.81643 6.40237 7.18342 6.79289 6.79289C7.18342 6.40237 7.81643 6.40237 8.20696 6.79289L11.9999 10.5859L15.7929 6.79289Z" fill="#D44040" />
                    </svg>
                </button>

                {/* content  */}
                <div className="text-center flex flex-col gap-clamp-24 items-center">
                    {/* icon  */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="56" viewBox="0 0 64 56" fill="none">
                        <path d="M18.6375 4.1L17.3375 8H8C3.5875 8 0 11.5875 0 16V48C0 52.4125 3.5875 56 8 56H56C60.4125 56 64 52.4125 64 48V16C64 11.5875 60.4125 8 56 8H46.6625L45.3625 4.1C44.55 1.65 42.2625 0 39.675 0H24.325C21.7375 0 19.45 1.65 18.6375 4.1ZM32 20C35.1826 20 38.2348 21.2643 40.4853 23.5147C42.7357 25.7652 44 28.8174 44 32C44 35.1826 42.7357 38.2348 40.4853 40.4853C38.2348 42.7357 35.1826 44 32 44C28.8174 44 25.7652 42.7357 23.5147 40.4853C21.2643 38.2348 20 35.1826 20 32C20 28.8174 21.2643 25.7652 23.5147 23.5147C25.7652 21.2643 28.8174 20 32 20Z" fill="#AE7929" />
                    </svg>
                    <h4 className="upperase font-bold text-clamp-36 text-light400">
                        Capture the <br /> Essence
                    </h4>
                    <p className="text-clamp-16 text-gray200">
                        Scan Or Upload your high-resolution iris photograph or schedule a professional session with our certified photographers.
                    </p>
                </div>

                <div className="flex flex-col gap-clamp-20">
                    {/* <button onClick={handleStreem} className="secondary-btn w-full !px-clamp-28 !py-clamp-16 justify-center flex gap-clamp-10">
                        Scan
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-24 h-clamp-24" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 18.4805H18V8.41406L6.70703 19.707L5.29297 18.293L16.5859 7H6.51953V5H19C19.5523 5 20 5.44772 20 6V18.4805Z" fill="#FEFEFE" />
                        </svg>
                    </button>
                    <div className="text-clamp-18 text-gray200 leading-[0.7] text-center">
                        Or
                    </div> */}

                    {/* upload  */}
                    {/* <button onClick={handlePicture} className=" w-full px-clamp-28 py-clamp-16 justify-center flex items-center gap-clamp-10 border border-gold100 text-clamp-18 text-light400 leading-[0.7]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-24 h-clamp-24" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 19C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20C5 19.4477 5.44772 19 6 19H18ZM12 3C12.5523 3 13 3.44772 13 4V11H17C17.4044 11 17.769 11.2436 17.9238 11.6172C18.0786 11.9909 17.993 12.421 17.707 12.707L12.707 17.707C12.3165 18.0976 11.6835 18.0976 11.293 17.707L6.29297 12.707C6.00697 12.421 5.92139 11.9909 6.07617 11.6172C6.23098 11.2436 6.59558 11 7 11H11V4C11 3.44772 11.4477 3 12 3Z" fill="#FEFEFE" />
                        </svg>

                        Upload Image
                    </button> */}
                    <UploadButton handlePicture={handlePicture}/>
                </div>
            </div>
        </DialogDemo >

    )
}

export default DialogImg