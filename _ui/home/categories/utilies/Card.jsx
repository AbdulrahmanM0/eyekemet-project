import React from 'react'

function Card({ name, image_url, icon, count,index , total_product_count }) {

  return (
    <div className='relative group' data-aos="fade-up" data-aos-duration={(index + 1) * 1000}>
      <img src={image_url || `/images/categories/bracelete.png`} className='object-cover w-full' alt={name} />

      {/* frame  */}
      <div className='absolute w-full h-full top-0 left-0 bg-[#0808084D] p-clamp-64 flex justify-center'>

        <div className='relative w-full h-full'>
          <div className='absolute bottom-0 w-full transition-all duration-500 ease-in-out group-hover:bottom-1/2 group-hover:translate-y-[50%] flex flex-col gap-clamp-24 text-center'>
            <div className='w-clamp-36 h-clamp-36 text-clamp-36 w-fit mx-auto'>
              {icon}
            </div>
            <div>
              <h4 className='text-clamp-20 leading-[1.2] text-balance font-bold uppercase'>
                {name}
              </h4>
            </div>
            <div>
              <p className='text-clamp-16 leading-[0.7] text-light300'>
                + {total_product_count} Items
              </p>
            </div>
          </div>
        </div>

        {/* rotated title  */}
        <div>
          <h3 className="text-clamp-64 text-light200 uppercase font-bold opacity-50 
               absolute bottom-0 left-clamp-8
               [writing-mode:vertical-rl]
               leading-[0.7] scale-y-[-1] scale-x-[-1] group-hover:opacity-100 group-hover:text-balance transition-all duration-500 ease-in-out">
            {name}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Card