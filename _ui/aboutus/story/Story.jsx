import Bannar from "./utilies/Bannar"
import Content from "./utilies/Content"

function Story() {
    return (
        <section id="story">
            <div className='px-clamp-100 bg-full overflow-hidden max-w-screen overflow-hidden max-w-full'>
                <div className="py-clamp-100">
                    <div className="flex flex-col lg:flex-row gap-clamp-100 justify-between">
                        <Content />
                        <Bannar />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story