import SectionHead from '@/components/sections/SectionHead'

function Hero() {
    const data = {
        pagination: [
            {
                title: "About us",
                link: "/aboutus"
            }
        ],
        title: "who we are?",
        img: "/images/bannars/aboutus-headsection.png"
    }
  return (
    <>
        <SectionHead data={data}/>
    </>
  )
}

export default Hero