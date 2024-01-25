const url = `${process.env.NEXT_PUBLIC_STORE_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const colors = await fetch(url, {
    next: {
      revalidate: 0,
    },
  });

  const data = await colors.json();

  return data;
};

export default getColors;
