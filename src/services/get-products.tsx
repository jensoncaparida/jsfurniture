import qs from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_STORE_API_URL}/products`;

interface Query {
  brandId?: string;
  colorId?: string;
  sizeId?: string;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      brandId: query.brandId,
      colorId: query.colorId,
      sizeId: query.sizeId,
    },
  });

  const products = await fetch(url, {
    next: {
      revalidate: 0,
    },
  });

  const data = await products.json();

  return data;
};

export default getProducts;
