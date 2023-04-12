import INamedEntity from 'shared/model/INamedEntity';

interface IProductRaw extends INamedEntity {
  description: string;
  price: number;
  image: string;
}

export default IProductRaw;
