import {IParamsWithQuery} from 'core/models/IList';

interface IProductParams extends IParamsWithQuery {
  min?: number;
  max?: number;
  tag?: string;
}

export default IProductParams;
