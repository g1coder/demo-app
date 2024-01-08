import {INamedEntity} from '@shared/types';

export interface ICartItem extends INamedEntity {
  count: number;
  price: number;
  description: string;
  image: string;
}
