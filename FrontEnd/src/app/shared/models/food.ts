export class Food {
  _id?: string;
  name!: string;
  price!: number;
  stars!: number;
  image!: string;

  tags?: string[];
  favorite?: boolean;
  origins?: string[];
  cookTime?: string;
}

