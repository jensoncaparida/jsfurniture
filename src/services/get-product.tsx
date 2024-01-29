const url = `${process.env.NEXT_PUBLIC_STORE_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const product = await fetch(`${url}/${id}`, {
    next: {
      revalidate: 0,
    },
  });

  const data = await product.json();

  return data;
};

export default getProduct;
