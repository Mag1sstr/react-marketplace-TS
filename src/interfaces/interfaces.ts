export interface IProducts {
  id: number;
  description?: string;
  images: string[];
  price: number;
  title: string;
  category: {
    name: string;
  };
}

export interface ICategory {
  name: string;
  image: string;
  id: number;
}

export interface IUser {
  avatar: string;
  email: string;
}
