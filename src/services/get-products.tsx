const url = `${process.env.NEXT_PUBLIC_STORE_API_URL}/products`;

const getProducts = async (): Promise<Product[]> => {
  const products = await fetch(url, {
    next: {
      revalidate: 0,
    },
  });

  const data = await products.json();

  return data;
};

export default getProducts;
