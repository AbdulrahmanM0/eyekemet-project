import Contact from '@/_ui/contact/contact/Contact'
import OurLocation from '@/_ui/contact/map/OurLocation'
import handleContact from '@/api/contact/contact'

async function page() {
  // const contactForm = await handleContact();
  return (
    <div>
      <Contact />
      <OurLocation />
    </div>
  )
}

export default page