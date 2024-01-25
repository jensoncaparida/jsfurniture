import getProducts from '@/services/get-products';

import { FeaturedBanners } from '@/components/featuredBanners';
import { FeaturedCarousel } from '@/components/ui/featuredCarousel';

export default async function Home() {
  const products = await getProducts({});

  // featured collections
  const featuredProducts = products.filter((product) => product.isFeatured);

  // new arrivals
  const oneMonthAgo = new Date();
  oneMonthAgo.setDate(oneMonthAgo.getDate() - 30);
  const newArrivals = products.filter(
    (product) => new Date(product.createdAt) > oneMonthAgo,
  );

  return (
    <main>
      <FeaturedBanners />
      <FeaturedCarousel
        title="Featured Collections"
        description="Explore our curated collections, blending timeless style and modern comfort for your home"
        data={featuredProducts}
        link="/all-products"
      />
      <FeaturedCarousel
        title="New Arrivals"
        description="Discover the latest in home elegance with our new furniture arrivals"
        data={newArrivals}
        link="/all-products"
      />
    </main>
  );
}
