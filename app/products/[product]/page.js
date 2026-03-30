import Exclusive from '@/_ui/home/deals/Exclusive'
import Details from '@/_ui/productdetails/details/Details'
import handleProduct from '@/api/products/product';
import React from 'react'

async function Product({ params }) {
  const { product } = params;
  const data = await handleProduct({item_id: product});
  const productsSlides = {
    title: "You May also like",
    slogan: "Explore our best accessories products ",
  }

  return (
    <div>
      <Details data={data} product={product}/>
      <Exclusive {...productsSlides} />
    </div>
  )
}

export default Product
