import api from 'core/services/ApiService';
import IList, {IParamsWithQuery} from 'core/models/IList';
import IUserRaw from 'core/models/IUserRaw';
import UserTransformer from 'core/transformers/UserTransformer';
import IUser from 'core/models/IUser';

export default {
  getAll,
  getOne,
  update
};

function getAll(params: IParamsWithQuery) {
  return api.get<IList<IUserRaw>>(`/api/users/`, {params}).then((response) => response.map(UserTransformer.hydrate));
}

function getOne(id: string) {
  return api.get<IUserRaw>(`/api/users/${id}`).then(UserTransformer.hydrate);
}

function update(user: IUser) {
  return api.patch(`/api/users/${user.id}`, UserTransformer.dehydrate(user));
}

