import Content from '@/_ui/blogdetails/content/Content'
import ContentEnd from '@/_ui/blogdetails/content/ContentEnd'
import Related from '@/_ui/blogdetails/related/Related'
import CutEdge from '@/_ui/blogs/cutedge/CutEdge'
import Hero from '@/_ui/blogs/hero/Hero'
import handleBlogs from '@/api/blogs/blogs'

async function Blog({ params }) {
  const blogs = await handleBlogs(
    params?.blog
  );
  const productsSlides = {
    title: "Related Products",
    slogan: "Get the latest news, trends, and expert advice.",
  }
  blogs.meta_title = blogs?.post?.meta_title || "Blog Details - Eye Kemet";
  blogs.meta_description = blogs?.post?.meta_description || "Read our latest blog post and stay updated with the latest trends and insights in the industry.";
  blogs.seo_keywords = blogs?.post?.seo_keywords || "blog details, latest news, trends, expert advice";

  return (
    <div>
      <Hero {...blogs?.post} />
      <Content {...blogs?.post} />
      <CutEdge />
      <ContentEnd data={blogs?.post} />

      {/* {blogs?.related_products && blogs?.related_products?.length < 0 && */}
        <Related {...productsSlides}  related_posts={blogs?.related_posts} related_products={blogs?.related_products}/>
      {/* } */}
    </div>
  )
}

export default Blog