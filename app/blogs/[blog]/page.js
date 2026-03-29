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
    title: "Related blogs",
    slogan: "Get the latest news, trends, and expert advice.",
  }

  return (
    <div>
      <Hero {...blogs?.post} />
      <Content {...blogs?.post} />
      <CutEdge />
      <ContentEnd data={blogs?.post} />

      {blogs?.related_posts && blogs?.related_posts?.length < 0 &&
        <Related {...productsSlides}  related_posts={blogs?.related_posts}/>
      }
    </div>
  )
}

export default Blog