import INamedEntity from '@shared/models/INamedEntity';

interface IProductRaw extends INamedEntity {
  description: string;
  price: number;
  image: string;
}

export default IProductRaw;
