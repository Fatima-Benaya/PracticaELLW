import { Food } from "./app/shared/models/food";

export const sample_foods: Food[] = [

  {
    _id: '1',
    name: 'Tarta de Chocolate',
    description: 'Deliciosa tarta de chocolate negro con interior jugoso y cobertura cremosa, perfecta para los más golosos.',
    price: 4.5,
    cookTime: '—',
    favorite: true,
    origins: ['Francia'],
    stars: 4.8,
    image: 'assets/imatge-id1.avif',
    tags: ['Postre', 'Chocolate']
  },

  {
    _id: '2',
    name: 'Bocadillo de Jamón',
    description: 'Bocadillo tradicional con pan crujiente y jamón curado de alta calidad, ideal para cualquier momento del día.',
    price: 5.5,
    cookTime: '—',
    favorite: false,
    origins: ['España'],
    stars: 4.0,
    image: 'assets/imatge-id2.avif',
    tags: ['Bocadillo', 'Rápido']
  },

  {
    _id: '3',
    name: 'Patatas Bravas',
    description: 'Patatas fritas crujientes acompañadas de una salsa brava ligeramente picante y alioli suave.',
    price: 4.9,
    cookTime: '15-20',
    favorite: true,
    origins: ['España'],
    stars: 4.2,
    image: 'assets/imatge-id3.avif',
    tags: ['Entrante', 'Tapas']
  },

  {
    _id: '4',
    name: 'Curry de Pollo',
    description: 'Plato aromático de pollo cocinado lentamente con especias orientales y salsa cremosa de curry.',
    price: 11.3,
    cookTime: '25-30',
    favorite: false,
    origins: ['India'],
    stars: 4.6,
    image: 'assets/imatge-id4.avif',
    tags: ['Curry', 'Especiado']
  },

  {
    _id: '5',
    name: 'Ensalada César',
    description: 'Ensalada fresca con lechuga crujiente, pollo a la plancha, picatostes y salsa César casera.',
    price: 6.8,
    cookTime: '—',
    favorite: false,
    origins: ['Estados Unidos'],
    stars: 4.1,
    image: 'assets/imatge-id5.avif',
    tags: ['Ensalada', 'Ligero']
  },

  {
    _id: '6',
    name: 'Sushi Variado',
    description: 'Selección variada de sushi con piezas de salmón, atún y makis, preparado al momento.',
    price: 14.9,
    cookTime: '—',
    favorite: true,
    origins: ['Japón'],
    stars: 4.7,
    image: 'assets/imatge-id6.avif',
    tags: ['Sushi', 'Pescado']
  },

  {
    _id: '7',
    name: 'Espaguetis Carbonara',
    description: 'Espaguetis con salsa cremosa de huevo, queso parmesano y bacon crujiente, receta italiana tradicional.',
    price: 10.2,
    cookTime: '20-25',
    favorite: false,
    origins: ['Italia'],
    stars: 4.3,
    image: 'assets/imatge-id7.avif',
    tags: ['Pasta', 'Italiano']
  },

  {
    _id: '8',
    name: 'Tacos Mexicanos',
    description: 'Tacos rellenos de carne sazonada, verduras frescas y salsa picante, servidos en tortillas de maíz.',
    price: 7.5,
    cookTime: '15-20',
    favorite: true,
    origins: ['México'],
    stars: 4.4,
    image: 'assets/imatge-id8.avif',
    tags: ['Mexicano', 'Picante']
  },

  {
    _id: '9',
    name: 'Hamburguesa Clásica',
    description: 'Hamburguesa jugosa de ternera con queso, lechuga, tomate y pan tostado artesanal.',
    price: 8.9,
    cookTime: '10-15',
    favorite: false,
    origins: ['Estados Unidos'],
    stars: 4.2,
    image: 'assets/imatge-id9.avif',
    tags: ['Hamburguesa', 'Fast food']
  },

  {
    _id: '10',
    name: 'Pizza Margarita',
    description: 'Pizza clásica italiana con salsa de tomate natural, mozzarella fundida y hojas de albahaca fresca.',
    price: 9.5,
  cookTime: '20-25',
    favorite: true,
    origins: ['Italia'],
    stars: 4.5,
    image: 'assets/imatge-id10.avif',
    tags: ['Pizza', 'Italiano']
  }

];
