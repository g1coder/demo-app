import INamedEntity from 'shared/core/models/INamedEntity';

export default interface IBaseProduct extends INamedEntity {
  price: number;
  image: string;
  description: string;
  discount?: number;
}
