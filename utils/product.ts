import { Products } from "~/models/product/product";

export const products: Products[] = [
  new Products(
    '1',
    new Date('2023-04-15'),
    'T-shirt Blanc',
    19.99,
    'T-shirt en coton de haute qualité, coupe ajustée.',
    'blanc',
    50
  ),
  new Products(
    '2',
    new Date('2023-02-28'),
    'Pantalon en Jean',
    39.99,
    'Pantalon en jean bleu foncé, coupe slim. Matière robuste et confortable.',
    'bleu foncé',
    75
  ),
  new Products(
    '4',
    new Date('2023-03-22'),
    'Chaussures de Running',
    69.99,
    'Chaussures de running haute performance, semelle en mousse à réaction rapide.',
    'noir/vert',
    25
  ),
  new Products(
    '5',
    new Date('2023-04-01'),
    'Sac à dos',
    49.99,
    'Sac à dos spacieux et résistant, idéal pour le travail ou les voyages.',
    'gris foncé',
    60
  )
];