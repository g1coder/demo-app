import IList, {IMeta, IParamsWithOrder} from 'core/models/IList';
import api from 'core/services/ApiService';
import IContryRaw from 'features/countries/models/IContryRaw';
import CountriesTransformer from 'features/countries/transformers/CountriesTransformer';

const getAll = (params: IParamsWithOrder) => {
  return api
    .get<IList<IContryRaw, IMeta>>('api/countries', {params})
    .then((response) => response.map(CountriesTransformer.hydrate));
};

export default {
  getAll,
};
