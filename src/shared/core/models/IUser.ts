import INamedEntity from 'shared/core/models/INamedEntity';

interface IUser extends INamedEntity{
  email: string;
  age: number;
  nickName: string;
}

export default IUser;