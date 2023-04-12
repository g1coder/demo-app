import IUserRaw from 'shared/core/models/IUserRaw';
import IUser from 'shared/core/models/IUser';

export default {
  hydrate,
  dehydrate,
};

function hydrate(data: IUserRaw): IUser {
  return {
    id: data.id,
    name: data.name,
    age: data.age,
    email: data.email,
    nickName: data.nick_name,
  };
}

function dehydrate(data: IUser): Omit<IUserRaw, 'id' | 'name'> {
  return {
    age: data.age,
    email: data.email,
    nick_name: data.nickName,
  };
}
