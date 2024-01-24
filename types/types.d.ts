interface Banner {
  id: string;
  label: string;
  imageUrl: string;
}

interface Category {
  id: string;
  name: string;
  banner: Banner;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  discount: number;
  category: Category;
  brand: Brand;
  sizes: Size;
  colors: Color;
  isFeatured: boolean;
  isArchived: boolean;
  images: Images[];
  createdAt: string;
}

interface Brand {
  id: string;
  name: string;
}

interface Size {
  id: string;
  name: string;
  value: string;
}

interface Color {
  id: string;
  name: string;
  value: string;
}

interface Images {
  id: string;
  url: string;
}
