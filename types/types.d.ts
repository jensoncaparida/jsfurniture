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
