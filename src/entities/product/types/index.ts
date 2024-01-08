import {INamedEntity} from '@shared/types';

export interface IBaseProduct extends INamedEntity {
  price: number;
  image: string;
  description: string;
  discount?: number;
}
