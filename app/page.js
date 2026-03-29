import About from "@/_ui/home/about/About";
import Blueprent from "@/_ui/home/Blueprent/Blueprent";
import Categories from "@/_ui/home/categories/Categories";
import Collections from "@/_ui/home/collections/Collections";
import Materials from "@/_ui/home/collections/Materials";
import Exclusive from "@/_ui/home/deals/Exclusive";
import Hero from "@/_ui/home/hero/Hero";
import Process from "@/_ui/home/process/Process";
import Shop from "@/_ui/home/shop/Shop";

export default function Home() {
  const productsSlides = {
    title: "Exclusive Deals",
    slogan: "Explore our best accessories products ",
  }

  return (
    <div className="overflow-hidden">
      <Hero />
      <Exclusive {...productsSlides}/>
      <Categories />
      <Blueprent />
      <Process />
      <Collections />
      <Materials />
      <About />
      <Shop />
    </div>
  );
}
