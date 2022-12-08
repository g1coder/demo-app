import api from 'core/services/ApiService';
import IUser from 'core/models/IUser';

export default {
  getProfile,
};

function getProfile(): Promise<IUser> {
  return api.get<IUser>(`/api/v1/profile`);
}
