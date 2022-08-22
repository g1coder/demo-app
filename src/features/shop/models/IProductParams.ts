import {IParamsWithQuery} from 'core/models/IList';

interface IProductParams extends IParamsWithQuery {
  price?: {
    min: number;
    max: number;
  };
  tag?: string;
}

export default IProductParams;
