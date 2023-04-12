import INamedEntity from 'shared/model/INamedEntity';

export default interface IBaseProduct extends INamedEntity {
  price: number;
  image: string;
  description: string;
  discount?: number;
}
