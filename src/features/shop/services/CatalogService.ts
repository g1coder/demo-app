import IList, {IParamsWithOrder} from 'core/models/IList';
import api from 'core/services/ApiService';
import IProductRaw from 'features/shop/models/IProductRaw';
import IBaseProduct from 'features/shop/models/IBaseProduct';

export default {
  getList,
};

function getList(params: IParamsWithOrder): Promise<IList<IBaseProduct>> {
  return api.get<IList<IProductRaw>>('/api/shop/products', {params}).then((response) => {
    const result: any = response.map((r) => r);
    result.$meta = response.$meta;
    return result;
  });
}
