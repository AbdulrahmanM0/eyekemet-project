"use client"
import { lazy, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthBackdrop from "../../backdrop/AuthBackdrop";
import Header from "../Header";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/", number: "01" },
  { label: "Shop", href: "/shop", number: "02" },
  { label: "Collections", href: "/collections", number: "03" },
  { label: "About", href: "/about", number: "04" },
  { label: "Contact", href: "/contact", number: "05" },
];

const staggerDelay = ["0.20s", "0.27s", "0.34s", "0.41s", "0.48s"];

function FullScreenDrawer({ open, onClose, setOpen }) {
  const pathname = usePathname();
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape" && open) onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const links = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "About us",
      link: "/aboutus"
    },
    {
      label: "Products",
      link: "/products"
    },
    {
      label: "Blogs",
      link: "/blogs"
    },
    {
      label: "Contact us",
      link: "/contact"
    },
  ]

  return (

    <div
      aria-hidden={!open}
      style={{
        clipPath: open ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
        visibility: open ? "visible" : "hidden",
        transition: `clipPath 0.65s cubic-bezier(0.76,0,0.24,1), opacity 0.5s ease, visibility 0s linear ${open ? "0s" : "0.65s"}`,
      }}
      className={`fixed inset-0 z-[399] flex flex-col bg-[#0c0b09] overflow-hidden ${open ? "opacity-100" : "opacity-0"}`}
    >
      <AuthBackdrop>
        <div className="w-full h-full relative z-10">
          <div className="h-[var(--header-height)]" />
          <div className="py-clamp-100 flex flex-wrap justify-around">

            <div>
              {links.map((item, index) => (
                <Link onClick={()=>setOpen(false)} className="flex items-center py-clamp-14 sm:py-clamp-30 3xl:py-clamp-40 px-clamp-48 3xl:px-clamp-64 gap-clamp-10 transition-all duration-500 ease-out hover:translate-x-clamp-64 group " href={item.link} key={index + item.label}>
                  <span className={`leading-[0.7] text-clamp-48 3xl:text-clamp-64 text-gray300 font-bold uppercase group-hover:text-gold100 ${pathname === item.link && " !text-balance "}`} >{item.label}</span>

                  <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-48 h-clamp-48" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M40 36.9609H36V16.8281L13.4141 39.4141L10.5859 36.5859L33.1719 14H13.0391V10H38C39.1046 10 40 10.8954 40 12V36.9609Z" fill="#2B2B2B" />
                  </svg>
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-clamp-48">
              <h3 className='hidden sm:block text-balance uppercase font-bold text-clamp-64 leading-none'>
                The <br /> Blueprint <br /><span className="text-gold100"> of the Soul.</span><br /> Captured in <br /> Gold.
              </h3>

              {/* button  */}
              <div className="hidden sm:block">
                <button className='secondary-btn !w-fit'>
                  Begin Your Journey
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-24 h-clamp-24 text-clamp-24' width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 18.4805H18V8.41406L6.70703 19.707L5.29297 18.293L16.5859 7H6.51953V5H19C19.5523 5 20 5.44772 20 6V18.4805Z" fill="#FEFEFE" />
                  </svg>
                </button>
              </div>

              {/* contact  */}
              <div className='block flex-col gap-clamp-20 mt-clamp-64 sm:flex'>
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
        </div>
      </AuthBackdrop >
    </div>

  );
}

export default FullScreenDrawer;