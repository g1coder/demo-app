import INamedEntity from 'core/models/INamedEntity';

export default interface IBaseProduct extends INamedEntity {
  price: number;
  imageUrl: string;
}