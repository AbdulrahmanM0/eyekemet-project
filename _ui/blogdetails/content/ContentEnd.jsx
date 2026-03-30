import ShareLinks from '@/components/items/links/ShareLinks'
import Conclusion from '../conclusion/Conclusion'
import Pragraph from './utilies/Pragraph'

function ContentEnd({data}) {
    const p = {
        title: "Decoding the Enigma:",
        body: [
            "In the world of eye art, capturing someone's gaze when the image is unclear is a challenge. At Eye Kemet, we think that even without a clear picture, the soul can be remembered forever.",
            "Our artists go on a journey, carefully putting together pieces of memories, feelings, and stories. With colors, textures, and light, they make the unseen come to life, creating a portrait that goes beyond what we can see.",
            "Each stroke shows the power of imagination and celebrates the connections between us. We work hard to turn blurry images into beautiful art, saving the mysterious beauty of the human spirit."
        ]
    }
    return (
        <section className='pb-clamp-100'>
            <div className='flex flex-col gap-clamp-64 w-[clamp(320px,59.375vw,1140px)] mx-auto pb-clamp-20'>
                {/* <Pragraph {...p} /> */}
                <Conclusion data={data}/>
                <ShareLinks title={"Share Via :"}/>
            </div>
        </section>
    )
}

export default ContentEnd