const url = `${process.env.NEXT_PUBLIC_STORE_API_URL}/brands`;

const getBrands = async (): Promise<Brand[]> => {
  const brands = await fetch(url, {
    next: {
      revalidate: 0,
    },
  });

  const data = await brands.json();

  return data;
};

export default getBrands;
