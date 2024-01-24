const url = `${process.env.NEXT_PUBLIC_STORE_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const categories = await fetch(url, {
    next: {
      revalidate: 0,
    },
  });

  const data = await categories.json();

  return data;
};

export default getCategories;
