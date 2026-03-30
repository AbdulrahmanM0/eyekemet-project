import Card from "./utilies/Card"
import handleCategories from "@/api/home/Categories"
async function Categories() {
  const categories_products = await handleCategories()
  return (
    <section>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 justify-center'>
            {categories_products && categories_products?.slice(0,6).map((item,index) => (
              <Card key={index + item.name} {...item} index={index}/>
            ))}
        </div>
    </section>
  )
}

export default Categories