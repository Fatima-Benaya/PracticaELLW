export interface Food {
  _id: string;
  id?: string; // ✅ para pantallas viejas que usan "id"
  name: string;
  price: number;
  cookTime: string;
  favorite: boolean;
  origins: string[];
  stars: number;
  image: string;
  tags: string[];
  description: string;
}

