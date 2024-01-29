const url = `${process.env.NEXT_PUBLIC_STORE_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const category = await fetch(`${url}/${id}`, {
    next: {
      revalidate: 0,
    },
  });

  const data = await category.json();

  return data;
};

export default getCategory;
