import api from 'shared/core/services/ApiService';
import IUser from 'shared/core/models/IUser';

export default {
  getProfile,
};

function getProfile(): Promise<IUser> {
  return api.get<IUser>(`/api/v1/profile`);
}
