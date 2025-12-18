import { Food } from "./app/shared/models/food";

export const sample_foods: Food[] = [

  {
    _id: '1',
    name: 'Pizza Pepperoni',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['Itàlia'],
    stars: 4.5,
    image: 'assets/imatge-id6.avif',
    tags: ['Menjar ràpid', 'Pizza', 'Dinar'],
    description: 'Pizza clàssica amb formatge fos i abundant pepperoni.'
  },

  {
    _id: '2',
    name: 'Mandonguilles',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['Pèrsia', 'Orient', 'Xina'],
    stars: 4.7,
    image: 'assets/imatge-id6.avif',
    tags: ['Dinar'],
    description: 'Mandonguilles tradicionals amb salsa especiada.'
  },

  {
    _id: '3',
    name: 'Hamburguesa',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['Alemanya', 'Estats Units'],
    stars: 3.5,
    image: 'assets/imatge-id6.avif',
    tags: ['Menjar ràpid', 'Hamburguesa'],
    description: 'Hamburguesa senzilla amb carn a la planxa.'
  },

  {
    _id: '4',
    name: 'Patates fregides',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['Bèlgica', 'França'],
    stars: 3.3,
    image: 'assets/imatge-id6.avif',
    tags: ['Menjar ràpid', 'Fregir'],
    description: 'Patates fregides cruixents i daurades.'
  },

  {
    _id: '5',
    name: 'Sopa de pollastre',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['Índia', 'Àsia'],
    stars: 3.0,
    image: 'assets/imatge-id6.avif',
    tags: ['Sopa'],
    description: 'Sopa calenta de pollastre amb verdures i espècies.'
  },

  {
    _id: '6',
    name: 'Pizza de verdures',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['Itàlia'],
    stars: 4.0,
    image: 'assets/imatge-id7.jpg',
    tags: ['Menjar ràpid', 'Pizza', 'Dinar'],
    description: 'Pizza amb una combinació de verdures fresques.'
  }
];
