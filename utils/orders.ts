import { Order, EStatus } from "~/models/order/order";
import {products} from '../utils/product'

export const orders: Order[] = [
    new Order(
      '1',
      '1',
      [products[0], products[2]],
      EStatus.ready,
      new Date('2023-06-10'),
      89.98
    ),
    new Order(
      '2',
      '1',
      [products[1], products[3], products[0]],
      EStatus.preparation,
      new Date('2023-06-15'),
      159.97
    ),
    new Order(
      '3',
      '1',
      [products[2], products[1]],
      EStatus.waiting,
      new Date('2023-06-18'),
      109.98
    )
  ];