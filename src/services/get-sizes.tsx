const url = `${process.env.NEXT_PUBLIC_STORE_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const sizes = await fetch(url, {
    next: {
      revalidate: 0,
    },
  });

  const data = await sizes.json();

  return data;
};

export default getSizes;
