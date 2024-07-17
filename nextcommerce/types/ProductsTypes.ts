export type Products = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  images: [
    {
      id: number;
      url: string;
    },
  ];
  categoryName: string
};
