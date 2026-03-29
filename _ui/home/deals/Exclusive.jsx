// app/products/exclusive/page.js
import handleProducts from '@/api/products/Exclusive';
import PrimaryBtn from '@/components/btn/Primary';
import Product from '@/components/cards/Product';
import Swipper from '@/components/swiper/products/Swipper';
import Link from 'next/link';

export async function generateMetadata() {
  const deals = await handleProducts({
    order_by: "recommend",
    limit: "10",
    order: "asc",
    per_page: "eq.12",
    is_featured: true
  });

  const meta_title = deals?.meta_title || "Exclusive Products - Eye Kemet";
  const meta_description = deals?.meta_description || "Check out our exclusive products and best deals!";
  const seo_keywords = deals?.seo_keywords || "exclusive products, featured, best deals";

  return {
    title: meta_title,
    description: meta_description,
    keywords: seo_keywords,
    openGraph: {
      title: meta_title,
      description: meta_description,
      url: "https://example.com/products/exclusive",
      siteName: "My Shop",
      images: [
        {
          url: deals?.seo_image || "https://example.com/default-og.jpg",
          width: 1200,
          height: 630,
          alt: "Exclusive Products",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta_title,
      description: meta_description,
      images: [deals?.seo_image || "https://example.com/default-og.jpg"],
    },
  };
}

export default async function Exclusive() {
  const deals = await handleProducts({
    order_by: "recommend",
    limit: "10",
    order: "asc",
    per_page: "eq.12",
    is_featured: true
  });

  const title = deals?.meta_title || "Exclusive Products";
  const slogan = deals?.meta_description || "Check out our best deals!";

  return (
    <section>
      <div className='bg-full py-clamp-100'>
        {/* Heading */}
        <div className='flex flex-wrap gap-clamp-24 justify-between mb-clamp-64 px-[clamp(20px,2.083vw,40px)]'>
          <div className='flex flex-col gap-clamp-24'>
            <h3 data-aos="fade-up" data-aos-duration="800" className='text-clamp-64 text-balance font-bold uppercase leading-none'>
              {title}
            </h3>
            <p data-aos="fade-up" data-aos-duration="900" className='text-gray100 text-clamp-16 leading-none'>
              {slogan}
            </p>
          </div>

          <Link href={"/products"} data-aos="fade-up" data-aos-duration="1000">
            <PrimaryBtn />
          </Link>
        </div>

        {/* Swiper */}
        {deals?.products?.length > 0 && (
          <div>
            <Swipper content={deals.products.map((item) => (
              <Product key={item.id} {...item} />
            ))} />
          </div>
        )}
      </div>
    </section>
  );
}