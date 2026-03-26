import SectionHead from '@/components/sections/SectionHead'

function Hero() {
    const data = {
        pagination: [
            {
                title: "Testimonials ",
                link: "/Testimonials "
            }
        ],
        title: "Special Moment",
        img: "/images/bannars/testmonials.png"
    }
    return (
        <>
            <SectionHead data={data} />
        </>
    )
}

export default Hero